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
                    { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.startBlock(moduleIndex, b) },
                    `Bloque ${b + 1} (Q${from}-${to})`
                );
            });

            return h(
                'section',
                { class: 'card' },
                h('h2', {}, mod.title),
                h('p', {}, `Elige un bloque de ${size} preguntas con casos prácticos:`),
                h('div', { class: 'grid-blocks' }, blocks),
                h(
                    'div',
                    { class: 'actions-row' },
                    h('button', { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.goHome() }, 'Volver al Tablero'),
                    mod.theoryId &&
                        h(
                            'button',
                            { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.openTheory(mod.theoryId) },
                            '📚 Ver teoría de este módulo'
                        )
                )
            );
        }
    }

    PM.BlockSelectView = BlockSelectView;
})((window.PrepMaster = window.PrepMaster || {}));
