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
                    `Selecciona uno de los ${modules.length} módulos de estudio. Cada módulo cuenta con preguntas tipo juicio situacional (`,
            h('strong', {}, 'Caso + Enunciado + 3 opciones A, B, C'),
            '), organizadas en ',
                    h('strong', {}, `bloques de ${this.#repository.blockSize} preguntas`),
                    '. Prioriza las competencias funcionales (70%, eliminatorias).'
                ),
                // Resumen del tablero principal
                h('section', { class: 'card summary-card' },
                    h('h3', {}, 'Resumen del Simulacro'),
                    h('p', {}, `Módulos disponibles: ${modules.length}`),
                    h('p', {}, `Preguntas totales: ${modules.reduce((s,m)=>s+(m.questions?.length||0),0)} (meta: 200)`),
                    h('p', {}, `Funcionales: ${modules.filter(m=>m.examArea==='funcional').reduce((s,m)=>s+(m.questions?.length||0),0)} · Comportamentales: ${modules.reduce((s,m)=>s+(m.questions||[]).filter(q=>q.examSubArea==='comportamental').length,0)} · Integridad: ${modules.reduce((s,m)=>s+(m.questions||[]).filter(q=>q.examSubArea==='integridad').length,0)}`),
                    h('p', {}, `Bloques totales por módulos: ${modules.reduce((s,m,i)=>s+this.#repository.getBlockCount(i),0)}`)
                ),
                h('section', { class: 'card', style: 'margin-top:12px;border:2px solid var(--accent,#2563eb);' },
                    h('h3', {}, '📝 Examen Final Simulado (bloques identificados)'),
                    h('p', {}, 'Simulacro tipo concurso dividido por áreas: 150 Funcionales + 25 Comportamentales + 25 Integridad = 200 preguntas. Cada área se presenta en bloques identificados de 10 preguntas.'),
                    h('div', { class: 'actions-row' },
                        h('button', { type: 'button', class: 'btn btn-primary', onClick: () => this.#navigator.openFinalExam() }, 'Abrir Examen Final por Bloques'),
                        h('button', { type: 'button', class: 'btn', onClick: () => this.#navigator.startFinalExam(0) }, 'Iniciar Bloque Funcional 1')
                    )
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

                        const areaLabel = mod.examArea === 'funcional' ? 'Funcional · 70%' : 'Comportamental e Integridad · 30%';
                        const areaClass = mod.examArea === 'funcional' ? 'functional' : 'behavioral';
                        return h(
                            'button',
                            {
                                type: 'button',
                                class: 'module-card',
                                onClick: () => this.#navigator.openModule(index),
                            },
                            h('div', { class: 'mod-icon' }, icon),
                            h('div', { class: 'mod-title' }, mod.homeLabel),
                            h('div', { class: 'mod-count' }, `${count} preguntas · ${blocks} bloques · ${areaLabel}`),
                            h('div', { class: 'block-status-tag ' + areaClass + (stats.pending === 0 && stats.answered > 0 ? ' completed' : stats.answered > 0 ? ' in-progress' : ' untouched') }, badgeText)
                        );
                    })
                )
            );
        }
    }

    PM.HomeView = HomeView;
})((window.PrepMaster = window.PrepMaster || {}));
