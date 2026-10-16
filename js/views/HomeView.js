(function (PM) {
    'use strict';

    const { h } = PM;

    class HomeView {
        #repository;
        #navigator;

        constructor({ repository, navigator }) {
            this.#repository = repository;
            this.#navigator = navigator;
        }

        title() {
            return 'Tablero del Aspirante';
        }

        navId() {
            return 'home';
        }

        render() {
            const modules = this.#repository.getModules();
            const perModule = modules[0]?.questions.length ?? 0;

            return h(
                'section',
                { class: 'card' },
                h('h2', {}, `Campus de Preparación Estilo Moodle (${modules.length} Módulos)`),
                h(
                    'p',
                    {},
                    `Selecciona uno de los ${modules.length} módulos de estudio. Cada módulo cuenta con un banco de `,
                    h('strong', {}, `${perModule} preguntas basadas en casos de estudio`),
                    ', divididas en ',
                    h('strong', {}, `bloques de ${this.#repository.blockSize} preguntas`),
                    ' para un aprendizaje focalizado y sin fatiga.'
                ),
                h(
                    'div',
                    { class: 'grid-actions' },
                    modules.map((mod, index) => {
                        const match = mod.navLabel.match(/^(\p{Extended_Pictographic}|\S+)\s+(.+)$/u);
                        const icon = match ? match[1] : '📘';
                        const count = mod.questions.length;
                        const blocks = this.#repository.getBlockCount(index);
                        return h(
                            'button',
                            {
                                type: 'button',
                                class: 'module-card',
                                onClick: () => this.#navigator.openModule(index),
                            },
                            h('div', { class: 'mod-icon' }, icon),
                            h('div', { class: 'mod-title' }, mod.homeLabel),
                            h('div', { class: 'mod-count' }, `${count} preguntas · ${blocks} bloques`)
                        );
                    })
                )
            );
        }
    }

    PM.HomeView = HomeView;
})((window.PrepMaster = window.PrepMaster || {}));
