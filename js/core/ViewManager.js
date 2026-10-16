(function (PM) {
    'use strict';

    /**
     * Monta una vista a la vez dentro del contenedor raíz.
     *
     * Contrato que debe cumplir una vista (duck typing):
     *   render(params)   -> HTMLElement            (obligatorio)
     *   title(params)    -> string                 (opcional)
     *   navId(params)    -> string                 (opcional, ítem del menú a resaltar)
     *   onMounted(params)-> void                   (opcional, ya insertada en el DOM)
     *
     * Abierto/cerrado: para agregar una pantalla nueva basta con registrarla,
     * este archivo no cambia.
     */
    class ViewManager {
        #root;
        #scrollContainer;
        #views = new Map();
        #listeners = [];

        constructor(root, { scrollContainer = root.parentElement } = {}) {
            this.#root = root;
            this.#scrollContainer = scrollContainer;
        }

        register(name, view) {
            this.#views.set(name, view);
            return this;
        }

        /** Se invoca tras cada cambio de vista con { name, title, navId }. */
        onChange(listener) {
            this.#listeners.push(listener);
        }

        show(name, params = {}) {
            const view = this.#views.get(name);
            if (!view) throw new Error(`Vista no registrada: ${name}`);

            this.#root.replaceChildren(view.render(params));
            this.#scrollContainer?.scrollTo?.({ top: 0 });

            const info = {
                name,
                title: view.title?.(params) ?? '',
                navId: view.navId?.(params) ?? null,
            };
            this.#listeners.forEach((listener) => listener(info));

            view.onMounted?.(params);
        }
    }

    PM.ViewManager = ViewManager;
})((window.PrepMaster = window.PrepMaster || {}));
