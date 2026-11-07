(function (PM) {
    'use strict';

    const { h, THEORY, renderSection } = PM;

    class BlockSelectView {
        #repository;
        #navigator;

        constructor({ repository, navigator }) {
            this.#repository = repository;
            this.#navigator = navigator;
        }

        title({ moduleIndex, mode } = {}) {
            if (mode === 'final') return 'Examen Final Simulado — Bloques';
            return this.#repository.getModule(moduleIndex).title;
        }

        navId({ moduleIndex, mode } = {}) {
            if (mode === 'final') return 'final-exam';
            return `module-${moduleIndex}`;
        }

        render({ moduleIndex, mode } = {}) {
            if (mode === 'final') return this.#renderFinal();
            const mod = this.#repository.getModule(moduleIndex);
            const size = this.#repository.blockSize;
            const blockCount = this.#repository.getBlockCount(moduleIndex);
            const stats = this.#repository.getModuleStats(moduleIndex);

            // --- Panel de Progreso del Módulo ---
            const progressCard = h('div', { class: 'module-stats-banner' },
                h('div', { class: 'module-stats-header' },
                    h('div', {},
                        h('h3', { class: 'module-stats-title' }, '📊 Progreso del Banco de Preguntas'),
                        h('p', { class: 'module-stats-subtitle' },
                            `${stats.answered} de ${stats.total} preguntas realizadas (${stats.pending} pendientes por responder)`
                        )
                    ),
                    h('div', { class: 'module-stats-badge' },
                        `${stats.percentage}% completado`
                    )
                ),
                h('div', { class: 'quiz-progress-bar', style: 'margin: 12px 0 16px 0;' },
                    h('div', {
                        class: 'quiz-progress-fill',
                        style: `width: ${stats.percentage}%`,
                        role: 'progressbar',
                        'aria-valuenow': stats.percentage,
                        'aria-valuemin': 0,
                        'aria-valuemax': 100,
                    })
                ),
                h('div', { class: 'module-stats-grid' },
                    h('div', { class: 'stat-mini-pill' },
                        h('span', { class: 'stat-mini-label' }, '📚 Total:'),
                        h('strong', {}, `${stats.total}`)
                    ),
                    h('div', { class: 'stat-mini-pill good' },
                        h('span', { class: 'stat-mini-label' }, '✅ Aciertos:'),
                        h('strong', {}, `${stats.correct}`)
                    ),
                    h('div', { class: 'stat-mini-pill bad' },
                        h('span', { class: 'stat-mini-label' }, '❌ Errores:'),
                        h('strong', {}, `${stats.incorrect}`)
                    ),
                    h('div', { class: 'stat-mini-pill pending' },
                        h('span', { class: 'stat-mini-label' }, '⏳ Pendientes:'),
                        h('strong', {}, `${stats.pending}`)
                    )
                ),
                h('div', { class: 'actions-row', style: 'margin-top: 16px;' },
                    stats.pending > 0
                        ? h('button', {
                            type: 'button',
                            class: 'btn btn-primary',
                            onClick: () => this.#navigator.startPending(moduleIndex)
                        }, `🚀 Practicar Preguntas Nuevas (${stats.pending} pendientes)`)
                        : h('button', {
                            type: 'button',
                            class: 'btn btn-secondary',
                            onClick: () => {
                                if (confirm('¿Deseas reiniciar el progreso de este módulo para resolver todas las preguntas desde cero?')) {
                                    this.#repository.resetModuleProgress(moduleIndex);
                                    this.#navigator.openModule(moduleIndex);
                                }
                            }
                        }, '🔄 Reiniciar Progreso del Módulo'),
                    stats.answered > 0 && stats.pending > 0
                        ? h('button', {
                            type: 'button',
                            class: 'btn btn-outline',
                            onClick: () => {
                                if (confirm('¿Deseas reiniciar el progreso de este módulo?')) {
                                    this.#repository.resetModuleProgress(moduleIndex);
                                    this.#navigator.openModule(moduleIndex);
                                }
                            }
                        }, '🔄 Reiniciar Progreso')
                        : null
                )
            );

            // --- Tarjetas de Bloques Disponibles ---
            const blockButtons = Array.from({ length: blockCount }, (_, b) => {
                const from = b * size + 1;
                const to = Math.min((b + 1) * size, mod.questions.length);
                const blockQuestions = this.#repository.getBlock(moduleIndex, b);
                const answeredInBlock = blockQuestions.filter(q => PM.progressTracker.isAnswered(mod.id, q.id)).length;
                const isCompleted = answeredInBlock === blockQuestions.length;
                const isInProgress = answeredInBlock > 0 && !isCompleted;

                const statusLabel = isCompleted
                    ? `✅ Completado (${answeredInBlock}/${blockQuestions.length})`
                    : isInProgress
                    ? `⏳ En curso (${answeredInBlock}/${blockQuestions.length})`
                    : `⚪ Sin iniciar (${blockQuestions.length} nuevas)`;

                const statusClass = isCompleted ? 'completed' : isInProgress ? 'in-progress' : 'untouched';

                return h(
                    'button',
                    {
                        type: 'button',
                        class: `block-btn ${statusClass}`,
                        onClick: () => this.#navigator.startBlock(moduleIndex, b)
                    },
                    h('strong', {}, `Bloque ${b + 1}`),
                    h('span', { class: 'block-btn-sub' }, `Preguntas ${from}–${to}`),
                    h('span', { class: `block-status-tag ${statusClass}` }, statusLabel)
                );
            });

            const blocksSection = h('div', { class: 'blocks-section', style: 'margin-top: 24px;' },
                h('h3', { class: 'blocks-section-title' }, '📑 Selección por Bloques de Estudio'),
                h('p', { class: 'blocks-section-desc' }, 'Puedes resolver los bloques en orden o ingresar directamente a las preguntas que desees practicar.'),
                h('div', { class: 'grid-blocks' }, blockButtons)
            );

            // --- Teoría del Módulo ---
            const theoryContent = mod.theoryId
                ? renderSection(THEORY.sections.find(sec => sec.id === mod.theoryId))
                : null;

            return h(
                'section',
                { class: 'card' },
                h('h2', {}, mod.title),
                progressCard,
                blocksSection,
                theoryContent ? h('hr', { style: 'margin: 28px 0; border: none; border-top: 1px solid var(--border);' }) : null,
                theoryContent,
                h('div', { class: 'actions-row', style: 'margin-top: 24px;' },
                    h('button', {
                        type: 'button',
                        class: 'btn',
                        onClick: () => {
                            const prev = moduleIndex - 1;
                            if (prev >= 0) this.#navigator.openModule(prev);
                            else this.#navigator.goHome();
                        }
                    }, '⬅️ Módulo Anterior'),
                    h('button', {
                        type: 'button',
                        class: 'btn',
                        onClick: () => {
                            const next = moduleIndex + 1;
                            const modulesCount = this.#repository.getModules().length;
                            if (next < modulesCount) this.#navigator.openModule(next);
                            else this.#navigator.goHome();
                        }
                    }, '➡️ Siguiente Módulo'),
                    h('button', {
                        type: 'button',
                        class: 'btn btn-outline',
                        onClick: () => this.#navigator.goHome()
                    }, '🏠 Volver al Tablero')
                )
            );
        }

        #renderFinal() {
            const finalExam = this.#repository.getFinalExam();
            const c = finalExam.composition;
            const info = h('div', { class: 'module-stats-banner' },
                h('div', { class: 'module-stats-header' },
                    h('div', {},
                        h('h3', { class: 'module-stats-title' }, '📝 Examen Final Simulado — DIAN 2676 (Gestor I)'),
                        h('p', { class: 'module-stats-subtitle' }, `Simulacro dividido e identificado por áreas: ${c.funcional} funcionales + ${c.comportamental} comportamentales + ${c.integridad} integridad = ${c.total} preguntas.`)
                    )
                ),
                h('p', { style: 'margin-top:8px;color:var(--text-soft,#555);' }, 'Prioriza las funcionales (70% eliminatorio). Practica por bloques identificados; cada bloque mezcla preguntas del área indicada.')
            );
            const blockButtons = finalExam.blocks.map((b, idx) => h('button', {
                type: 'button', class: `block-btn untouched`,
                onClick: () => this.#navigator.startFinalExam(idx)
            },
                h('strong', {}, b.label),
                h('span', { class: 'block-btn-sub' }, `${b.questions.length} preguntas · Área: ${b.areaLabel}`),
                h('span', { class: 'block-status-tag untouched' }, '⚪ Listo para practicar')
            ));
            return h('section', { class: 'card' },
                h('h2', {}, 'Examen Final Simulado'),
                info,
                h('div', { class: 'blocks-section', style: 'margin-top: 24px;' },
                    h('h3', { class: 'blocks-section-title' }, '📑 Bloques identificados (Funcionales / Comportamentales / Integridad)'),
                    h('div', { class: 'grid-blocks' }, blockButtons)
                ),
                h('div', { class: 'actions-row', style: 'margin-top: 24px;' },
                    h('button', { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.goHome() }, '🏠 Volver al Tablero')
                )
            );
        }
    }

    PM.BlockSelectView = BlockSelectView;
})((window.PrepMaster = window.PrepMaster || {}));
