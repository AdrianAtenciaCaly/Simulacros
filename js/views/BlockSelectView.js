(function (PM) {
    'use strict';

    const { h } = PM;

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
    // Botón de teoría (si existe) antes de los bloques
    mod.theoryId &&
        h('div', { class: 'actions-row' },
            h('button', { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.openTheory(mod.theoryId) },
                '📚 Ver teoría de este módulo'),
            h('button', { type: 'button', class: 'btn btn-primary', onClick: () => this.#navigator.startBlock(moduleIndex, 0) },
                '▶️ Iniciar Preguntas')
        ),
    h('p', {}, `Elige un bloque de ${size} preguntas con casos prácticos:`),
    h('div', { class: 'grid-blocks' }, blocks),
    // Botón para volver al tablero
    h('div', { class: 'actions-row' },
        h('button', { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.goHome() }, 'Volver al Tablero')
    )
);
        }
    }

    PM.BlockSelectView = BlockSelectView;
})((window.PrepMaster = window.PrepMaster || {}));
