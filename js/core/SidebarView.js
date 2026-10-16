(function (PM) {
    'use strict';

    const { h } = PM;

    /**
     * Menú lateral. Recibe sus ítems por configuración; no conoce las vistas.
     * items: [{ id, label, onSelect }]
     */
    class SidebarView {
        #buttons = new Map();

        constructor(listElement, items) {
            items.forEach(({ id, label, onSelect }) => {
                const match = label.match(/^(\p{Extended_Pictographic}|\S+)\s+(.+)$/u);
                const buttonContent = match
                    ? [
                        h('span', { class: 'nav-icon' }, match[1]),
                        h('span', { class: 'nav-text' }, match[2])
                      ]
                    : [h('span', { class: 'nav-text' }, label)];

                const button = h('button', { type: 'button', class: 'nav-item', onClick: onSelect }, ...buttonContent);
                this.#buttons.set(id, button);
                listElement.append(h('li', {}, button));
            });
        }

        setActive(id) {
            this.#buttons.forEach((button, buttonId) => {
                const active = buttonId === id;
                button.classList.toggle('active', active);
                if (active) {
                    button.setAttribute('aria-current', 'page');
                    // En móvil el menú es horizontal: mantener visible el ítem activo.
                    button.scrollIntoView?.({ inline: 'center', block: 'nearest' });
                } else {
                    button.removeAttribute('aria-current');
                }
            });
        }
    }

    PM.SidebarView = SidebarView;
})((window.PrepMaster = window.PrepMaster || {}));
