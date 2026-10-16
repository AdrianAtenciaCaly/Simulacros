(function (PM) {
    'use strict';

    const { QUESTIONS_PER_MODULE } = PM;

    /**
     * Banco de preguntas (solo datos, sin lógica de UI).
     *
     * Forma de una pregunta:
     *   { text, options: string[], correct: number, explanation }
     *
     * Cada módulo define una plantilla y una función `build(n)` que genera la
     * pregunta número n. Cuando tengas preguntas reales y distintas, reemplaza
     * `build` por un arreglo literal `questions: [...]` y el resto de la app
     * no necesita cambios.
     */
    const MODULE_DEFINITIONS = [
        {
            id: 'm1',
            title: 'Módulo 1: Función Pública y Constitución',
            navLabel: '📖 M.1: Función Pública',
            homeLabel: 'Módulo 1: Función Pública',
            theoryId: 'modulo-1',
            build: (n) => ({
                text: `[M1 - Caso ${n}] Como Gestor I de la DIAN, un superior jerárquico le ordena verbalmente omitir los filtros de seguridad del Directorio Activo para dar acceso a un contratista allegado. Conforme a los artículos 6 y 209 de la C.P., ¿cómo debe proceder?`,
                options: [
                    'Acatar la orden por obediencia debida y celeridad.',
                    'Rechazar la orden por violar el principio de legalidad y la moralidad pública, reportando la anomalía.',
                    'Ejecutar la modificación sin dejar bitácoras para evitar conflictos.',
                    'Consultar con el contratista si asume el riesgo técnico.',
                ],
                correct: 1,
                explanation: 'El principio de legalidad prohíbe acatar órdenes contrarias a la Constitución y la ley. La seguridad institucional prima sobre instrucciones verbales informales.',
            }),
        },
        {
            id: 'm2',
            title: 'Módulo 2: Procedimiento Administrativo (CPACA)',
            navLabel: '⚖️ M.2: Ley 1437 CPACA',
            homeLabel: 'Módulo 2: Ley 1437 CPACA',
            theoryId: 'modulo-2',
            build: (n) => ({
                text: `[M2 - Caso ${n}] Conforme al CPACA (Ley 1437 / Ley 1755), si la DIAN recibe una petición de interés particular incompleta, ¿cuál es el plazo máximo para requerir al peticionario y qué efecto produce en el trámite?`,
                options: [
                    'Requerir dentro de los 15 días hábiles sin alterar los términos.',
                    'Requerir por una sola vez dentro de los 10 días hábiles siguientes, interrumpiendo los términos legales de respuesta.',
                    'Archivar la solicitud de inmediato al tercer día hábil.',
                    'Esperar 30 días calendario para emitir un rechazo automático.',
                ],
                correct: 1,
                explanation: 'El artículo 17 del CPACA estipula que el requerimiento por incompleta debe hacerse en un plazo máximo de 10 días hábiles, interrumpiendo formalmente el plazo de respuesta.',
            }),
        },
        {
            id: 'm3',
            title: 'Módulo 3: Infraestructura Tecnológica (Gestor I)',
            navLabel: '💻 M.3: Infraestructura TI',
            homeLabel: 'Módulo 3: Infraestructura TI',
            theoryId: 'modulo-3',
            build: (n) => ({
                text: `[M3 - Caso ${n}] En la gestión de centros de cómputo y continuidad de servicios (Ficha IT-TO-3008), ¿qué indicador define el tiempo máximo tolerable de inactividad de un servicio crítico de recaudación tras un fallo?`,
                options: [
                    'RPO (Recovery Point Objective).',
                    'RTO (Recovery Time Objective).',
                    'SLA de ancho de banda en la red WAN.',
                    'KPI de transacciones concurrentes.',
                ],
                correct: 1,
                explanation: 'El RTO (Recovery Time Objective) establece el límite temporal máximo en que un servicio puede estar interrumpido antes de generar un impacto crítico para la misión de la DIAN.',
            }),
        },
        {
            id: 'm4',
            title: 'Módulo 4: Competencias Comportamentales y Ética',
            navLabel: '🤝 M.4: Comportamentales',
            homeLabel: 'Módulo 4: Comportamentales',
            theoryId: 'modulo-4',
            build: (n) => ({
                text: `[M4 - Caso ${n}] Evaluando la competencia de Comportamiento Ético (Nivel 4) y Trabajo en Equipo (Nivel 3) para el empleo de Gestor I, se presenta un cuello de botella por un incidente masivo de red. ¿Cuál es la conducta más adecuada del profesional?`,
                options: [
                    'Culpar al equipo de soporte de nivel 1 para deslindar responsabilidades personales.',
                    'Liderar la articulación con el equipo multidisciplinario, manteniendo la transparencia, la calma y el rigor técnico en la solución.',
                    'Delegar toda la responsabilidad en los proveedores externos de nube.',
                    'Desconectarse de la red hasta que el sistema se restablezca solo.',
                ],
                correct: 1,
                explanation: 'El comportamiento ético y el trabajo en equipo exigen liderazgo colaborativo, responsabilidad institucional y articulación técnica resolutiva ante crisis.',
            }),
        },
    ];

    /** Materializa los módulos con sus preguntas. */
    function buildQuestionBank(questionsPerModule = QUESTIONS_PER_MODULE) {
        return MODULE_DEFINITIONS.map(({ build, ...meta }) => ({
            ...meta,
            questions: Array.from({ length: questionsPerModule }, (_, i) => build(i + 1)),
        }));
    }

    const QUESTION_BANK = buildQuestionBank();

    PM.buildQuestionBank = buildQuestionBank;
    PM.QUESTION_BANK = QUESTION_BANK;
})((window.PrepMaster = window.PrepMaster || {}));
