(function (PM) {
    'use strict';

    const { h } = PM;

    class ResultView {
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

        render({ moduleIndex, blockIndex, summary }) {
            const { correct, total, percentage, passed, answers } = summary;

            return h(
                'section',
                { class: 'card' },
                h('h2', {}, '📊 Resultados del Bloque y Revisión'),
                h(
                    'div',
                    { class: 'score-summary' },
                    h('p', {}, `Bloque ${blockIndex + 1} Finalizado`),
                    h('p', { class: 'score-line' }, 'Aciertos: ', h('strong', {}, `${correct} / ${total}`), ` (${percentage}%)`),
                    h(
                        'p',
                        { class: passed ? 'score-pass' : 'score-fail' },
                        passed ? '🎉 ¡Bloque superado con éxito!' : '⚠️ Debes repasar los conceptos fallidos en este bloque.'
                    )
                ),
                h('h3', { class: 'review-title' }, 'Desglose y Corrección de Errores:'),
                h('div', { class: 'review-list' }, answers.map((answer, i) => this.#renderAnswer(answer, i))),
                h(
                    'div',
                    { class: 'actions-row' },
                    h('button', { type: 'button', class: 'btn', onClick: () => this.#navigator.startBlock(moduleIndex, blockIndex) }, 'Reintentar Bloque'),
                    h('button', { type: 'button', class: 'btn', onClick: () => this.#navigator.openModule(moduleIndex) }, 'Elegir Otro Bloque'),
                    h('button', { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.goHome() }, 'Ir al Tablero Principal')
                )
            );
        }

        #renderAnswer(answer, index) {
            return h(
                'div',
                { class: `review-item ${answer.isCorrect ? 'correct-rev' : ''}` },
                h('p', {}, h('strong', {}, `P${index + 1}: `), answer.question),
                h(
                    'p',
                    { class: answer.isCorrect ? 'ans-ok' : 'ans-bad' },
                    'Tu respuesta: ',
                    h('em', {}, answer.selected),
                    answer.isCorrect ? ' ✅ (Correcta)' : ' ❌ (Incorrecta)'
                ),
                !answer.isCorrect && h('p', { class: 'ans-right' }, 'Respuesta correcta: ', h('strong', {}, answer.correctOpt)),
                h('p', { class: 'ans-why' }, h('strong', {}, 'Justificación: '), answer.explanation)
            );
        }
    }

    PM.ResultView = ResultView;
})((window.PrepMaster = window.PrepMaster || {}));
