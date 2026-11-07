# DIAN-PrepMaster LMS — Gestor I (OPEC 198476) · Proceso DIAN 2676

Campus virtual de preparación para el **Proceso de Selección DIAN 2676** (CNSC / Fundación Universitaria del Área Andina - Areandina):
- **Empleo:** Gestor I (Código 301, Grado 01) — Nivel Profesional
- **OPEC:** 198476 | **Ficha de Empleo:** CC-AU-3008 (Asistencia al Usuario y Cercanía con el Ciudadano)
- **Fecha Oficial de Aplicación de Pruebas Escritas:** Domingo 8 de noviembre de 2026 (Jornada única de 5 horas: 8:00 a.m. a 1:00 p.m.)
- **Ponderación Oficial (Modalidad Ingreso sin experiencia previa):**
  * **Prueba de Competencias Funcionales:** **70%** (Carácter **ELIMINATORIO**, Puntaje Mínimo Aprobatorio: **70.00 / 100**).
  * **Prueba de Competencias Comportamentales:** **20%** (Carácter Clasificatorio, escala Likert).
  * **Prueba de Integridad (Código de Integridad DIAN):** **10%** (Carácter Clasificatorio, escala Likert).
  * *Total: 100%*. No aplica Valoración de Antecedentes al no requerir experiencia.
- **Formato Oficial de Ítems Funcionales (Areandina):** **Caso + Enunciado + TRES (3) opciones de respuesta (A, B, C)**, donde solo una es la correcta.

## Cómo ejecutarlo

Abre `index.html` con doble clic en tu navegador. No necesita servidor ni instalar nada (funciona 100% offline).

> Los archivos JS son scripts clásicos (no `type="module"`) para que funcionen directamente con `file://`.
> Cada archivo se registra en el namespace `window.PrepMaster`, y el **orden de los `<script>` en `index.html` importa** (cada archivo depende de los anteriores).

## Contenido de Preparación (7 Módulos + Guía Oficial Areandina)

1. **Guía Oficial de Orientación (DIAN 2676):** Reglas logísticas de la prueba, horario (8:00 a.m. a 1:00 p.m.), documentos de identidad válidos, elementos permitidos (lápiz No. 2, sacapuntas, borrador de nata), causales de anulación, ponderaciones y metodología de Juicio Situacional con 3 opciones.
2. **Módulo 1: Régimen Constitucional y Función Pública:** Principios constitucionales (Art. 1, 2, 6, 29, 209, 363 C.P.), estructura orgánica de la DIAN (Decreto 1742 de 2020), carrera específica de la DIAN (Decreto Ley 927 de 2023 y Decreto Ley 071 de 2020), Resolución DIAN 067 de 2024 (MERF), régimen disciplinario (Ley 1952/2019 reformada por Ley 2094/2021) e incompatibilidades post-empleo.
3. **Módulo 2: Procedimiento Administrativo y CPACA:** Ley 1437 de 2011 y Ley 2080 de 2021, régimen integral del derecho de petición (Ley 1755 de 2015), términos (10 días copias, 15 días peticiones/quejas, 30 días consultas), peticiones incompletas y desistimiento tácito, corrección de errores (Art. 45), recursos (Art. 76) y notificaciones electrónicas (Art. 566-1 E.T.).
4. **Módulo 3: Administración del Registro Único Tributario (RUT):** Art. 555-2 E.T. y DURT 1625 de 2016. Inscripción presencial y virtual con biometría, validación documental de casos especiales (menores de edad, sucesiones ilíquidas, consorcios y apoderados), verificación previa en retiro de responsabilidades de IVA (regla de los 3 años < 3.500 UVT) e Impoconsumo, causales de suspensión y cancelación del RUT, casillas críticas de la Hoja 1 y códigos CIIU (Res. 000139/2020).
5. **Módulo 4: Atención, Servicio al Ciudadano y Canales TACI:** Canales presenciales (Puntos de Contacto), virtuales (portal transaccional, Muisca, citas virtuales), telefónicos y móviles. Protocolos de servicio con enfoque diferencial (Ley 1757 de 2015), política de Lenguaje Claro, kioscos de autogestión guiada e Instrumento de Firma Electrónica (IFE / e-Firma).
6. **Módulo 5: Cultura de la Contribución y Obligaciones TACI:** Ley 223 de 1995, Núcleos de Apoyo Contable y Fiscal (NAF), gestión persuasiva de cobro, facturación electrónica de venta (Art. 616-1 E.T., factura de contingencia de talonario, sanción de clausura de establecimiento Art. 657 E.T.), deducción del 1% (Ley 2277/2022), obligaciones sustanciales vs formales, y Régimen Simple de Tributación (RST - Art. 903 E.T.).
7. **Módulo 6: MIPG, Reserva Legal Tributaria y Transparencia:** Decreto 1499 de 2017 (7 dimensiones del MIPG y Tres Líneas de Defensa), Reserva Legal Tributaria (Art. 583 y 584 E.T. y causales de destitución), Ley de Transparencia (Ley 1712 de 2014) y gestión documental (Ley 594 de 2000).
8. **Módulo 7: Competencias Comportamentales e Integridad (DIAN):** Decreto 815 de 2018 y los 5 valores del Código de Integridad de la DIAN (Honestidad, Respeto, Compromiso, Diligencia, Justicia), evaluados en la prueba escrita del 10%.

## Examen Final Simulado
- **Simulacro final** en **bloques identificados por área**:
  - **150 Funcionales** (M1–M6) — foco principal (70% eliminatorio, mínimo 70.00).
  - **25 Comportamentales** (Res. 065/2024, competencias del puesto).
  - **25 Integridad** (Código de Integridad DIAN).
- **Banco total: 215 preguntas** (150 funcionales + 65 comportamentales/integridad en M7) para práctica adicional, con énfasis en competencias comportamentales del **Gestor I (OPEC 198476, CC-AU-3008 — Asistencia al Usuario)**.
- Acceso desde el tablero, menú lateral o `Examen Final por Bloques`.

## Estructura Técnica del Proyecto

```
Simulacros/
├── index.html                 # Esqueleto HTML accesible y semántico
├── css/
│   └── styles.css             # Tokens de diseño editorial pastel, componentes y responsive
└── js/
    ├── app.js                 # Composition root: ensambla módulos, vistas y navegación
    ├── config.js              # BLOCK_SIZE (10), PASS_PERCENTAGE (70), QUESTIONS_PER_MODULE (100)
    ├── data/
    │   ├── question-bank.js   # 200 casos (150 funcionales + 25 comportamentales + 25 integridad)
    │   └── theory-data.js     # Compendio teórico + casos reales/tips por módulo
    ├── core/
    │   ├── dom.js             # Helper funcional h() para manipulación segura del DOM
    │   ├── QuestionRepository.js  # Acceso a preguntas, módulos y armado de Examen Final
    │   ├── QuizSession.js     # Motor del simulacro (respuestas, retroalimentación, score)
    │   ├── ViewManager.js     # Enrutador y gestor de pantallas SPA
    │   └── SidebarView.js     # Menú lateral dinámico y colapsable
    └── views/
        ├── HomeView.js        # Tablero + acceso a Examen Final
        ├── BlockSelectView.js # Bloques por módulo y bloques identificados del Examen Final
        ├── QuizView.js        # Interfaz de examen (módulo o examen final)
        ├── ResultView.js      # Resumen y retroalimentación
        ├── TheoryView.js      # Visor de teoría
        └── theory-renderer.js # Renderizador de teoría
```
