(function (PM) {
    'use strict';

    const { h, QuizSession } = PM;

    /**
     * Pantalla de preguntas. Orquesta una QuizSession y pinta su estado.
     * Incluye barra de progreso estilo Moodle y letras en las opciones.
     */
    class QuizView {
        #repository;
        #navigator;

        constructor({ repository, navigator }) {
            this.#repository = repository;
            this.#navigator = navigator;
        }

        title({ moduleIndex, mode } = {}) {
            if (mode === 'final') return 'Examen Final Simulado DIAN 2676';
            return this.#repository.getModule(moduleIndex).title;
        }

        navId({ moduleIndex, mode } = {}) {
            if (mode === 'final') return 'final-exam';
            return `module-${moduleIndex}`;
        }

        render({ moduleIndex, blockIndex, mode = 'block', finalBlockIndex = 0 } = {}) {
            let questions;
            let headerSubtitle;
            let mod = null;
            let finalMeta = null;

            if (mode === 'final') {
                finalMeta = this.#repository.getFinalExam();
                const fb = finalMeta.blocks[Math.max(0, Math.min(finalBlockIndex, finalMeta.blocks.length - 1))];
                questions = fb.questions;
                headerSubtitle = `${fb.label} · ${fb.questions.length} preguntas`;
            } else {
                mod = this.#repository.getModule(moduleIndex);
                if (mode === 'pending') {
                    const pending = this.#repository.getPendingQuestions(moduleIndex, this.#repository.blockSize);
                    if (pending.length > 0) {
                        questions = pending;
                        headerSubtitle = `Preguntas Pendientes (${questions.length} nuevas)`;
                    } else {
                        questions = this.#repository.getBlock(moduleIndex, 0);
                        headerSubtitle = `Repaso de Preguntas (Bloque 1)`;
                    }
                } else {
                    const bIdx = typeof blockIndex === 'number' ? blockIndex : 0;
                    questions = this.#repository.getBlock(moduleIndex, bIdx);
                    headerSubtitle = `Bloque ${bIdx + 1}`;
                }
            }

            const session = new QuizSession(questions);
            const card = h('section', { class: 'card' });

            const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

            const showQuestion = () => {
                const q = session.currentQuestion;
                const progressPct = Math.round(((session.currentNumber - 1) / session.total) * 100);

                const progressFillClass = progressPct >= 70 ? 'good' : progressPct >= 30 ? 'mid' : 'bad';
                const progressBar = h('div', { class: 'quiz-progress-bar' },
                    h('div', {
                        class: 'quiz-progress-fill',
                        style: `width: ${progressPct}%`,
                        role: 'progressbar',
                        'aria-valuenow': progressPct,
                        'aria-valuemin': 0,
                        'aria-valuemax': 100,
                    })
                );
                const progressLabel = h('p', { class: 'quiz-progress-label' },
                    `Progreso: ${session.currentNumber - 1} de ${session.total} completadas`
                );

                const feedback = h('div', { class: 'feedback-box hidden', role: 'status' });

                const nextButton = h(
                    'button',
                    {
                        type: 'button',
                        class: 'btn hidden',
                        onClick: () => {
                            if (session.next()) showQuestion();
                            else this.#navigator.showResults({ moduleIndex, blockIndex, summary: session.getSummary(), mode, finalBlockIndex, finalMeta });
                        },
                    },
                    session.isLastQuestion ? '📊 Ver Resultados' : 'Siguiente Pregunta →'
                );

                const optionButtons = q.options.map((text, idx) => {
                    const btn = h(
                        'button',
                        {
                            type: 'button',
                            class: 'option-btn',
                            onClick: () => reveal(idx),
                        },
                        h('span', { class: 'option-letter' }, letters[idx] || String(idx + 1)),
                        h('span', { class: 'option-text' }, text)
                    );
                    return btn;
                });

                const reveal = (selectedIndex) => {
                    if (session.isAnswered) return;
                    const result = session.answer(selectedIndex);

                    // Registrar resultado en el ProgressTracker
                    if (q.id) {
                        this.#repository.recordAnswer(mode === 'final' ? -1 : moduleIndex, q.id, result.isCorrect, selectedIndex);
                    }

                    optionButtons.forEach((btn, idx) => {
                        btn.disabled = true;
                        const isCorrectOpt = idx === result.correctIndex;
                        const isSelectedOpt = idx === selectedIndex;

                        if (isCorrectOpt) {
                            btn.classList.add('correct');
                            btn.appendChild(
                                h('span', { class: 'option-mark correct', 'aria-label': 'Respuesta correcta' }, '✓')
                            );
                        } else {
                            btn.classList.add('incorrect-dim');
                            if (isSelectedOpt) {
                                btn.classList.add('incorrect');
                                btn.appendChild(
                                    h('span', { class: 'option-mark incorrect', 'aria-label': 'Tu respuesta (Incorrecta)' }, 'X')
                                );
                            } else {
                                btn.appendChild(
                                    h('span', { class: 'option-mark incorrect-neutral', 'aria-label': 'Opción incorrecta' }, 'X')
                                );
                            }
                        }
                    });

                    feedback.replaceChildren(h('strong', {}, '💡 Explicación: '), result.explanation);
                    feedback.classList.remove('hidden');

                    // Update next button text to reflect last question
                    nextButton.textContent = session.isLastQuestion ? '📊 Ver Resultados' : 'Siguiente Pregunta →';
                    nextButton.classList.remove('hidden');
                    nextButton.focus();
                };

                const headerTitle = mode === 'final' ? `Examen Final DIAN 2676 — ${headerSubtitle}` : `${mod.title} — ${headerSubtitle}`;
                card.replaceChildren(
                    h(
                        'div',
                        { class: 'quiz-header' },
                        h('span', { class: 'quiz-module-name' }, headerTitle),
                        h('span', { class: 'question-number' }, `${session.currentNumber} / ${session.total}`)
                    ),
                    progressLabel,
                    progressBar,
                    h('h3', { class: 'question-text' }, q.text),
                    h('div', { class: 'options-list' }, optionButtons),
                    feedback,
                    h(
                        'div',
                        { class: 'actions-row between' },
                        h(
                            'button',
                            { type: 'button', class: 'btn btn-outline', onClick: () => mode === 'final' ? this.#navigator.openFinalExam() : this.#navigator.openModule(moduleIndex) },
                            mode === 'final' ? '← Volver al Examen Final' : '← Salir al Menú de Bloques'
                        ),
                        nextButton
                    )
                );
            };

            showQuestion();
            return card;
        }
    }

    PM.QuizView = QuizView;
})((window.PrepMaster = window.PrepMaster || {}));
