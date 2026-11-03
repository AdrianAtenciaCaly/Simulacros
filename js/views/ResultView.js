(function (PM) {
    'use strict';

    const { h } = PM;

    /**
     * Pantalla de resultados estilo Moodle.
     * Banner + stats + barra de progreso + filtros + tarjetas de revisión.
     */
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
            const wrong = total - correct;

            // --- Banner de puntuacion ---
            const banner = h(
                'div', { class: 'score-banner' },
                h('div', { class: 'score-circle' },
                    h('span', { class: 'score-percent' }, `${percentage}%`),
                    h('span', { class: 'score-pct-label' }, 'Puntaje')
                ),
                h('div', { class: 'score-info' },
                    h('h3', {}, `Bloque ${blockIndex + 1} - ${this.#repository.getModule(moduleIndex).title}`),
                    h('p', {}, `Respondiste ${total} preguntas en este bloque.`),
                    h('span', { class: `score-badge ${passed ? 'pass' : 'fail'}` },
                        passed ? '🎉 ¡Bloque Superado!' : '⚠️ Necesitas Repasar'
                    )
                )
            );

            // --- Barra visual de puntaje ---
            const barClass = percentage >= 70 ? 'good' : percentage >= 40 ? 'mid' : 'bad';
            const scoreBar = h('div', { class: 'score-bar-wrap' },
                h('div', { class: 'score-bar-label' },
                    h('span', {}, 'Desempeno'),
                    h('span', {}, `${correct} correctas de ${total}`)
                ),
                h('div', { class: 'score-bar' },
                    h('div', { class: `score-bar-fill ${barClass}`, style: `width: ${percentage}%` })
                )
            );

            // --- Tarjetas de estadisticas ---
            const stats = h('div', { class: 'score-stats' },
                h('div', { class: 'stat-card stat-correct' },
                    h('div', { class: 'stat-value' }, `${correct}`),
                    h('div', { class: 'stat-label' }, '✅ Correctas')
                ),
                h('div', { class: 'stat-card stat-wrong' },
                    h('div', { class: 'stat-value' }, `${wrong}`),
                    h('div', { class: 'stat-label' }, '❌ Incorrectas')
                ),
                h('div', { class: 'stat-card stat-total' },
                    h('div', { class: 'stat-value' }, `${total}`),
                    h('div', { class: 'stat-label' }, '📋 Total')
                )
            );

            // --- Lista de revision ---
            const reviewList = h('div', { class: 'review-list' });

            const renderAnswers = (filter) => {
                const filtered = filter === 'all' ? answers
                    : filter === 'correct' ? answers.filter(a => a.isCorrect)
                    : answers.filter(a => !a.isCorrect);
                reviewList.replaceChildren(...filtered.map((ans) => {
                    const realIndex = answers.indexOf(ans);
                    return this.#renderAnswer(ans, realIndex);
                }));
            };

            renderAnswers('all');

            const makeFilterBtn = (label, value, startActive) => {
                const btn = h('button', {
                    type: 'button',
                    class: `filter-btn${startActive ? ' active' : ''}`,
                    onClick: () => {
                        filterBtnsContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        renderAnswers(value);
                    }
                }, label);
                return btn;
            };

            const filterBtnsContainer = h('div', { class: 'review-filter-btns' },
                makeFilterBtn(`Todas (${total})`, 'all', true),
                makeFilterBtn(`✅ Correctas (${correct})`, 'correct', false),
                makeFilterBtn(`❌ Incorrectas (${wrong})`, 'wrong', false)
            );

            const reviewSection = h('div', {},
                h('div', { class: 'review-header-bar' },
                    h('h3', { class: 'review-title' }, '📝 Revision Detallada de Respuestas'),
                    filterBtnsContainer
                ),
                reviewList
            );

            // --- Botones de accion ---
            const actions = h(
                'div', { class: 'actions-row' },
                h('button', { type: 'button', class: 'btn',
                    onClick: () => this.#navigator.startBlock(moduleIndex, blockIndex) },
                    '🔄 Reintentar Bloque'),
                h('button', { type: 'button', class: 'btn btn-secondary',
                    onClick: () => { this.#repository.shuffleModule(moduleIndex); this.#navigator.startBlock(moduleIndex, blockIndex); } },
                    '🔀 Regenerar Preguntas'),
                h('button', { type: 'button', class: 'btn',
                    onClick: () => this.#navigator.openModule(moduleIndex) },
                    '📚 Elegir Otro Bloque'),
                h('button', { type: 'button', class: 'btn btn-outline',
                    onClick: () => this.#navigator.goHome() },
                    '🏠 Ir al Tablero')
            );

            return h('section', { class: 'card' },
                h('h2', {}, '📊 Resultados del Bloque'),
                banner,
                scoreBar,
                stats,
                reviewSection,
                actions
            );
        }

        #renderAnswer(answer, index) {
            const userOptionEl = h('div', {
                class: `review-option ${answer.isCorrect ? 'user-ok' : 'user-bad'}`
            },
                h('span', { class: 'review-option-icon' }, answer.isCorrect ? '✅' : '❌'),
                h('span', {},
                    h('span', { class: 'review-option-label' }, 'Tu respuesta: '),
                    answer.selected
                )
            );

            const correctOptionEl = !answer.isCorrect
                ? h('div', { class: 'review-option correct-ans' },
                    h('span', { class: 'review-option-icon' }, '✔'),
                    h('span', {},
                        h('span', { class: 'review-option-label' }, 'Respuesta correcta: '),
                        answer.correctOpt
                    )
                  )
                : null;

            const explanationEl = h('div', { class: 'review-explanation' },
                h('strong', {}, '💡 Justificacion: '),
                answer.explanation
            );

            return h('div', { class: `review-item ${answer.isCorrect ? 'correct-rev' : ''}` },
                h('div', { class: 'review-item-header' },
                    h('div', { class: `review-badge ${answer.isCorrect ? 'ok' : 'bad'}` },
                        `P${index + 1}`
                    ),
                    h('p', { class: 'review-item-question' }, answer.question)
                ),
                userOptionEl,
                correctOptionEl,
                explanationEl
            );
        }
    }

    PM.ResultView = ResultView;
})((window.PrepMaster = window.PrepMaster || {}));
