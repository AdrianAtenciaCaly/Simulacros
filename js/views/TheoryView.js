(function (PM) {
    'use strict';

    const { h, renderSection } = PM;

    /**
     * Muestra UNA sección de la teoría a la vez (Introducción, Módulo 1..4).
     * Acepta { sectionId }; si no llega o no existe, muestra la primera.
     */
    class TheoryView {
        #theory;
        #navigator;

        constructor({ theory, navigator }) {
            this.#theory = theory;
            this.#navigator = navigator;
        }

        #indexOf(sectionId) {
            const index = this.#theory.sections.findIndex((s) => s.id === sectionId);
            return index >= 0 ? index : 0;
        }

        title({ sectionId } = {}) {
            const section = this.#theory.sections[this.#indexOf(sectionId)];
            return `Teoría - ${section.label}`;
        }

        navId() {
            return 'theory';
        }

        render({ sectionId } = {}) {
            const { title, meta, sections } = this.#theory;
            const index = this.#indexOf(sectionId);
            const current = sections[index];

            return h(
                'section',
                { class: 'card theory-content' },
                h('h2', {}, `📚 ${title}`),
                index === 0 && meta.map((line) => h('p', { class: 'theory-meta' }, line)),
                this.#renderTabs(current),
                renderSection(current),
                this.#renderPager(sections, index),
                h(
                    'button',
                    {
                        type: 'button',
                        class: 'scroll-top',
                        title: 'Subir al inicio',
                        'aria-label': 'Subir al inicio',
                        onClick: () => document.getElementById('main')?.scrollTo({ top: 0, behavior: 'smooth' }),
                    },
                    '↑'
                )
            );
        }

        #renderTabs(current) {
            return h(
                'div',
                { class: 'theory-index', role: 'tablist' },
                this.#theory.sections.map((section) => {
                    const selected = section.id === current.id;
                    return h(
                        'button',
                        {
                            type: 'button',
                            role: 'tab',
                            'aria-selected': String(selected),
                            class: `theory-chip${selected ? ' active' : ''}`,
                            onClick: () => this.#navigator.openTheory(section.id),
                        },
                        section.label
                    );
                })
            );
        }

        #renderPager(sections, index) {
            const prev = sections[index - 1];
            const next = sections[index + 1];
            return h(
                'div',
                { class: 'theory-nav' },
                prev
                    ? h('button', { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.openTheory(prev.id) }, `← ${prev.label}`)
                    : h('span', { class: 'theory-nav-spacer' }),
                h('button', { type: 'button', class: 'btn btn-outline', onClick: () => this.#navigator.goHome() }, 'Volver al Tablero'),
                next
                    ? h('button', { type: 'button', class: 'btn', onClick: () => this.#navigator.openTheory(next.id) }, `${next.label} →`)
                    : h('span', { class: 'theory-nav-spacer' })
            );
        }
    }

    PM.TheoryView = TheoryView;
})((window.PrepMaster = window.PrepMaster || {}));
