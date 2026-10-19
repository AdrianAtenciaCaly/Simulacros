# DIAN-PrepMaster LMS — Gestor I (OPEC 198476)

Campus de preparación para el concurso de méritos DIAN / CNSC — **Gestor I (Código 301, Grado 01)**.
- **OPEC:** 198476
- **Ficha de Empleo:** CC-AU-3008
- **Proceso:** Cercanía con el Ciudadano
- **Subproceso:** Asistencia al Usuario
- **Propósito Principal:** Ejecutar acciones que faciliten la administración del Registro Único Tributario (RUT) y el cumplimiento voluntario de las obligaciones tributarias, aduaneras y cambiarias (TACI).

## Cómo ejecutarlo

Abre `index.html` con doble clic en tu navegador. No necesita servidor ni instalar nada (funciona 100% offline).

> Los archivos JS son scripts clásicos (no `type="module"`) para que funcionen directamente con `file://`.
> Cada archivo se registra en el namespace `window.PrepMaster`, y el **orden de los `<script>` en `index.html` importa** (cada archivo depende de los anteriores).

## Contenido de Preparación (7 Módulos + Guía Estratégica)

1. **Guía Estratégica del Examen:** Metodología oficial de Juicio Situacional de la CNSC, estructura de pruebas funcionales (eliminatorias) y comportamentales, técnicas de descarte de distractores.
2. **Módulo 1: Régimen Constitucional y Función Pública:** Principios constitucionales (Art. 1, 2, 6, 29, 209, 363 C.P.), estructura orgánica de la DIAN (Decreto 1742 de 2020), carrera específica de la DIAN (Decreto Ley 071 de 2020) y régimen disciplinario (Ley 1952 de 2019 / Ley 2094 de 2021).
3. **Módulo 2: Procedimiento Administrativo y CPACA:** Ley 1437 de 2011 y Ley 2080 de 2021, régimen integral del derecho de petición (Ley 1755 de 2015), términos (10, 15, 30 días), desistimiento tácito, actos administrativos, recursos y notificaciones electrónicas (Art. 566-1 E.T.).
4. **Módulo 3: Administración del Registro Único Tributario (RUT):** Art. 555-2 E.T. y DURT 1625 de 2016. Inscripción presencial y virtual con biometría, actualización directa vs de oficio, actualizaciones sujetas a verificación previa (retiro de IVA e Impoconsumo), suspensión y cancelación del RUT, casillas críticas de la Hoja 1 y códigos CIIU (Res. 000139/2020).
5. **Módulo 4: Atención, Servicio al Ciudadano y Canales TACI:** Canales presenciales (Puntos de Contacto), virtuales (portal transaccional, Muisca, citas virtuales), telefónicos y móviles. Protocolos de servicio con enfoque diferencial (Ley 1757 de 2015), política de Lenguaje Claro e Instrumento de Firma Electrónica (IFE / e-Firma).
6. **Módulo 5: Cultura de la Contribución y Obligaciones TACI:** Ley 223 de 1995, Núcleos de Apoyo Contable y Fiscal (NAF), gestión persuasiva de cobro, facturación electrónica de venta (Art. 616-1 E.T., RADIAN, deducción del 1% Ley 2277/2022), obligaciones sustanciales y formales, y Régimen Simple de Tributación (RST - Art. 903 E.T.).
7. **Módulo 6: MIPG, Reserva Legal Tributaria y Transparencia:** Decreto 1499 de 2017 (7 dimensiones del MIPG y Tres Líneas de Defensa), reserva legal tributaria (Art. 583 y 584 E.T.), Ley de Transparencia (Ley 1712 de 2014) y gestión documental (Ley 594 de 2000).
8. **Módulo 7: Competencias Comportamentales del Gestor I:** Decreto 815 de 2018 y diccionario DIAN: orientación al usuario, orientación a resultados, integridad, trabajo en equipo, comunicación asertiva, adaptabilidad al cambio y toma de decisiones.

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
    │   ├── question-bank.js   # 70 casos de juicio situacional proyectados a 700 preguntas
    │   └── theory-data.js     # Compendio teórico maestro con tablas, listas y alertas
    ├── core/
    │   ├── dom.js             # Helper funcional h() para manipulación segura del DOM
    │   ├── QuestionRepository.js  # Acceso desacoplado al banco de preguntas
    │   ├── QuizSession.js     # Motor del simulacro (respuestas, retroalimentación, score)
    │   ├── ViewManager.js     # Enrutador y gestor de pantallas SPA
    │   └── SidebarView.js     # Menú lateral dinámico y colapsable
    └── views/
        ├── HomeView.js        # Tablero del aspirante con tarjetas de módulos
        ├── BlockSelectView.js # Selección de bloques de 10 preguntas
        ├── QuizView.js        # Interfaz de examen con timer, barra de progreso y letras
        ├── ResultView.js      # Resumen de desempeño y retroalimentación pedagógica
        ├── TheoryView.js      # Visor de teoría con pestañas y paginador
        └── theory-renderer.js # Renderizador de bloques de teoría (p, list, callout, table)
```
