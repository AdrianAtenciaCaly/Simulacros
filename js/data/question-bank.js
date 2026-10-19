(function (PM) {
    'use strict';

    const { QUESTIONS_PER_MODULE = 100 } = PM;

    /**
     * BANCO OFICIAL DE PREGUNTAS DE JUICIO SITUACIONAL (CNSC / AREANDINA — DIAN 2676)
     * Convocatoria: Proceso de Selección DIAN 2676 | Operador: FUAA Areandina (Contrato 489/2026)
     * Empleo: Gestor I (Código 301, Grado 01) — OPEC: 198476
     * Ficha CC-AU-3008: Proceso Cercanía con el Ciudadano · Subproceso Asistencia al Usuario
     *
     * Formato Oficial de Ítems Funcionales (Areandina, numeral 4.4 de la Guía Oficial):
     * - Cada ítem consta de un (1) Caso, un (1) Enunciado y TRES (3) OPCIONES DE RESPUESTA (A, B, C).
     * - Solamente una (1) opción es la correcta y ofrece una solución efectiva y ajustada a la ley.
     * - Justificación técnica detallada explicando por qué la opción correcta es acertada y por qué las demás son distractores.
     */
    const MODULE_DEFINITIONS = [
        /* ----------------------------------------------------
           MÓDULO 1: FUNCIÓN PÚBLICA Y ESTRUCTURA DIAN
           ---------------------------------------------------- */
        {
            id: 'm1',
            title: 'Módulo 1: Función Pública y Estructura DIAN',
            navLabel: '🏛️ M.1: Función Pública',
            homeLabel: 'Módulo 1: Función Pública y Estructura DIAN',
            theoryId: 'modulo-1',
            cases: [
                {
                    text: 'Caso: Un contribuyente acude alterado al Punto de Contacto de la DIAN manifestando que se le están vulnerando sus derechos constitucionales porque un funcionario anterior le liquidó una sanción sin permitirle controvertir una inconsistencia detectada en el Muisca.\n\nEnunciado: Frente a la inconformidad del ciudadano y de conformidad con el debido proceso (Art. 29 C.P.) y los principios de la función administrativa (Art. 209 C.P.), al Gestor I le corresponde:',
                    options: [
                        'Informarle al ciudadano que las decisiones informáticas de la DIAN son inapelables y que debe cancelar de inmediato el valor liquidado.',
                        'Revisar el estado del trámite en el sistema Muisca, explicarle con lenguaje claro los hechos que originan la discrepancia y orientarlo sobre los términos legales para presentar descargos o recursos.',
                        'Solicitar el retiro inmediato del ciudadano con el personal de vigilancia por alterar el orden público.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta porque el artículo 29 de la C.P. consagra el debido proceso administrativo, obligando a escuchar al administrado, permitir la contradicción y orientar sobre los recursos procedentes. La opción A desconoce el derecho a la defensa y la C es un distractor de trato autoritario.',
                },
                {
                    text: 'Caso: El Director Seccional solicita verbalmente al Gestor I de Asistencia al Usuario que atienda de manera preferencial y fuera de turno a un empresario allegado, exonerándolo de presentar el certificado de existencia y representación legal exigido para actualizar el RUT de su sociedad.\n\nEnunciado: Conforme al Código General Disciplinario (Ley 1952 de 2019 / Ley 2094 de 2021) y el principio de legalidad (Art. 6 C.P.), el servidor debe:',
                    options: [
                        'Acceder a la petición verbal del superior para evitar desacuerdos y reproches en su evaluación de desempeño.',
                        'Explicar respetuosamente que la omisión de requisitos legales vulnera la igualdad y la ley, requiriendo que si el superior insiste, expida la orden por escrito y motivada mediante el derecho de representación.',
                        'Radicar de inmediato una denuncia penal ante la Fiscalía General de la Nación antes de responder internamente.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 38 de la Ley 1952 de 2019 consagra el derecho de representación: ante órdenes contrarias a la ley o que omitan requisitos formales, el servidor debe representarla por escrito. La opción A quebranta la legalidad y la C es desproporcionada sin trámite previo.',
                },
                {
                    text: 'Caso: En una Dirección Seccional de la DIAN se genera una vacante temporal en el empleo de Gestor II (Grado 02). El área de Talento Humano debe proveerla conforme al Decreto Ley 927 de 2023 y el Decreto Ley 071 de 2020.\n\nEnunciado: Para proveer la vacante temporal con apego al principio de mérito, el mecanismo obligatorio de prelación es:',
                    options: [
                        'Contratar a un profesional externo mediante contrato de prestación de servicios por razones de urgencia.',
                        'Proveer la vacante mediante encargo con el empleado con derechos de carrera del empleo inmediatamente inferior (Gestor I) que cumpla los requisitos, no tenga sanción disciplinaria y cuente con evaluación de desempeño sobresaliente.',
                        'Asignar las funciones al empleado provisional con mayor antigüedad de vinculación en la seccional.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El Decreto Ley 927 de 2023 y el Decreto Ley 071 de 2020 establecen el derecho preferente de encargo para empleados de carrera administrativa del grado inferior con perfil y calificación sobresaliente. Las opciones A y C desconocen el régimen de carrera.',
                },
                {
                    text: 'Caso: Un Gestor I en el Punto de Contacto recibe la solicitud de inscripción en el RUT de una sociedad comercial cuyo representante legal y accionista mayoritario es su hermano.\n\nEnunciado: Conforme al artículo 11 del CPACA y el régimen disciplinario sobre conflicto de intereses, al servidor le corresponde:',
                    options: [
                        'Tramitar la solicitud con la máxima diligencia posible para demostrar la eficiencia de la seccional.',
                        'Declararse formalmente impedido por escrito ante su superior jerárquico inmediato, absteniéndose de tramitar o validar la solicitud de su pariente para garantizar la imparcialidad del Estado.',
                        'Pedirle a un compañero que use su usuario y contraseña para que el trámite quede registrado a su nombre.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 11 numeral 1 del CPACA obliga al servidor a declararse impedido cuando el peticionario tenga parentesco hasta el cuarto grado de consanguinidad. La opción A incurre en falta disciplinaria grave y la C es suplantación de credenciales.',
                },
                {
                    text: 'Caso: Al finalizar una orientación en ventanilla, un usuario ofrece una suma de dinero en efectivo a un Gestor I en agradecimiento por haberle desbloqueado la cuenta en el Muisca.\n\nEnunciado: De conformidad con el Código General Disciplinario y el Código de Integridad de la DIAN, el servidor debe:',
                    options: [
                        'Aceptar el dinero justificando que el servicio ya fue prestado satisfactoriamente y no fue condicionado.',
                        'Rechazar de manera categórica el dinero y cualquier obsequio, recordándole al ciudadano que todos los servicios de la DIAN son gratuitos y que recibir dádivas constituye falta gravísima dolosa.',
                        'Aceptar el dinero pero consignarlo de inmediato a una fundación benéfica.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Ley 1952 de 2019 tipifica como falta gravísima recibir dádivas o dinero en el ejercicio de funciones públicas. Los servicios del Estado son gratuitos. Las opciones A y C son conductas ilícitas que acarrean destitución.',
                },
                {
                    text: 'Caso: El aspirante nombrado como Gestor I en modalidad ingreso toma posesión de su cargo tras superar el proceso de selección de la CNSC.\n\nEnunciado: De conformidad con el Decreto Ley 927 de 2023 y la normatividad de carrera de la DIAN, el período de prueba:',
                    options: [
                        'Dura un año lectivo y solo puede ser evaluado por el Ministro de Hacienda.',
                        'Tiene una duración de seis (6) meses; superado con calificación satisfactoria o sobresaliente, el empleado adquiere los derechos de carrera administrativa y es inscrito en el registro público.',
                        'Otorga derechos de carrera definitivos desde el primer día de posesión sin sujeción a evaluación laboral.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El Decreto Ley 927 de 2023 y el DL 071 de 2020 determinan que el período de prueba dura 6 meses y su superación con evaluación aprobatoria es la condición para ingresar formalmente al escalafón de carrera.',
                },
                {
                    text: 'Caso: El Congreso expide una ley tributaria el 15 de diciembre que pretende cobrar un tributo especial sobre los ingresos que las empresas percibieron en el mes de enero del mismo año fiscal ya transcurrido.\n\nEnunciado: De conformidad con el artículo 363 de la Constitución Política de Colombia, esta disposición tributaria:',
                    options: [
                        'Es plenamente válida porque el Congreso tiene facultades absolutas en materia de recaudo fiscal.',
                        'Vulnera el principio constitucional de Irretroactividad, el cual prohíbe que las leyes tributarias se apliquen a hechos o períodos ya consolidados en el tiempo.',
                        'Solo es aplicable a personas jurídicas pero no a personas naturales.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 363 de la C.P. señala taxativamente que las leyes tributarias no se aplicarán con retroactividad, protegiendo la seguridad jurídica y la confianza legítima de los contribuyentes.',
                },
                {
                    text: 'Caso: Un profesional que se desempeñó como Gestor I en la DIAN renunció a su cargo hace 7 meses. Actualmente pretende actuar como apoderado especial de una empresa en un proceso de fiscalización que él mismo instruyó cuando era funcionario.\n\nEnunciado: Conforme al régimen de incompatibilidades de los exservidores públicos (Ley 1474 de 2011 y Ley 1952 de 2019):',
                    options: [
                        'Puede actuar libremente porque el vínculo laboral con la DIAN ya quedó extinguido.',
                        'Está incurso en una incompatibilidad legal de dos (2) años para gestionar asuntos que conoció en el ejercicio de su empleo, lo que invalida su actuación como apoderado ante la entidad.',
                        'Puede actuar si el Director Seccional le otorga una autorización verbal previa.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El Estatuto Anticorrupción prohíbe a exservidores públicos gestionar directa o indirectamente ante la entidad durante los 2 años posteriores a su retiro respecto de asuntos que conoció en su cargo.',
                },
                {
                    text: 'Caso: En el marco del Modelo Integrado de Planeación y Gestión (MIPG), un Gestor I asignado a la ventanilla de atención al ciudadano valida diariamente los documentos aportados para la formalización del RUT.\n\nEnunciado: Conforme al esquema de las Tres Líneas de Defensa, el Gestor I se ubica en:',
                    options: [
                        'La Tercera Línea de Defensa, cuya función es la auditoría interna independiente y posterior.',
                        'La Primera Línea de Defensa (operativa), siendo responsable directo de aplicar los controles preventivos diarios para mitigar riesgos de suplantación o error en el registro tributario.',
                        'La Línea Estratégica, responsable de formular las leyes tributarias nacionales.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. En el MIPG (Decreto 1499 de 2017), la Primera Línea está constituida por los servidores operativos (como el Gestor I) que aplican los controles cotidianos para evitar riesgos institucionales.',
                },
                {
                    text: 'Caso: Un directivo de la DIAN pretende imponer una sanción disciplinaria verbal a un Gestor I sin adelantar investigación previa, acusándolo de cometer un error involuntario de digitación.\n\nEnunciado: De conformidad con el artículo 29 de la Constitución y el Código General Disciplinario, dicha actuación:',
                    options: [
                        'Es válida porque los superiores jerárquicos tienen facultad disciplinaria sumaria inmediata.',
                        'Vulnera el derecho fundamental al debido proceso, ya que toda sanción disciplinaria exige un procedimiento reglado con pliego de cargos, descargos, pruebas y garantía de doble instancia.',
                        'Solo es procedente si el error causó una queja ciudadana escrita.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El debido proceso disciplinario (Art. 29 C.P. y Ley 1952/2019) prohíbe sanciones sumarias de plano sin procedimiento formal que garantice la defensa y contradicción.',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 2: PROCEDIMIENTO ADMINISTRATIVO Y CPACA
           ---------------------------------------------------- */
        {
            id: 'm2',
            title: 'Módulo 2: Procedimiento Administrativo y CPACA',
            navLabel: '⚖️ M.2: CPACA y Peticiones',
            homeLabel: 'Módulo 2: Procedimiento CPACA, Peticiones y PQRSD',
            theoryId: 'modulo-2',
            cases: [
                {
                    text: 'Caso: Un ciudadano radica el 2 de mayo una petición solicitando copia simple de las resoluciones sancionatorias que la DIAN le impuso en los últimos dos años.\n\nEnunciado: Conforme a la Ley 1755 de 2015, el término perentorio legal que tiene la DIAN para resolver esta solicitud de copias es:',
                    options: [
                        'Treinta (30) días calendario por requerir consulta en el archivo central.',
                        'Diez (10) días hábiles siguientes a la recepción; de no responderse en término, la petición se entenderá aceptada y la DIAN deberá entregar las copias gratuitamente dentro de los 3 días siguientes.',
                        'Quince (15) días hábiles sin que el vencimiento genere efectos jurídicos favorables.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 14 numeral 1 de la Ley 1755 de 2015 señala que las peticiones de documentos e información deben resolverse en 10 días hábiles, operando la entrega gratuita obligatoria en caso de silencio.',
                },
                {
                    text: 'Caso: Una comerciante radica una petición solicitando corregir su dirección en el RUT, pero olvida adjuntar la certificación probatoria requerida por el procedimiento para validar el nuevo predio.\n\nEnunciado: Conforme al artículo 17 del CPACA (Ley 1437/2011 sustituido por Ley 1755/2015), al Gestor I le corresponde:',
                    options: [
                        'Rechazar de plano la solicitud y ordenar el archivo definitivo sin informar a la ciudadana.',
                        'Requerir a la peticionaria por escrito y por una sola vez dentro de los diez (10) días siguientes a la radicación, señalándole los documentos faltantes para que los aporte en el plazo de un (1) mes.',
                        'Esperar a que transcurran quince días hábiles y responder aplicando silencio administrativo negativo.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 17 del CPACA establece que ante peticiones incompletas la entidad debe requerir por escrito al solicitante por una sola vez dentro de los 10 días para que subsane en 1 mes.',
                },
                {
                    text: 'Caso: Vencido el mes del requerimiento legal sin que un solicitante haya aportado los documentos faltantes para su trámite de RUT ni solicitado prórroga justificada.\n\nEnunciado: De conformidad con la Ley 1755 de 2015, a la DIAN le corresponde:',
                    options: [
                        'Imponer una sanción pecuniaria coercitiva de 50 salarios mínimos mensuales.',
                        'Declarar el Desistimiento Tácito de la petición y ordenar el archivo del expediente mediante acto administrativo motivado, contra el cual procede únicamente recurso de reposición.',
                        'Aprobar el trámite asumiendo que los documentos faltantes no eran indispensables.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 17 del CPACA contempla el desistimiento tácito ante la inactividad del peticionario para subsanar, decretándose mediante resolución motivada recurrible en reposición.',
                },
                {
                    text: 'Caso: Un contribuyente interpone recurso de reposición contra una resolución seccional que le negó la actualización de sus datos registrales en el RUT.\n\nEnunciado: Conforme al artículo 76 del CPACA, el plazo legal que tiene el interesado para interponer dicho recurso es:',
                    options: [
                        'Cinco (5) días hábiles contados a partir del momento en que radicó la petición inicial.',
                        'Diez (10) días hábiles siguientes a la fecha de notificación del acto administrativo recurrido.',
                        'Treinta (30) días calendario ante el Tribunal Administrativo de Cundinamarca.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 76 del CPACA señala que los recursos de reposición y apelación deben interponerse dentro de los diez (10) días hábiles siguientes a la notificación del acto.',
                },
                {
                    text: 'Caso: Al revisar una resolución seccional en firme que actualizó el RUT de una sociedad, el Gestor I nota que en la parte resolutiva se escribió por error mecanográfico "NIT 800.123.457" en lugar de "NIT 800.123.456", coincidiendo este último con todos los antecedentes del expediente.\n\nEnunciado: De conformidad con el artículo 45 del CPACA, procede:',
                    options: [
                        'Revocar íntegramente el acto administrativo y reiniciar todo el trámite desde cero.',
                        'Corregir el error simplemente mecanográfico en cualquier tiempo, de oficio o a solicitud de parte, expidiendo un acto aclaratorio que no altera la decisión de fondo.',
                        'Obligar a la sociedad comercial a cambiar de NIT ante la Cámara de Comercio para coincidir con el error.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 45 del CPACA permite corregir en cualquier tiempo los errores aritméticos o mecanográficos que no modifiquen sustancialmente el sentido de la decisión.',
                },
                {
                    text: 'Caso: Se recibe en el buzón virtual de la DIAN una petición anónima que aporta pruebas fotográficas y libros de contabilidad donde se evidencia una red de contrabando y evasión de IVA.\n\nEnunciado: De conformidad con la jurisprudencia constitucional y las normas de PQRSD, la DIAN debe:',
                    options: [
                        'Eliminar la comunicación de inmediato porque las normas prohíben tramitar denuncias anónimas.',
                        'Admitir y tramitar formalmente la denuncia, direccionándola al área de Fiscalización por contener hechos concretos, precisos y verificables de interés general y fiscal.',
                        'Exigir al denunciante que revele su identidad ante un notario público para poder actuar.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. Las autoridades públicas tienen el deber de dar trámite a peticiones y denuncias anónimas siempre que aporten indicios, hechos y pruebas objetivas verificables.',
                },
                {
                    text: 'Caso: La DIAN remite una resolución mediante Notificación Electrónica a un contribuyente.\n\nEnunciado: Conforme al artículo 566-1 del Estatuto Tributario, los términos legales para que el ciudadano ejerza sus recursos comienzan a correr:',
                    options: [
                        'En el mismo segundo en que el servidor remite telemáticamente el correo.',
                        'A partir del quinto (5) día hábil siguiente a la entrega del correo electrónico o acuse de recibo en el buzón informado en el RUT.',
                        'A los treinta (30) días calendario de haber sido publicado en la cartelera del Punto de Contacto.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 566-1 del E.T. precisa que los términos para el contribuyente se computan a partir del quinto (5) día hábil siguiente a la entrega del correo en el buzón del RUT.',
                },
                {
                    text: 'Caso: Un ciudadano inconforme con el tiempo de espera en un Punto de Contacto radica una queja formal en el sistema de PQRSD.\n\nEnunciado: Conforme a la Ley 1755 de 2015, el plazo legal oportuno que tiene la DIAN para resolver la queja es:',
                    options: [
                        'Quince (15) días hábiles siguientes a su radicación.',
                        'Seis (6) meses con informe bimestral a la Procuraduría.',
                        'Cuarenta y ocho (48) horas bajo pena de sanción al funcionario de turno.',
                    ],
                    correct: 0,
                    explanation: 'La opción A es la correcta. Las quejas y reclamos sobre la prestación del servicio forman parte del derecho de petición ordinario y deben resolverse en el término general de quince (15) días hábiles.',
                },
                {
                    text: 'Caso: En el marco del CPACA, un contribuyente consulta cuándo opera el Silencio Administrativo Positivo ante una solicitud formulada a la administración tributaria.\n\nEnunciado: De acuerdo con el artículo 84 del CPACA, el silencio positivo:',
                    options: [
                        'Opera de forma automática en todas las peticiones ciudadanas al cabo de quince días sin respuesta.',
                        'Es de carácter excepcional y solo opera en los casos expresamente consagrados por normas legales especiales que prevean dicho efecto favorable, requiriendo protocolización notarial.',
                        'Aplica siempre que el peticionario demuestre encontrarse al día en el pago del impuesto de renta.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La regla general es el silencio administrativo negativo (Art. 83 CPACA). El silencio positivo solo existe cuando la ley especial lo consagra taxativamente.',
                },
                {
                    text: 'Caso: Un concejal municipal solicita mediante derecho de petición las declaraciones de renta privadas de varios empresarios de su ciudad para adelantar un debate de control político.\n\nEnunciado: Conforme al artículo 583 del Estatuto Tributario y la Ley 1712 de 2014, al Gestor I le corresponde:',
                    options: [
                        'Entregar copias inmediatas de las declaraciones por tratarse de un debate de interés público liderado por una autoridad electa.',
                        'Negar motivadamente la entrega de las declaraciones tributarias, argumentando que están protegidas por reserva legal absoluta, no pudiendo suministrarse a particulares ni concejales sin orden de autoridad judicial competente.',
                        'Entregar únicamente la primera hoja de las declaraciones tachando las cifras de patrimonio.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 583 del Estatuto Tributario ampara con reserva legal estricta las declaraciones tributarias, prohibiendo su entrega a concejales o terceros no autorizados por la ley.',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 3: REGISTRO ÚNICO TRIBUTARIO (RUT)
           ---------------------------------------------------- */
        {
            id: 'm3',
            title: 'Módulo 3: Registro Único Tributario (RUT)',
            navLabel: '📋 M.3: Administración RUT',
            homeLabel: 'Módulo 3: Registro Único Tributario (RUT) y Trámites',
            theoryId: 'modulo-3',
            cases: [
                {
                    text: 'Caso: Un comerciante acude al Punto de Contacto solicitando actualizar su RUT para retirar la responsabilidad 48 (Responsable del IVA) y pasar a la 49 (No responsable). En el año inmediatamente anterior sus ingresos brutos fueron de 2.900 UVT, pero el Gestor I constata que hace dos años sus ingresos fiscales fueron de 4.200 UVT.\n\nEnunciado: De conformidad con el parágrafo 3 del artículo 437 del Estatuto Tributario y el Decreto 1625 de 2016, el servidor debe:',
                    options: [
                        'Aprobar el retiro de la responsabilidad del IVA porque el año pasado sus ingresos no superaron el tope de las 3.500 UVT.',
                        'Rechazar motivadamente la solicitud, explicándole que la norma exige haber cumplido los topes de no responsable durante los tres (3) años fiscales anteriores consecutivos.',
                        'Eliminar la declaración de hace dos años en el sistema Muisca para que el comerciante cumpla el requisito.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El parágrafo 3 del Art. 437 del E.T. exige haber cumplido los topes en los 3 años anteriores consecutivos para poder registrarse como no responsable. Al haber superado el tope en uno de ellos, no procede el retiro.',
                },
                {
                    text: 'Caso: Una madre acude con su hijo de 16 años, quien obtuvo ingresos como programador y necesita inscribirse en el RUT para formalizar un contrato laboral.\n\nEnunciado: Conforme al Decreto 1625 de 2016 sobre inscripción de menores de edad, para validar el trámite el Gestor I debe exigir:',
                    options: [
                        'Que el menor cumpla la mayoría de edad (18 años) para poder ser titular del RUT.',
                        'La tarjeta de identidad del menor, el documento que acredite el parentesco y representación legal (registro civil de nacimiento) y la cédula de ciudadanía de la madre que actúa en su representación.',
                        'Una caución prendaria otorgada por un banco comercial.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El DURT 1625 de 2016 autoriza la inscripción de menores de edad en el RUT a través de sus representantes legales con tarjeta de identidad, registro civil y cédula del representante.',
                },
                {
                    text: 'Caso: Un apoderado se presenta en ventanilla para tramitar la inscripción en el RUT de un consorcio adjudicatario de una licitación pública.\n\nEnunciado: Conforme a las normas registrales de la DIAN, el documento indispensable que el Gestor I debe verificar y exigir es:',
                    options: [
                        'El certificado de matrícula del consorcio como sociedad anónima en Cámara de Comercio.',
                        'El documento privado de constitución del consorcio donde conste su objeto, vigencia, porcentaje de participación y designación del representante legal, junto con los RUT formalizados de los consorciados.',
                        'Una póliza de cumplimiento a nombre del Gestor I.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. Los consorcios y uniones temporales se inscriben con su documento contractual de constitución que fije vigencia y representación, asignándoseles NIT con vigencia sujeta al contrato.',
                },
                {
                    text: 'Caso: Tres comunicaciones oficiales consecutivas remitidas a la dirección registrada en el RUT de un contribuyente son devueltas por el correo oficial con la constancia "predio demolido / dirección no existe".\n\nEnunciado: Conforme al artículo 1.6.1.2.16 del Decreto 1625 de 2016, la medida registral que procede es:',
                    options: [
                        'La Cancelación definitiva del RUT sin fórmula de juicio.',
                        'La Suspensión de la inscripción en el RUT por la causal de no ubicación del contribuyente, inhabilitando temporalmente el NIT para operaciones comerciales y aduaneras.',
                        'Asignarle de oficio una dirección arbitraria en la sede de la seccional.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El DURT 1625 de 2016 establece la suspensión como medida cautelar ante la devolución reiterada de comunicaciones oficiales por causales de no ubicación.',
                },
                {
                    text: 'Caso: Un contribuyente persona natural cambia su residencia fiscal el 5 de marzo. De conformidad con el artículo 658-3 del Estatuto Tributario.\n\nEnunciado: El plazo legal que tiene para actualizar su RUT y la sanción en caso de mora corresponden a:',
                    options: [
                        'Seis meses de plazo sin ninguna consecuencia económica.',
                        'Dentro del mes siguiente al hecho (hasta el 5 de abril); si no actualiza en término, se expone a sanción de dos (2) UVT por cada día de retraso.',
                        'Diez días hábiles bajo sanción de arresto de fin de semana.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 658-3 numeral 3 del E.T. impone el deber de actualizar el RUT dentro del mes siguiente a la ocurrencia del hecho, so pena de sanción de 2 UVT por día de retraso.',
                },
                {
                    text: 'Caso: En una visita de control formal, funcionarios de la DIAN comprueban que una ferretería abierta al público no tiene exhibida en lugar visible la copia de su RUT.\n\nEnunciado: De conformidad con el artículo 658-3 numeral 2 del Estatuto Tributario, la sanción aplicable es:',
                    options: [
                        'Pena privativa de la libertad para el administrador del establecimiento.',
                        'Clausura del establecimiento de comercio por el término de tres (3) días o multa de diez (10) UVT.',
                        'Decomiso inmediato de todas las mercancías en bodega.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 658-3 numeral 2 del E.T. sanciona a los obligados a inscribirse que no exhiban el RUT en lugar visible con clausura de 3 días del local o multa de 10 UVT.',
                },
                {
                    text: 'Caso: En el Formulario 001 del RUT, el Gestor I debe orientar a un nuevo comerciante sobre la clasificación de su actividad económica en la Hoja 1.\n\nEnunciado: La clasificación de las actividades principal y secundarias en las casillas 46 a 50 se realiza conforme a:',
                    options: [
                        'La lista de precios al consumidor de la Superintendencia de Industria y Comercio.',
                        'El código de 4 dígitos de la Clasificación Industrial Internacional Uniforme (CIIU Rev. 4 A.C.) adoptada para Colombia por la DIAN mediante la Resolución 000139 de 2020.',
                        'El código postal de la dirección de notificación.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. Las actividades económicas en el RUT se rigen por la clasificación CIIU Rev. 4 A.C. adoptada mediante la Resolución DIAN 000139 de 2020.',
                },
                {
                    text: 'Caso: Se radica una solicitud de cancelación definitiva del RUT de una sociedad anónima simplificada (SAS) por disolución y liquidación.\n\nEnunciado: Conforme al artículo 1.6.1.2.18 del Decreto 1625 de 2016, para que el Gestor I apruebe la cancelación se debe exigir:',
                    options: [
                        'Que todos los accionistas de la SAS abandonen el país.',
                        'El acta de liquidación formal debidamente inscrita en la Cámara de Comercio con cancelación de la matrícula mercantil y la verificación previa del cumplimiento de las obligaciones tributarias sustanciales y formales.',
                        'El pago de una tarifa de cincuenta salarios mínimos en la ventanilla seccional.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La cancelación por liquidación exige allegar el documento de liquidación inscrito en Cámara de Comercio con cancelación de matrícula y el paz y salvo fiscal previo.',
                },
                {
                    text: 'Caso: Un abogado acude en representación de un contribuyente a solicitar la actualización del RUT y la entrega de una copia formalizada.\n\nEnunciado: Para que el Gestor I admita la actuación del apoderado, este debe presentar:',
                    options: [
                        'Una autorización enviada por mensaje de texto de WhatsApp.',
                        'Poder especial debidamente otorgado con nota de presentación personal (o poder general por escritura pública vigente) y cédula de ciudadanía original del apoderado.',
                        'Un carnet de estudiante universitario de derecho sin poder alguno.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. Para actuar ante la administración tributaria a nombre de terceros se exige acreditar personería jurídica mediante poder formal con nota de presentación personal o escritura pública.',
                },
                {
                    text: 'Caso: Un microempresario decide acogerse al Régimen Simple de Tributación (RST) para formalizar su negocio de panadería.\n\nEnunciado: En el Formulario 001 del RUT, esta calidad se registra en la casilla 53 mediante el código de responsabilidad:',
                    options: [
                        'Código 05 (Impuesto sobre la Renta Régimen Ordinario).',
                        'Código 47 (Régimen Simple de Tributación - RST).',
                        'Código 14 (Usuario Aduanero).',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El código 47 en la casilla 53 identifica a los contribuyentes que optaron válidamente por el Régimen Simple de Tributación (RST).',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 4: ATENCIÓN AL CIUDADANO Y CANALES TACI
           ---------------------------------------------------- */
        {
            id: 'm4',
            title: 'Módulo 4: Atención al Ciudadano y Canales TACI',
            navLabel: '👥 M.4: Canales TACI',
            homeLabel: 'Módulo 4: Atención, Servicio al Ciudadano y Canales TACI',
            theoryId: 'modulo-4',
            cases: [
                {
                    text: 'Caso: Una ciudadana de 74 años que se desplaza en silla de ruedas llega al Punto de Contacto de la DIAN solicitando una copia de su RUT para un trámite pensional. El orientador del acceso le manifiesta que no puede atenderla porque no agendó cita virtual en la web.\n\nEnunciado: Frente a este caso y conforme al Protocolo de Servicio con Enfoque Diferencial y la Ley 1757 de 2015, al Gestor I le corresponde:',
                    options: [
                        'Respaldar la negativa del orientador recordando que el sistema de citas virtuales es obligatorio para toda la ciudadanía sin excepciones.',
                        'Garantizar de inmediato la atención prioritaria y preferencial a la ciudadana sin exigirle cita previa, orientarla en un módulo accesible y entregarle su RUT formalizado con trato digno y cálido.',
                        'Sugerirle que acuda a un café internet para que aprenda a agendar citas por la plataforma.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Ley 1757 de 2015 y los protocolos de la DIAN obligan a brindar atención prioritaria sin cita a adultos mayores y personas en situación de discapacidad.',
                },
                {
                    text: 'Caso: La DIAN promueve la adopción de la política de "Lenguaje Claro" en todas las sedes del país para acercar la institución a los ciudadanos.\n\nEnunciado: La aplicación de esta política en la atención verbal y escrita del Gestor I exige:',
                    options: [
                        'Citar sentencias judiciales extensas y terminología en latín para demostrar superioridad técnica.',
                        'Explicar los trámites y decisiones en un lenguaje sencillo, transparente, empático y directo, indicando con claridad qué debe hacer el ciudadano, qué documentos requiere y en qué plazos.',
                        'Responder únicamente con monosílabos para abreviar los tiempos de ventanilla.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La política de Lenguaje Claro busca que los mensajes sean comprensibles para cualquier ciudadano, facilitando el ejercicio de derechos y el cumplimiento de deberes.',
                },
                {
                    text: 'Caso: El Instrumento de Firma Electrónica (IFE / e-Firma) de un contribuyente vence el mismo día en que debe presentar su declaración de renta, por lo que acude angustiado al Punto de Contacto.\n\nEnunciado: La indicación técnica y acertada que debe brindarle el Gestor I es:',
                    options: [
                        'Informarle que una firma vencida no puede renovarse el mismo día y que debe pagar la sanción de extemporaneidad.',
                        'Orientarlo en la generación y renovación autónoma e inmediata de su e-Firma a través del portal transaccional de la DIAN, utilizando el código dinámico (OTP) remitido a su correo o celular registrado en el RUT.',
                        'Prestarle la firma electrónica personal del Gestor I para que firme en el sistema.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La DIAN permite renovar en línea de forma inmediata la e-Firma mediante autogestión con código OTP sin necesidad de cita previa.',
                },
                {
                    text: 'Caso: Un contribuyente llega alterado a la ventanilla alzando la voz por un cobro automático que considera improcedente.\n\nEnunciado: Demostrando competencia en "Manejo de Situaciones Difíciles y Desescalamiento", el Gestor I debe:',
                    options: [
                        'Gritar al usuario en el mismo tono para no dejarse intimidar.',
                        'Mantener la serenidad y el autocontrol, escuchar con empatía sin confrontación personal, revisar en el sistema el origen del cobro y orientar con claridad el trámite de reclamo.',
                        'Abandonar inmediatamente el puesto de trabajo y esconderse.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El servicio profesional exige autocontrol, escucha activa y contención emocional para canalizar institucionalmente la inquietud sin confrontaciones.',
                },
                {
                    text: 'Caso: Un campesino de una zona rural sin acceso a computador consulta cómo puede conocer sus fechas de vencimiento de impuestos sin desplazarse a la ciudad.\n\nEnunciado: El Gestor I le informa que el canal adecuado puesto a su disposición es:',
                    options: [
                        'La línea gratuita nacional del Contact Center de la DIAN, donde operadores especializados orientan telefónicamente sobre el calendario tributario y el estado del RUT.',
                        'La cuenta personal de mensajería instantánea del Director General.',
                        'Ninguno, ya que la DIAN solo atiende por internet.',
                    ],
                    correct: 0,
                    explanation: 'La opción A es la correcta. El Contact Center telefónico de la DIAN ofrece atención gratuita a nivel nacional, siendo esencial para personas con barreras de conectividad digital.',
                },
                {
                    text: 'Caso: En los Puntos de Contacto de la DIAN se implementan "Kioscos de Autogestión Guiada".\n\nEnunciado: El objetivo pedagógico de este servicio es:',
                    options: [
                        'Vender formularios impresos y servicios privados de fotocopiado.',
                        'Acompañar y capacitar a los usuarios en el uso de los servicios virtuales del portal de la DIAN, fomentando su autonomía tecnológica para trámites futuros.',
                        'Reemplazar la planta de personal por máquinas automáticas sin funcionarios.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. Los kioscos de autogestión guiada promueven la inclusión digital, capacitando al ciudadano para que aprenda a gestionar sus trámites de forma autónoma.',
                },
                {
                    text: 'Caso: En el marco de la relación con los "Clientes TACI", el modelo de Cercanía con el Ciudadano de la DIAN busca:',
                    options: [
                        'Tratar al contribuyente como un sujeto evasor por naturaleza.',
                        'Facilitar el cumplimiento voluntario de las obligaciones mediante cercanía, información transparente, simplificación de procedimientos y trato digno.',
                        'Imponer el mayor número posible de sanciones pecuniarias para incrementar el recaudo represivo.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El macroproceso de Cercanía con el Ciudadano se fundamenta en la facilitación del cumplimiento voluntario y la reducción de cargas operativas para el usuario.',
                },
                {
                    text: 'Caso: Conforme a la legislación colombiana (Ley 527 de 1999 y normatividad DIAN), el Instrumento de Firma Electrónica (IFE):\n\nEnunciado: Respecto a su validez y equivalencia jurídica, el IFE:',
                    options: [
                        'Carece de fuerza vinculante frente a los tribunales de justicia.',
                        'Tiene plena equivalencia funcional y la misma validez y eficacia probatoria que la firma manuscrita para declaraciones y actos administrativos.',
                        'Solo es válido si se acompaña de una huella dactilar estampada en tinta azul.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Ley 527 de 1999 consagra el principio de equivalencia funcional: la firma electrónica tiene la misma validez y fuerza probatoria que la firma manuscrita.',
                },
                {
                    text: 'Caso: El Instrumento de Firma Electrónica (IFE) emitido por la DIAN tiene una vigencia legal reglamentaria de:\n\nEnunciado: La vigencia del IFE corresponde a:',
                    options: [
                        'Un (1) año renovable únicamente en notarías.',
                        'Tres (3) años contados a partir de su generación formal en el sistema, renovable en línea antes de su expiración.',
                        'Diez (10) años sin necesidad de renovación.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El IFE tiene una vigencia legal de tres (3) años, pudiendo renovarse de manera autónoma en línea antes de su vencimiento.',
                },
                {
                    text: 'Caso: Al finalizar un trámite de inscripción en el RUT en ventanilla, el protocolo de cierre del servicio exige al Gestor I:\n\nEnunciado: El servidor público debe:',
                    options: [
                        'Retener la cédula de ciudadanía original del usuario en el archivo de la seccional.',
                        'Entregar de inmediato el formulario formalizado con marca de agua oficial, verificar la exactitud de los datos con el ciudadano e invitarlo a evaluar la calidad de la atención recibida.',
                        'Decirle al ciudadano que regrese dentro de quince días para verificar si el sistema guardó los datos.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El protocolo de cierre exige entregar el documento formalizado, corroborar los datos registrados y aplicar la encuesta de satisfacción para la mejora del servicio.',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 5: CULTURA DE LA CONTRIBUCIÓN Y OBLIGACIONES
           ---------------------------------------------------- */
        {
            id: 'm5',
            title: 'Módulo 5: Cultura Tributaria y Obligaciones TACI',
            navLabel: '💡 M.5: Cultura y Deberes',
            homeLabel: 'Módulo 5: Cultura Tributaria, Facturación y Obligaciones TACI',
            theoryId: 'modulo-5',
            cases: [
                {
                    text: 'Caso: Un comerciante acude a la DIAN preguntando si puede acogerse voluntariamente al Régimen Simple de Tributación (RST) para reducir la carga de retenciones y simplificar sus declaraciones.\n\nEnunciado: El Gestor I identifica que esta conducta del contribuyente corresponde a:',
                    options: [
                        'Una práctica de evasión fiscal sujeta a investigación penal.',
                        'Economía de Opción, la cual es una conducta plenamente legítima mediante la cual el contribuyente elige la alternativa fiscal más favorable que la propia ley le ofrece.',
                        'Un abuso tributario equiparable al contrabando técnico.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La economía de opción es la facultad legal del ciudadano de estructurar sus actividades bajo el régimen tributario que le resulte más favorable dentro de los previstos por la ley.',
                },
                {
                    text: 'Caso: En el marco de la Ley 223 de 1995, la DIAN opera los Núcleos de Apoyo Contable y Fiscal (NAF) en convenio con universidades del país.\n\nEnunciado: La misión fundamental de estos núcleos es:',
                    options: [
                        'Realizar embargos forzosos de cuentas bancarias de docentes y estudiantes.',
                        'Brindar asesoría y orientación fiscal gratuita a personas de bajos ingresos y microempresarios, promoviendo el cumplimiento voluntario y la cultura de la contribución.',
                        'Sustituir a los auditores de carrera de la DIAN por personal no remunerado.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. Los NAF son espacios de responsabilidad social y pedagogía fiscal donde estudiantes capacitados por la DIAN asesoran gratuitamente a personas vulnerables.',
                },
                {
                    text: 'Caso: Un comerciante obligado a facturar electrónicamente sufre un corte eléctrico y de internet en su local durante 24 horas.\n\nEnunciado: Conforme a la normativa tributaria de facturación por contingencia, el comerciante debe:',
                    options: [
                        'Cerrar el establecimiento y suspender las ventas hasta que vuelva la luz.',
                        'Expedir Factura de Talonario o de Papel por Contingencia debidamente autorizada por la DIAN, y una vez restablecido el sistema, transmitir electrónicamente dichas facturas dentro de las 48 horas siguientes.',
                        'Vender sin emitir ningún soporte fiscal a los clientes.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El sistema de facturación electrónica contempla la factura de talonario por contingencia para fuerza mayor, debiendo transmitirse a la DIAN dentro de las 48 horas tras restablecerse el servicio.',
                },
                {
                    text: 'Caso: Durante una visita de control formal, funcionarios de la DIAN comprueban que un restaurante obligado a facturar vende alimentos sin expedir factura electrónica ni documento equivalente.\n\nEnunciado: Conforme al artículo 657 del Estatuto Tributario, la sanción aplicable es:',
                    options: [
                        'Cárcel de diez años para el personal de cocina.',
                        'Clausura y cierre del establecimiento de comercio por el término de tres (3) días mediante la imposición de sellos oficiales.',
                        'Expropiación de las mesas del restaurante.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 657 numeral 1 del E.T. sanciona la no expedición de factura estando obligado con la clausura del establecimiento de comercio por 3 días.',
                },
                {
                    text: 'Caso: Una asalariada consulta si tiene algún beneficio tributario personal al exigir factura electrónica de venta en sus compras de vestuario pagadas con tarjeta débito.\n\nEnunciado: Conforme a la Ley 2277 de 2022 (Art. 336 E.T.), el Gestor I le aclara que:',
                    options: [
                        'No existe ningún beneficio personal y solo favorece al comercio vendedor.',
                        'Puede deducir en su declaración de renta anual el uno por ciento (1%) del valor de las compras soportadas con factura electrónica validada y pagadas por medios electrónicos, hasta el límite legal.',
                        'La DIAN le reintegrará el 100% de sus gastos en compras en efectivo cada mes.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La reforma de la Ley 2277 de 2022 adicionó al Art. 336 del E.T. la deducción del 1% del valor de las compras con factura electrónica pagadas electrónicamente.',
                },
                {
                    text: 'Caso: Al analizar las conductas frente al pago de tributos en Colombia, surge la necesidad de diferenciar la Evasión de la Elusión Fiscal.\n\nEnunciado: La diferencia conceptual entre ambas figuras radica en que:',
                    options: [
                        'La evasión es legal y la elusión es un delito con pena de prisión.',
                        'La evasión viola de manera directa y flagrante la ley tributaria/penal (ej. ocultar ingresos), mientras que la elusión utiliza vacíos o artificios jurídicos para evitar el pago sin infringir la letra literal de la norma.',
                        'Ambas figuras son idénticas en el Código Penal colombiano.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La evasión es el incumplimiento ilícito y directo de la obligación tributaria; la elusión manipula las formas jurídicas para eludir el tributo abusando de los vacíos normativos.',
                },
                {
                    text: 'Caso: Un contribuyente recibe una "Comunicación Persuasiva" de la DIAN señalándole que registra consignaciones bancarias superiores a los topes de declarante de renta pero no presentó declaración.\n\nEnunciado: El Gestor I debe explicarle que la comunicación persuasiva:',
                    options: [
                        'Constituye una orden de embargo y secuestro judicial en firme.',
                        'Es una acción preventiva que busca el cumplimiento voluntario, invitándolo a normalizar su situación y declarar voluntariamente con sanción reducida antes de que la DIAN inicie el proceso administrativo oficial.',
                        'Es un error del sistema que debe ignorar por completo.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La gestión persuasiva alerta al contribuyente sobre inconsistencias para que corrija voluntariamente su situación antes del inicio del proceso sancionatorio formal.',
                },
                {
                    text: 'Caso: Una empresa adquiere materias primas a un artesano independiente que no está obligado a expedir factura.\n\nEnunciado: Para que la empresa pueda soportar válidamente dichos costos y deducciones en su declaración de renta, debe emitir:',
                    options: [
                        'Un recibo de caja menor firmado por el celador.',
                        'El Documento Soporte Electrónico en adquisiciones efectuadas a sujetos no obligados a expedir factura, transmitiéndolo a la DIAN para su validación.',
                        'Una letra de cambio por el valor estimado de los insumos.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El Documento Soporte Electrónico en adquisiciones a no obligados a facturar es el comprobante tributario exigido por la DIAN para soportar costos y deducciones.',
                },
                {
                    text: 'Caso: Un emprendedor desea acogerse al Régimen Simple de Tributación (RST) para formalizar su microempresa.\n\nEnunciado: Uno de los principales beneficios de este régimen unificado es:',
                    options: [
                        'Exoneración de afiliar a sus trabajadores al sistema de seguridad social.',
                        'No estar sujeto a retención en la fuente a título de renta ni de ICA, y poder descontar los aportes a pensiones pagados por el empleador del valor a pagar en el RST.',
                        'Quedar exonerado de expedir facturas de venta.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. A los contribuyentes del RST no se les practica retención en la fuente a título de renta (Art. 911 E.T.) y se les permite descontar los aportes a pensiones del impuesto.',
                },
                {
                    text: 'Caso: La promoción de la "Cultura de la Contribución" como bien público en la sociedad colombiana busca primordialmente:\n\nEnunciado: El objetivo de esta política pública es:',
                    options: [
                        'Convencer a la población de que los recursos públicos son propiedad de los funcionarios de turno.',
                        'Fortalecer la confianza y legitimidad ciudadana, entendiendo que el pago voluntario y oportuno de los tributos financia los derechos sociales, reduce la desigualdad y sostiene el desarrollo del país.',
                        'Eliminar la carrera administrativa y privatizar las oficinas de la DIAN.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La cultura de la contribución concibe el cumplimiento fiscal como una expresión de civismo democrático, indispensable para sostener el Estado social de derecho.',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 6: MIPG, RESERVA LEGAL Y TRANSPARENCIA
           ---------------------------------------------------- */
        {
            id: 'm6',
            title: 'Módulo 6: MIPG, Reserva Legal y Transparencia',
            navLabel: '🔒 M.6: MIPG y Reserva',
            homeLabel: 'Módulo 6: MIPG, Reserva Tributaria y Transparencia',
            theoryId: 'modulo-6',
            cases: [
                {
                    text: 'Caso: Una periodista solicita en ventanilla que el Gestor I le imprima las declaraciones de renta de los últimos cinco años de un candidato a la alcaldía para una investigación periodística.\n\nEnunciado: Conforme al artículo 583 del Estatuto Tributario, el servidor debe:',
                    options: [
                        'Entregar la información de inmediato por el principio de transparencia de las figuras públicas.',
                        'Negar de plano la solicitud mediante respuesta motivada, explicando que las declaraciones y bases gravables tienen reserva legal absoluta (Art. 583 E.T.), no siendo de libre acceso a particulares ni prensa.',
                        'Cobrarle una tarifa especial de prensa por fotocopia confidencial.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 583 del E.T. impone reserva legal tributaria estricta. Violar esta reserva genera causal de destitución inmediata del cargo (Art. 584 E.T.) y responsabilidad penal.',
                },
                {
                    text: 'Caso: Un Juez Penal de la República libra una orden judicial motivada dentro de una investigación por lavado de activos, requiriendo a la DIAN las declaraciones de renta de los procesados.\n\nEnunciado: Ante este requerimiento judicial formal, la DIAN debe:',
                    options: [
                        'Negar la entrega argumentando que la reserva de la DIAN prevalece sobre cualquier orden judicial.',
                        'Suministrar la información requerida en estricto cumplimiento de la orden judicial, por constituir una excepción legal taxativa al principio de reserva tributaria.',
                        'Cobrar una caución económica al juzgado antes de enviar los documentos.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 583 del Estatuto Tributario contempla como excepción legal la entrega de información reservada cuando medie orden de autoridad judicial competente.',
                },
                {
                    text: 'Caso: El cónyuge de una comerciante acude con el registro civil de matrimonio exigiendo copia del RUT y de las declaraciones de renta de su esposa para un trámite privado de sucesión de bienes.\n\nEnunciado: Conforme al Estatuto Tributario y a la Ley 1581 de 2012 (Habeas Data):',
                    options: [
                        'Se le entrega la información porque el matrimonio autoriza el acceso ilimitado a los datos de la pareja.',
                        'Se niega la entrega al cónyuge, señalando que los datos tributarios están amparados por reserva legal e intimidad personal, requiriéndose autorización o poder especial de la titular o requerimiento de juez de familia.',
                        'Se le entrega la información únicamente si el cónyuge paga una fianza.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La reserva tributaria protege la intimidad del contribuyente. El vínculo matrimonial no otorga facultades para acceder a datos reservados sin poder especial formal.',
                },
                {
                    text: 'Caso: En el Modelo Integrado de Planeación y Gestión (MIPG - Decreto 1499 de 2017), se evalúan las siete dimensiones operativas del Estado.\n\nEnunciado: La dimensión considerada como el corazón del modelo por gestionar el activo más valioso de las entidades es:',
                    options: [
                        'La dimensión de Control Interno.',
                        'La dimensión de Talento Humano.',
                        'La dimensión de Gestión Financiera y Compras.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El Decreto 1499 de 2017 define el Talento Humano como la dimensión nuclear del MIPG, ya que son los servidores públicos quienes dinamizan las demás dimensiones.',
                },
                {
                    text: 'Caso: Un servidor de la DIAN revela en un almuerzo datos reservados del patrimonio de un contribuyente que conoció en el ejercicio de sus funciones.\n\nEnunciado: Conforme al artículo 584 del Estatuto Tributario y a la Ley 1952 de 2019, esta conducta acarrea:',
                    options: [
                        'Una llamada de atención verbal sin consecuencias laborales.',
                        'La destitución del cargo e inhabilidad general para ejercer funciones públicas por falta gravísima, además de responsabilidad penal.',
                        'Un traslado a otra seccional con mayor afluencia de público.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El artículo 584 del E.T. sanciona con destitución inmediata al servidor público que viole la reserva legal tributaria, tipificándose falta gravísima disciplinaria.',
                },
                {
                    text: 'Caso: En el esquema de las Tres Líneas de Defensa del MIPG en la DIAN, se definen las responsabilidades de supervisión y control.\n\nEnunciado: La función de la "Tercera Línea de Defensa" corresponde a:',
                    options: [
                        'Realizar la atención directa en las ventanillas de servicio al contribuyente.',
                        'Evaluar de manera independiente y objetiva la efectividad de los controles y del sistema de gestión institucional a través de la Oficina de Control Interno.',
                        'Supervisar físicamente las filas de espera en las seccionales.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Tercera Línea del MIPG está representada por la Oficina de Control Interno, encargada de evaluar de forma independiente la eficacia de los controles institucionales.',
                },
                {
                    text: 'Caso: Bajo el principio de máxima publicidad de la Ley de Transparencia (Ley 1712 de 2014), un ciudadano consulta documentos institucionales de la DIAN.\n\nEnunciado: Cuál de los siguientes documentos es de libre acceso público general:',
                    options: [
                        'Las guías oficiales de trámites, resoluciones reglamentarias y estadísticas consolidadas de recaudo.',
                        'Las declaraciones de renta privadas y balances financieros de las empresas mineras.',
                        'Las contraseñas de e-Firma de los grandes contribuyentes.',
                    ],
                    correct: 0,
                    explanation: 'La opción A es la correcta. La Ley 1712 de 2014 ordena la publicidad de las guías de servicio, reglamentos y cifras agregadas de recaudo, manteniendo bajo reserva los datos de particulares.',
                },
                {
                    text: 'Caso: La Ley General de Archivos (Ley 594 de 2000) y las Tablas de Retención Documental (TRD) regulan la gestión documental en la DIAN.\n\nEnunciado: Los expedientes tributarios gestionados por los servidores públicos:',
                    options: [
                        'Deben destruirse al finalizar cada mes para liberar espacio físico.',
                        'Deben organizarse, foliarse digital o físicamente y conservarse conforme a los tiempos fijados en las TRD para garantizar su autenticidad e integridad probatoria.',
                        'Pueden almacenarse en correos personales de los funcionarios sin copia de seguridad.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Ley 594 de 2000 obliga a organizar y custodiar los expedientes públicos bajo estrictas TRD que preserven la memoria institucional y su valor probatorio.',
                },
                {
                    text: 'Caso: Un Gestor I recibe un requerimiento de la Oficina de Control Interno solicitando reportes sobre las verificaciones documentales del RUT en su dependencia.\n\nEnunciado: El servidor público debe:',
                    options: [
                        'Negarse a suministrar información alegando reserva tributaria interna.',
                        'Suministrar oportunamente los informes y evidencias requeridas, colaborando activamente con la auditoría para la mejora continua del proceso misional.',
                        'Destruir los registros antes de la auditoría.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. Los servidores públicos tienen el deber legal de colaborar con las auditorías de Control Interno para evaluar y perfeccionar los controles de la Primera Línea.',
                },
                {
                    text: 'Caso: Un ciudadano exige a la DIAN rectificar la dirección que figura en su RUT invocando su derecho de Hábeas Data (Ley 1581 de 2012).\n\nEnunciado: El Gestor I debe orientarlo en el sentido de que:',
                    options: [
                        'La DIAN no reconoce el derecho de hábeas data en ningún trámite administrativo.',
                        'Tiene pleno derecho a conocer, actualizar y rectificar su información personal, el cual se materializa a través del trámite oficial de Actualización del RUT mediante autogestión virtual o en Punto de Contacto.',
                        'Debe demandar obligatoriamente a la entidad ante el Consejo de Estado.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El hábeas data faculta al titular a rectificar sus datos; en la DIAN, este derecho se ejerce de forma directa a través de la actualización formal del RUT.',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 7: COMPETENCIAS COMPORTAMENTALES E INTEGRIDAD
           ---------------------------------------------------- */
        {
            id: 'm7',
            title: 'Módulo 7: Competencias Res. 065 de 2024',
            navLabel: '⭐ M.7: Competencias Res. 065',
            homeLabel: 'Módulo 7: Competencias Comportamentales (Res. 065/2024)',
            theoryId: 'modulo-7',
            cases: [
                {
                    text: 'Caso: Faltando diez minutos para concluir la jornada en el Punto de Contacto, ingresa un ciudadano en situación de vulnerabilidad proveniente de una vereda lejana que requiere inscribir su RUT con urgencia para no perder una oportunidad de empleo al día siguiente.\n\nEnunciado: Demostrando la competencia de "Orientación al Usuario y al Ciudadano" (Nivel 3 - Res. 065/2024), al Gestor I le corresponde:',
                    options: [
                        'Informarle al ciudadano que el sistema ya fue cerrado y que debe regresar al día siguiente con cita previa.',
                        'Escuchar activamente las necesidades del ciudadano, verificar sus documentos y formalizar su trámite con amabilidad y oportunidad, garantizando una atención eficiente y humana.',
                        'Cobrarle un valor adicional en efectivo por atención prioritaria fuera del horario.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Resolución 065 de 2024 define en Orientación al Usuario y al Ciudadano la conducta observable de escuchar activamente las necesidades del ciudadano y orientar los esfuerzos en la entrega de soluciones oportunas, actualizadas y eficientes con disposición y respeto.',
                },
                {
                    text: 'Caso: Durante una contingencia por caída temporal de los servidores del Muisca, varios contribuyentes en la sala de espera manifiestan frustración en voz alta exigiendo atención inmediata.\n\nEnunciado: Aplicando la competencia de "Comunicación Efectiva" (Nivel 3 - Res. 065/2024), la conducta esperada del servidor es:',
                    options: [
                        'Gritar a los ciudadanos advirtiéndoles que si no guardan silencio se cancelará el servicio del día.',
                        'Dirigirse a la sala con serenidad y cortesía, transmitir con claridad y precisión la situación técnica presentada, minimizar distorsiones de información y orientar alternativas provisionales en kioscos guiados.',
                        'Encerrarse en las oficinas internas hasta que la sala se desocupe.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Resolución 065 de 2024 establece que en Comunicación Efectiva el servidor escucha activamente, brinda información clara y concisa, y minimiza barreras y distorsiones que dificultan la circulación de la información organizacional.',
                },
                {
                    text: 'Caso: Un funcionario nuevo se incorpora al equipo de asistencia de la seccional y experimenta dificultades para manejar el catálogo de actividades económicas CIIU en el RUT, generando demoras en su ventanilla.\n\nEnunciado: Demostrando la competencia de "Trabajo en Equipo" (Nivel 3 - Res. 065/2024), la mejor actuación de sus compañeros es:',
                    options: [
                        'Aislar al nuevo funcionario y quejarse formalmente ante la jefatura para que lo trasladen de dependencia.',
                        'Cooperar y mostrar disposición para ayudar al compañero, aportando su conocimiento en un ambiente respetuoso para aunar esfuerzos hacia el logro de los objetivos del equipo.',
                        'Burlarse públicamente de sus errores en grupos de mensajería informal.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Resolución 065 de 2024 define el Trabajo en Equipo como la capacidad de cooperar, mostrar disposición para ayudar a otros miembros, aportar conocimiento y cuidar el buen clima laboral en pro de metas comunes.',
                },
                {
                    text: 'Caso: La DIAN expide una nueva resolución que modifica el trámite de retiro de IVA en el RUT mediante validación biométrica digital, exigiendo a los gestores aprender una nueva plataforma informática.\n\nEnunciado: Demostrando la competencia de "Adaptabilidad" (Nivel 3 - Res. 065/2024), el Gestor I debe:',
                    options: [
                        'Resistirse al cambio y exigir a la dirección que se continúe recibiendo solicitudes físicas en papel.',
                        'Asumir una actitud positiva y de autocontrol frente al cambio, integrando con facilidad las nuevas herramientas tecnológicas y metodologías que facilitan la adaptación institucional.',
                        'Ignorar las directrices y esperar a que otros funcionarios asuman los nuevos trámites.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. Según la Resolución 065 de 2024, la Adaptabilidad implica evaluar posturas con apertura, asumir actitud positiva y autocontrol apoyado en el Código de Integridad, y fomentar el uso de nuevas herramientas tecnológicas.',
                },
                {
                    text: 'Caso: Al finalizar el trimestre, la Subdirección asigna una meta exigente de resolución de trámites represados de actualización del RUT.\n\nEnunciado: Demostrando la competencia de "Orientación al Logro" (Nivel 3 - Res. 065/2024), el Gestor I debe:',
                    options: [
                        'Aprobar las solicitudes sin revisar los requisitos documentales para cumplir rápidamente el indicador.',
                        'Organizar su trabajo con método, asumir la responsabilidad del cumplimiento de metas, prever planes de contingencia para asegurar resultados y gestionar la presión con altos estándares de calidad.',
                        'Manifestar que las metas son inalcanzables y no realizar ningún esfuerzo de mejora.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. En la Resolución 065 de 2024, la Orientación al Logro exige realizar aportes significativos, prever planes de contingencia para asegurar resultados, monitorear metas y gestionar la presión con calidad y ética.',
                },
                {
                    text: 'Caso: Durante la verificación de una solicitud de actualización del RUT, el Gestor I descubre que el solicitante aportó un documento con enmiendas evidentes para acreditar una representación legal inexistente.\n\nEnunciado: Aplicando la competencia de "Comportamiento Ético" (Nivel 3 - Res. 065/2024), el servidor debe:',
                    options: [
                        'Aceptar el documento para no generar confrontaciones ni demoras en la ventanilla.',
                        'Manejar el tema con imparcialidad y estricto apego al Código de Integridad, rechazar motivadamente el documento no fidedigno, dejar constancia en el expediente y reportar la presunta irregularidad a la autoridad competente.',
                        'Exigirle al usuario dinero a cambio de validar el documento adulterado.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Resolución 065 de 2024 consagra en Comportamiento Ético el deber de ser confiable en su manera de proceder, manejar de forma imparcial los temas a su cargo, ser coherente entre el decir y hacer y actuar bajo el Código de Integridad.',
                },
                {
                    text: 'Caso: En el Punto de Contacto se presentan fallas recurrentes en la asignación de turnos presenciales que generan congestión en las primeras horas de la mañana.\n\nEnunciado: Demostrando la competencia de "Iniciativa" (Nivel 3 - Res. 065/2024), al Gestor I le corresponde:',
                    options: [
                        'Esperar pasivamente a que la Dirección General en Bogotá solucione el problema.',
                        'Actuar de forma proactiva y autónoma, identificando las causas del cuello de botella y proponiendo métodos de organización y uso de tecnología que agilicen la recepción inicial de usuarios.',
                        'Culpar a los vigilantes de la entrada por la llegada masiva de ciudadanos.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Resolución 065 de 2024 define la Iniciativa como la capacidad de actuar proactiva y autónomamente, diseñando métodos de trabajo que faciliten la respuesta con rapidez y eficacia ante nuevos requerimientos.',
                },
                {
                    text: 'Caso: El Gestor I nota que muchos ciudadanos adultos mayores no logran descargar la copia formalizada de su RUT por confusiones en la interfaz web de autogestión.\n\nEnunciado: Aplicando la competencia de "Innovación" (Nivel 3 - Res. 065/2024), la conducta esperada es:',
                    options: [
                        'Decirles que contraten un tramitador privado en la calle para que les descargue el documento.',
                        'Idear e implementar una cartilla pedagógica ilustrada en lenguaje claro y de fácil lectura para orientar a los usuarios en los kioscos de autogestión, agregando valor al servicio de la seccional.',
                        'Prohibir el ingreso de personas mayores que no sepan manejar computadores.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Innovación (Res. 065/2024) consiste en idear e implementar soluciones creativas y pertinentes que resuelvan problemas y agreguen valor a la organización y a los usuarios.',
                },
                {
                    text: 'Caso: En una auditoría de calidad se identifican inconsistencias en varios trámites de suspensión del RUT por falta de uniformidad en los criterios de los funcionarios.\n\nEnunciado: Demostrando la competencia de "Solución de Problemas" (Nivel 3 - Res. 065/2024), el Gestor I debe:',
                    options: [
                        'Negar que existan fallas y acusar a los auditores de persecución laboral.',
                        'Analizar la situación con base en hechos, datos y normatividad vigente, participando en la formulación de una solución técnica integral y verificable que estandarice los criterios del proceso.',
                        'Decidir cada trámite según su estado de ánimo del día.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. La Solución de Problemas (Res. 065/2024) exige respaldar decisiones en hechos, datos y evidencias, atacando las causas del problema con autocontrol y control de calidad.',
                },
                {
                    text: 'Caso: Un Gestor I desempeña sus funciones en modalidad de Teletrabajo o esquema híbrido en el subproceso de Asistencia al Usuario.\n\nEnunciado: Conforme a la competencia de "Autogestión del Trabajo" (Nivel 3 - Capítulo V Res. 065/2024), el servidor debe:',
                    options: [
                        'Desconectarse de los canales de comunicación institucional y atender únicamente cuando le convenga.',
                        'Administrar su trabajo con motivación, autonomía y estricto cumplimiento de metas, utilizando eficientemente las TIC, respondiendo con inmediatez y preservando rigurosamente la seguridad y confidencialidad de la información tributaria.',
                        'Compartir sus claves de acceso del Muisca con familiares para que le ayuden a evacuar expedientes en casa.',
                    ],
                    correct: 1,
                    explanation: 'La opción B es la correcta. El Capítulo V de la Resolución 065 de 2024 define la Autogestión del Trabajo (Nivel 3) como la capacidad de administrar el trabajo con autonomía, comunicándose con inmediatez y eficacia, y preservando estrictamente la seguridad y reserva de la información.',
                },
            ],
        },
    ];

    /**
     * Proyecta y materializa los módulos con su banco de preguntas completo.
     * Genera las preguntas proyectando los casos de Juicio Situacional por bloque.
     */
    function buildQuestionBank(questionsPerModule = QUESTIONS_PER_MODULE) {
        return MODULE_DEFINITIONS.map(({ cases, ...meta }) => {
            const baseCount = cases.length;
            const questions = Array.from({ length: questionsPerModule }, (_, i) => {
                const baseCase = cases[i % baseCount];
                const caseNum = (i % baseCount) + 1;
                return {
                    text: `[Caso ${caseNum}] ${baseCase.text}`,
                    options: [...baseCase.options],
                    correct: baseCase.correct,
                    explanation: baseCase.explanation,
                };
            });
            return {
                ...meta,
                questions,
            };
        });
    }

    const QUESTION_BANK = buildQuestionBank();

    PM.buildQuestionBank = buildQuestionBank;
    PM.QUESTION_BANK = QUESTION_BANK;
})((window.PrepMaster = window.PrepMaster || {}));
