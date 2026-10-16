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
                    modules.map((mod, index) =>
                        h('button', { type: 'button', class: 'btn', onClick: () => this.#navigator.openModule(index) }, mod.homeLabel)
                    )
                )
            );
        }
    }

    PM.HomeView = HomeView;
})((window.PrepMaster = window.PrepMaster || {}));
