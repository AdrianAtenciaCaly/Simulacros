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

        render({ moduleIndex, blockIndex, summary, mode = 'block' }) {
            const { correct, total, percentage, passed, answers } = summary;
            const wrong = total - correct;
            const modStats = this.#repository.getModuleStats(moduleIndex);

            // --- Banner de puntuacion ---
            const banner = h(
                'div', { class: 'score-banner' },
                h('div', { class: 'score-circle' },
                    h('span', { class: 'score-percent' }, `${percentage}%`),
                    h('span', { class: 'score-pct-label' }, 'Puntaje')
                ),
                h('div', { class: 'score-info' },
                    h('h3', {}, `${this.#repository.getModule(moduleIndex).title}`),
                    h('p', {}, `Respondiste ${total} preguntas en esta sesión.`),
                    h('p', { class: 'module-progress-chip' }, `🎯 Avance del Módulo: ${modStats.answered}/${modStats.total} preguntas completadas (${modStats.pending} pendientes)`),
                    h('span', { class: `score-badge ${passed ? 'pass' : 'fail'}` },
                        passed ? '🎉 ¡Sesión Superada!' : '⚠️ Necesitas Repasar'
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
            const nextPendingBtn = modStats.pending > 0
                ? h('button', {
                    type: 'button',
                    class: 'btn btn-primary',
                    onClick: () => this.#navigator.startPending(moduleIndex)
                }, `🚀 Hacer Otras Preguntas (${modStats.pending} pendientes)`)
                : h('button', {
                    type: 'button',
                    class: 'btn btn-secondary',
                    onClick: () => {
                        this.#repository.resetModuleProgress(moduleIndex);
                        this.#navigator.startPending(moduleIndex);
                    }
                }, '🔄 Reiniciar Progreso del Módulo');

            const actions = h(
                'div', { class: 'actions-row' },
                nextPendingBtn,
                h('button', { type: 'button', class: 'btn',
                    onClick: () => this.#navigator.startBlock(moduleIndex, blockIndex ?? 0) },
                    '🔄 Reintentar Sesión'),
                h('button', { type: 'button', class: 'btn',
                    onClick: () => this.#navigator.openModule(moduleIndex) },
                    '📚 Menú del Módulo'),
                h('button', { type: 'button', class: 'btn',
                    onClick: () => {
                        const prev = moduleIndex - 1;
                        if (prev >= 0) {
                            this.#navigator.openModule(prev);
                        } else {
                            this.#navigator.goHome();
                        }
                    } },
                    '⬅️ Módulo Anterior'),
                h('button', { type: 'button', class: 'btn',
                    onClick: () => {
                        const next = moduleIndex + 1;
                        const modulesCount = this.#repository.getModules().length;
                        if (next < modulesCount) {
                            this.#navigator.openModule(next);
                        } else {
                            this.#navigator.goHome();
                        }
                    } },
                    '➡️ Siguiente Módulo'),
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
