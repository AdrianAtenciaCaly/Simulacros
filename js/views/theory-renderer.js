(function (PM) {
    'use strict';

    const { h } = PM;

    /**
     * Convierte los datos de teoría en DOM. Solo sabe de formato, no de navegación.
     */
    function renderListItems(items) {
        return items.map((item) =>
            h(
                'li',
                {},
                item.term && h('span', { class: 'theory-term' }, item.term),
                item.term && item.text ? ': ' : null,
                item.text,
                item.children?.length ? renderList({ items: item.children }) : null
            )
        );
    }

    function renderList({ ordered = false, items }) {
        return h(ordered ? 'ol' : 'ul', {}, renderListItems(items));
    }

    function renderBlock(block) {
        switch (block.type) {
            case 'p':
                return h('p', {}, block.text);
            case 'list':
                return renderList(block);
            case 'callout':
                return h(
                    'div',
                    { class: `theory-callout ${block.variant || 'info'}` },
                    block.title && h('strong', { class: 'theory-callout-title' }, block.title),
                    block.text && h('p', {}, block.text)
                );
            default:
                throw new Error(`Tipo de bloque de teoría desconocido: ${block.type}`);
        }
    }

    function renderTopic(topic) {
        return h('div', { class: 'theory-topic' }, topic.heading && h('h4', {}, topic.heading), topic.blocks.map(renderBlock));
    }

    function renderSection(section) {
        return h(
            'section',
            { class: 'theory-section', id: `theory-${section.id}` },
            h('h3', {}, section.title),
            section.topics.map(renderTopic)
        );
    }

    PM.renderListItems = renderListItems;
    PM.renderBlock = renderBlock;
    PM.renderTopic = renderTopic;
    PM.renderSection = renderSection;
})((window.PrepMaster = window.PrepMaster || {}));
