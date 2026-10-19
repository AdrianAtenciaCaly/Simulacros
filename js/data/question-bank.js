(function (PM) {
    'use strict';

    const { QUESTIONS_PER_MODULE } = PM;

    /**
     * BANCO OFICIAL DE PREGUNTAS DE JUICIO SITUACIONAL (CNSC / DIAN)
     * Empleo: Gestor I (Código 301, Grado 01) — OPEC: 198476
     * Ficha CC-AU-3008: Proceso Cercanía con el Ciudadano · Subproceso Asistencia al Usuario
     *
     * Formato oficial de la Comisión Nacional del Servicio Civil:
     * - Contexto laboral realista en la DIAN (Punto de contacto, ventanilla, virtual, Muisca).
     * - Dilema normativo o de atención ciudadana.
     * - 4 opciones estructuradas con distractores típicos (pasivo, autoritario, de vía de hecho).
     * - Explicación pedagógica directa y concisa citando la norma aplicable.
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
                    text: 'Un contribuyente acude alterado al Punto de Contacto de la DIAN manifestando que se le están vulnerando sus derechos constitucionales porque un funcionario anterior le liquidó una sanción sin permitirle controvertir una inconsistencia detectada por el sistema. Conforme al artículo 29 de la Constitución Política y los principios de la función administrativa (Art. 209 C.P.), ¿cuál es la actuación que debe asumir el Gestor I?',
                    options: [
                        'Informarle al ciudadano que las decisiones informáticas de la DIAN son inapelables y que debe pagar de inmediato la sanción.',
                        'Garantizar el debido proceso administrativo, verificando el estado del trámite en el sistema Muisca, explicándole con lenguaje claro las razones de la inconsistencia y orientándolo sobre los términos legales para presentar descargos o recursos.',
                        'Pedirle que abandone las instalaciones de la entidad por alterar el orden público.',
                        'Modificar de inmediato las cifras en la base de datos de la DIAN bajo su propio criterio para calmar el descontento.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 29 de la C.P. consagra el debido proceso aplicable a toda actuación administrativa. El servidor público debe garantizar el derecho de contradicción, verificar los antecedentes en el sistema y orientar con claridad sobre las vías legales de defensa.',
                },
                {
                    text: 'El Director Seccional solicita verbalmente al Gestor I de Asistencia al Usuario que atienda de manera preferencial y fuera de turno a un empresario conocido, omitiendo exigirle el certificado de existencia y representación legal para actualizar el RUT de su sociedad. Conforme al Código General Disciplinario (Ley 1952 de 2019 / Ley 2094 de 2021) y el principio de legalidad (Art. 6 C.P.), el servidor debe:',
                    options: [
                        'Acceder a la solicitud del superior de inmediato para evitar roces laborales y represalias en la evaluación de desempeño.',
                        'Explicar respetuosamente al superior que la omisión de requisitos legales vulnera la igualdad y la ley; si el superior insiste, debe exigir la orden por escrito y motivada mediante el derecho de representación antes de proceder.',
                        'Llamar a los medios de comunicación y a la policía para denunciar públicamente al Director Seccional en ese instante.',
                        'Realizar el trámite cobrando al empresario un valor en efectivo por agilización.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 38 de la Ley 1952 de 2019 consagra el deber de cumplir órdenes legítimas y el derecho de representación cuando una instrucción vulnere la ley. El trámite preferencial sin soportes atenta contra la moralidad y la igualdad administrativa.',
                },
                {
                    text: 'En una Dirección Seccional de la DIAN se genera una vacante temporal en el empleo de Gestor II (Grado 02). Conforme al Decreto Ley 071 de 2020 (Régimen Específico de Carrera de la DIAN), ¿cuál es el mecanismo obligatorio de provisión preferente?',
                    options: [
                        'Contratar directamente a una persona externa mediante contrato de prestación de servicios por razones de urgencia.',
                        'Proveer la vacante mediante encargo con el empleado con derechos de carrera del empleo inmediatamente inferior (Gestor I) que cumpla los requisitos, no tenga sanción disciplinaria y cuente con evaluación de desempeño sobresaliente.',
                        'Elegir al servidor provisional con mayor tiempo de antigüedad en la seccional.',
                        'Someter el puesto a una votación democrática entre los funcionarios del sindicato seccional.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 19 del Decreto Ley 071 de 2020 establece que las vacantes temporales o definitivas deben proveerse prioritariamente mediante encargo a servidores de carrera administrativa que cumplan con el perfil, calificación sobresaliente y ausencia de antecedentes disciplinarios.',
                },
                {
                    text: 'Un Gestor I en el Punto de Contacto recibe la solicitud de inscripción en el RUT de una sociedad comercial cuyo representante legal y socio mayoritario es su hermano. Conforme al artículo 11 del CPACA y el régimen disciplinario sobre conflicto de intereses, ¿qué debe hacer el servidor?',
                    options: [
                        'Atender el trámite de su familiar con máxima celeridad para demostrar la eficiencia del servicio.',
                        'Declararse formalmente impedido de inmediato por escrito ante su superior jerárquico, absteniéndose de tramitar o validar la solicitud de su pariente para salvaguardar la imparcialidad.',
                        'Pedirle a un compañero que use su usuario y contraseña institucional para tramitarlo a nombre del Gestor I.',
                        'Tramitar la solicitud pero no entregar el certificado hasta que pasen quince días hábiles.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 11 numeral 1 del CPACA y la Ley 1952 de 2019 establecen causal obligatoria de impedimento cuando exista parentesco hasta el cuarto grado de consanguinidad con el peticionario, debiendo apartarse formalmente del conocimiento del caso.',
                },
                {
                    text: 'Durante la jornada laboral, un usuario ofrece una suma de dinero en efectivo a un Gestor I en gratitud por haberle orientado diligentemente en el desbloqueo de su cuenta en el Muisca. Conforme al Código General Disciplinario y al Código de Integridad de la DIAN, el servidor debe:',
                    options: [
                        'Aceptar el dinero justificando que el servicio ya concluyó satisfactoriamente.',
                        'Rechazar de plano el dinero y los obsequios, advirtiendo al ciudadano que el servicio de la DIAN es absolutamente gratuito y que recibir dádivas constituye falta gravísima dolosa.',
                        'Recibir el dinero pero donarlo a una fundación benéfica.',
                        'Aceptar el regalo si el usuario firma una carta manifestando que fue voluntario.',
                    ],
                    correct: 1,
                    explanation: 'La Ley 1952 de 2019 tipifica como falta gravísima solicitar o recibir dádivas o dinero por el ejercicio de las funciones públicas. El servidor debe rechazar cualquier pago y recordar la absoluta gratuidad de los servicios del Estado.',
                },
                {
                    text: 'Conforme al Decreto 1742 de 2020 (Estructura Orgánica de la DIAN), ¿cuál de las siguientes dependencias es la encargada de fijar los lineamientos de atención al usuario, diseño de canales y fomento de la cultura tributaria a nivel nacional?',
                    options: [
                        'La Dirección de Gestión del Servicio a través de la Subdirección de Asistencia al Ciudadano.',
                        'La Dirección de Gestión de Policía Fiscal y Aduanera (POLFA).',
                        'La Subdirección de Asuntos Arancelarios y Aduaneros.',
                        'La Oficina de Control Disciplinario Interno.',
                    ],
                    correct: 0,
                    explanation: 'El Decreto 1742 de 2020 asigna a la Dirección de Gestión del Servicio y a la Subdirección de Asistencia al Ciudadano la función rectora de diseñar e implementar los protocolos de atención y las políticas de servicio al ciudadano.',
                },
                {
                    text: 'Un Gestor I nombrado en período de prueba tras superar el concurso de méritos de la CNSC desea conocer sus condiciones laborales. Conforme al Decreto Ley 071 de 2020, este período de prueba:',
                    options: [
                        'Dura un año lectivo y solo puede ser evaluado por el Ministro de Hacienda.',
                        'Tiene una duración de seis (6) meses; superado con calificación sobresaliente o satisfactoria, adquiere los derechos de carrera y es escalafonado en el registro público.',
                        'Otorga derechos de carrera definitivos desde el primer día de posesión sin importar la evaluación.',
                        'Permite ser despedido libremente sin motivación ni acto administrativo.',
                    ],
                    correct: 1,
                    explanation: 'El Decreto Ley 071 de 2020 fija el período de prueba en seis (6) meses. La calificación aprobatoria en este período es el requisito indispensable para adquirir los derechos de carrera administrativa.',
                },
                {
                    text: 'El principio constitucional de "Progresividad Tributaria" consagrado en el artículo 363 de la Constitución Política significa que:',
                    options: [
                        'Todos los ciudadanos deben pagar la misma tarifa fija en pesos sin considerar sus ingresos.',
                        'La carga impositiva aumenta proporcionalmente a medida que es mayor la capacidad económica del contribuyente.',
                        'Los tributos solo pueden recaudarse una vez por cada período presidencial.',
                        'Las leyes de impuestos se aplican retroactivamente a hechos del pasado.',
                    ],
                    correct: 1,
                    explanation: 'La progresividad tributaria (Art. 363 C.P.) exige que a mayor capacidad económica y generación de renta, mayor sea la tarifa porcentual con la que el ciudadano contribuye al sostenimiento del Estado.',
                },
                {
                    text: 'Un profesional que laboró como Gestor I en la DIAN renunció a su cargo hace 8 meses. Hoy acude como apoderado de una empresa para tramitar un recurso contra una liquidación oficial que él mismo proyectó cuando era funcionario. Conforme al régimen de incompatibilidades post-empleo (Ley 1474 de 2011 y Ley 1952 de 2019):',
                    options: [
                        'Puede actuar libremente porque ya no tiene vínculo laboral con la entidad.',
                        'Está incurso en una incompatibilidad legal expresa que le prohíbe gestionar directa o indirectamente ante la entidad durante los dos (2) años siguientes a su retiro respecto de asuntos que conoció en el ejercicio de su cargo.',
                        'Solo puede actuar si el Director Seccional le otorga un permiso verbal.',
                        'La incompatibilidad dura únicamente 30 días calendario tras la renuncia.',
                    ],
                    correct: 1,
                    explanation: 'El Estatuto Anticorrupción y el Código General Disciplinario prohíben a los exservidores públicos gestionar asuntos que conoció en su cargo durante los dos (2) años siguientes a su desvinculación, para evitar tráfico de influencias y uso indebido de información privilegiada.',
                },
                {
                    text: 'El Gestor I que atiende en la ventanilla de un Punto de Contacto de la DIAN se ubica dentro del Sistema de Control Interno (MIPG) en:',
                    options: [
                        'La Tercera Línea de Defensa, encargada de la auditoría posterior independiente.',
                        'La Primera Línea de Defensa (operativa), siendo responsable directo de aplicar los controles preventivos diarios en la validación documental y registro de los trámites que atiende.',
                        'La Línea Estratégica, responsable de expedir leyes de la República.',
                        'Una posición no contemplada en el modelo de control estatal.',
                    ],
                    correct: 1,
                    explanation: 'Bajo el esquema de las Tres Líneas del MIPG (Decreto 1499 de 2017), la Primera Línea está compuesta por los servidores operativos (como el Gestor I), responsables directos de ejecutar los controles cotidianos contra errores y fraudes.',
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
                    text: 'Un ciudadano radica una petición solicitando copia simple de las resoluciones de sanción que la DIAN le impuso en los últimos tres años. Conforme a la Ley 1755 de 2015, ¿cuál es el plazo perentorio que tiene la entidad para resolver la entrega de copias?',
                    options: [
                        'Treinta (30) días calendario por requerir búsqueda en el archivo.',
                        'Diez (10) días hábiles; de no responder en dicho término, la solicitud se entenderá aceptada y la DIAN deberá entregar las copias gratuitamente dentro de los 3 días siguientes.',
                        'Quince (15) días hábiles como toda petición sin consecuencias por vencimiento.',
                        'Tres (3) meses conforme a la regla del silencio administrativo.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 14 numeral 1 de la Ley 1755 de 2015 establece que las peticiones de documentos e información deben resolverse dentro de los diez (10) días hábiles siguientes a su recepción, operando la entrega obligatoria gratuita si no se resuelve en término.',
                },
                {
                    text: 'Una microempresaria presenta una petición ante la DIAN para corregir su actividad económica en el RUT, pero omite anexar la certificación comercial que sustenta el cambio. Conforme al artículo 17 del CPACA (Ley 1437/2011 sustituido por Ley 1755/2015), ¿qué debe hacer el Gestor I?',
                    options: [
                        'Rechazar de plano la petición y archivarla de inmediato sin comunicarle nada a la ciudadana.',
                        'Requerir a la peticionaria por escrito y por una sola vez dentro de los diez (10) días siguientes a la radicación, señalándole los documentos faltantes para que subsane en el plazo de un (1) mes.',
                        'Esperar quince días y declarar un silencio administrativo negativo.',
                        'Llamar a la usuaria a cobrarle una asesoría para corregirle el formulario.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 17 del CPACA ordena que ante peticiones incompletas, la autoridad requerirá al interesado por escrito y por una sola vez dentro de los 10 días siguientes a la radicación para que aporte lo necesario en el plazo de 1 mes.',
                },
                {
                    text: 'Vencido el término de un mes otorgado a un peticionario para subsanar los requisitos faltantes de un trámite de RUT sin que este aporte los documentos ni solicite prórroga, la DIAN debe:',
                    options: [
                        'Imponerle una multa coercitiva de 50 salarios mínimos mensuales.',
                        'Declarar el Desistimiento Tácito y ordenar el archivo del expediente mediante acto administrativo motivado, contra el cual procede únicamente recurso de reposición.',
                        'Aprobar el trámite asumiendo que los documentos no eran necesarios.',
                        'Remitir el caso a la policía para su captura preventiva.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 17 del CPACA establece que vencido el mes de requerimiento sin subsanación, la administración declarará el desistimiento tácito de la petición y ordenará el archivo del expediente mediante resolución motivada.',
                },
                {
                    text: 'Un contribuyente interpone recurso de reposición contra una resolución seccional que le negó la actualización de su correo de notificación en el RUT. Conforme al artículo 76 del CPACA, ¿cuál es el plazo para radicar formalmente su recurso?',
                    options: [
                        'Cinco (5) días hábiles desde la fecha en que radicó la petición inicial.',
                        'Diez (10) días hábiles siguientes a la fecha de notificación del acto administrativo.',
                        'Treinta (30) días calendario ante un juez administrativo.',
                        'En cualquier tiempo durante los siguientes diez años.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 76 del CPACA estipula que los recursos de reposición y apelación deberán interponerse por escrito dentro de los diez (10) días hábiles siguientes a la notificación del acto que se controvierte.',
                },
                {
                    text: 'El Gestor I detecta que en una resolución seccional en firme se escribió por error mecanográfico "NIT 900.543.210" en lugar de "NIT 900.543.211", el cual coincide con todos los antecedentes del expediente. Conforme al artículo 45 del CPACA:',
                    options: [
                        'Se debe anular todo el procedimiento y empezar de nuevo desde la radicación.',
                        'Se puede corregir el error simplemente mecanográfico en cualquier tiempo, de oficio o a petición de parte, expidiendo un acto aclaratorio que no altera la decisión de fondo.',
                        'El acto no se puede tocar y el contribuyente debe cambiar su NIT en el banco.',
                        'Se debe imponer una sanción disciplinaria al contribuyente.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 45 del CPACA autoriza que en cualquier tiempo se puedan corregir los errores aritméticos o mecanográficos en los actos administrativos, siempre que no modifiquen el sentido de la decisión de fondo.',
                },
                {
                    text: 'Se recibe en el buzón virtual de la DIAN una petición anónima que denuncia con pruebas fotográficas y documentos contables un esquema de evasión de IVA en un granero mayorista. Conforme a las normas de procedimiento administrativo y PQRSD:',
                    options: [
                        'Se debe eliminar de inmediato el mensaje porque las leyes colombianas prohíben tramitar denuncias anónimas.',
                        'Se debe admitir y tramitar formalmente la denuncia, direccionándola al área de Fiscalización competente por contener hechos concretos, precisos y verificables de interés general y fiscal.',
                        'Se debe exigir al denunciante que revele su identidad ante un notario público.',
                        'Se debe archivar hasta que el comerciante denunciado admita su falta.',
                    ],
                    correct: 1,
                    explanation: 'La normativa de PQRSD y la jurisprudencia constitucional señalan que las peticiones y denuncias anónimas deben tramitarse obligatoriamente cuando aporten hechos concretos, indicios o pruebas objetivas que permitan verificar una presunta irregularidad.',
                },
                {
                    text: 'Un contribuyente es notificado de un pliego de cargos mediante Notificación Electrónica. Conforme al artículo 566-1 del Estatuto Tributario, ¿cuándo empiezan a correr los términos legales para que el ciudadano responda?',
                    options: [
                        'En el instante exacto en que el sistema informático envía el correo.',
                        'A partir del quinto (5) día hábil siguiente a la entrega del correo electrónico o acuse de recibo en el buzón informado en el RUT.',
                        'A los treinta días hábiles de haber sido publicado en la página de inicio de la DIAN.',
                        'Solo cuando el ciudadano acuda físicamente a firmar el libro de radicados.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 566-1 del E.T. dispone que la notificación electrónica surte efectos para el contribuyente a partir del quinto (5) día hábil siguiente a aquel en que fue entregado el correo electrónico en la dirección registrada en el RUT.',
                },
                {
                    text: 'Un ciudadano radica una queja por la atención recibida en un punto de contacto. Conforme a la Ley 1755 de 2015, el término oportuno para responder de fondo la queja ciudadana es de:',
                    options: [
                        'Quince (15) días hábiles siguientes a su recepción.',
                        'Seis (6) meses con informe bimestral al sindicato.',
                        'Cuarenta y ocho (48) horas bajo pena de arresto.',
                        'No existe término legal por ser un trámite secundario.',
                    ],
                    correct: 0,
                    explanation: 'Las quejas y reclamos se rigen por el término general del derecho de petición de quince (15) días hábiles consagrado en el artículo 14 de la Ley 1755 de 2015.',
                },
                {
                    text: '¿En qué caso se configura el "Silencio Administrativo Positivo" en las actuaciones adelantadas ante la administración tributaria?',
                    options: [
                        'En cualquier petición ciudadana transcurridos quince días sin respuesta.',
                        'Únicamente en los casos expresamente consagrados por una norma legal especial que prevea dicho efecto favorable y requiriendo protocolización notarial.',
                        'Siempre que el solicitante sea un adulto mayor de 70 años.',
                        'Cuando el Director Seccional olvide firmar el acto de notificación.',
                    ],
                    correct: 1,
                    explanation: 'El silencio administrativo positivo es de interpretación restrictiva y excepcional: solo opera cuando la ley de manera expresa lo dispone para un procedimiento específico (Art. 84 CPACA).',
                },
                {
                    text: 'Un veedor ciudadano solicita mediante derecho de petición las declaraciones de renta de varios secretarios de despacho de la alcaldía. El Gestor I debe proyectar la respuesta en el sentido de que:',
                    options: [
                        'Se deben entregar de inmediato las copias porque prima la publicidad de los funcionarios públicos.',
                        'La información solicitada está protegida por la Reserva Legal Tributaria (Art. 583 E.T.), por lo cual legalmente no puede suministrarse a particulares ni veedurías sin mandato de autoridad judicial competente.',
                        'Solo se entregan si el veedor paga una tarifa extraordinaria.',
                        'Se publican en la cartelera del Punto de Contacto.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 583 del Estatuto Tributario ampara con reserva legal absoluta las declaraciones tributarias y bases gravables, prevaleciendo sobre el derecho de acceso general de particulares.',
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
                    text: 'Un comerciante acude al Punto de Contacto solicitando retirar del RUT la responsabilidad 48 (Responsable del IVA) y pasar a la 49 (No responsable). Sus ingresos brutos del año inmediatamente anterior fueron de 2.800 UVT, pero el Gestor I constata que hace dos años sus ingresos fiscales fueron de 4.100 UVT. De conformidad con el parágrafo 3 del artículo 437 del Estatuto Tributario, el servidor debe:',
                    options: [
                        'Aprobar el retiro de la responsabilidad del IVA porque el año pasado cumplió con el tope de menos de 3.500 UVT.',
                        'Rechazar motivadamente la solicitud, explicándole que la norma exige haber cumplido los topes de no responsable durante los tres (3) años fiscales anteriores consecutivos.',
                        'Borrar la declaración de hace dos años para beneficiar al comerciante.',
                        'Suspenderle el RUT por intentar defraudar al Estado.',
                    ],
                    correct: 1,
                    explanation: 'El parágrafo 3 del artículo 437 del E.T. exige que para pasar de responsable a no responsable del IVA se debe acreditar el cumplimiento ininterrumpido de todos los topes legales durante los tres (3) años fiscales anteriores consecutivos.',
                },
                {
                    text: 'Una madre acude con su hijo de 16 años, quien obtuvo ingresos por derechos de autor y necesita inscribirse en el RUT para formalizar un contrato. Para validar este trámite de un menor de edad conforme al Decreto 1625 de 2016, el Gestor I debe exigir:',
                    options: [
                        'Que el menor espere a cumplir 18 años para poder figurar en el RUT.',
                        'La tarjeta de identidad del menor, el documento que acredite la representación legal (registro civil de nacimiento) y la cédula de ciudadanía de la madre que actúa en su representación.',
                        'Una fianza bancaria de 100 salarios mínimos.',
                        'Una orden firmada por un magistrado de la Corte Suprema.',
                    ],
                    correct: 1,
                    explanation: 'El Decreto 1625 de 2016 prevé la inscripción de menores de edad en el RUT a través de sus representantes legales (padres o tutor), exigiendo tarjeta de identidad/registro civil y la identificación del representante.',
                },
                {
                    text: 'Un apoderado acude al Punto de Contacto para tramitar la inscripción en el RUT de un consorcio adjudicatario de una obra pública. Conforme a las normas registrales de la DIAN, el Gestor I debe verificar:',
                    options: [
                        'Que el consorcio esté matriculado como sociedad anónima en la Cámara de Comercio.',
                        'El documento privado de constitución del consorcio donde conste su objeto, vigencia, porcentaje de participación y la designación del representante legal, junto con los RUT formalizados de los consorciados.',
                        'Que el consorcio entregue una hipoteca a favor de la DIAN.',
                        'Que cada integrante del consorcio renuncie a su personería jurídica.',
                    ],
                    correct: 1,
                    explanation: 'Los consorcios y uniones temporales se inscriben en el RUT aportando el documento de conformación contractual con designación de representante y vigencia, asignándoseles un NIT con vigencia sujeta al contrato.',
                },
                {
                    text: 'Tres comunicaciones oficiales remitidas a la dirección procesal de un contribuyente registrada en la casilla 41 del RUT son devueltas con la causal formal "dirección inexistente / predio demolido". Conforme al artículo 1.6.1.2.16 del Decreto 1625 de 2016, procede:',
                    options: [
                        'La Cancelación definitiva del RUT.',
                        'La Suspensión del RUT por la causal de no ubicación del contribuyente, inhabilitando temporalmente el registro para operaciones comerciales y aduaneras hasta su actualización formal.',
                        'Asignarle de oficio una dirección aleatoria en otra ciudad.',
                        'Archivar el caso sin registrar ninguna novedad.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 1.6.1.2.16 del DURT 1625 de 2016 establece la suspensión de la inscripción en el RUT cuando las comunicaciones oficiales sean devueltas por causales de no ubicación del contribuyente.',
                },
                {
                    text: 'Un contribuyente persona natural cambia su domicilio fiscal el 10 de octubre. De conformidad con el artículo 658-3 del Estatuto Tributario, ¿cuál es el plazo que tiene para actualizar su RUT y la sanción si no lo hace?',
                    options: [
                        'Seis meses de plazo sin sanción económica.',
                        'Dentro del mes siguiente al hecho (hasta el 10 de noviembre); si no lo hace, se sanciona con dos (2) UVT por cada día de mora en la actualización.',
                        'Quince días bajo sanción de arresto de fin de semana.',
                        'No existe obligación de actualizar si el cambio es dentro del mismo barrio.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 658-3 numeral 3 del E.T. impone el deber de actualizar el RUT dentro del mes siguiente a la ocurrencia del hecho. El retraso acarrea una sanción de 2 UVT por cada día de mora.',
                },
                {
                    text: 'Un inspector de la DIAN constata que un establecimiento de comercio abierto al público no tiene exhibida en lugar visible la copia del RUT. Conforme al artículo 658-3 numeral 2 del Estatuto Tributario, la sanción aplicable es:',
                    options: [
                        'Pena privativa de la libertad para el administrador.',
                        'Clausura del establecimiento de comercio por tres (3) días o multa de diez (10) UVT.',
                        'Expropiación de las mercancías del local.',
                        'Una felicitación verbal por discreción comercial.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 658-3 numeral 2 del E.T. sanciona a los obligados a inscribirse en el RUT que no exhiban la certificación en lugar visible del establecimiento con clausura del local por 3 días o multa de 10 UVT.',
                },
                {
                    text: 'En el Formulario 001 del RUT, ¿qué información esencial contienen las casillas 46 a 50 de la Hoja 1?',
                    options: [
                        'Los nombres de los proveedores de insumos.',
                        'La clasificación de las actividades económicas principal y secundarias con sus fechas de inicio, codificadas bajo el estándar CIIU Rev. 4 A.C. adoptado en la Resolución DIAN 000139 de 2020.',
                        'El balance general de activos y pasivos en dólares.',
                        'Los números de cuenta corriente en el Banco de la República.',
                    ],
                    correct: 1,
                    explanation: 'Las casillas 46 a 50 identifican la actividad económica principal y secundarias conforme al código internacional CIIU Rev. 4 adoptado por la DIAN en la Resolución 000139 de 2020.',
                },
                {
                    text: 'Para tramitar la cancelación del RUT de una sociedad comercial por liquidación definitiva, conforme al artículo 1.6.1.2.18 del Decreto 1625 de 2016, es requisito previo e indispensable:',
                    options: [
                        'Que todos los empleados se trasladen a otra empresa del grupo.',
                        'Presentar el documento de liquidación formal inscrito en la Cámara de Comercio con cancelación de matrícula mercantil y estar a paz y salvo con las obligaciones tributarias sustanciales y formales.',
                        'Pagar una tarifa de cincuenta salarios mínimos en la seccional.',
                        'Esperar diez años después del cierre del último establecimiento.',
                    ],
                    correct: 1,
                    explanation: 'La cancelación del RUT de personas jurídicas exige allegar el acta de liquidación registrada en Cámara de Comercio con cancelación de personería y matrícula, así como la verificación previa de paz y salvo fiscal.',
                },
                {
                    text: 'Un abogado acude a solicitar una copia y actualización de la actividad económica del RUT de un cliente. Para que el Gestor I admita el trámite conforme a la normatividad de la DIAN, el apoderado debe presentar:',
                    options: [
                        'Un mensaje de texto de WhatsApp donde el cliente lo autoriza.',
                        'Poder especial con nota de presentación personal (o poder general conferido por escritura pública vigente) y cédula de ciudadanía original del apoderado.',
                        'Su carnet de estudiante de derecho sin poder alguno.',
                        'Una carta simple sin firma ni presentación personal.',
                    ],
                    correct: 1,
                    explanation: 'Para actuar ante la DIAN en nombre de terceros se exige acreditar personería mediante poder especial con nota de presentación personal ante notario o autoridad competente, o poder general por escritura pública.',
                },
                {
                    text: '¿En cuál de las siguientes casillas del Formulario 001 del RUT se registra la responsabilidad "47" correspondiente al Régimen Simple de Tributación (RST)?',
                    options: [
                        'Casilla 4 (NIT).',
                        'Casilla 44 (Correo electrónico de notificación).',
                        'Casilla 53 (Responsabilidades, Calidades y Atributos).',
                        'Casilla 89 (Firma del declarante).',
                    ],
                    correct: 2,
                    explanation: 'La casilla 53 de la Hoja 1 del RUT alberga los códigos numéricos de las responsabilidades fiscales; el código 47 identifica a los contribuyentes que optaron por el Régimen Simple de Tributación (RST).',
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
                    text: 'Una mujer de 72 años en silla de ruedas llega al Punto de Contacto de la DIAN solicitando una copia de su RUT para un trámite de salud. El orientador de la entrada le indica que no la puede dejar pasar porque no agendó cita previa por la página web. El Gestor I que presencia la situación debe:',
                    options: [
                        'Respaldar la decisión del orientador porque el sistema de citas es estricto para toda la población.',
                        'Garantizar de inmediato la atención prioritaria y preferencial a la ciudadana sin exigirle cita previa (Ley 1757 de 2015), orientarla en un módulo accesible y entregarle su RUT con trato digno y cálido.',
                        'Sugerirle que busque un café internet para que aprenda a pedir citas virtuales.',
                        'Cobrarle un recargo en efectivo por atención no agendada.',
                    ],
                    correct: 1,
                    explanation: 'La Ley 1757 de 2015 y los protocolos de servicio de la DIAN consagran la atención prioritaria obligatoria y sin cita previa para adultos mayores y personas con discapacidad, garantizando el acceso a sus derechos fundamentales.',
                },
                {
                    text: 'La política de "Lenguaje Claro" adoptada por la DIAN exige a los servidores públicos en su comunicación diaria con los ciudadanos:',
                    options: [
                        'Usar términos jurídicos en latín y citas de sentencias extensas para demostrar jerarquía técnica.',
                        'Expresar las instrucciones y requisitos en palabras sencillas, comprensibles y directas, indicando con claridad los pasos, plazos y documentos necesarios para el trámite.',
                        'Responder únicamente con monosílabos para abreviar el tiempo de ventanilla.',
                        'Entregar fotocopias del Estatuto Tributario para que el ciudadano descifre su obligación.',
                    ],
                    correct: 1,
                    explanation: 'El Lenguaje Claro busca que la información pública sea fácil de entender, encontrar y usar, promoviendo la cercanía con el ciudadano y el cumplimiento voluntario de los deberes tributarios.',
                },
                {
                    text: 'A un contribuyente se le vence hoy el plazo para declarar renta y su Instrumento de Firma Electrónica (IFE / e-Firma) está inactivo. Desesperado, solicita ayuda en el Punto de Contacto. La orientación técnica correcta que debe brindar el Gestor I es:',
                    options: [
                        'Decirle que una firma vencida no puede renovarse el mismo día y que debe pagar la sanción de extemporaneidad.',
                        'Guiarlo en la generación y renovación inmediata en línea de su e-Firma a través del portal web de la DIAN utilizando la clave dinámica enviada a su correo o celular registrado en el RUT.',
                        'Prestarle la firma electrónica personal del Gestor I para que firme.',
                        'Aconsejarle que estampe una firma escaneada manual sobre el formulario PDF.',
                    ],
                    correct: 1,
                    explanation: 'La DIAN permite la renovación autónoma e inmediata del Instrumento de Firma Electrónica (IFE) mediante autogestión en su portal web con código OTP dinámico, resolviendo contingencias el mismo día.',
                },
                {
                    text: 'Un contribuyente llega a la ventanilla gritando y usando palabras ofensivas porque se le debitó un cobro automático que considera injusto. Bajo la competencia de "Manejo de Situaciones Difíciles y Desescalamiento", el Gestor I debe:',
                    options: [
                        'Responder con insultos similares para no dejarse intimidar.',
                        'Mantener la calma y el autocontrol, escuchar con respeto y empatía al usuario sin confrontación personal, invitarlo a dialogar con serenidad y revisar en el sistema el origen del cobro para orientarlo formalmente en el trámite de reclamo.',
                        'Desconectar el computador y marcharse del puesto de trabajo.',
                        'Llamar a los guardias de seguridad para que lo golpeen de inmediato.',
                    ],
                    correct: 1,
                    explanation: 'El protocolo de servicio al ciudadano exige autocontrol, escucha activa y contención emocional para desescalar el conflicto con profesionalismo, encauzando la queja a través de los canales formales de solución.',
                },
                {
                    text: 'Un ciudadano que reside en el campo no cuenta con computador y desea saber si existe un canal telefónico oficial de la DIAN para consultar sus fechas de vencimiento de impuestos. El Gestor I le informa que:',
                    options: [
                        'La DIAN eliminó todos los teléfonos y solo atiende por videollamadas en inglés.',
                        'Puede comunicarse gratuitamente a la línea nacional del Contact Center de la DIAN, donde operadores especializados orientan sobre el calendario tributario y estado del RUT.',
                        'Debe llamar directamente al celular del Ministro de Hacienda.',
                        'El servicio telefónico tiene un costo de 1 UVT por minuto.',
                    ],
                    correct: 1,
                    explanation: 'El canal telefónico (Contact Center DIAN) ofrece atención gratuita y personalizada a nivel nacional, siendo fundamental para usuarios con barreras de conectividad digital o acceso remoto.',
                },
                {
                    text: '¿Cuál es la función pedagógica principal de los "Kioscos de Autogestión Guiada" implementados en los Puntos de Contacto de la DIAN?',
                    options: [
                        'Vender café y periódicos a los visitantes.',
                        'Facilitar estaciones de cómputo donde servidores públicos de la DIAN enseñan y acompañan a los contribuyentes a realizar sus trámites en línea, promoviendo la inclusión digital y la autogestión futura.',
                        'Almacenar expedientes físicos dados de baja.',
                        'Reemplazar a los funcionarios públicos por cajeros automáticos privados.',
                    ],
                    correct: 1,
                    explanation: 'Los kioscos de autogestión guiada combinan tecnología y pedagogía: el servidor guía al usuario para que aprenda a descargar su RUT, e-Firma o citas por sí mismo en futuras ocasiones.',
                },
                {
                    text: 'En relación con los "Clientes TACI", la visión de servicio de la DIAN en el subproceso de Asistencia al Usuario se fundamenta en:',
                    options: [
                        'Tratar al contribuyente como un enemigo que busca evadir por naturaleza.',
                        'Facilitar el cumplimiento voluntario mediante cercanía, información transparente, simplificación de procedimientos y trato digno y respetuoso.',
                        'Imponer el mayor número posible de sanciones pecuniarias para cumplir metas de recaudo represivo.',
                        'Ocultar los formularios para que las personas contraten intermediarios.',
                    ],
                    correct: 1,
                    explanation: 'El macroproceso de Cercanía con el Ciudadano concibe al contribuyente como un aliado en el sostenimiento del Estado, facilitando el cumplimiento voluntario y oportuno de sus deberes fiscales.',
                },
                {
                    text: 'Durante la atención presencial, un usuario extranjero con dificultades para hablar español acude a inscribirse en el RUT como inversionista. El Gestor I debe:',
                    options: [
                        'Negarle el servicio y decirle que no puede ser atendido hasta que aprenda español fluido.',
                        'Apoyarse en los protocolos de servicio incluyente de la DIAN, utilizando herramientas de traducción institucional y verificando con paciencia los documentos de identificación y representación correspondientes.',
                        'Retener su pasaporte extranjero como garantía.',
                        'Cobrarle una tarifa en dólares por el servicio de traducción.',
                    ],
                    correct: 1,
                    explanation: 'La atención incluyente exige disposición de servicio, paciencia y uso de herramientas de apoyo para garantizar el acceso al registro fiscal sin discriminación por razones de nacionalidad o idioma.',
                },
                {
                    text: 'El Instrumento de Firma Electrónica (IFE) emitido por la DIAN tiene una vigencia legal de:',
                    options: [
                        'Un mes calendario.',
                        'Tres (3) años, contados a partir de su generación formal en el sistema.',
                        'Diez años sin necesidad de renovación.',
                        'Solo es válido para una única firma y se destruye.',
                    ],
                    correct: 1,
                    explanation: 'El IFE tiene una vigencia legal de tres (3) años conforme a las resoluciones reglamentarias de la DIAN, pudiendo renovarse en línea antes de su vencimiento.',
                },
                {
                    text: 'Al finalizar un trámite de actualización del RUT en ventanilla, el protocolo de cierre del servicio exige al Gestor I:',
                    options: [
                        'Pedirle al usuario su clave personal del banco para verificar el saldo.',
                        'Hacer entrega inmediata del certificado formalizado con marca de agua oficial, verificar con el ciudadano la exactitud de los datos e invitarlo a evaluar la calidad de la atención recibida.',
                        'Decirle al ciudadano que regrese la próxima semana a ver si el trámite fue aprobado.',
                        'Quedarse con la cédula del usuario archivada en la seccional.',
                    ],
                    correct: 1,
                    explanation: 'El cierre formal del trámite exige entregar el RUT formalizado, corroborar la conformidad de los datos con el ciudadano y aplicar la encuesta de satisfacción para el mejoramiento continuo.',
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
                    text: 'Un contribuyente acude a la DIAN preguntando si puede acogerse voluntariamente al Régimen Simple de Tributación (RST) para pagar una tarifa menor sobre sus ingresos que la que pagaba en el régimen ordinario de renta. El Gestor I identifica que su conducta corresponde a:',
                    options: [
                        'Evasión fiscal punible con cárcel inmediata.',
                        'Economía de Opción, la cual es una conducta plenamente legítima mediante la cual el contribuyente elige la alternativa fiscal más favorable que la propia ley le ofrece.',
                        'Elusión fraudulenta y contrabando técnico.',
                        'Una infracción disciplinaria contra la DIAN.',
                    ],
                    correct: 1,
                    explanation: 'La economía de opción es la facultad legítima del contribuyente de organizar sus negocios y acogerse a los regímenes legales más favorables o beneficiosos previstos expresamente por el legislador (como el RST).',
                },
                {
                    text: 'En el marco de la Ley 223 de 1995 de fomento de la cultura tributaria, la DIAN lidera los Núcleos de Apoyo Contable y Fiscal (NAF). La labor misional de estos núcleos consiste en:',
                    options: [
                        'Realizar embargos coactivos de cuentas bancarias a estudiantes universitarios.',
                        'Brindar asesoría y orientación fiscal gratuita a personas de bajos ingresos y microempresarios mediante convenios con facultades de contaduría y derecho, promoviendo la cultura de cumplimiento voluntario.',
                        'Sustituir a los auditores de la DIAN por personal voluntario no remunerado.',
                        'Cobrar comisiones por radicación de formularios en las universidades.',
                    ],
                    correct: 1,
                    explanation: 'Los NAF son una alianza pedagógica entre la DIAN y las universidades para prestar asistencia fiscal gratuita a personas vulnerables y emprendedores, fomentando la cultura de contribución ciudadana.',
                },
                {
                    text: 'Un comerciante obligado a facturar electrónicamente experimenta una falla eléctrica y de internet en su local durante 24 horas. Respecto a la expedición de facturas durante la contingencia, la norma tributaria ordena:',
                    options: [
                        'Cerrar el establecimiento y suspender las ventas hasta que vuelva la luz.',
                        'Expedir Factura de Talonario o de Papel por Contingencia debidamente autorizada por la DIAN, y una vez restablecido el sistema, transmitir electrónicamente dichas facturas dentro de las 48 horas siguientes.',
                        'Vender sin emitir ningún soporte ni comprobante a los clientes.',
                        'Emitir pagarés manuscritos en servilletas sin numeración.',
                    ],
                    correct: 1,
                    explanation: 'La resolución de facturación electrónica contempla la Factura de Talonario por Contingencia para situaciones de fuerza mayor, debiendo transmitirse a la DIAN dentro del plazo normativo una vez superada la falla.',
                },
                {
                    text: 'Un restaurante obligado a facturar es sorprendido en una visita de control fiscal vendiendo alimentos sin expedir factura electrónica ni documento equivalente. Conforme al artículo 657 del Estatuto Tributario, la sanción aplicable es:',
                    options: [
                        'Cárcel de diez años para el chef de cocina.',
                        'Clausura y cierre del establecimiento de comercio por el término de tres (3) días con imposición de sellos oficiales.',
                        'Confiscación de las mesas y cubiertos del restaurante.',
                        'Una amonestación verbal sin registro en el expediente.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 657 numeral 1 del E.T. sanciona la no expedición de factura estando obligado con la clausura o cierre del establecimiento de comercio por tres (3) días mediante imposición de sellos oficiales.',
                },
                {
                    text: 'Una persona natural asalariada consulta en ventanilla qué beneficio fiscal tiene al exigir siempre la Factura Electrónica de Venta en sus compras personales pagadas con tarjeta débito. El Gestor I le explica conforme a la Ley 2277 de 2022 que:',
                    options: [
                        'No tiene ningún beneficio y solo beneficia al almacén vendedor.',
                        'Puede deducir en su declaración de renta anual el uno por ciento (1%) del valor de las compras soportadas con factura electrónica validada y pagadas por medios electrónicos, hasta el límite legal.',
                        'La DIAN le regalará un automóvil al final del año.',
                        'Queda exonerada de pagar el impuesto predial de su casa.',
                    ],
                    correct: 1,
                    explanation: 'La reforma tributaria (Ley 2277 de 2022) adicionó al artículo 336 del E.T. la deducción del 1% del valor de las adquisiciones soportadas con factura electrónica y pagadas electrónicamente para personas naturales.',
                },
                {
                    text: '¿Cuál es la principal diferencia entre la "Evasión Fiscal" y la "Elusión Fiscal"?',
                    options: [
                        'La evasión es legal y la elusión es un delito penado.',
                        'La evasión viola de manera directa y flagrante la ley penal/tributaria (ej. ocultar ingresos reales), mientras que la elusión utiliza vacíos, ficciones o artificios jurídicos para evitar el pago sin violar la letra literal de la norma.',
                        'Ambos términos significan exactamente lo mismo en el Código Penal.',
                        'La evasión solo la cometen las personas jurídicas y la elusión las personas naturales.',
                    ],
                    correct: 1,
                    explanation: 'La evasión es el incumplimiento ilícito y directo de la obligación tributaria (ocultación, falsedad). La elusión manipula las formas jurídicas para eludir el tributo abusando de los vacíos de la ley.',
                },
                {
                    text: 'Un contribuyente acude angustiado tras recibir una "Comunicación Persuasiva" de la DIAN invitándolo a corregir su declaración de renta por omisión de ingresos reportados por terceros en medios magnéticos. El Gestor I debe aclararle que:',
                    options: [
                        'La comunicación persuasiva ya es una orden de embargo judicial ejecutoriada.',
                        'Se trata de un mecanismo de gestión persuasiva que busca su cumplimiento voluntario, permitiéndole corregir su declaración con sanción reducida antes de que la DIAN inicie el proceso administrativo formal con emplazamiento.',
                        'Debe ignorar la carta porque la DIAN no hace seguimiento a las omisiones.',
                        'Debe pagar una coima al Gestor I para archivar el requerimiento.',
                    ],
                    correct: 1,
                    explanation: 'La gestión persuasiva es una acción preventiva y pedagógica que alerta al contribuyente sobre discrepancias para que normalice su situación de forma voluntaria con menores costos sancionatorios.',
                },
                {
                    text: 'Una microempresa compra materias primas a un artesano independiente no obligado a facturar. Para soportar formalmente ese costo en su declaración de renta, el comprador debe emitir:',
                    options: [
                        'Un recibo de caja menor firmado por el conserje.',
                        'El Documento Soporte Electrónico en adquisiciones efectuadas a sujetos no obligados a expedir factura, transmitiéndolo a la DIAN para su validación.',
                        'Una letra de cambio por el valor de los bienes.',
                        'No se requiere ningún soporte si el pago fue en efectivo.',
                    ],
                    correct: 1,
                    explanation: 'El Documento Soporte Electrónico en compras a no obligados a facturar es el comprobante tributario obligatorio exigido por la DIAN para que el adquirente pueda deducir costos y gastos válidos.',
                },
                {
                    text: 'En relación con el Régimen Simple de Tributación (RST), ¿cuál de los siguientes es un beneficio sustancial para los contribuyentes inscritos?',
                    options: [
                        'Exoneración total del pago de pensiones y salud de los trabajadores.',
                        'No están sujetos a retención en la fuente a título del impuesto sobre la renta ni del ICA, y pueden descontar los aportes a pensiones pagados por el empleador.',
                        'Pueden omitir la expedición de facturas electrónicas.',
                        'Solo declaran una vez cada diez años.',
                    ],
                    correct: 1,
                    explanation: 'A los contribuyentes del RST no se les practica retención en la fuente a título de renta (Art. 911 E.T.) y se les permite descontar los aportes patronales a pensiones del impuesto a pagar en el RST.',
                },
                {
                    text: 'La promoción de la cultura tributaria ciudadana fundamentada en la Ley 223 de 1995 busca consolidar en Colombia:',
                    options: [
                        'La idea de que los impuestos son una carga autoritaria que debe esquivarse.',
                        'La comprensión de la tributación como un deber solidario y un bien público que hace posible financiar la educación, la salud, la justicia y la infraestructura de todos los colombianos.',
                        'El monopolio estatal sobre todas las empresas privadas.',
                        'La eliminación de los órganos de control fiscal y disciplinario.',
                    ],
                    correct: 1,
                    explanation: 'La cultura de la contribución busca crear conciencia cívica y corresponsabilidad social, concibiendo los tributos como el instrumento democrático para garantizar la equidad y el progreso del país.',
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
                    text: 'Un periodista acude al Punto de Contacto de la DIAN solicitando que el Gestor I le imprima las declaraciones de renta de los últimos cinco años de un candidato al senado para un reportaje de prensa. Conforme al artículo 583 del Estatuto Tributario, el servidor debe:',
                    options: [
                        'Entregar la información de inmediato por el principio de transparencia de las figuras públicas.',
                        'Negar de plano la solicitud mediante respuesta motivada, explicando que las declaraciones privadas y bases gravables tienen reserva legal absoluta (Art. 583 E.T.), no siendo de libre acceso a particulares ni prensa.',
                        'Cobrarle al periodista una tarifa por el servicio de fotocopiado confidencial.',
                        'Publicar las declaraciones en la cuenta de Twitter de la entidad.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 583 del E.T. consagra la reserva legal tributaria estricta. Violar esta reserva genera causal expresa de destitución del cargo (Art. 584 E.T.) y responsabilidad penal.',
                },
                {
                    text: 'Un Juez Penal de la República libra una orden judicial motivada dentro de una investigación por enriquecimiento ilícito, solicitando a la DIAN remitir las declaraciones tributarias del procesado. Ante este requerimiento, el funcionario competente debe:',
                    options: [
                        'Negar la solicitud argumentando que la reserva de la DIAN es superior a cualquier orden judicial.',
                        'Suministrar la información requerida en estricto cumplimiento de la orden judicial, por constituir una excepción legal taxativa al principio de reserva tributaria.',
                        'Cobrar una caución económica al juzgado antes de enviar los documentos.',
                        'Avisar al procesado para que modifique sus declaraciones en el sistema.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 583 del Estatuto Tributario faculta la entrega de información reservada a las autoridades judiciales cuando medie auto u orden en un proceso judicial formal.',
                },
                {
                    text: 'El cónyuge de una comerciante acude con el registro civil de matrimonio solicitando que se le expida una copia del RUT y de las declaraciones de renta de su esposa para un trámite privado. Conforme al Estatuto Tributario y a la Ley 1581 de 2012 (Habeas Data):',
                    options: [
                        'Se le entrega la información porque el matrimonio autoriza el acceso ilimitado a los datos de la pareja.',
                        'Se niega la entrega al cónyuge, señalando que los datos tributarios están amparados por reserva legal e intimidad personal, requiriéndose autorización escrita o poder especial de la titular o requerimiento de juez de familia.',
                        'Se le entrega únicamente la hoja 1 del RUT pero tachando el NIT.',
                        'Se llama a la esposa para amonestarla por no compartir sus datos con su esposo.',
                    ],
                    correct: 1,
                    explanation: 'La reserva tributaria protege la intimidad económica del titular. El vínculo matrimonial no concede personería para acceder a datos privados y tributarios reservados sin poder especial formal.',
                },
                {
                    text: 'En el Modelo Integrado de Planeación y Gestión (MIPG - Decreto 1499 de 2017), ¿cuál dimensión es considerada el corazón del modelo por gestionar el activo más valioso de las entidades públicas?',
                    options: [
                        'La dimensión de Control Interno.',
                        'La dimensión de Talento Humano.',
                        'La dimensión de Gestión Financiera y Presupuesto.',
                        'La dimensión de Compras Públicas.',
                    ],
                    correct: 1,
                    explanation: 'El Decreto 1499 de 2017 establece que el Talento Humano es el núcleo fundamental del MIPG, ya que son los servidores públicos quienes dinamizan las demás dimensiones del modelo.',
                },
                {
                    text: 'Un funcionario de la DIAN revela en una reunión social datos reservados del patrimonio de un vecino que conoció en ejercicio de sus funciones. Conforme al artículo 584 del Estatuto Tributario y a la Ley 1952 de 2019, esta conducta acarrea:',
                    options: [
                        'Una llamada de atención verbal sin consecuencias laborales.',
                        'La destitución del cargo e inhabilidad general para ejercer funciones públicas por falta gravísima, sin perjuicio de las sanciones penales correspondientes.',
                        'Una felicitación por su capacidad de comunicación interpersonal.',
                        'Un traslado a una seccional con mayor afluencia de público.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 584 del E.T. sanciona con destitución inmediata al servidor público de la DIAN que viole la reserva legal tributaria, configurándose además falta gravísima disciplinaria.',
                },
                {
                    text: 'En el esquema de las Tres Líneas de Defensa del MIPG en la DIAN, ¿qué función cumple la "Tercera Línea de Defensa"?',
                    options: [
                        'Realizar la atención directa en las ventanillas de servicio al contribuyente.',
                        'Evaluar de manera independiente y objetiva la efectividad de los controles y del sistema de gestión institucional a través de la Oficina de Control Interno.',
                        'Elaborar el presupuesto de ingresos corrientes de la nación.',
                        'Supervisar físicamente el orden de las filas en las seccionales.',
                    ],
                    correct: 1,
                    explanation: 'La Tercera Línea del MIPG está conformada por la Oficina de Control Interno / Auditoría Interna, cuya labor es evaluar de forma objetiva e independiente la eficacia de los controles institucionales.',
                },
                {
                    text: 'Bajo la Ley de Transparencia y Acceso a la Información (Ley 1712 de 2014), ¿cuál de los siguientes documentos en custodia de la DIAN es de acceso público general?',
                    options: [
                        'Las guías de trámites al ciudadano, resoluciones reglamentarias y estadísticas consolidadas de recaudo.',
                        'Las declaraciones de renta y extractos bancarios de las empresas mineras.',
                        'Las contraseñas de e-Firma de los grandes contribuyentes.',
                        'Las actas de investigación de la Unidad Disciplinaria en etapa reservada.',
                    ],
                    correct: 0,
                    explanation: 'La Ley 1712 de 2014 ordena la máxima publicidad de las guías de servicio, reglamentos y cifras consolidadas de gestión pública, protegiendo bajo reserva los datos sensibles o reservados de particulares.',
                },
                {
                    text: 'La Ley General de Archivos (Ley 594 de 2000) y las Tablas de Retención Documental (TRD) de la DIAN exigen que los expedientes tributarios gestionados por el Gestor I:',
                    options: [
                        'Se borren cada semana para liberar espacio en los discos duros.',
                        'Se organicen, folien física o digitalmente y se custodien conforme a los plazos legales de retención para garantizar su autenticidad e integridad probatoria.',
                        'Se almacenen en carpetas personales no institucionales de los funcionarios.',
                        'Se vendan a empresas privadas de publicidad.',
                    ],
                    correct: 1,
                    explanation: 'La Ley 594 de 2000 regula la gestión documental pública, obligando a organizar y conservar los expedientes bajo estrictas TRD que preserven la memoria institucional y su valor probatorio.',
                },
                {
                    text: 'Un Gestor I recibe un memorando de la Oficina de Control Interno requiriendo información sobre la aplicación de los controles de verificación en las actualizaciones del RUT en su seccional. El servidor debe:',
                    options: [
                        'Negarse a suministrar información alegando reserva tributaria interna.',
                        'Suministrar oportunamente los informes y evidencias requeridas, colaborando activamente con la auditoría para la mejora continua del proceso misional.',
                        'Destruir los registros antes de que los auditores lleguen.',
                        'Exigir que la Oficina de Control Interno pague por el informe.',
                    ],
                    correct: 1,
                    explanation: 'Los servidores públicos tienen el deber de colaborar con las auditorías de Control Interno, entregando la información requerida para evaluar y perfeccionar los controles de la Primera Línea.',
                },
                {
                    text: 'Un ciudadano exige que la DIAN le permita acceder y rectificar la dirección que figura en su RUT, invocando su derecho de Hábeas Data (Ley 1581 de 2012). El Gestor I debe orientarlo en el sentido de que:',
                    options: [
                        'La DIAN no reconoce el derecho de hábeas data en ningún trámite.',
                        'Tiene pleno derecho a conocer, actualizar y rectificar su información personal, el cual se ejerce formalmente a través del trámite de Actualización del RUT mediante autogestión virtual o en Punto de Contacto.',
                        'Debe instaurar obligatoriamente una demanda ante el Consejo de Estado.',
                        'La actualización de datos personales tiene un costo de dos UVT en ventanilla.',
                    ],
                    correct: 1,
                    explanation: 'El derecho de hábeas data faculta al titular a conocer, actualizar y rectificar sus datos; en la DIAN, este derecho se materializa de forma expedita a través de la actualización formal del RUT.',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 7: COMPETENCIAS COMPORTAMENTALES GESTOR I
           ---------------------------------------------------- */
        {
            id: 'm7',
            title: 'Módulo 7: Competencias Comportamentales',
            navLabel: '⭐ M.7: Comportamentales',
            homeLabel: 'Módulo 7: Competencias Comportamentales y Juicio Situacional',
            theoryId: 'modulo-7',
            cases: [
                {
                    text: 'Faltando quince minutos para el cierre de la jornada en el Punto de Contacto, ingresa un ciudadano proveniente de una vereda lejana que necesita inscribir su RUT con urgencia para no perder un contrato de empleo al día siguiente. El compañero de ventanilla apaga su computador y le dice que ya cerraron. Demostrando "Orientación al Usuario y al Ciudadano" (Nivel 4), el Gestor I debe:',
                    options: [
                        'Apagar también su equipo para marcharse puntualmente.',
                        'Recibir con empatía y calidez al ciudadano, verificar sus documentos y formalizar su inscripción en el RUT, asegurando la prestación eficaz del servicio público y evitando perjuicios al usuario.',
                        'Cobrarle un valor adicional por atención fuera de horario.',
                        'Decirle que le deje su cédula y que vuelva dentro de un mes.',
                    ],
                    correct: 1,
                    explanation: 'La orientación al ciudadano implica vocación de servicio, solidaridad y compromiso con el interés general, garantizando la atención oportuna y digna a las personas, en especial a las más vulnerables.',
                },
                {
                    text: 'En una semana de vencimientos tributarios con alta congestión de usuarios en la sala de espera, el sistema de agendamiento presenta lentitud y la gente comienza a manifestar inconformidad. La conducta esperada del Gestor I en "Comunicación Asertiva y Manejo de Crisis" es:',
                    options: [
                        'Encerrarse en el baño hasta que la sala se desocupe.',
                        'Salir a la sala de espera con serenidad y cortesía, explicar la situación tecnológica, tranquilizar a los usuarios, informar los tiempos estimados y brindar alternativas de autogestión guiada en kioscos.',
                        'Gritar a los ciudadanos advirtiéndoles que si no guardan silencio se cancelará la atención.',
                        'Culpar públicamente a los técnicos de sistemas por la lentitud de los servidores.',
                    ],
                    correct: 1,
                    explanation: 'La comunicación asertiva bajo presión exige mantener el autocontrol, dirigirse a los usuarios con transparencia y serenidad y orientar alternativas constructivas para mitigar la molestia.',
                },
                {
                    text: 'Un servidor nuevo ingresó recientemente como Gestor I y por falta de práctica en el sistema Muisca comete errores frecuentes en la asignación de responsabilidades tributarias, retrasando la fila. Bajo la competencia de "Trabajo en Equipo y Liderazgo Formador", la mejor actitud es:',
                    options: [
                        'Publicar los errores del compañero en un grupo de chat para avergonzarlo.',
                        'Acercarse en privado con actitud pedagógica y respetuosa, compartirle una guía resumen con las responsabilidades más comunes, resolver sus dudas y acompañarlo en los trámites complejos para afianzar su destreza.',
                        'Radicar una queja exigiendo que lo despidan de la entidad.',
                        'Ignorarlo por completo para que el jefe se dé cuenta de su incapacidad.',
                    ],
                    correct: 1,
                    explanation: 'El trabajo en equipo y el liderazgo constructivo se fundamentan en la cooperación mutua, la transferencia solidaria de conocimientos y el fortalecimiento conjunto de las competencias del área.',
                },
                {
                    text: 'La DIAN implementa una nueva herramienta virtual de reconocimiento biométrico para inscribir el RUT que requiere que los funcionarios aprendan a validar las alertas en el Muisca. Demostrando "Adaptabilidad al Cambio y Aprendizaje Continuo", el Gestor I debe:',
                    options: [
                        'Rechazar la herramienta y promover que se sigan utilizando formularios en papel.',
                        'Participar con entusiasmo en las capacitaciones, estudiar la guía técnica, dominar la nueva funcionalidad y apoyar a los compañeros y usuarios en la adopción del nuevo sistema.',
                        'Decir a los usuarios que la herramienta digital no sirve y que es insegura.',
                        'Esperar que otros aprendan para no tener que usarla.',
                    ],
                    correct: 1,
                    explanation: 'La adaptabilidad al cambio exige disposición abierta y proactiva frente a las nuevas tecnologías institucionales, facilitando la modernización del servicio del Estado.',
                },
                {
                    text: 'El Jefe de División fija una meta exigente de evacuación de solicitudes represadas de actualización del RUT para el fin de mes. Demostrando "Orientación a Resultados" (Nivel 4), el Gestor I debe:',
                    options: [
                        'Aprobar todas las solicitudes sin revisar documentos para cumplir la cifra en el sistema.',
                        'Organizar su jornada de trabajo con método, priorizar por fechas de vencimiento, aplicar con rigor técnico los controles documentales y coordinar esfuerzos para cumplir la meta sin generar reprocesos ni vulnerar normas.',
                        'Decirle al superior que la meta es imposible y no modificar su ritmo habitual.',
                        'Pasar las solicitudes a la bandeja de otro funcionario para que no aparezcan pendientes en su usuario.',
                    ],
                    correct: 1,
                    explanation: 'La orientación a resultados en el nivel profesional equilibra la eficiencia y celeridad en la evacuación de metas con el rigor analítico y el apego estricto a la legalidad de los actos.',
                },
                {
                    text: 'Durante la validación de un trámite de retiro de IVA, el Gestor I descubre que el solicitante aportó un certificado de ingresos falsificado con el fin de eludir el impuesto. Demostrando "Integridad y Rectitud Ética", el servidor debe:',
                    options: [
                        'Aceptar el certificado para evitar problemas y reclamos del contribuyente.',
                        'Rechazar motivadamente la solicitud en el sistema por incumplimiento de requisitos de veracidad, dejar constancia documental e informar formalmente al superior funcional para que se instaure la denuncia penal por falsedad en documento.',
                        'Pedirle al contribuyente dinero en efectivo a cambio de no denunciarlo.',
                        'Romper el certificado falso y pedirle que traiga otro mejor hecho.',
                    ],
                    correct: 1,
                    explanation: 'La integridad del servidor público exige apego absoluto a la verdad y el cumplimiento del deber legal de denunciar las conductas delictivas de las que tenga conocimiento en el ejercicio de sus funciones.',
                },
                {
                    text: 'En una reunión seccional surgen discrepancias sobre la interpretación de un decreto sobre suspensión del RUT. La conducta esperada en "Resolución Constructiva de Conflictos" es:',
                    options: [
                        'Gritar e imponer su criterio personal por la fuerza sin escuchar a los demás.',
                        'Promover una discusión técnica respetuosa basada en la normativa oficial, las circulares de la Subdirección de Identificación y Registro y las directrices vigentes para construir un consenso seguro y fundamentado.',
                        'Lanzar una moneda al aire para decidir el trámite.',
                        'Dejar de hablarle a los compañeros que no piensen igual.',
                    ],
                    correct: 1,
                    explanation: 'La resolución constructiva de conflictos en la función pública se basa en el diálogo técnico respetuoso, la argumentación jurídica sustentada y el logro de consensos orientados al interés general.',
                },
                {
                    text: 'Un contribuyente mayor de edad se muestra angustiado porque teme cometer errores al elegir entre el Régimen Simple y el Régimen Ordinario. El Gestor I demuestra "Empatía y Escucha Activa" cuando:',
                    options: [
                        'Le dice con desdén que no tiene tiempo para explicar cosas básicas y que contrate un contador.',
                        'Escucha con atención y respeto las inquietudes del ciudadano, le explica con sencillez pedagógica las ventajas y obligaciones de cada opción y le entrega guías claras para que tome una decisión informada.',
                        'Le cobra una asesoría privada en una cafetería.',
                        'Le entrega un documento en idioma extranjero sin explicarle nada.',
                    ],
                    correct: 1,
                    explanation: 'La empatía institucional se evidencia en la capacidad de comprender las dudas del ciudadano, dedicándole tiempo y pedagogía para facilitar el ejercicio de sus derechos y deberes fiscales.',
                },
                {
                    text: 'Al finalizar la atención en ventanilla, el Gestor I encuentra en la silla un bolso olvidado con documentos personales, escrituras y una suma considerable de dinero. La actuación que refleja el valor de la "Honestidad" en la DIAN es:',
                    options: [
                        'Apropiarse del dinero y botar los documentos a la basura.',
                        'Entregar de inmediato el bolso al supervisor del Punto de Contacto y al personal de seguridad, levantar un acta formal detallada y custodiar los bienes mientras se contacta al titular por los datos del RUT para su devolución.',
                        'Llevarse el bolso a su casa y esperar una recompensa económica.',
                        'Publicar las escrituras en redes sociales.',
                    ],
                    correct: 1,
                    explanation: 'La honestidad y la probidad exigen custodiar con transparencia los bienes ajenos extraviados, registrándolos en las bitácoras oficiales y facilitando su pronta restitución al dueño legítimo.',
                },
                {
                    text: 'Un Gestor I con una sólida "Vocación de Servicio Público" asume su trabajo cotidiano de asistencia al usuario como:',
                    options: [
                        'Una rutina aburrida donde lo único importante es que pasen las horas para cobrar el salario.',
                        'Una misión social de alto impacto, donde cada orientación, validación del RUT y respuesta al ciudadano contribuye directamente a la formalización económica, la justicia fiscal y el bienestar de Colombia.',
                        'Un puesto para ejercer poder sobre los usuarios y negarles trámites por capricho personal.',
                        'Un espacio para conseguir clientes para un negocio particular de asesorías.',
                    ],
                    correct: 1,
                    explanation: 'La verdadera vocación de servicio ennoblece la función pública: el profesional comprende que su labor cotidiana construye confianza ciudadana, equidad social y solidez democrática para el país.',
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
