(function (PM) {
    'use strict';

    const { QUESTIONS_PER_MODULE } = PM;

    /**
     * Banco de preguntas enriquecido con Juicio Situacional bajo los estándares oficiales de la CNSC
     * para el empleo de Gestor I (Código 301, Grado 01) - Ficha IT-TO-3008 (DIAN).
     *
     * Diseñado para superar el sesgo de "siempre rechazar", incorporando procedimientos legales,
     * protocolos técnicos de TI, Decreto Ley 071 de 2020, CPACA, MIPG y Ley 1952/2019.
     */
    const MODULE_DEFINITIONS = [
        /* ----------------------------------------------------
           MÓDULO 1: RÉGIMEN CONSTITUCIONAL Y FUNCIÓN PÚBLICA (DIAN)
           ---------------------------------------------------- */
        {
            id: 'm1',
            title: 'Módulo 1: Función Pública y Constitución',
            navLabel: '📖 M.1: Función Pública',
            homeLabel: 'Módulo 1: Función Pública',
            theoryId: 'modulo-1',
            cases: [
                {
                    text: 'El Director Seccional solicita verbalmente al Gestor I de Infraestructura que habilite un puerto de acceso remoto no estándar (RDP) expuesto directamente a Internet para un contratista externo, omitiendo el Comité de Cambios y el túnel VPN corporativo. Ante la advertencia técnica del servidor sobre el alto riesgo de vulnerabilidad, el superior insiste en que asume la responsabilidad. Según el régimen disciplinario y el principio de legalidad (Art. 6 C.P. y Ley 1952 de 2019), ¿cuál es el procedimiento que debe seguir el Gestor I?',
                    options: [
                        'Habilitar el puerto temporalmente en horario nocturno para atender la urgencia sin dejar trazas en el log de auditoría.',
                        'Formalizar un requerimiento escrito informando los riesgos técnicos e institucionales, exigiendo que la orden de insistencia se emita por escrito y motivada por el superior antes de cualquier acción técnica.',
                        'Radicar de inmediato una denuncia penal ante la Fiscalía General de la Nación por sabotaje informático antes de responder internamente.',
                        'Solicitar permiso previo a la Comisión Nacional del Servicio Civil (CNSC) para abstenerse de operar el firewall.',
                    ],
                    correct: 1,
                    explanation: 'El Art. 38 num. 2 y 3 de la Ley 1952 de 2019 establece el deber de cumplir órdenes legítimas; cuando una instrucción conlleve riesgos normativos o técnicos graves, el servidor debe representar la orden por escrito. La formalización motivada del superior salva la responsabilidad del operador técnico.',
                },
                {
                    text: 'En la Subdirección de Operaciones y TI de la DIAN se genera una vacante temporal en el empleo de Inspector I (Grado 03). Para proveer dicha vacante, el área de talento humano evalúa las alternativas jurídicas. Conforme al Decreto Ley 071 de 2020 (Régimen Específico de Carrera de la DIAN), ¿cuál es el orden de prelación legal obligatorio para proveer esta vacante?',
                    options: [
                        'Contratar directamente a un profesional externo mediante contrato de prestación de servicios para asegurar celeridad.',
                        'Proveer mediante encargo con el empleado con derechos de carrera del empleo inmediatamente inferior que cumpla el perfil, no tenga sanción disciplinaria y cuente con la última evaluación de desempeño sobresaliente.',
                        'Realizar un sorteo interno entre todos los empleados provisionales con más de dos años de antigüedad en la seccional.',
                        'Asignar las funciones técnicas a un Gestor I de manera indefinida sin modificar su remuneración ni expedir acto administrativo de encargo.',
                    ],
                    correct: 1,
                    explanation: 'El Decreto Ley 071 de 2020 (Art. 19) y la Ley 909 de 2004 consagran el encargo como derecho preferente para los servidores escalafonados en carrera administrativa que cumplan los requisitos de perfil y calificación sobresaliente.',
                },
                {
                    text: 'Una Dirección Seccional de Impuestos pretende contratar de manera directa y autónoma la ampliación del enlace de fibra óptica de su data center local, argumentando urgencia por los vencimientos tributarios. Conforme al Decreto 1742 de 2020 (Estructura de la DIAN), ¿a qué dependencia del nivel central le corresponde definir las políticas, estándares técnicos y lineamientos de contratación de la infraestructura tecnológica?',
                    options: [
                        'A la Dirección de Gestión de Innovación y Tecnología a través de la Subdirección de Infraestructura y Operaciones Tecnológicas.',
                        'De forma descentralizada e independiente a cada Director Seccional según la disponibilidad presupuestal regional.',
                        'A la Defensoría del Contribuyente y del Usuario Aduanero.',
                        'Al Comité de Convivencia Laboral de la seccional correspondiente.',
                    ],
                    correct: 0,
                    explanation: 'El Decreto 1742 de 2020 (Art. 40 y 41) asigna a la Dirección de Gestión de Innovación y Tecnología y a la Subdirección de Infraestructura la competencia exclusiva de centralizar, planear, estandarizar y autorizar la infraestructura tecnológica de la DIAN a nivel nacional.',
                },
                {
                    text: 'Un Gestor I de Infraestructura es designado supervisor técnico del contrato de soporte de servidores. Durante la ejecución, la firma contratista subcontrata el soporte de bases de datos con una empresa donde el cónyuge del servidor es socio mayoritario y representante legal. Conforme al artículo 11 del CPACA y la Ley 1952 de 2019, el servidor debe:',
                    options: [
                        'Continuar ejerciendo la supervisión con máxima exigencia para demostrar su neutralidad profesional.',
                        'Manifestar de inmediato por escrito el impedimento ante el ordenador del gasto competente, detallando el vínculo conyugal para que se designe un supervisor ad-hoc.',
                        'Pedir al contratista que cambie el nombre del representante legal para que no coincida con el de su cónyuge.',
                        'Suspender el contrato unilateralmente sin consultar a las autoridades de la entidad.',
                    ],
                    correct: 1,
                    explanation: 'El Art. 11 num. 1 del CPACA y el Art. 40 de la Ley 1952 de 2019 obligan a todo servidor público a declararse impedido de inmediato ante causal de conflicto de interés por parentesco o matrimonio, garantizando la imparcialidad y transparencia pública.',
                },
                {
                    text: 'En el marco del Modelo Integrado de Planeación y Gestión (MIPG) en la DIAN, el equipo de Infraestructura Tecnológica identifica que los respaldos de las bases de datos no cuentan con pruebas periódicas de restauración en ambientes alternos. Según el esquema de las Tres Líneas de Defensa del MIPG, ¿a qué instancia le corresponde diseñar y ejecutar los controles operativos directos para mitigar este riesgo tecnológico?',
                    options: [
                        'A la Primera Línea de Defensa, conformada por los líderes de proceso y los servidores operativos de la dependencia de TI en su gestión cotidiana.',
                        'A la Oficina de Control Interno (Tercera Línea), quien debe encargarse de hacer las restauraciones técnicas diarias.',
                        'Únicamente a la Contraloría General de la República durante la auditoría financiera anual.',
                        'A los proveedores privados de almacenamiento en la nube sin supervisión de la DIAN.',
                    ],
                    correct: 0,
                    explanation: 'En el marco del MIPG y el estándar COSO, la Primera Línea de Defensa está integrada por los líderes y operadores de los procesos (servidores de TI), quienes son los responsables primarios de identificar riesgos y aplicar los controles operativos diarios.',
                },
                {
                    text: 'Un Gestor I desactiva voluntariamente el sistema de monitoreo y alarmas térmicas del centro de cómputo para no recibir alertas nocturnas. Dos días después, una falla de enfriamiento destruye tres servidores críticos causando parálisis nacional en aduanas y obligando a la DIAN a pagar millonarias indemnizaciones. Según el artículo 90 de la Constitución y la Ley 678 de 2001, ¿qué mecanismo debe ejercer la entidad pública contra el funcionario?',
                    options: [
                        'Condescender con el servidor y cubrir el daño exclusivamente con recursos del presupuesto general.',
                        'Iniciar la Acción de Repetición ante la jurisdicción contencioso-administrativa para recuperar lo pagado, habiéndose demostrado dolo o culpa grave en la omisión del servidor.',
                        'Solicitar un empréstito internacional para absorber el costo sin determinar responsabilidades individuales.',
                        'Aplicar una sanción de amonestación verbal sin repercusión económica.',
                    ],
                    correct: 1,
                    explanation: 'El Art. 90 de la C.P. y la Ley 678 de 2001 disponen que el Estado responderá patrimonialmente por los daños antijurídicos de sus agentes, pero tiene el deber imperativo de repetir contra el funcionario cuando el daño se originó en dolo o culpa grave.',
                },
                {
                    text: 'Un servidor de carrera administrativa de la DIAN obtiene una calificación definitiva de "No Satisfactoria" en su Evaluación del Desempeño Laboral (EDL) anual, tras agotarse los recursos de ley. De acuerdo con el Decreto Ley 071 de 2020 y la Ley 909 de 2004, ¿cuál es la consecuencia jurídica de esta decisión?',
                    options: [
                        'El retiro inmediato del servicio y la pérdida de los derechos de carrera administrativa mediante declaratoria de insubsistencia del nombramiento.',
                        'La reubicación en un cargo de superior jerarquía para evaluar si en otra área mejora su rendimiento.',
                        'La reducción del sueldo básico mensual en un 30% manteniendo el empleo.',
                        'El otorgamiento de una licencia remunerada por un año para capacitación.',
                    ],
                    correct: 0,
                    explanation: 'La calificación insatisfactoria en la Evaluación del Desempeño Laboral, una vez en firme, produce como efecto legal el retiro del servicio y la pérdida de los derechos de carrera administrativa mediante acto de insubsistencia (Decreto Ley 071/2020 y Ley 909/2004).',
                },
                {
                    text: 'Un medio de comunicación solicita a la DIAN copia íntegra de las declaraciones de renta e información exógena de varios aspirantes a un cargo de elección popular. Frente a esta solicitud, ¿cuál es el fundamento legal de la respuesta institucional que debe proyectarse?',
                    options: [
                        'Publicar la información en el portal de datos abiertos en virtud del principio de máxima publicidad ciudadana.',
                        'Negar motivadamente la entrega sustentándose en la reserva tributaria legal (Art. 583 del Estatuto Tributario) y la protección constitucional de datos patrimoniales reservados (Art. 15 C.P. y Ley 1712 de 2014).',
                        'Entregar únicamente la información de aquellos candidatos que pertenezcan a partidos de oposición.',
                        'Cobrar un arancel administrativo extraordinario para desincentivar la entrega de los documentos.',
                    ],
                    correct: 1,
                    explanation: 'El Art. 583 del Estatuto Tributario establece que la información tributaria tiene carácter estrictamente reservado. La Ley 1712 de 2014 (Transparencia) exceptúa de publicidad la información sujeta a reserva legal constitucional.',
                },
                {
                    text: 'Se detecta un incidente cibernético de vulnerabilidad crítica que afecta conjuntamente la infraestructura de la DIAN, la Policía Fiscal y Aduanera (POLFA) y el INVIMA en puertos marítimos. Conforme al artículo 209 de la Constitución y la Ley 489 de 1998, ¿a través de qué principio y mecanismo de la función administrativa deben operar las entidades?',
                    options: [
                        'Principio de coordinación y concurrencia interinstitucional, articulando un equipo técnico conjunto para estandarizar la mitigación y asegurar la continuidad del control de mercancías.',
                        'Principio de subsidiariedad pasiva, esperando a que cada entidad resuelva sus sistemas sin compartir indicadores de compromiso.',
                        'Principio de competencia institucional, suspendiendo la atención aduanera hasta determinar cuál entidad tuvo el primer fallo.',
                        'Contratar tres auditorías privadas separadas sin comunicación entre las agencias estatales.',
                    ],
                    correct: 0,
                    explanation: 'El principio de coordinación (Art. 209 C.P. y Art. 6 Ley 489 de 1998) impone a las entidades públicas el deber de colaborar armónicamente para el cumplimiento eficiente de las funciones estatales, especialmente ante contingencias transversales.',
                },
                {
                    text: 'Un Gestor I utiliza los servidores físicos y la capacidad de cómputo del centro de datos de la DIAN durante las noches para ejecutar algoritmos de minería de criptomonedas y alojar plataformas comerciales privadas. Conforme al Código General Disciplinario (Ley 1952 de 2019, modificada por Ley 2094 de 2021), esta conducta se califica como:',
                    options: [
                        'Una falta gravísima cometida a título de dolo por utilizar indebidamente bienes, equipos e infraestructura del Estado para fines lucrativos particulares.',
                        'Una falta leve que amerita únicamente amonestación verbal en privado con el superior inmediato.',
                        'Una actividad de investigación tecnológica admisible si no se sobrepasa el consumo eléctrico presupuestado.',
                        'Una conducta atípica que no tiene repercusión disciplinaria al realizarse fuera de la jornada laboral oficial.',
                    ],
                    correct: 0,
                    explanation: 'El Art. 54 y 55 de la Ley 1952 de 2019 tipifica como falta gravísima utilizar los bienes, recursos o activos de información del Estado para provecho personal o de terceros, sancionable con destitución e inhabilidad general.',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 2: PROCEDIMIENTO ADMINISTRATIVO (CPACA)
           ---------------------------------------------------- */
        {
            id: 'm2',
            title: 'Módulo 2: Procedimiento Administrativo (CPACA)',
            navLabel: '⚖️ M.2: Ley 1437 CPACA',
            homeLabel: 'Módulo 2: Ley 1437 CPACA',
            theoryId: 'modulo-2',
            cases: [
                {
                    text: 'Un ciudadano radica ante la DIAN una solicitud de devolución de saldos a favor, pero omite adjuntar el certificado de retenciones exigido por el reglamento tributario. Conforme al artículo 17 del CPACA (Ley 1437/2011, modificado por Ley 1755/2015), ¿cuál es el procedimiento legal que debe aplicar la autoridad?',
                    options: [
                        'Archivar de plano la solicitud al día hábil siguiente sin posibilidad de subsanación.',
                        'Requerir al peticionario por una sola vez dentro de los diez (10) días siguientes a la radicación para que complete los documentos, término en el cual se suspenden los plazos de respuesta.',
                        'Esperar el vencimiento de los 50 días generales de devolución y rechazar la petición en la resolución final.',
                        'Remitir el expediente al archivo central sin expedir comunicación alguna.',
                    ],
                    correct: 1,
                    explanation: 'El Art. 17 del CPACA dispone que ante peticiones incompletas se requerirá al interesado dentro de los 10 días siguientes a su radicación para que subsane en el plazo máximo de un (1) mes, suspendiendo el cómputo de términos.',
                },
                {
                    text: 'De acuerdo con el régimen unificado del derecho de petición (Ley 1755 de 2015), ¿cuáles son los términos legales perentorios para resolver solicitudes de copias/documentos, consultas doctrinales o conceptuales y peticiones de interés particular respectivamente?',
                    options: [
                        '15 días para todas las tipologías sin importar su naturaleza.',
                        '10 días para solicitud de copias e información, 30 días para consultas ante autoridades, y 15 días hábiles para peticiones de interés general o particular.',
                        '30 días para documentos, 10 días para consultas y 60 días para peticiones de fondo.',
                        '5 días calendario para todas las actuaciones conforme al principio de celeridad.',
                    ],
                    correct: 1,
                    explanation: 'La Ley 1755 de 2015 establece con precisión: 10 días para documentos y copias (Art. 14 num. 1), 30 días para consultas sobre materias a su cargo (Art. 14 num. 2), y 15 días hábiles como regla general.',
                },
                {
                    text: 'Contra una liquidación oficial de aforo expedida por una Dirección Seccional de la DIAN, el contribuyente interpone recursos en sede administrativa. Según el artículo 74 del CPACA, ¿cuáles son los recursos ordinarios procedentes y ante quién se interponen?',
                    options: [
                        'Acción directa de reparación ante el Tribunal Administrativo sin agotar vía gubernativa.',
                        'Recurso de Reposición ante el mismo funcionario que tomó la decisión para que la aclare, modifique o revoque; y de Apelación ante el inmediato superior jerárquico o funcional.',
                        'Recurso de súplica ante la Sala de Casación Penal de la Corte Suprema de Justicia.',
                        'Únicamente petición de reconsideración verbal ante el jefe de recaudación.',
                    ],
                    correct: 1,
                    explanation: 'El Art. 74 del CPACA consagra el recurso de reposición ante el mismo funcionario que profirió el acto, y el de apelación ante el superior jerárquico o funcional competente, interponiéndose dentro de los 10 días siguientes a la notificación.',
                },
                {
                    text: 'En el procedimiento tributario y aduanero de la DIAN, la notificación por medios electrónicos de un acto administrativo (Art. 56 CPACA y Art. 566-1 del Estatuto Tributario) se entiende legalmente surtida para efectos del cómputo de términos procesales:',
                    options: [
                        'En el instante en que el correo ingresa a la bandeja de entrada del servidor de correo saliente de la DIAN.',
                        'A partir de la fecha en que el administrado abra el correo electrónico o transcurridos cinco (5) días hábiles siguientes a la entrega del aviso de notificación en el buzón electrónico del contribuyente.',
                        'Treinta días calendario después del envío sin importar acuse de recibo técnico.',
                        'Exclusivamente cuando el ciudadano radique una carta física aceptando la notificación.',
                    ],
                    correct: 1,
                    explanation: 'El Art. 566-1 del Estatuto Tributario prevé que la notificación electrónica se entenderá surtida para el contribuyente transcurridos cinco (5) días hábiles siguientes al envío del mensaje de datos al correo registrado en el RUT.',
                },
                {
                    text: 'La DIAN expidió un acto administrativo sancionatorio en el cual se aplicó una norma que había sido declarada inexequible por la Corte Constitucional con anterioridad a la fecha de la resolución. De acuerdo con el artículo 93 del CPACA, ¿cuál es el mecanismo legal mediante el cual la propia entidad puede dejar sin efectos su acto?',
                    options: [
                        'Revocatoria directa del acto administrativo por manifiesta oposición a la Constitución y la ley.',
                        'Caducidad de la potestad sancionatoria sin necesidad de acto administrativo.',
                        'Aplicación del silencio administrativo positivo a favor de la entidad.',
                        'Interposición de una acción popular ante la jurisdicción ordinaria.',
                    ],
                    correct: 0,
                    explanation: 'El Art. 93 num. 1 del CPACA autoriza a la administración para revocar directamente sus actos cuando sea manifiesta su oposición a la Constitución o a la ley, de oficio o a solicitud de parte.',
                },
                {
                    text: 'Un acto administrativo de cobro coactivo quedó en firme en el año 2018. Durante los siguientes cinco (5) años continuos, la administración tributaria no adelantó ninguna gestión de ejecución ni cobro efectivo. Conforme al artículo 91 del CPACA, dicho acto:',
                    options: [
                        'Adquiere validez perpetua e imprescriptible a favor del fisco nacional.',
                        'Pierde su fuerza ejecutoria por el fenómeno de decaimiento del acto administrativo al transcurrir más de 5 años sin ejecución.',
                        'Debe ser ratificado mediante decreto presidencial obligatorio.',
                        'Se transforma automáticamente en una sentencia judicial condenatoria.',
                    ],
                    correct: 1,
                    explanation: 'El Art. 91 num. 3 del CPACA establece que los actos administrativos pierden fuerza ejecutoria (decaimiento) cuando transcurridos cinco (5) años desde que quedaron en firme, la administración no ha realizado los actos necesarios para ejecutarlos.',
                },
                {
                    text: 'Un usuario radicado solicita a la DIAN la aclaración de una resolución aduanera. Transcurridos tres (3) meses continuos desde la petición inicial, la administración no ha notificado ninguna respuesta de fondo. ¿Qué fenómeno procesal se configura como regla general según el artículo 83 del CPACA?',
                    options: [
                        'Silencio administrativo positivo, entendiéndose concedida favorablemente la solicitud del administrado.',
                        'Silencio administrativo negativo, entendiéndose denegada la solicitud para permitir al administrado interponer recursos o demandar judicialmente.',
                        'Caducidad del expediente administrativo con archivo definitivo sin recursos.',
                        'Prescripción de la deuda aduanera objeto del trámite.',
                    ],
                    correct: 1,
                    explanation: 'La regla general en el derecho administrativo colombiano es el silencio administrativo negativo (Art. 83 CPACA), el cual opera como ficción legal para garantizar el acceso a la justicia al administrado.',
                },
                {
                    text: 'En una investigación por presunta evasión tributaria, el fiscalizador aporta como elemento probatorio un informe técnico que incluye firmas digitales y registros de auditoría de transacciones (logs). Según la Ley 527 de 1999 y el artículo 40 del CPACA, ¿cuál es la eficacia probatoria de estos mensajes de datos?',
                    options: [
                        'Carecen de valor probatorio por no reposar en papel sellado notarial.',
                        'Tienen plena validez y fuerza probatoria, aplicándose el principio de equivalencia funcional siempre que garanticen autenticidad, integridad y trazabilidad conforme a la sana crítica.',
                        'Requieren obligatoriamente la ratificación presencial de los programadores del software.',
                        'Solo son válidos si cuentan con la firma manuscrita de un juez de la República.',
                    ],
                    correct: 1,
                    explanation: 'La Ley 527 de 1999 y el CPACA reconocen equivalencia funcional a los mensajes de datos, otorgándoles plena fuerza demostrativa cuando se verifica la integridad del contenido y la autoría de la firma digital.',
                },
                {
                    text: 'Un contribuyente al que se le requirió subsanar documentos faltantes dentro de una solicitud no presenta lo requerido en el plazo de un (1) mes otorgado por la ley. De conformidad con el artículo 17 del CPACA, ¿qué decisión debe emitir la DIAN?',
                    options: [
                        'Declarar el desistimiento tácito de la petición y ordenar el archivo del expediente mediante resolución motivada contra la que procede reposición.',
                        'Sancionar al contribuyente con el cierre temporal de su establecimiento de comercio.',
                        'Comisionar a la Policía Nacional para incautar los documentos requeridos.',
                        'Prorrogar indefinidamente el plazo de subsanación de oficio.',
                    ],
                    correct: 0,
                    explanation: 'El Art. 17 del CPACA señala que si el interesado no subsana dentro del mes siguiente al requerimiento, la autoridad declarará el desistimiento tácito y el archivo del expediente mediante acto motivado.',
                },
                {
                    text: 'En un acto administrativo de liquidación tributaria se deslizó un error puramente mecanográfico en la transcripción del NIT del contribuyente, sin alterar las cifras sustanciales de la liquidación. Conforme al artículo 45 del CPACA, la administración debe:',
                    options: [
                        'Revocar todo el acto administrativo e iniciar un nuevo proceso de fiscalización de varios años.',
                        'Corregir el error formal o aritmético en cualquier tiempo, de oficio o a solicitud de parte, mediante acto aclaratorio que no modifica el fondo de la decisión.',
                        'Obligar al contribuyente a cambiar su NIT en el RUT para coincidir con el error de la DIAN.',
                        'Archivar el cobro tributario por nulidad absoluta insubsanable.',
                    ],
                    correct: 1,
                    explanation: 'El Art. 45 del CPACA dispone que los errores aritméticos o de transcripción de nombres y datos en los actos administrativos pueden ser corregidos en cualquier momento por la autoridad mediante acto aclaratorio.',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 3: INFRAESTRUCTURA TECNOLÓGICA (GESTOR I)
           ---------------------------------------------------- */
        {
            id: 'm3',
            title: 'Módulo 3: Infraestructura Tecnológica (Gestor I)',
            navLabel: '💻 M.3: Infraestructura TI',
            homeLabel: 'Módulo 3: Infraestructura TI',
            theoryId: 'modulo-3',
            cases: [
                {
                    text: 'En el Plan de Continuidad y Recuperación ante Desastres (DRP) de la plataforma de recaudación de la DIAN, el comité define un RTO (Recovery Time Objective) de 2 horas y un RPO (Recovery Point Objective) de 10 minutos. Técnicamente, esto significa que:',
                    options: [
                        'El servicio debe restablecerse en máximo 2 horas tras la contingencia, y la pérdida máxima tolerable de transacciones es de los últimos 10 minutos antes del fallo.',
                        'El servidor físico debe encender en 10 minutos y las copias de seguridad se realizan cada 2 horas.',
                        'Los ingenieros de soporte tienen 2 horas para llegar a la oficina y 10 minutos para responder correos.',
                        'El ancho de banda de red debe alcanzar los 2 Gbps en los primeros 10 minutos de operación.',
                    ],
                    correct: 0,
                    explanation: 'El RTO define el tiempo máximo que el servicio puede estar inactivo antes de su restablecimiento, mientras que el RPO define la cantidad de datos que la entidad puede tolerar perder medido en tiempo transcurrido desde el último punto de respaldo consistente.',
                },
                {
                    text: 'Para asegurar la tolerancia a fallos en el centro de datos de la DIAN frente a la caída de un servidor físico host de virtualización, ¿cuál es la configuración de arquitectura recomendada?',
                    options: [
                        'Montar todas las máquinas virtuales en un solo servidor de escritorio con almacenamiento SATA local.',
                        'Configurar un clúster de virtualización de alta disponibilidad (HA) con almacenamiento compartido SAN redundante, enlaces de red duales y migración automática en caliente (Live Migration / vMotion).',
                        'Realizar copias manuales de los archivos virtuales en discos duros portátiles una vez al mes.',
                        'Apagar los servidores secundarios los fines de semana para evitar desgaste de hardware.',
                    ],
                    correct: 1,
                    explanation: 'La alta disponibilidad corporativa exige clústeres redundantes (HA), donde el fallo de un host físico provoca la migración o reinicio automático de las máquinas virtuales en los hosts supervivientes sin pérdida de datos gracias a la SAN compartida.',
                },
                {
                    text: 'En el diseño de red segura para la sede electrónica de la DIAN, los servidores web que reciben tráfico directo de los contribuyentes desde Internet deben ubicarse en:',
                    options: [
                        'El mismo segmento de red interna donde operan las estaciones de trabajo de los directivos.',
                        'Una Zona Desmilitarizada (DMZ) aislada mediante políticas restrictivas de cortafuegos que impidan el tráfico directo hacia la red de bases de datos internas.',
                        'Un switch doméstico sin segmentación VLAN para priorizar la velocidad de conexión.',
                        'La red Wi-Fi de visitantes de la sede administrativa.',
                    ],
                    correct: 1,
                    explanation: 'Una DMZ (Zona Desmilitarizada) actúa como zona de amortiguamiento perimetral: expone los servicios web hacia Internet mientras aísla y protege la red interna (LAN) y las bases de datos de accesos no autorizados.',
                },
                {
                    text: 'Bajo el estándar de seguridad Zero Trust aplicado en el Directorio Activo de la DIAN, la directiva institucional de asignación de permisos a los administradores de sistemas se basa en:',
                    options: [
                        'Asignar privilegios globales de Domain Admin a todo el equipo de soporte técnico para agilizar tareas.',
                        'El principio de mínimo privilegio (Least Privilege) y Control de Acceso Basado en Roles (RBAC), exigiendo autenticación multifactor (MFA) para accesos a servidores críticos.',
                        'Utilizar una contraseña compartida de administración anotada en un documento público de la red.',
                        'Eliminar los requisitos de cambio periódico de contraseñas para evitar bloqueos de cuenta.',
                    ],
                    correct: 1,
                    explanation: 'El principio de mínimo privilegio (RBAC) y la autenticación multifactor (MFA) aseguran que cada cuenta técnica posea únicamente los accesos indispensables para su función, minimizando vectores de ataque y escalamiento de privilegios.',
                },
                {
                    text: 'Para blindar las bases de datos tributarias de la DIAN contra ataques de ransomware y corrupción lógica, la estrategia de respaldo 3-2-1 exige:',
                    options: [
                        'Guardar 3 carpetas en el mismo disco duro del servidor de base de datos.',
                        'Mantener al menos 3 copias de los datos, en 2 medios de almacenamiento diferentes, con al menos 1 copia almacenada fuera del sitio o con inmutabilidad (WORM / Air-Gapped).',
                        'Hacer respaldos únicamente 3 días al año de forma aleatoria.',
                        'Utilizar 3 memorias USB rotativas conectadas permanentemente al servidor de producción.',
                    ],
                    correct: 1,
                    explanation: 'La regla 3-2-1 es el estándar internacional de respaldo: 3 copias totales, en al menos 2 soportes distintos, y 1 copia off-site o inmutable protegida contra sobrescritura o cifrado malicioso.',
                },
                {
                    text: 'A través de la consola de monitoreo Zabbix, el Gestor I detecta que el clúster de base de datos de facturación electrónica presenta un I/O Wait superior al 45% y colas de lectura saturadas. ¿Cuál es el diagnóstico técnico preliminar más acertado?',
                    options: [
                        'Saturación y cuello de botella en el subsistema de almacenamiento (discos/SAN), que no responde a la tasa de transacciones de lectura/escritura requerida.',
                        'Infección inminente de malware en el monitor de la pantalla del administrador.',
                        'Fallo en la tarjeta de sonido del servidor físico.',
                        'Exceso de usuarios navegando en sitios web recreativos dentro de la red administrativa.',
                    ],
                    correct: 0,
                    explanation: 'Un I/O Wait elevado indica que los procesadores (CPU) están ociosos esperando que el almacenamiento (discos/SAN) complete las operaciones de entrada/salida, evidenciando un cuello de botella en almacenamiento.',
                },
                {
                    text: 'De acuerdo con la norma internacional TIA-942 para centros de datos, un Data Center Clasificación Tier III adecuado para operaciones tributarias estatales garantiza:',
                    options: [
                        'Mantenibilidad concurrente, lo que permite realizar reparaciones y mantenimientos eléctricos o de enfriamiento sin suspender en ningún momento la operación de los servidores de producción.',
                        'Una única vía de distribución eléctrica sin generadores de emergencia.',
                        'Una tasa de indisponibilidad anual superior a las 50 horas continuas.',
                        'Instalación de servidores en salas sin climatización de precisión.',
                    ],
                    correct: 0,
                    explanation: 'La característica distintiva de un Data Center Tier III es la mantenibilidad concurrente: redundancia de componentes (N+1) y múltiples caminos de distribución donde cualquiera puede retirarse para servicio sin apagar la carga TI.',
                },
                {
                    text: 'Durante el ciclo de gestión de parches de seguridad (Patch Management) en los servidores Linux empresariales de la DIAN, el protocolo técnico correcto exige:',
                    options: [
                        'Aplicar las actualizaciones directamente en los servidores de producción en horario de máxima afluencia laboral.',
                        'Probar los parches en un entorno de pruebas (Staging) idéntico a producción, generar snapshots de respaldo, programar ventana en horario de bajo tráfico y disponer de plan de reversión (Rollback).',
                        'Omitir parches de seguridad del kernel para evitar reiniciar los equipos.',
                        'Descargar parches de repositorios no oficiales o foros de internet sin verificar firmas criptográficas.',
                    ],
                    correct: 1,
                    explanation: 'El ciclo de parches formal exige pruebas en staging, respaldos previos (snapshot), ventanas de mantenimiento programadas en horario de bajo impacto y un procedimiento documentado de rollback en caso de fallo.',
                },
                {
                    text: 'Al diseñar la arquitectura de servidores para un nuevo servicio aduanero bajo el Acuerdo Marco de Nube Pública de Colombia Compra Eficiente, el modelo de nube IaaS (Infraestructura como Servicio) transfiere a la DIAN la responsabilidad de:',
                    options: [
                        'El mantenimiento físico de los generadores eléctricos y el hardware del datacenter del proveedor de nube.',
                        'La administración del sistema operativo invitado, parches de software, configuración de red lógica, control de acceso y seguridad de las bases de datos.',
                        'La fabricación física de los procesadores y discos duros.',
                        'El tendido de cables submarinos de fibra óptica transatlántica.',
                    ],
                    correct: 1,
                    explanation: 'Bajo el modelo de responsabilidad compartida en IaaS, el proveedor de nube gestiona la infraestructura física y la virtualización, mientras que el cliente (DIAN) es responsable del sistema operativo, parches, configuraciones y datos.',
                },
                {
                    text: 'Frente a una alerta del SOC sobre un servidor web comprometido con una shell inversa activa, ¿cuál es la primera medida de contención técnica recomendada según las mejores prácticas forenses de respuesta a incidentes?',
                    options: [
                        'Apagar el servidor de inmediato desconectando el cable de energía eléctrica de la pared.',
                        'Aislar el servidor de la red (desconexión lógica o VLAN de cuarentena) para impedir el movimiento lateral, manteniendo la máquina encendida para preservar la memoria volátil (RAM) para el análisis forense.',
                        'Formatear el disco duro de inmediato para reanudar el servicio en 5 minutos.',
                        'Cambiar la contraseña de Wi-Fi de la sala de juntas.',
                    ],
                    correct: 1,
                    explanation: 'La contención correcta exige aislar el host para frenar el ataque y evitar que el atacante se propague, preservando la memoria RAM encendida, ya que en ella residen las claves criptográficas, procesos en ejecución y conexiones de red esenciales para la investigación forense.',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 4: COMPETENCIAS COMPORTAMENTALES Y ÉTICA
           ---------------------------------------------------- */
        {
            id: 'm4',
            title: 'Módulo 4: Competencias Comportamentales y Ética',
            navLabel: '🤝 M.4: Comportamentales',
            homeLabel: 'Módulo 4: Comportamentales',
            theoryId: 'modulo-4',
            cases: [
                {
                    text: 'Un directivo solicita al Gestor I de Infraestructura que altere las bitácoras de auditoría de un servidor para eliminar el registro de una consulta indebida realizada a los expedientes tributarios de una empresa. Bajo la competencia de Comportamiento Ético (Nivel 4), ¿cuál es la conducta que debe adoptar el profesional?',
                    options: [
                        'Acceder a la petición para no perjudicar su estabilidad laboral ni generar asperezas con sus superiores.',
                        'Mantener la integridad e inalterabilidad de los registros técnicos, informando formalmente la situación a través de los canales éticos y disciplinarios institucionales.',
                        'Borrar solo la mitad de los registros para complacer en parte al directivo.',
                        'Cobrar una comisión económica por realizar la modificación en la base de datos.',
                    ],
                    correct: 1,
                    explanation: 'El comportamiento ético en el nivel profesional exige rectitud inquebrantable, apego irrestricto a la ley y la verdad técnica, y defensa de los activos públicos por encima de órdenes o presiones ilegítimas.',
                },
                {
                    text: 'Durante la implementación de una actualización crítica en la base de datos del Muisca que provoca una caída temporal del sistema aduanero, surge una fuerte discusión entre el administrador de base de datos y el ingeniero de redes culpándose mutuamente. Bajo la competencia de Trabajo en Equipo (Nivel 3), el profesional debe:',
                    options: [
                        'Tomar partido por el colega de su misma área y descalificar al otro equipo técnico.',
                        'Promover un ambiente de calma y colaboración objetiva, enfocando la energía del equipo en diagnosticar y solucionar la falla conjuntamente para restablecer el servicio a los ciudadanos.',
                        'Abandonar la reunión argumentando que el problema no corresponde a sus funciones específicas.',
                        'Redactar un correo electrónico a la Dirección General denunciando a ambos compañeros.',
                    ],
                    correct: 1,
                    explanation: 'El trabajo en equipo en situaciones de crisis demanda madurez profesional, enfoque en la solución compartida de los problemas institucionales y priorización del servicio ciudadano sobre los conflictos interpersonales.',
                },
                {
                    text: 'Un Gestor I enfrenta una acumulación de requerimientos de soporte técnico por incidentes en diferentes sedes seccionales de la DIAN. Bajo la competencia de Orientación a Resultados (Nivel 4), ¿cuál es la estrategia de gestión más adecuada?',
                    options: [
                        'Atender los tickets en estricto orden de llegada sin importar si se trata de un problema menor o de la parálisis de una aduana de frontera.',
                        'Categorizar y priorizar los incidentes según su impacto en la recaudación fiscal y el control aduanero, identificando patrones recurrentes para resolver las causas de fondo.',
                        'Cerrar los tickets sin verificar la solución para mejorar las estadísticas mensuales de la mesa de ayuda.',
                        'Delegar todos los casos complejos en los contratistas temporales.',
                    ],
                    correct: 1,
                    explanation: 'La orientación a resultados en el nivel profesional implica priorizar estratégicamente las acciones en función del impacto misional del Estado y aplicar análisis de causa raíz para generar soluciones sostenibles.',
                },
                {
                    text: 'La DIAN decide modernizar sus plataformas hacia arquitecturas de contenedores y computación en la nube. Un profesional de carrera que lleva 15 años administrando servidores físicos tradicionales demuestra la competencia de Adaptabilidad al Cambio (Nivel 3) cuando:',
                    options: [
                        'Asume con actitud proactiva y receptiva el aprendizaje de las nuevas tecnologías, participando en capacitaciones y aportando su experiencia previa para facilitar la transición del equipo.',
                        'Presenta quejas formales alegando que los sistemas tradicionales son suficientes y que no debería modificarse nada.',
                        'Se rehúsa a utilizar las nuevas herramientas argumentando que en su concurso original no le exigieron contenedores.',
                        'Espera a que otros compañeros implementen la tecnología para luego pedir traslado de área.',
                    ],
                    correct: 0,
                    explanation: 'La adaptabilidad al cambio exige apertura constructiva frente a la modernización institucional, disposición constante de autoaprendizaje y flexibilidad para reorientar las habilidades técnicas al logro de metas.',
                },
                {
                    text: 'Al sustentar ante el Comité de Dirección de la DIAN la necesidad presupuestal de renovar la infraestructura de almacenamiento de datos, el Gestor I aplica una Comunicación Asertiva y Efectiva (Nivel 4) cuando:',
                    options: [
                        'Utiliza terminología técnica incomprensible y tecnicismos oscuros para evidenciar su superioridad académica.',
                        'Estructura su mensaje en términos del impacto misional: traduce los riesgos técnicos a indicadores de pérdida de recaudo, tiempos de inactividad del servicio y beneficios tangibles para el ciudadano.',
                        'Presenta un documento desordenado de 200 páginas sin resumen ejecutivo ni conclusiones claras.',
                        'Se limita a decir que el sistema actual no sirve sin aportar datos ni comparativas de mercado.',
                    ],
                    correct: 1,
                    explanation: 'La comunicación efectiva en el nivel profesional adapta el mensaje al público receptor, traduciendo variables técnicas complejas en impactos estratégicos de valor público e institucional.',
                },
                {
                    text: 'Un profesional de reciente vinculación a la Subdirección de TI comete un error involuntario en una regla de enrutamiento que aísla una sede seccional por 20 minutos. Bajo la competencia de Liderazgo (Nivel 3), el Gestor I experimentado debe:',
                    options: [
                        'Exhibir el error del compañero públicamente en el grupo de mensajería para advertir a los demás.',
                        'Analizar el incidente en privado con el nuevo servidor, brindarle retroalimentación constructiva, enseñarle el procedimiento de validación previa y acompañarlo en el fortalecimiento de sus destrezas.',
                        'Solicitar a Talento Humano la apertura de una investigación disciplinaria inmediata.',
                        'Asumir en secreto todas las funciones del compañero para que este no vuelva a tocar ningún equipo.',
                    ],
                    correct: 1,
                    explanation: 'El liderazgo pedagógico y formador promueve el crecimiento del equipo a partir del error, ofreciendo retroalimentación constructiva y fortaleciendo la cultura de prevención y calidad técnica.',
                },
                {
                    text: 'Durante un fin de semana en que colapsa el enlace de datos principal de la aduana del puerto de Buenaventura, el proveedor tarda en responder. El Gestor I de guardia, bajo la competencia de Toma de Decisiones (Nivel 4), debe:',
                    options: [
                        'Esperar hasta el lunes a que el jefe de la división se reintegre y autorice cualquier acción.',
                        'Evaluar los riesgos técnicos y activar diligentemente el plan de contingencia preestablecido con el enlace satelital de respaldo, informando oportunamente a los líderes de la operación.',
                        'Suspender el tránsito aduanero de buques de forma unilateral hasta nueva orden.',
                        'Desconectarse de los teléfonos de guardia para no ser responsabilizado del corte.',
                    ],
                    correct: 1,
                    explanation: 'La toma de decisiones oportuna exige aplicar con criterio y autonomía responsable los planes de contingencia aprobados, mitigando impactos críticos en la economía y el comercio exterior.',
                },
                {
                    text: 'Al surgir discrepancias técnicas profundas entre dos ingenieros sobre el diseño de direccionamiento IP para la nube híbrida de la DIAN, la conducta esperada para la Resolución de Conflictos (Nivel 3) es:',
                    options: [
                        'Crear confrontaciones personales y negarse a dialogar hasta que la otra parte ceda incondicionalmente.',
                        'Facilitar una mesa de trabajo basada en el análisis de estándares internacionales (RFCs), requerimientos de seguridad institucional y viabilidad operativa para construir una solución consensuada.',
                        'Decidir la arquitectura técnica mediante un sorteo de moneda al aire.',
                        'Escalar la discusión a términos personales involucrando a las familias de los compañeros.',
                    ],
                    correct: 1,
                    explanation: 'La resolución constructiva de conflictos se apoya en el diálogo técnico fundamentado en normas y estándares, buscando el consenso y el beneficio superior del servicio público.',
                },
                {
                    text: 'La Vocación de Servicio y Orientación al Ciudadano en el ejercicio de las funciones del Gestor I de Infraestructura se manifiesta cuando el servidor:',
                    options: [
                        'Entiende que la estabilidad y disponibilidad de los servidores no es un fin puramente informático, sino un medio para garantizar que los ciudadanos cumplan sus deberes tributarios con dignidad, facilidad y celeridad.',
                        'Considera que su trabajo es puramente técnico y que las dificultades que experimenten los contribuyentes no son de su incumbencia.',
                        'Programa mantenimientos con suspensión total de servicios en las fechas límites de pago de impuestos.',
                        'Desconoce el impacto que una caída de red genera en las operaciones de comercio exterior del país.',
                    ],
                    correct: 0,
                    explanation: 'La vocación de servicio en el sector público orienta todo esfuerzo técnico hacia la satisfacción de las necesidades ciudadanas y la garantía efectiva de los derechos fundamentales en el marco del Estado social de derecho.',
                },
                {
                    text: 'Tras superarse un incidente mayor de seguridad que expuso parcialmente registros de auditoría en la DIAN, la competencia de Transparencia y Rendición de Cuentas (Nivel 4) se cumple cuando el equipo técnico:',
                    options: [
                        'Elimina los logs del sistema para que los organismos de control no encuentren inconsistencias.',
                        'Elabora un informe post-incidente riguroso y transparente, detallando cronología, causas raíces, medidas de mitigación adoptadas y compromisos de mejora continua.',
                        'Presenta un informe vago y engañoso que culpe exclusivamente a factores externos imprevisibles.',
                        'Se niega a suministrar información a la Oficina de Control Interno alegando reserva industrial.',
                    ],
                    correct: 1,
                    explanation: 'La transparencia institucional exige una rendición de cuentas veraz, objetiva y documentada tras incidentes críticos, identificando lecciones aprendidas y formulando planes de mejora continuos.',
                },
            ],
        },
    ];

    /**
     * Materializa los módulos con sus preguntas.
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
