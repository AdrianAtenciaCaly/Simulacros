# DIAN-PrepMaster LMS

Campus de preparación para el concurso DIAN / CNSC — Gestor I (Ficha IT-TO-3008).

## Cómo ejecutarlo

Abre `index.html` con doble clic. No necesita servidor ni instalar nada.

> Los archivos JS son scripts clásicos (no `type="module"`) para que funcionen con `file://`.
> Cada archivo se registra en el namespace `window.PrepMaster`, y el **orden de los `<script>`
> en `index.html` importa** (cada archivo depende de los anteriores).

## Estructura

```
prepmaster/
├── index.html                 # solo el esqueleto HTML
├── css/
│   └── styles.css             # estilos (tokens, componentes, responsive)
└── js/
    ├── app.js                 # composition root: crea y conecta todo
    ├── config.js              # BLOCK_SIZE, PASS_PERCENTAGE, ...
    ├── data/
    │   ├── question-bank.js   # preguntas por módulo (solo datos)
    │   └── theory-data.js     # texto de la teoría (extraído del PDF)
    ├── core/
    │   ├── dom.js             # helper h() para crear DOM sin innerHTML
    │   ├── QuestionRepository.js  # acceso al banco (módulos, bloques)
    │   ├── QuizSession.js     # reglas del quiz, sin DOM
    │   ├── ViewManager.js     # monta una vista a la vez
    │   └── SidebarView.js     # menú lateral
    └── views/
        ├── HomeView.js
        ├── BlockSelectView.js
        ├── QuizView.js
        ├── ResultView.js
        ├── TheoryView.js
        └── theory-renderer.js # datos de teoría -> DOM
```

## Principios SOLID aplicados

- **S**: cada archivo tiene una responsabilidad (datos, reglas del quiz, navegación, una pantalla).
- **O**: nueva pantalla = una clase nueva + su `<script>` en `index.html` + `register()` en `app.js`; `ViewManager` no cambia. Nuevo tipo de bloque de teoría = un `case` en `theory-renderer.js`.
- **L**: toda vista cumple el mismo contrato (`render`, y opcionalmente `title`, `navId`, `onMounted`) y es intercambiable.
- **I**: las vistas solo reciben lo que usan (`repository`, `navigator`) y el `ViewManager` solo exige `render`.
- **D**: las vistas dependen de abstracciones inyectadas (`repository`, `navigator`), no de datos globales ni de otras vistas.

## Cómo agregar contenido

- **Preguntas reales**: en `js/data/question-bank.js`, reemplaza la función `build` de un módulo por `questions: [ { text, options, correct, explanation }, ... ]`.
- **Teoría**: edita `js/data/theory-data.js` (bloques `p` y `list`).
