(function (PM) {
    'use strict';

    /**
     * COMPENDIO TEÓRICO OFICIAL Y GUÍA DE ORIENTACIÓN — PROCESO DE SELECCIÓN DIAN 2676
     * Operador Oficial: Fundación Universitaria del Área Andina (FUAA) | Contrato 489 de 2026
     * Empleo: Gestor I (Código 301, Grado 01) | OPEC: 198476
     * Ficha CC-AU-3008: Cercanía con el Ciudadano · Subproceso Asistencia al Usuario
     *
     * Totalmente ajustado a la Guía Oficial de Orientación al Aspirante (16/10/2026):
     * - Fecha de Examen: Domingo 8 de noviembre de 2026 (8:00 a.m. a 1:00 p.m. · 5 horas)
     * - Ponderación Gestor I (Ingreso sin experiencia): Funcionales 70% (Eliminatorio, mín. 70.00),
     *   Comportamentales 20% (Clasificatorio) e Integridad 10% (Clasificatorio). Total: 100%.
     * - Formato de Ítems Funcionales Areandina: Caso + Enunciado + TRES (3) opciones (A, B, C).
     * - Corte normativo oficial: Normas vigentes expedidas hasta el 19 de junio de 2026.
     */
    const THEORY = {
        title: 'Guía Oficial de Preparación: Proceso DIAN 2676 — Gestor I (OPEC 198476)',
        meta: [
            'Convocatoria Oficial DIAN 2676 (CNSC - Areandina FUAA) | Nivel Profesional',
            'Empleo: Gestor I (Código 301, Grado 01) · Ficha CC-AU-3008 (Asistencia al Usuario)',
            'Fecha Oficial de Aplicación: Domingo 8 de Noviembre de 2026 (Jornada única: 5 horas)',
            'Ponderación: Funcionales 70% (Mínimo 70.00 eliminatorio) + Comportamentales 20% + Integridad 10%',
        ],
        sections: [
            /* -------------------------------------------------------------------------
               SECCIÓN 0: GUÍA OFICIAL DE ORIENTACIÓN AL ASPIRANTE (DIAN 2676 / AREANDINA)
               ------------------------------------------------------------------------- */
            {
                id: 'introduccion',
                label: 'Guía Oficial DIAN 2676',
                title: 'Guía Oficial de Orientación al Aspirante — DIAN 2676 (FUAA Areandina)',
                topics: [
                    {
                        heading: '1. Reglas Clave y Ponderación Oficial para Gestor I (Modalidad Ingreso)',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: Para empleos del nivel profesional que no requieren experiencia previa (como Gestor I en modalidad ingreso), NO hay prueba de Valoración de Antecedentes. El 100% del concurso se decide en la jornada escrita del 8 de noviembre de 2026.',
                            },
                            {
                                type: 'table',
                                headers: ['Prueba Escrita', 'Carácter', 'Peso Porcentual', 'Puntaje Mínimo Aprobatorio', 'Formato del Ítem'],
                                rows: [
                                    ['Competencias Funcionales', 'ELIMINATORIO', '70%', '70.00 sobre 100 puntos', 'Juicio Situacional (Caso + Enunciado + 3 Opciones A, B, C)'],
                                    ['Competencias Comportamentales', 'CLASIFICATORIO', '20%', 'No aplica (suma al ponderado)', 'Autoinforme escala Likert (4 niveles)'],
                                    ['Prueba de Integridad (Código DIAN)', 'CLASIFICATORIO', '10%', 'No aplica (suma al ponderado)', 'Autoinforme valores éticos escala Likert (4 niveles)'],
                                ],
                            },
                            {
                                type: 'callout',
                                variant: 'warning',
                                title: '¡Alerta Eliminatoria de 70.00 Puntos!',
                                text: 'Los aspirantes que no alcancen el puntaje mínimo aprobatorio de 70.00 en la prueba de Competencias Funcionales no continuarán en el proceso de selección y la CNSC no publicará sus resultados en Comportamentales ni Integridad.',
                            },
                        ],
                    },
                    {
                        heading: '2. Formato de Pregunta Oficial de Areandina: Caso + Enunciado + 3 Opciones (A, B, C)',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: A diferencia de otros concursos con 4 opciones, la Universidad Areandina en el Proceso DIAN 2676 estructura las preguntas funcionales con exactamente TRES (3) opciones de respuesta (A, B y C). Solo una es la correcta y da solución efectiva al planteamiento.',
                            },
                            {
                                type: 'list',
                                items: [
                                    { term: 'El Caso', text: 'Describe una situación, evento o suceso hipotético contextualizado en el entorno laboral de la DIAN.' },
                                    { term: 'El Enunciado', text: 'Formula la tarea concreta que debe resolver el aspirante frente al caso presentado.' },
                                    { term: 'Tres Opciones (A, B, C)', text: 'Una opción es la solución ajustada a la ley y al procedimiento institucional; las otras dos son distractores (uno de acción pasiva/incorrecta y otro con error de procedimiento o alcance).' },
                                ],
                            },
                            {
                                type: 'callout',
                                variant: 'tip',
                                title: '🎯 Ejemplo Oficial de la Guía (Nivel Profesional - MIPG Talento Humano)',
                                text: 'Caso: Al iniciar la planeación se requiere conocer el estado actual de la gestión del área antes de definir acciones. Enunciado: Para diagnosticar con base en la información descrita, le corresponde: Opciones: A) Aplicar la Matriz de Gestión Estratégica del Talento Humano y calificar variables (CORRECTA - Etapa 2 de diagnóstico); B) Consultar el Plan de Acción (INCORRECTA - Corresponde a diseño); C) Revisar el Plan Estratégico (INCORRECTA - Corresponde a seguimiento).',
                            },
                        ],
                    },
                    {
                        heading: '3. Logística Oficial para el Día de la Prueba (8 de Noviembre de 2026)',
                        blocks: [
                            {
                                type: 'table',
                                headers: ['Aspecto Logístico', 'Instrucción Oficial Areandina / CNSC', 'Consecuencia en Caso de Incumplimiento'],
                                rows: [
                                    ['Horario y Duración', 'Ingreso desde 7:15 a.m. Inicio 8:00 a.m. a 1:00 p.m. (5 horas continuas).', 'Cierre de puertas a las 8:30 a.m. Quien llegue después queda como ausente y excluido.'],
                                    ['Permanencia Mínima', 'El aspirante debe permanecer dentro del salón mínimo una (1) hora completa.', 'No se permite retiro antes de la hora ni antes de la toma dactilar.'],
                                    ['Documentos Válidos', 'Cédula física con hologramas, Cédula Digital (física o en app oficial Registraduría), Pasaporte vigente o Contraseña (vigencia máx 6 meses).', 'Ningún otro documento es válido (no se admite licencia de conducción, carnet de EPS ni fotocopias).'],
                                    ['Materiales Permitidos', 'ÚNICAMENTE lápiz de mina negra No. 2, sacapuntas y borrador de nata.', 'No se permite ningún otro elemento de papelería.'],
                                    ['Celulares y Aparatos', 'PROHIBIDO su uso. Deben apagarse y guardarse en la bolsa de seguridad sellada bajo el pupitre.', 'Cualquier manipulación o sonido del celular acarrea exclusión inmediata del concurso.'],
                                    ['Hoja de Respuestas', 'Rellenar completamente el círculo con lápiz No. 2.', 'Marcas en X, chulitos o círculos a medias NO son leídos por la lectora óptica y se anulan.'],
                                ],
                            },
                        ],
                    },
                    {
                        heading: '4. La Prueba de Integridad (10%) y los 5 Valores Oficiales de la DIAN',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: La prueba de integridad mide el apego a los principios éticos del servicio público de la DIAN mediante autoinforme Likert (Totalmente en desacuerdo, En desacuerdo, De acuerdo, Totalmente de acuerdo). Posee subescalas de control para detectar respuestas fingidas o exageradamente favorables.',
                            },
                            {
                                type: 'list',
                                items: [
                                    { term: '1. Honestidad', text: 'Actuar siempre con fundamento en la verdad, protegiendo los recursos del Estado, denunciando actos indebidos y custodiando la reserva legal tributaria.' },
                                    { term: '2. Respeto', text: 'Reconocer y valorar la dignidad de todas las personas, prestando atención con empatía, cortesía y sin sesgos de discriminación.' },
                                    { term: '3. Compromiso', text: 'Ser consciente de la trascendencia del rol de la DIAN para el desarrollo de Colombia, trabajando con vocación y orgullo público.' },
                                    { term: '4. Diligencia', text: 'Cumplir los deberes y trámites asignados con celeridad, eficacia, calidad y optimización del tiempo.' },
                                    { term: '5. Justicia', text: 'Actuar con equidad, imparcialidad y neutralidad, garantizando el debido proceso a cada contribuyente.' },
                                ],
                            },
                        ],
                    },
,
                    {
                        heading: '5. Estrategia real para el Examen Final (200 preguntas, bloques identificados)',
                        blocks: [
                            { type: 'p', text: 'El simulacro final se divide en bloques identificados por área: 150 Funcionales + 25 Comportamentales + 25 de Integridad (200). Las funcionales son eliminatorias (70%, mínimo 70.00), por eso prioriza RUT, CPACA/peticiones, atención TACI y obligaciones/facturación.' },
                            { type: 'list', items: [
                                { term: 'Método de caso real', text: 'Lee Caso y Enunciado. Descarta opciones que violen norma, omitan verificación, prometan beneficios automáticos o filtren datos reservados.' },
                                { term: 'Prioridad funcional', text: 'Refuerza M3 RUT, M2 CPACA (términos/notificaciones/recursos), M4 TACI y M5 obligaciones/facturación/NAF.' },
                                { term: 'Uso de bloques identificados', text: 'Practica funcionales primero; luego comportamentales e integridad. Convierte cada error en una regla aplicable.' },
                            ]},
                        ],
                    },
                    {
                        heading: '6. Perfil del puesto: Gestor I (OPEC 198476, CC-AU-3008) — Asistencia al Usuario',
                        blocks: [
                            { type: 'p', text: 'Referencia DIAN 2676 (FUAA Areandina): Gestor I, Código 301, Grado 01, Nivel Profesional; ficha CC-AU-3008 (Cercanía con el Ciudadano / Asistencia al Usuario). Los casos del examen se ubican en Puntos de Contacto, orientación RUT, PQRSD, canales TACI, validación documental y aplicación de norma/procedimiento.' },
                            { type: 'table', headers: ['Elemento del puesto', 'Aplicación real', 'Enfoque de examen'], rows: [
                                ['Asistencia al Usuario', 'Orientar trámites con enfoque diferencial y lenguaje claro.', 'Verificar soportes/identidad, explicar ruta correcta y dar trazabilidad.'],
                                ['Gestión normativa/procedimental', 'Aplicar C.P., E.T., CPACA/Ley 1755, RUT (D. 1625/2016) y lineamientos DIAN.', 'Sustentar en norma/términos; evitar atajos sin verificación.'],
                                ['Integridad y reserva', 'Proteger datos, rechazar dádivas, evitar conflicto de interés y actuar con valores DIAN.', 'Negar accesos indebidos, no alterar registros, trato imparcial.'],
                                ['Competencias Res. 065/2024', 'Orientación al usuario, comunicación efectiva, solución de problemas, adaptabilidad, trabajo en equipo, ética.', 'Empatía + procedimiento vigente + verificación + solución efectiva.'],
                            ]},
                            { type: 'callout', variant: 'tip', title: 'Lógica de respuesta (Gestor I)', text: '1) Entiende la necesidad, 2) verifica norma/soportes, 3) protege reserva/datos, 4) comunica con claridad, 5) asegura trazabilidad.' },
                        ],
                    }                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 1: FUNCIÓN PÚBLICA, CARRERA DIAN (DL 927/2023) Y ÉTICA
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-1',
                label: 'M.1: Función Pública',
                title: 'Módulo 1: Régimen Constitucional de la Función Pública y Estructura DIAN',
                topics: [
                    {
                        heading: '1.1 Marco Normativo del Proceso de Selección (Decreto Ley 927 de 2023)',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: El Decreto Ley 927 de 2023 modificó y actualizó el sistema específico de carrera de la DIAN (complementando el Decreto Ley 071 de 2020), regulando la provisión de empleos, evaluación de desempeño y causales de retiro bajo principios de mérito y transparencia.',
                            },
                            {
                                type: 'list',
                                items: [
                                    { term: 'Resolución DIAN 067 de 2024 (MERF)', text: 'Adopta el Manual Específico de Requisitos y Funciones de la DIAN, definiendo los perfiles de competencias laborales de cada cargo.' },
                                    { term: 'Corte Normativo Oficial', text: 'La CNSC y Areandina establecieron que las normas evaluadas corresponden a las vigentes y expedidas hasta el 19 de junio de 2026.' },
                                    { term: 'Período de Prueba (6 Meses)', text: 'Los aspirantes seleccionados deben superar seis (6) meses con evaluación satisfactoria o sobresaliente para adquirir derechos de carrera.' },
                                    { term: 'Encargo Preferente', text: 'Las vacantes temporales deben proveerse prioritariamente mediante encargo con el empleado escalafonado en el grado inferior con calificación sobresaliente.' },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '1.2 Principios Constitucionales y Sistema Tributario (Art. 209 y 363 C.P.)',
                        blocks: [
                            {
                                type: 'table',
                                headers: ['Principio', 'Fundamento Constitucional', 'Aplicación en el Cargo de Gestor I'],
                                rows: [
                                    ['Igualdad y Moralidad', 'Art. 209 C.P.', 'Atención imparcial sin privilegios personales ni tramitadores; rechazo absoluto a dádivas.'],
                                    ['Debido Proceso', 'Art. 29 C.P.', 'Garantía de notificación válida, derecho a aportar pruebas y a controvertir decisiones del RUT o liquidaciones.'],
                                    ['Equidad y Progresividad', 'Art. 363 C.P.', 'Cargas fiscales proporcionadas a la capacidad contributiva real del ciudadano; irretroactividad de leyes.'],
                                    ['Derecho de Representación', 'Art. 38 Ley 1952/2019', 'Deber de cumplir órdenes legítimas; ante orden manifiestamente contraria a la ley, se exige por escrito y motivada.'],
                                ],
                            },
                        ],
                    },
,
                    {
                        heading: '1.4 Casos reales en la DIAN para Gestor I (función pública)',
                        blocks: [{ type: 'list', items: [
                            { term: 'Orden superior inconveniente o ilegal', text: 'Si la instrucción es verbal o contraria a norma/requisitos, explicar el fundamento legal y usar el derecho de representación cuando aplique; no ejecutar actos contrarios a la ley.' },
                            { term: 'Conflicto de interés', text: 'Si el trámite involucra familiar, conocido con vínculo relevante o interés personal, declararse impedido y apartarse para proteger imparcialidad y transparencia.' },
                            { term: 'Información y trazabilidad', text: 'Registrar actuaciones, usar canales institucionales y sustentar decisiones en norma/procedimiento; la improvisación en RUT, peticiones o atención genera riesgo disciplinario y para el ciudadano.' },
                            { term: 'Servicio en contingencia', text: 'Ante falla de Muisca u otros sistemas, no emitir certificaciones sin respaldo oficial; informar con claridad, aplicar protocolo de contingencia y orientar alternativas.' },
                        ]}],
                    }                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 2: PROCEDIMIENTO ADMINISTRATIVO (CPACA) Y PETICIONES
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-2',
                label: 'M.2: CPACA y Peticiones',
                title: 'Módulo 2: Procedimiento Administrativo (CPACA), Derecho de Petición y PQRSD',
                topics: [
                    {
                        heading: '2.1 Términos Oficiales del Derecho de Petición (Ley 1755 de 2015)',
                        blocks: [
                            {
                                type: 'table',
                                headers: ['Modalidad de Petición', 'Plazo Legal', 'Consecuencia Jurídica de Vencimiento'],
                                rows: [
                                    ['Peticiones de Copias y Documentos', '10 días hábiles', 'Aceptación tácita: entrega obligatoria gratuita dentro de los 3 días siguientes.'],
                                    ['Peticiones de Interés General / Particular', '15 días hábiles', 'Término general para resolver trámites, quejas y reclamos.'],
                                    ['Consultas Técnicas y Doctrinales', '30 días hábiles', 'Interpretación oficial de normas tributarias, aduaneras y cambiarias.'],
                                    ['Peticiones Incompletas (Art. 17 CPACA)', '10 días para requerir', '1 mes para subsanar. Si no subsana: Desistimiento Tácito y archivo mediante resolución.'],
                                ],
                            },
                        ],
                    },
                    {
                        heading: '2.2 Notificación Electrónica y Firmeza de Actos',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    { term: 'Notificación Electrónica (Art. 566-1 E.T.)', text: 'Se envía al correo informado en la casilla 44 del RUT. Los términos para el contribuyente inician al quinto (5) día hábil siguiente a la entrega del correo.' },
                                    { term: 'Corrección de Errores Formales (Art. 45 CPACA)', text: 'Errores puramente mecanográficos o de digitación (ej. un dígito del NIT o nombre) se corrigen en cualquier tiempo sin revocar el fondo.' },
                                    { term: 'Recursos en Vía Administrativa (Art. 76 CPACA)', text: 'Reposición (ante el mismo funcionario) y Apelación (ante el superior). Plazo: 10 días hábiles siguientes a la notificación.' },
                                    { term: 'Peticiones Anónimas', text: 'Deben admitirse y tramitarse formalmente si contienen hechos concretos, precisos y verificables de interés general.' },
                                ],
                            },
                        ],
                    },
,
                    {
                        heading: '2.3 Casos reales CPACA/PQRSD en el concurso',
                        blocks: [{ type: 'list', items: [
                            { term: 'Conteo de términos', text: 'Identificar si es documento/información (10 días), petición/queja/reclamo general (15), consulta (30) o incompleta (requerir en 10, subsanar en 1 mes con riesgo de desistimiento tácito).' },
                            { term: 'Notificación electrónica', text: 'Verificar canal autorizado/buzón y regla de sur-tición (E.T. 566-1). No confundir envío con apertura efectiva del mensaje.' },
                            { term: 'Recurso extemporáneo', text: 'Si se presenta fuera de término, rechazar por extemporaneidad con acto motivado; no resolver de fondo por equidad cuando la ley fija plazo perentorio.' },
                            { term: 'Traslado y competencia', text: 'Si no es competente, remitir al competente en término y comunicar al peticionario; evitar que el ciudadano reinicie el trámite injustificadamente.' },
                        ]}],
                    }                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 3: REGISTRO ÚNICO TRIBUTARIO (RUT) — NÚCLEO MISIONAL
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-3',
                label: 'M.3: Administración del RUT',
                title: 'Módulo 3: Registro Único Tributario (RUT) — Ficha CC-AU-3008',
                topics: [
                    {
                        heading: '3.1 Procedimientos Registrales y Casillas Clave del RUT (DURT 1625/2016)',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: El RUT identifica, ubica y clasifica a los sujetos de obligaciones tributarias, aduaneras y cambiarias. Toda modificación debe registrarse dentro del mes siguiente (Art. 658-3 E.T.).',
                            },
                            {
                                type: 'table',
                                headers: ['Campo / Casilla', 'Función Técnica', 'Regla de Validación para el Gestor I'],
                                rows: [
                                    ['Casilla 4 y 5', 'NIT y Dígito de Verificación (DV)', 'Generación automática mediante algoritmo módulo 11.'],
                                    ['Casilla 44', 'Correo Electrónico Notificación', 'Dirección oficial vinculante para notificaciones electrónicas de la DIAN.'],
                                    ['Casillas 46 a 50', 'Actividades Económicas (CIIU)', 'Código numérico de 4 dígitos (CIIU Rev. 4 A.C. / Res. DIAN 000139 de 2020) y fecha de inicio.'],
                                    ['Casilla 53', 'Responsabilidades y Atributos', '05 Renta Ordinaria, 14 Aduanero, 47 Régimen Simple (RST), 48 Responsable IVA, 49 No responsable IVA, 52 Facturador Electrónico.'],
                                ],
                            },
                        ],
                    },
                    {
                        heading: '3.2 Casos Especiales de Validación Documental',
                        blocks: [
                            {
                                type: 'table',
                                headers: ['Caso Especial', 'Documentación Obligatoria', 'Criterio de Validación'],
                                rows: [
                                    ['Menores de Edad', 'Tarjeta de identidad / Registro civil + Cédula del padre, madre o tutor legal.', 'Se valida representación en casilla 98 del formulario.'],
                                    ['Sucesiones Ilíquidas', 'Registro civil de defunción del causante + Auto notarial/judicial de apertura o acreditación de herederos.', 'Identificación con razón social del causante + sigla "Sucesión Ilíquida".'],
                                    ['Consorcios / Uniones Temp.', 'Documento privado de constitución con designación de representante legal y duración.', 'Asignación de NIT con vigencia ligada al contrato.'],
                                    ['Apoderados', 'Poder especial con nota de presentación personal (o poder general por escritura pública vigente).', 'Verificar facultades expresas para actuar ante la DIAN.'],
                                ],
                            },
                            {
                                type: 'callout',
                                variant: 'warning',
                                title: '🎯 Clave de Retiro de IVA (Código 48 a 49)',
                                text: 'Para retirar la responsabilidad del IVA, el contribuyente debe demostrar haber cumplido en los TRES (3) años fiscales anteriores consecutivos todos los topes del parágrafo 3 del Art. 437 E.T. (ingresos < 3.500 UVT anuales). Si en uno de los 3 años superó el tope, la solicitud se RECHAZA.',
                            },
                        ],
                    },
,
                    {
                        heading: '3.3 Casos reales de ventanilla RUT y errores frecuentes (Gestor I)',
                        blocks: [{ type: 'list', items: [
                            { term: 'Actualización sin soporte idóneo', text: 'Validar identidad y soportes antes de registrar cambios; orientar efectos en notificación.' },
                            { term: 'Tercero sin legitimación', text: 'Exigir poder/autorización válida; proteger datos personales y reserva.' },
                            { term: 'Retiro de IVA', text: 'Verificar topes legales en los períodos exigidos; no aprobar con información informal.' },
                            { term: 'Sospecha de suplantación', text: 'Verificación reforzada, no modificar por versión verbal, escalar y dejar trazabilidad.' },
                            { term: 'Inconsistencia CIIU/soporte', text: 'Sanear diferencias antes de registrar.' },
                        ]}],
                    }                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 4: ATENCIÓN AL CIUDADANO Y CANALES DE SERVICIO (TACI)
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-4',
                label: 'M.4: Canales TACI',
                title: 'Módulo 4: Atención, Servicio al Ciudadano y Canales TACI',
                topics: [
                    {
                        heading: '4.1 Protocolo de Servicio y Enfoque Diferencial (Ley 1757 de 2015)',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    { term: 'Atención Prioritaria sin Cita Previa', text: 'Obligatoria para adultos mayores, mujeres gestantes, personas en situación de discapacidad o con niños en brazos. Nunca se les rechaza por falta de cita virtual.' },
                                    { term: 'Política de Lenguaje Claro', text: 'Comunicarse en palabras sencillas, pedagógicas y comprensibles, evitando tecnicismos oscuros que restrinjan los derechos ciudadanos.' },
                                    { term: 'Kioscos de Autogestión Guiada', text: 'Acompañamiento presencial para capacitar al usuario en el uso autónomo de los servicios web de la DIAN.' },
                                    { term: 'Instrumento de Firma Electrónica (IFE)', text: 'Vigencia de tres (3) años, plena equivalencia funcional con firma manuscrita (Ley 527/1999) y renovación autónoma en línea mediante clave dinámica (OTP).' },
                                ],
                            },
                        ],
                    },
,
                    {
                        heading: '4.2 Casos reales de atención TACI y manejo en Punto de Contacto',
                        blocks: [{ type: 'list', items: [
                            { term: 'Prioridad/enfoque diferencial', text: 'Aplicar atención prioritaria o ajustes razonables según reglas.' },
                            { term: 'Información contradictoria', text: 'Verificar fuente oficial, responder con lenguaje claro y reportar inconsistencia.' },
                            { term: 'Autogestión sin abandono', text: 'Acompañar al usuario en canales digitales; confirmar pasos y soportes.' },
                            { term: 'Conflicto en ventanilla', text: 'Asertividad, desescalamiento, protocolo de seguridad y registro objetivo.' },
                            { term: 'Credenciales', text: 'Nunca pedir claves; usar canales institucionales y verificación prevista.' },
                        ]}],
                    }                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 5: CULTURA DE LA CONTRIBUCIÓN, FACTURA Y OBLIGACIONES
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-5',
                label: 'M.5: Cultura y Deberes',
                title: 'Módulo 5: Fomento de la Cultura de la Contribución y Obligaciones TACI',
                topics: [
                    {
                        heading: '5.1 Facturación Electrónica y Régimen Simple de Tributación',
                        blocks: [
                            {
                                type: 'table',
                                headers: ['Concepto', 'Definición Técnica', 'Consecuencia Fiscal'],
                                rows: [
                                    ['Facturación Electrónica (Art. 616-1)', 'Factura de venta con validación previa informática en tiempo real por la DIAN.', 'Requisito indispensable para costos y deducciones.'],
                                    ['Factura de Contingencia', 'Factura física de talonario autorizada en eventos de fuerza mayor o caída de sistema.', 'Debe transmitirse a la DIAN dentro de las 48 horas siguientes a la superación de la falla.'],
                                    ['Sanción de Clausura (Art. 657)', 'Cierre del establecimiento de comercio por tres (3) días con sellos oficiales.', 'Por no expedir factura o expedirla sin los requisitos de ley.'],
                                    ['Deducción del 1% (Ley 2277)', 'Deducción en renta de compras pagadas con medios electrónicos y soportadas con factura validada.', 'Incentivo ciudadano al cumplimiento voluntario.'],
                                    ['Régimen Simple (RST - Art. 903)', 'Impuesto unificado que integra Renta, Impoconsumo e ICA municipal para ingresos < 100.000 UVT.', 'Exclusión de retención en la fuente a título de renta.'],
                                ],
                            },
                        ],
                    },
,
                    {
                        heading: '5.2 Casos reales de cultura contributiva y obligaciones',
                        blocks: [{ type: 'list', items: [
                            { term: 'Formal vs sustancial', text: 'Declarar/facturar/informar/soportes vs pagar el tributo debido.' },
                            { term: 'Factura electrónica/contingencia', text: 'Orientar mecanismos de contingencia y regularización según norma; no comprobantes informales.' },
                            { term: 'NAF', text: 'Orientación pedagógica general; no sustituye responsabilidad del obligado.' },
                            { term: 'Costos/deducciones', text: 'No hay procedencia automática por tener recibo; verificar requisitos legales.' },
                            { term: 'Dificultad de pago', text: 'No prometer condonaciones automáticas; orientar canales oficiales y alternativas legales.' },
                        ]}],
                    }                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 6: MIPG, RESERVA LEGAL TRIBUTARIA Y TRANSPARENCIA
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-6',
                label: 'M.6: MIPG y Reserva',
                title: 'Módulo 6: MIPG, Reserva Tributaria y Transparencia',
                topics: [
                    {
                        heading: '6.1 Reserva Legal Tributaria (Art. 583 y 584 del Estatuto Tributario)',
                        blocks: [
                            {
                                type: 'table',
                                headers: ['Solicitante', '¿Procede Entrega?', 'Fundamento'],
                                rows: [
                                    ['Autoridad Judicial Penal con orden', 'SÍ', 'Art. 583 E.T. Excepción judicial en proceso formal.'],
                                    ['Órganos de Control (Contraloría / Procuraduría)', 'SÍ', 'Art. 585 y 586 E.T. Control fiscal y disciplinario.'],
                                    ['Juez de Familia en proceso de alimentos', 'SÍ', 'Excepción legal expresa para fijación de alimentos.'],
                                    ['Cónyuge, parientes, socios o periodistas', 'NO (NEGATIVA ROTUNDA)', 'Art. 583 E.T. Reserva absoluta. Violarla acarrea DESTITUCIÓN del cargo.'],
                                ],
                            },
                        ],
                    },
,
                    {
                        heading: '6.2 Casos reales de MIPG, reserva, transparencia y datos',
                        blocks: [{ type: 'list', items: [
                            { term: 'Reserva tributaria', text: 'Negar consultas no autorizadas sobre terceros; usar mecanismos formales.' },
                            { term: 'Transparencia vs reserva', text: 'Distinguir información pública agregada de datos protegidos.' },
                            { term: 'Primera línea MIPG', text: 'Verificación de soportes, registro correcto, protección de información y reporte de riesgos.' },
                            { term: 'Gestión documental', text: 'Orden, foliación, trazabilidad y tablas de retención.' },
                            { term: 'Canales seguros', text: 'No compartir datos sensibles por canales no institucionales; minimización y finalidad.' },
                        ]}],
                    }                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 7: DICCIONARIO OFICIAL DE COMPETENCIAS COMPORTAMENTALES (RES. 065/2024)
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-7',
                label: 'M.7: Competencias Res. 065',
                title: 'Módulo 7: Diccionario Oficial de Competencias Comportamentales (Resolución DIAN 065 de 2024)',
                topics: [
                    {
                        heading: '7.1 Marco Normativo y Tipos de Competencias (Decreto Ley 927/2023 y Res. 065/2024)',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: La Resolución DIAN 065 del 11 de abril de 2024 derogó las normas anteriores y adoptó el Diccionario de Competencias Comportamentales oficial en el marco del Decreto Ley 927 de 2023. Se evalúan mediante autoinforme Likert (20%) y prueba de integridad (10%) en el Proceso DIAN 2676.',
                            },
                            {
                                type: 'table',
                                headers: ['Tipo de Competencia', 'Ámbito de Aplicación', 'Niveles de Desarrollo'],
                                rows: [
                                    ['Competencias Básicas (Cap. II)', 'Aplican a TODOS los empleos de la DIAN sin excepción.', 'Nivel 1 de desarrollo (mínimo exigible).'],
                                    ['Competencias Específicas (Cap. IV)', 'Exigibles según el proceso/subproceso en la ficha del MERF (Res. 067/2024).', 'Niveles 1 a 4 (Gestor I requiere niveles 2 y 3).'],
                                    ['Competencias Gerenciales (Cap. III)', 'Exclusivas para gerentes públicos y cargos con personal a cargo (jefaturas).', 'Niveles 1 a 4.'],
                                    ['Autogestión del Trabajo (Cap. V)', 'Modalidad de Teletrabajo o esquemas híbridos en la DIAN.', 'Nivel 3 de desarrollo obligatorio.'],
                                ],
                            },
                        ],
                    },
                    {
                        heading: '7.2 Las 10 Competencias Comportamentales Específicas y Conductas Observables (Res. 065/2024)',
                        blocks: [
                            {
                                type: 'table',
                                headers: ['Competencia Oficial', 'Definición Institucional DIAN', 'Conductas Observables Clave (Nivel 2 y 3)'],
                                rows: [
                                    [
                                        '1. Adaptabilidad',
                                        'Capacidad para comprender diferentes perspectivas y responder oportunamente modificando conducta y formas de trabajo alineadas con objetivos institucionales.',
                                        'Evalúa distintas posturas, asume actitud positiva y de autocontrol frente al cambio apoyado en el Código de Integridad, y aplica nuevas herramientas tecnológicas (Muisca/biometría).',
                                    ],
                                    [
                                        '2. Comportamiento Ético',
                                        'Capacidad para actuar conforme a prácticas laborales correctas, demostrando congruencia entre el discurso y la actuación, enmarcado en el Código de Integridad.',
                                        'Maneja con imparcialidad los temas a su cargo, es reservado con información confidencial de los ciudadanos, coherente entre el decir y hacer, y asume las consecuencias de sus actos corrigiendo errores.',
                                    ],
                                    [
                                        '3. Compromiso con la Organización',
                                        'Alinear su comportamiento con las necesidades, metas y prioridades de la entidad en concordancia con el Código de Integridad.',
                                        'Supera las responsabilidades fijadas para su cargo, demuestra respeto por la institución en momentos difíciles, mantiene alta disciplina y promueve el trabajo mancomunado.',
                                    ],
                                    [
                                        '4. Comunicación Efectiva',
                                        'Escuchar, entender y transmitir información clara y precisa (escrito, verbal y gestual), construyendo redes de contacto efectivas con ciudadanos y funcionarios.',
                                        'Mantiene diálogo respetuoso, comunica acuerdos y desacuerdos con transparencia y asertividad, adapta el mensaje al tipo de ciudadano y minimiza barreras de comunicación.',
                                    ],
                                    [
                                        '5. Iniciativa',
                                        'Actuar proactiva y autónomamente pensando en acciones futuras con el propósito de crear oportunidades o soluciones a problemas.',
                                        'Actúa con rapidez y efectividad ante nuevos requerimientos, implementa autónomamente ideas innovadoras y se anticipa utilizando tecnologías y recursos disponibles.',
                                    ],
                                    [
                                        '6. Innovación',
                                        'Idear e implementar soluciones nuevas y diferentes a situaciones del puesto de trabajo, la organización y los usuarios, agregando valor.',
                                        'Aprovecha y mejora experiencias exitosas en la solución de problemas, revisa permanentemente procedimientos para optimizar resultados y busca alternativas creativas.',
                                    ],
                                    [
                                        '7. Orientación al Logro',
                                        'Orientar el trabajo propio para el cumplimiento de objetivos organizacionales bajo estándares de calidad establecidos.',
                                        'Asume con responsabilidad metas individuales y de equipo, prevé planes de contingencia para asegurar resultados y gestiona la presión ante dificultades.',
                                    ],
                                    [
                                        '8. Orientación al Usuario y al Ciudadano',
                                        'Entender y satisfacer las necesidades y expectativas de usuarios y ciudadanos según políticas públicas y estándares de calidad.',
                                        'Escucha activamente, entrega soluciones oportunas, ofrece información veraz con comunicación empática y demuestra autocontrol emocional en situaciones difíciles con ciudadanos.',
                                    ],
                                    [
                                        '9. Solución de Problemas',
                                        'Identificar y analizar situaciones a resolver, generando opciones fundamentadas en hechos y datos para implementar la más adecuada.',
                                        'Genera múltiples opciones basadas en sistemas de información, ejecuta la solución controlando efectos con calidad y mantiene autocontrol emocional ante situaciones críticas.',
                                    ],
                                    [
                                        '10. Trabajo en Equipo',
                                        'Trabajar con otros de forma coordinada, armónica y sinérgica, potenciando los aportes de cada integrante.',
                                        'Coopera para ayudar a otros miembros, valora la diversidad de opinión, mantiene actitud receptiva ante decisiones colectivas y actúa con disposición conciliadora.',
                                    ],
                                ],
                            },
                        ],
                    },
                    {
                        heading: '7.3 Competencia de Teletrabajo: Autogestión del Trabajo (Capítulo V)',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: Para perfiles teletrabajables, la Resolución 065 de 2024 exige el Nivel 3 de desarrollo en "Autogestión del Trabajo": administrar el trabajo con autonomía y motivación, apoyado en TIC, preservando la confidencialidad y seguridad de la información, y comunicándose con inmediatez y eficacia.',
                            },
                        ],
                    },
                    {
                        heading: '7.4 Cómo Ganar las Pruebas Comportamentales y Evitar las Subescalas de Control',
                        blocks: [
                            {
                                type: 'callout',
                                variant: 'tip',
                                title: '🎯 El Secreto de las Subescalas de Control en Areandina',
                                text: 'La prueba de Areandina incluye subescalas de deseabilidad social. Si una afirmación dice: "Nunca he sentido cansancio en mi trabajo" o "Jamás he cometido un error", marcar "Totalmente de acuerdo" te penaliza por fingimiento de perfección. La clave es ser genuino pero coherente con los niveles 3 y 4 de las conductas observables de la Resolución 065 de 2024.',
                            },
                        ],

                    },
                    {
                        heading: '7.5 Casos reales para Comportamentales e Integridad (simulacro y preparación)',
                        blocks: [{ type: 'list', items: [
                            { term: 'Comportamental', text: 'Busca opciones que escuchen, verifiquen comprensión, coordinen, se adapten y den solución efectiva dentro del procedimiento.' },
                            { term: 'Integridad', text: 'Rechaza dádivas, omisión de controles, filtración de datos, favores a conocidos, alteración de registros o accesos no autorizados.' },
                            { term: 'Dilema típico', text: 'La respuesta correcta suele ser: trato respetuoso + negativa a la irregularidad + orientación por el camino legal/procedimental.' },
                            { term: 'Uso del Examen Final', text: 'Practica bloques identificados (150 funcionales, 25 comportamentales, 25 integridad). Convierte cada error en regla aplicable.' },
                        ]}],
                    },
                    {
                        heading: '7.6 Competencias Res. 065/2024 más relevantes para Gestor I (Asistencia al Usuario)',
                        blocks: [
                            { type: 'p', text: 'Con base en el Diccionario de Competencias Comportamentales (Resolución DIAN 065 de 2024), para el Gestor I en asistencia al ciudadano son críticas estas competencias, aplicadas con el Código de Integridad DIAN.' },
                            { type: 'list', items: [
                                { term: 'Orientación al Usuario y al Ciudadano', text: 'Escuchar activamente, entender necesidades y dar soluciones oportunas con respeto y empatía. Elige opciones que atienden la necesidad real sin omitir requisitos legales.' },
                                { term: 'Comunicación Efectiva', text: 'Información clara y precisa, verificación de comprensión y lenguaje claro con ruta concreta.' },
                                { term: 'Solución de Problemas', text: 'Analizar el caso, verificar norma vigente y aplicar la solución adecuada sin improvisar.' },
                                { term: 'Adaptabilidad', text: 'Responder a cambios, contingencias y herramientas nuevas manteniendo calidad del servicio.' },
                                { term: 'Trabajo en Equipo', text: 'Coordinar, compartir criterios y articular dependencias sin abandonar al ciudadano.' },
                                { term: 'Comportamiento Ético / Integridad', text: 'Honestidad, respeto, compromiso, diligencia y justicia; protege reserva y recursos. Rechaza dádivas, favores, accesos indebidos y alteración de información.' },
                            ]},
                        ],
                    },
                ],
            },
        ],
    };

    PM.THEORY = THEORY;
})((window.PrepMaster = window.PrepMaster || {}));
