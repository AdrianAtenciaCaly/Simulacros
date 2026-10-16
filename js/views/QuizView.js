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

        title({ moduleIndex }) {
            return this.#repository.getModule(moduleIndex).title;
        }

        navId({ moduleIndex }) {
            return `module-${moduleIndex}`;
        }

        render({ moduleIndex, blockIndex }) {
            const mod = this.#repository.getModule(moduleIndex);
            const session = new QuizSession(this.#repository.getBlock(moduleIndex, blockIndex));
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
                            else this.#navigator.showResults({ moduleIndex, blockIndex, summary: session.getSummary() });
                        },
                    },
                    session.isLastQuestion ? '📊 Ver Resultados' : 'Siguiente Pregunta →'
                );

                const optionButtons = q.options.map((text, idx) => {
                    const btn = h('button', {
                        type: 'button',
                        class: 'option-btn',
                        'data-letter': letters[idx] || String(idx + 1),
                        onClick: () => reveal(idx),
                    }, text);
                    return btn;
                });

                const reveal = (selectedIndex) => {
                    if (session.isAnswered) return;
                    const result = session.answer(selectedIndex);

                    optionButtons.forEach((btn) => (btn.disabled = true));
                    optionButtons[result.correctIndex].classList.add('correct');
                    if (!result.isCorrect) optionButtons[selectedIndex].classList.add('incorrect');

                    feedback.replaceChildren(h('strong', {}, '💡 Explicación: '), result.explanation);
                    feedback.classList.remove('hidden');

                    // Update next button text to reflect last question
                    nextButton.textContent = session.isLastQuestion ? '📊 Ver Resultados' : 'Siguiente Pregunta →';
                    nextButton.classList.remove('hidden');
                    nextButton.focus();
                };

                card.replaceChildren(
                    h(
                        'div',
                        { class: 'quiz-header' },
                        h('span', { class: 'quiz-module-name' }, `${mod.title} — Bloque ${blockIndex + 1}`),
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
                            { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.openModule(moduleIndex) },
                            '← Salir al Menú de Bloques'
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
