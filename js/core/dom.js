(function (PM) {
    'use strict';

    /**
     * Helper mínimo para construir DOM de forma segura.
     * Todo el texto entra por nodos de texto (nunca innerHTML), evitando XSS
     * y problemas de escape con el contenido de preguntas o teoría.
     *
     * h('button', { class: 'btn', onClick: fn }, 'Texto')
     */
    function h(tag, attrs = {}, ...children) {
        const el = document.createElement(tag);

        for (const [key, value] of Object.entries(attrs ?? {})) {
            if (value === null || value === undefined || value === false) continue;

            if (key === 'class') {
                el.className = value;
            } else if (key === 'dataset') {
                Object.assign(el.dataset, value);
            } else if (key.startsWith('on') && typeof value === 'function') {
                el.addEventListener(key.slice(2).toLowerCase(), value);
            } else {
                el.setAttribute(key, value === true ? '' : value);
            }
        }

        for (const child of children.flat(Infinity)) {
            if (child === null || child === undefined || child === false) continue;
            el.append(child instanceof Node ? child : document.createTextNode(String(child)));
        }

        return el;
    }

    PM.h = h;
})((window.PrepMaster = window.PrepMaster || {}));
