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

        title({ moduleIndex }) {
            return this.#repository.getModule(moduleIndex).title;
        }

        navId({ moduleIndex }) {
            return `module-${moduleIndex}`;
        }

        render({ moduleIndex }) {
            const mod = this.#repository.getModule(moduleIndex);
            const size = this.#repository.blockSize;
            const blockCount = this.#repository.getBlockCount(moduleIndex);

            const blocks = Array.from({ length: blockCount }, (_, b) => {
                const from = b * size + 1;
                const to = Math.min((b + 1) * size, mod.questions.length);
                return h(
                    'button',
                    { type: 'button', class: 'block-btn', onClick: () => this.#navigator.startBlock(moduleIndex, b) },
                    h('strong', {}, `Bloque ${b + 1}`),
                    h('span', { class: 'block-btn-sub' }, `Preguntas ${from}–${to}`)
                );
            });

            return h(
    'section',
    { class: 'card' },
    h('h2', {}, mod.title),
    // Render the full theory for this module (if exists)
    mod.theoryId && (
        renderSection(
            THEORY.sections.find(sec => sec.id === mod.theoryId)
        )
    ),
    // Botón para iniciar preguntas al final de la teoría
    h('div', { class: 'actions-row' },
        h('button', { type: 'button', class: 'btn btn-primary', onClick: () => this.#navigator.startBlock(moduleIndex, 0) },
            '▶️ Iniciar Preguntas'),
        // Botón módulo anterior
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
        // Botón módulo siguiente
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
        h('button', { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.goHome() }, 'Volver al Tablero')
    )
);        }
    }

    PM.BlockSelectView = BlockSelectView;
})((window.PrepMaster = window.PrepMaster || {}));
