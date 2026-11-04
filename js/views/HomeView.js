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
                // Resumen del tablero principal
                h('section', { class: 'card summary-card' },
                    h('h3', {}, 'Resumen del Simulacro'),
                    h('p', {}, `Módulos disponibles: ${modules.length}`),
                    h('p', {}, `Preguntas totales: ${modules.reduce((s,m)=>s+(m.questions?.length||0),0)}`),
                    h('p', {}, `Bloques totales: ${modules.reduce((s,m,i)=>s+this.#repository.getBlockCount(i),0)}`)
                ),
                h(
                    'div',
                    { class: 'grid-actions' },
                    modules.map((mod, index) => {
                        const match = mod.navLabel.match(/^(\p{Extended_Pictographic}|\S+)\s+(.+)$/u);
                        const icon = match ? match[1] : '📘';
                        const count = mod.questions.length;
                        const blocks = this.#repository.getBlockCount(index);
                        const stats = this.#repository.getModuleStats(index);
                        const badgeText = stats.pending === 0 && stats.answered > 0
                            ? '✅ Completado'
                            : stats.answered > 0
                            ? `⏳ ${stats.answered}/${count} hechas`
                            : '⚪ Sin iniciar';

                        return h(
                            'button',
                            {
                                type: 'button',
                                class: 'module-card',
                                onClick: () => this.#navigator.openModule(index),
                            },
                            h('div', { class: 'mod-icon' }, icon),
                            h('div', { class: 'mod-title' }, mod.homeLabel),
                            h('div', { class: 'mod-count' }, `${count} preguntas · ${blocks} bloques`),
                            h('div', { class: 'block-status-tag' + (stats.pending === 0 && stats.answered > 0 ? ' completed' : stats.answered > 0 ? ' in-progress' : ' untouched') }, badgeText)
                        );
                    })
                )
            );
        }
    }

    PM.HomeView = HomeView;
})((window.PrepMaster = window.PrepMaster || {}));
