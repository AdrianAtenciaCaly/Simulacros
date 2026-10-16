(function (PM) {
    'use strict';

    const { h, QuizSession } = PM;

    /**
     * Pantalla de preguntas. Orquesta una QuizSession y pinta su estado.
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

            const showQuestion = () => {
                const q = session.currentQuestion;
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
                    session.isLastQuestion ? 'Ver resultados' : 'Siguiente Pregunta'
                );

                const optionButtons = q.options.map((text, idx) =>
                    h('button', { type: 'button', class: 'option-btn', onClick: () => reveal(idx) }, text)
                );

                const reveal = (selectedIndex) => {
                    if (session.isAnswered) return;
                    const result = session.answer(selectedIndex);

                    optionButtons.forEach((btn) => (btn.disabled = true));
                    optionButtons[result.correctIndex].classList.add('correct');
                    if (!result.isCorrect) optionButtons[selectedIndex].classList.add('incorrect');

                    feedback.replaceChildren(h('strong', {}, 'Explicación: '), result.explanation);
                    feedback.classList.remove('hidden');
                    nextButton.classList.remove('hidden');
                    nextButton.focus();
                };

                card.replaceChildren(
                    h(
                        'div',
                        { class: 'quiz-header' },
                        h('span', {}, `${mod.title} - Bloque ${blockIndex + 1}`),
                        h('span', {}, `Pregunta ${session.currentNumber} de ${session.total}`)
                    ),
                    h('h3', { class: 'question-text' }, q.text),
                    h('div', { class: 'options-list' }, optionButtons),
                    feedback,
                    h(
                        'div',
                        { class: 'actions-row between' },
                        h(
                            'button',
                            { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.openModule(moduleIndex) },
                            'Salir al Menú de Bloques'
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
