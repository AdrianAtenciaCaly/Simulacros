(function (PM) {
    'use strict';

    const { QUESTIONS_PER_MODULE } = PM;

    /**
     * BANCO OFICIAL DE PREGUNTAS DE JUICIO SITUACIONAL (CNSC / DIAN)
     * Empleo: Gestor I (Código 301, Grado 01) — OPEC: 198476
     * Ficha de Empleo: CC-AU-3008 | Proceso: Cercanía con el Ciudadano | Subproceso: Asistencia al Usuario
     *
     * Diseñado bajo la metodología oficial de Juicio Situacional de la Comisión Nacional del Servicio Civil:
     * Planteamiento de casos laborales reales, dilemas normativos y procedimentales, y 4 opciones estructuradas
     * que evalúan el apego a la Constitución, CPACA, Estatuto Tributario, DURT 1625/2016, Ley 1755/2015,
     * Decreto Ley 071/2020 y Decreto 815/2018.
     */
    const MODULE_DEFINITIONS = [
        /* ----------------------------------------------------
           MÓDULO 1: RÉGIMEN CONSTITUCIONAL Y FUNCIÓN PÚBLICA (DIAN)
           ---------------------------------------------------- */
        {
            id: 'm1',
            title: 'Módulo 1: Función Pública y Estructura DIAN',
            navLabel: '🏛️ M.1: Función Pública',
            homeLabel: 'Módulo 1: Función Pública y Estructura DIAN',
            theoryId: 'modulo-1',
            cases: [
                {
                    text: 'Un contribuyente acude alterado al Punto de Contacto de la DIAN manifestando que se le están vulnerando sus derechos constitucionales porque un funcionario anterior le exigió presentar su declaración de renta sin permitirle controvertir una inconsistencia detectada en el sistema. Conforme al artículo 29 de la Constitución Política y los principios de la función administrativa (Art. 209 C.P.), ¿cuál es la actuación que debe asumir el Gestor I?',
                    options: [
                        'Informarle al ciudadano que las decisiones informáticas de la DIAN son inapelables y que debe pagar de inmediato la sanción para evitar el cobro coactivo.',
                        'Garantizar el debido proceso administrativo, revisando el estado del trámite en el sistema Muisca, explicándole con lenguaje claro los hechos que originan la discrepancia y orientándolo sobre los canales y términos legales para ejercer su derecho a la contradicción y defensa.',
                        'Pedirle que abandone las instalaciones de la entidad por alterar el orden público y sugerirle que contrate a un abogado particular para que radique una tutela.',
                        'Modificar de inmediato las cifras en la base de datos de la DIAN bajo su propio criterio para calmar el descontento del ciudadano.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 29 de la Constitución Política consagra el debido proceso aplicable a toda actuación administrativa. El servidor debe garantizar el derecho de contradicción, verificar los antecedentes en el sistema institucional y orientar con claridad los recursos o descargos procedentes.',
                },
                {
                    text: 'El Director Seccional solicita verbalmente al Gestor I de Asistencia al Usuario que atienda de manera prioritaria y fuera del orden del sistema de citas a un empresario allegado a su despacho, exonerándolo de presentar el certificado de existencia y representación legal exigido por la norma para actualizar el RUT de su sociedad. Conforme al Código General Disciplinario (Ley 1952 de 2019, reformada por Ley 2094 de 2021) y el principio de legalidad (Art. 6 C.P.), el servidor debe:',
                    options: [
                        'Acceder a la solicitud del superior de inmediato para evitar roces laborales y represalias en la evaluación de desempeño.',
                        'Explicar respetuosamente al superior que la omisión del requisito legal y la alteración injustificada de turnos vulneran los principios de igualdad e imparcialidad, manifestando que si insiste en la orden debe expedirla por escrito y motivada conforme al derecho de representación.',
                        'Llamar a los medios de comunicación y a la policía para denunciar públicamente al Director Seccional en ese mismo instante.',
                        'Realizar el trámite exigiendo al empresario un pago en efectivo por el concepto de "agilización de turno preferente".',
                    ],
                    correct: 1,
                    explanation: 'El artículo 38 de la Ley 1952 de 2019 consagra el deber de cumplir órdenes legítimas y el derecho de representación cuando una orden vulnere normas legales. El trato preferencial injustificado atenta contra la moralidad y la igualdad (Art. 209 C.P.), debiendo salvarse la responsabilidad mediante constancia escrita.',
                },
                {
                    text: 'En una Dirección Seccional de la DIAN se genera una vacante temporal en el empleo de Gestor II (Grado 02). El área de Talento Humano debe proveer dicha vacante de conformidad con el Decreto Ley 071 de 2020 (Régimen Específico de Carrera de la DIAN). ¿Cuál es la regla de prelación obligatoria que debe aplicarse?',
                    options: [
                        'Contratar directamente a una persona externa mediante contrato de prestación de servicios por razones de urgencia manifiesta.',
                        'Proveer la vacante mediante encargo con el empleado con derechos de carrera administrativa del empleo inmediatamente inferior (Gestor I) que cumpla los requisitos del perfil, no tenga sanción disciplinaria y cuente con evaluación del desempeño laboral sobresaliente.',
                        'Elegir al servidor provisional que tenga más tiempo de vinculación ininterrumpida en la seccional.',
                        'Someter el puesto a una votación democrática entre los funcionarios del sindicato seccional.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 19 del Decreto Ley 071 de 2020 establece que las vacantes temporales o definitivas deben proveerse prioritariamente mediante encargo a servidores con derechos de carrera administrativa que cumplan los requisitos del cargo, calificación sobresaliente y carezcan de antecedentes disciplinarios.',
                },
                {
                    text: 'Un Gestor I en el Punto de Contacto es visitado por un primo hermano que solicita la inscripción en el RUT de una sociedad comercial de la cual es socio mayoritario y representante legal. Conforme al artículo 11 del CPACA y el régimen disciplinario sobre conflicto de intereses, ¿cuál es el deber funcional del servidor público?',
                    options: [
                        'Atender el trámite de su familiar con máxima celeridad para demostrar la eficiencia del servicio público.',
                        'Declararse formalmente impedido de inmediato mediante comunicación escrita dirigida a su superior jerárquico, absteniéndose de conocer, radicar o validar la solicitud de su pariente.',
                        'Pedirle a un compañero que use su usuario y contraseña institucional para tramitarlo a nombre del Gestor I.',
                        'Tramitar la solicitud normalmente pero no imprimir el certificado del RUT hasta que pasen quince días hábiles.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 11 numeral 1 del CPACA y la Ley 1952 de 2019 establecen causal obligatoria de impedimento cuando el servidor tenga interés directo o parentesco hasta el cuarto grado de consanguinidad o segundo de afinidad con el peticionario, debiendo apartarse formalmente de la actuación.',
                },
                {
                    text: 'Durante la jornada laboral, un contribuyente ofrece un obsequio costoso y dinero en efectivo a un Gestor I en agradecimiento por haberle orientado diligentemente en la corrección de un error formal en el RUT que le impedía facturar. Ante esta situación, según el Código General Disciplinario y el Código de Integridad de la DIAN, el servidor debe:',
                    options: [
                        'Aceptar el dinero justificando que el servicio ya fue prestado y no se condicionó previamente el trámite.',
                        'Rechazar de manera categórica el dinero y los obsequios, advirtiendo al ciudadano que el servicio es absolutamente gratuito y que recibir dádivas constituye falta gravísima dolosa (concusión/cohecho), dejando constancia del hecho.',
                        'Recibir los bienes pero donarlos inmediatamente a una entidad de beneficencia pública.',
                        'Aceptar el regalo únicamente si el contribuyente firma una carta donde manifieste que fue una donación espontánea.',
                    ],
                    correct: 1,
                    explanation: 'El Código General Disciplinario (Ley 1952 de 2019) tipifica como falta gravísima solicitar, recibir o aceptar dádivas, dinero o favores con ocasión de las funciones públicas. El servidor debe rechazar todo ofrecimiento y recordar la gratuidad del servicio estatal.',
                },
                {
                    text: 'Conforme al Decreto 1742 de 2020 (Estructura Orgánica de la DIAN), ¿cuál de las siguientes dependencias del nivel central es la competente para formular las directrices estratégicas de atención al usuario, diseño de canales y fomento de la cultura tributaria?',
                    options: [
                        'La Dirección de Gestión del Servicio a través de la Subdirección de Asistencia al Ciudadano.',
                        'La Dirección de Gestión de Policía Fiscal y Aduanera (POLFA).',
                        'La Subdirección de Asuntos Arancelarios y Aduaneros.',
                        'La Oficina de Control Disciplinario Interno.',
                    ],
                    correct: 0,
                    explanation: 'El Decreto 1742 de 2020 asigna a la Dirección de Gestión del Servicio y a la Subdirección de Asistencia al Ciudadano la función de diseñar, orientar, implementar y monitorear las políticas de servicio al ciudadano, los canales de atención y los programas de cultura de la contribución.',
                },
                {
                    text: 'Un Gestor I nombrado en período de prueba tras ganar el concurso de méritos de la CNSC desea conocer las implicaciones jurídicas de dicha etapa. Conforme al Decreto Ley 071 de 2020, el período de prueba:',
                    options: [
                        'Dura un año lectivo y solo puede ser evaluado por el Director General de la DIAN mediante examen psicotécnico.',
                        'Tiene una duración de seis (6) meses, al cabo de los cuales se evalúa el desempeño laboral; superado con calificación sobresaliente o satisfactoria, el servidor adquiere los derechos de carrera y es escalafonado en el registro público.',
                        'Otorga derechos de carrera definitivos desde el primer día de posesión sin importar los resultados de la evaluación.',
                        'Permite ser despedido libremente en cualquier momento sin necesidad de motivación ni acto administrativo.',
                    ],
                    correct: 1,
                    explanation: 'El Decreto Ley 071 de 2020 establece que el período de prueba para los empleos de la DIAN tiene una duración de seis (6) meses. Al término del mismo, si la calificación es satisfactoria o sobresaliente, se produce la inscripción en el Registro del Sistema Específico de Carrera.',
                },
                {
                    text: 'El principio constitucional tributario de "Progresividad" consagrado en el artículo 363 de la Carta Política implica fundamentalmente que:',
                    options: [
                        'Todos los ciudadanos paguen exactamente la misma tarifa porcentual fija sin importar sus ingresos o patrimonio.',
                        'La carga tributaria se distribuya de forma proporcional a la capacidad económica real del contribuyente, de tal manera que quien posea mayor capacidad contributiva aporte en una proporción superior.',
                        'Los impuestos solo puedan cobrarse una vez cada cuatro años coincidiendo con los períodos presidenciales.',
                        'Las leyes tributarias se apliquen hacia el pasado para recuperar impuestos de años no prescritos.',
                    ],
                    correct: 1,
                    explanation: 'El principio de progresividad tributaria (Art. 363 C.P.) exige que la carga impositiva aumente en mayor proporción a medida que se incrementa la capacidad económica del sujeto gravado, materializando la justicia distributiva.',
                },
                {
                    text: 'Un Gestor I comete un error involuntario de digitación en el dígito de verificación de una circular informativa interna que no alteró derechos ni causó daño patrimonial alguno. Un directivo pretende iniciarle una investigación disciplinaria verbal sin procedimiento previo. Conforme a las garantías constitucionales del debido proceso y la Ley 1952 de 2019:',
                    options: [
                        'El servidor puede ser sancionado verbalmente en público sin necesidad de pliego de cargos ni pruebas.',
                        'Toda sanción disciplinaria exige adelantar un procedimiento reglado con formulación de cargos, notificación formal, derecho a presentar descargos y pruebas, y garantía de doble instancia.',
                        'Las faltas en la DIAN conllevan destitución automática sin derecho a defensa ni notificación.',
                        'Los errores de digitación son considerados delitos de lesa majestad tributaria.',
                    ],
                    correct: 1,
                    explanation: 'El debido proceso disciplinario (Art. 29 C.P. y Ley 1952/2019) exige respeto estricto de las formas propias de cada juicio: investigación, pliego de cargos formal, términos de descargos, período probatorio y decisión motivada recurrible.',
                },
                {
                    text: 'En relación con el Sistema de Control Interno de la DIAN, un Gestor I asignado a la ventanilla de asistencia al usuario se ubica institucionalmente dentro de:',
                    options: [
                        'La Tercera Línea de Defensa, encargada de la auditoría independiente posterior.',
                        'La Primera Línea de Defensa (operativa), siendo responsable directo de aplicar los controles preventivos diarios en la recepción y verificación de documentos de los trámites que gestiona.',
                        'La Línea Estratégica, responsable de expedir los decretos de estructura del Estado.',
                        'Una instancia ajena al Modelo Integrado de Planeación y Gestión (MIPG).',
                    ],
                    correct: 1,
                    explanation: 'Bajo el esquema de las Tres Líneas de Defensa del MIPG (Decreto 1499 de 2017), la Primera Línea está constituida por los líderes de proceso y servidores operativos (como el Gestor I), responsables primarios de gestionar los riesgos y aplicar los controles en el día a día.',
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
                    text: 'Un ciudadano radica el 2 de mayo una petición solicitando copia simple de las resoluciones de inscripción en el RUT expedidas a nombre de su empresa durante los últimos cinco años. Conforme a la Ley 1755 de 2015, ¿cuál es el término perentorio legal que tiene la DIAN para resolver de fondo dicha solicitud?',
                    options: [
                        'Treinta (30) días calendario por tratarse de expedientes históricos del archivo central.',
                        'Diez (10) días hábiles siguientes a la recepción; de no responder en dicho término, la petición se entenderá aceptada y la DIAN deberá entregar las copias dentro de los 3 días siguientes.',
                        'Quince (15) días hábiles como toda petición ordinaria sin consecuencias en caso de demora.',
                        'Tres (3) meses conforme a la regla del silencio administrativo negativo.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 14 numeral 1 de la Ley 1755 de 2015 establece que las peticiones de documentos y de información deberán resolverse dentro de los diez (10) días hábiles siguientes a su recepción, operando la aceptación tácita de las copias si no se responde en término.',
                },
                {
                    text: 'Una microempresaria presenta una petición ante la DIAN para solicitar la corrección de su dirección en el RUT, pero olvida adjuntar la certificación del recibo de servicios públicos o documento probatorio que exige el procedimiento para validar la nueva dirección. Conforme al artículo 17 del CPACA (Ley 1437/2011 sustituido por Ley 1755/2015), ¿qué actuación debe realizar el Gestor I que analiza la solicitud?',
                    options: [
                        'Rechazar de plano la petición y archivarla de inmediato sin informarle al ciudadano.',
                        'Requerir a la peticionaria por escrito y por una sola vez dentro de los diez (10) días siguientes a la radicación, indicándole los documentos faltantes para que los aporte en el término de un (1) mes.',
                        'Esperar a que transcurran quince días hábiles y responderle con un silencio administrativo negativo.',
                        'Llamarla por teléfono informalmente para pedirle un favor personal a cambio de no archivarle la solicitud.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 17 del CPACA ordena que ante peticiones incompletas, la autoridad debe requerir por escrito y por una sola vez al interesado dentro de los 10 días siguientes a la radicación para que subsane en el plazo de 1 mes, quedando suspendidos los términos.',
                },
                {
                    text: 'Transcurrido el mes otorgado a un solicitante para subsanar los documentos faltantes de un trámite de actualización del RUT, este no aporta la información ni solicita prórroga justificada. Conforme a la Ley 1755 de 2015, la DIAN debe:',
                    options: [
                        'Imponerle una multa coercitiva de 50 salarios mínimos mensuales legales vigentes.',
                        'Declarar el desistimiento tácito de la petición y ordenar el archivo del expediente mediante acto administrativo motivado, contra el cual procede únicamente recurso de reposición.',
                        'Aprobar el trámite asumiendo que los documentos faltantes no eran necesarios.',
                        'Enviar los datos del ciudadano a las centrales de riesgo crediticio de forma indefinida.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 17 del CPACA consagra la figura del desistimiento tácito: vencido el término sin que el peticionario subsane lo requerido, la administración declarará el desistimiento y archivo mediante resolución motivada sujeta a recurso de reposición.',
                },
                {
                    text: 'Un contribuyente interpone un recurso de reposición contra una resolución seccional que negó la modificación de su actividad económica en el RUT por falta de soportes. Conforme al artículo 76 del CPACA, ¿cuál es el plazo que tiene el interesado para radicar formalmente su recurso?',
                    options: [
                        'Cinco (5) días hábiles contados a partir del día siguiente a la fecha de radicación de la petición inicial.',
                        'Diez (10) días hábiles contados a partir del día siguiente a la notificación del acto administrativo.',
                        'Treinta (30) días calendario ante el Tribunal Administrativo de Cundinamarca.',
                        'En cualquier tiempo durante los siguientes cinco años.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 76 de la Ley 1437 de 2011 (CPACA) establece que los recursos de reposición y apelación deberán interponerse por escrito en la diligencia de notificación personal, o dentro de los diez (10) días hábiles siguientes a ella o a la notificación por aviso/electrónica.',
                },
                {
                    text: 'Al revisar una resolución expedida por la seccional sobre la corrección del RUT de un ciudadano, el Gestor I nota que en la parte resolutiva se escribió por error "NIT 800.123.457" cuando en todos los antecedentes y pruebas del expediente consta claramente que el NIT correcto es "800.123.456". Conforme al artículo 45 del CPACA, ¿cómo debe procederse?',
                    options: [
                        'Revocar completamente el acto administrativo e iniciar un nuevo proceso sancionatorio desde cero.',
                        'Efectuar la corrección del error puramente aritmético o mecanográfico en cualquier tiempo, de oficio o a solicitud de parte, expidiendo un acto aclaratorio que no altera sustancialmente la decisión de fondo.',
                        'Dejar el error tal como está porque los actos firmes nunca pueden ser tocados bajo ninguna circunstancia.',
                        'Exigir al contribuyente que tramite un nuevo NIT para que coincida con el número errado del acto.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 45 del CPACA autoriza que en cualquier tiempo, de oficio o a petición de parte, se puedan corregir los errores simplemente aritméticos o mecanográficos en los actos administrativos, siempre que no impliquen un cambio sustancial del fondo de la decisión.',
                },
                {
                    text: 'Un abogado presenta un derecho de petición formulando una consulta conceptual compleja sobre la interpretación doctrinal de la DIAN respecto a las tarifas del impuesto nacional al consumo en franquicias. Conforme a la Ley 1755 de 2015, ¿cuál es el término legal para responder esta modalidad de petición?',
                    options: [
                        'Diez (10) días hábiles.',
                        'Treinta (30) días hábiles siguientes a su recepción.',
                        'Quince (15) días hábiles prorrogables por un año.',
                        'Cinco (5) días hábiles por tratarse de un profesional del derecho.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 14 numeral 3 de la Ley 1755 de 2015 señala taxativamente que las peticiones mediante las cuales se eleva una consulta a las autoridades en relación con las materias a su cargo deberán resolverse dentro de los treinta (30) días hábiles siguientes a su recepción.',
                },
                {
                    text: 'La DIAN expide una liquidación oficial a un contribuyente. Conforme al artículo 566-1 del Estatuto Tributario, ¿cuándo se entiende formal y legalmente surtida la notificación electrónica para efectos de los términos procesales del ciudadano?',
                    options: [
                        'En el mismo segundo en que el servidor otea el botón "Enviar" en la pantalla de su computador.',
                        'A partir del quinto (5) día hábil siguiente a la fecha de entrega del correo electrónico o acuse de recibo en el buzón informado en el RUT.',
                        'A los treinta días hábiles de haber sido publicado en la página de inicio del portal de la DIAN.',
                        'Únicamente cuando el contribuyente acuda personalmente a la sede de la DIAN y firme el libro de radicados.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 566-1 del Estatuto Tributario establece que la notificación electrónica se entenderá surtida para la administración con el envío, pero los términos para el contribuyente empezarán a correr a partir del quinto (5) día hábil siguiente a la entrega del correo en su buzón informado en el RUT.',
                },
                {
                    text: 'Un ciudadano inconforme con la demora en la atención en ventanilla presenta una queja formal a través del sistema de PQRSD de la DIAN. Según las normas de servicio al ciudadano y el CPACA, el término legal oportuno para resolver y responder una queja o reclamo es de:',
                    options: [
                        'Quince (15) días hábiles contados a partir del día siguiente a su radicación.',
                        'Seis (6) meses con informe bimestral a la Procuraduría.',
                        'Cuarenta y ocho (48) horas bajo apremio de arresto al funcionario de turno.',
                        'No tiene término legal por tratarse de una simple molestia de carácter administrativo.',
                    ],
                    correct: 0,
                    explanation: 'Las quejas y reclamos presentados por los ciudadanos forman parte del derecho de petición de interés general/particular y deben resolverse dentro del término general de quince (15) días hábiles (Ley 1755 de 2015).',
                },
                {
                    text: '¿En cuál de los siguientes eventos se configura la "Pérdida de Fuerza Ejecutoria" o decaimiento de un acto administrativo emitido por la DIAN, según el artículo 91 del CPACA?',
                    options: [
                        'Cuando transcurran cinco (5) años desde que el acto adquirió firmeza sin que la administración haya realizado los actos de cobro o ejecución forzosa.',
                        'Cuando cambie el Director Seccional o el Presidente de la República.',
                        'Cuando el contribuyente se traslade de ciudad de residencia.',
                        'A los seis meses de emitido si no ha sido publicado en un diario de amplia circulación nacional.',
                    ],
                    correct: 0,
                    explanation: 'El artículo 91 numeral 3 del CPACA dispone que los actos administrativos pierden su fuerza ejecutoria cuando al cabo de cinco (5) años de estar en firme la administración no ha ejecutado los actos coactivos o materiales para hacerlos cumplir.',
                },
                {
                    text: 'Una asociación comunitaria solicita copia de las declaraciones de renta de varios concejales del municipio amparándose en la Ley de Transparencia y Acceso a la Información (Ley 1712 de 2014). El Gestor I que recibe la petición debe tramitar la respuesta indicando que:',
                    options: [
                        'Debe entregarse copia completa de inmediato porque los concejales son personas públicas y prima la transparencia absoluta.',
                        'La información requerida goza de reserva legal tributaria expresa conforme al artículo 583 del Estatuto Tributario, por lo cual legalmente no puede suministrarse a particulares ni a veedurías ciudadanas sin orden judicial.',
                        'Se entregan las copias únicamente si los concejales pertenecen al partido de oposición al gobierno de turno.',
                        'Se suben las declaraciones a las redes sociales de la DIAN para que la comunidad vote si las aprueba.',
                    ],
                    correct: 1,
                    explanation: 'La Ley 1712 de 2014 reconoce expresamente las excepciones de reserva legal consagradas en otras leyes; el artículo 583 del Estatuto Tributario ampara con reserva estricta las declaraciones tributarias, prohibiendo su entrega a particulares.',
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
                    text: 'Una persona natural comerciante acude al Punto de Contacto de la DIAN solicitando actualizar su RUT para retirar la responsabilidad 48 (Responsable del IVA) y pasar a la responsabilidad 49 (No responsable del IVA). Manifiesta que en el año inmediatamente anterior sus ingresos brutos no superaron los 3.500 UVT. Al revisar las declaraciones de los años anteriores, el Gestor I constata que hace dos años sus ingresos fiscales brutos fueron de 4.200 UVT. De conformidad con el parágrafo 3 del artículo 437 del Estatuto Tributario y el Decreto 1625 de 2016, ¿cuál es la decisión ajustada a derecho que debe adoptar el servidor?',
                    options: [
                        'Aprobar el retiro de la responsabilidad del IVA de inmediato porque el año anterior cumplió el tope y la norma solo evalúa los últimos doce meses.',
                        'Rechazar motivadamente la solicitud de actualización, explicándole que para retirar la responsabilidad del IVA es requisito indispensable haber cumplido con la totalidad de los topes legales de no responsable durante los tres (3) años fiscales anteriores consecutivos.',
                        'Eliminar manualmente la declaración de hace dos años del sistema para que el contribuyente quede habilitado en el sistema.',
                        'Suspenderle el RUT de forma indefinida y remitirlo a una fiscalía seccional por intentar engañar a la DIAN.',
                    ],
                    correct: 1,
                    explanation: 'El parágrafo 3 del artículo 437 del Estatuto Tributario y el Decreto 1625 de 2016 exigen que los responsables del IVA que deseen registrarse como no responsables deben demostrar que en los tres (3) años fiscales anteriores cumplieron anualmente con todos los topes (ingresos < 3.500 UVT, etc.). Al no cumplirlos en uno de ellos, la solicitud es improcedente.',
                },
                {
                    text: 'Un contribuyente solicita de manera urgente la cancelación del RUT de una sociedad de responsabilidad limitada que cesó operaciones mercantiles el mes pasado. Al consultar el sistema Muisca, el Gestor I evidencia que la sociedad adeuda dos períodos del impuesto sobre las ventas (IVA) y no ha radicado la escritura pública o acta de liquidación formal con su respectiva constancia de cancelación de la matrícula mercantil expedida por la Cámara de Comercio. Conforme al Decreto 1625 de 2016, el Gestor I debe:',
                    options: [
                        'Cancelar el RUT inmediatamente para que la sociedad no siga generando nuevas obligaciones fiscales en el sistema.',
                        'Informar por escrito al representante legal que para proceder con la cancelación definitiva del RUT es requisito insubsanable presentar el documento que acredite la liquidación formal inscrita en la Cámara de Comercio y estar a paz y salvo con las obligaciones tributarias sustanciales y formales administradas por la DIAN.',
                        'Transferir automáticamente las deudas de IVA al primer empleado que atienda en ventanilla para cancelar el NIT.',
                        'Expedir una constancia manuscrita indicando que la empresa ya no existe comercialmente.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 1.6.1.2.18 del Decreto 1625 de 2016 señala que la cancelación del RUT por liquidación de personas jurídicas exige allegar el documento de liquidación inscrito en la Cámara de Comercio y verificar el cumplimiento previo de las obligaciones tributarias pendientes.',
                },
                {
                    text: 'La DIAN remite tres comunicaciones oficiales de citación tributaria a la dirección que un contribuyente tiene registrada en la casilla 41 del RUT. La empresa de mensajería devuelve los tres envíos con la constancia formal "Dirección errada / no existe / predio demolido". Conforme al artículo 1.6.1.2.16 del Decreto 1625 de 2016, ¿cuál es la medida administrativa que procede respecto a dicho registro?',
                    options: [
                        'Cancelar definitivamente el RUT del contribuyente sin posibilidad de reapertura.',
                        'Proceder con la Suspensión del RUT por la causal de no ubicación del contribuyente en la dirección informada, notificando el acto administrativo correspondiente para que subsane su información registral.',
                        'Asignarle de oficio una dirección aleatoria en otra ciudad capital.',
                        'Archivar el caso sin registrar ninguna observación en la base de datos institucional.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 1.6.1.2.16 del Decreto 1625 de 2016 establece que procede la suspensión de la inscripción en el RUT cuando las comunicaciones oficiales dirigidas al contribuyente sean devueltas por causales de no ubicación, impidiendo temporalmente sus operaciones formales.',
                },
                {
                    text: 'En el Formulario 001 del RUT, ¿qué información esencial se encuentra contenida en las casillas 46 a 50 de la Hoja 1 y cuál es la normatividad técnica que las rige?',
                    options: [
                        'Los nombres y teléfonos de contacto de los tres principales clientes del contribuyente.',
                        'La clasificación de las actividades económicas principal y secundarias con sus respectivas fechas de inicio, codificadas conforme a la Clasificación Industrial Internacional Uniforme (CIIU Rev. 4 A.C. adoptada mediante Resolución DIAN 000139 de 2020).',
                        'El detalle de las cuentas bancarias en moneda extranjera y claves de acceso financiero.',
                        'La lista de bienes inmuebles embargados por la Dirección Seccional de Cobranzas.',
                    ],
                    correct: 1,
                    explanation: 'Las casillas 46 a 50 del RUT albergan los códigos de 4 dígitos de la Clasificación Industrial Internacional Uniforme (CIIU Rev. 4 adoptada para Colombia por el DANE y la DIAN en la Resolución 000139 de 2020) y la fecha exacta en que el contribuyente inició cada actividad.',
                },
                {
                    text: 'Un joven que cumplió 18 años y obtuvo su cédula de ciudadanía acude al Punto de Contacto para inscribirse por primera vez en el RUT con el fin de formalizar su contrato de prestación de servicios como diseñador gráfico. Respecto a este trámite para personas naturales, el Gestor I debe orientarlo en el sentido de que:',
                    options: [
                        'Obligatoriamente debe contratar a un contador público titulado para que presente la solicitud presencial.',
                        'Puede realizar el trámite 100% virtual y gratuito mediante autogestión en el portal web de la DIAN o App DIAN a través de la validación fotográfica y biométrica de su cédula, o adelantar la formalización en el punto de contacto si presenta inconvenientes tecnológicos.',
                        'La DIAN cobra una tarifa de media UVT por cada inscripción nueva de personas naturales.',
                        'Debe esperar un año con la cédula expedida antes de tener derecho a registrarse en el sistema tributario.',
                    ],
                    correct: 1,
                    explanation: 'La inscripción en el RUT para personas naturales es totalmente gratuita y puede realizarse de manera virtual y autónoma en la página web oficial de la DIAN con validación biométrica de la cédula, facilitando la cercanía y formalización ciudadana.',
                },
                {
                    text: 'Un contribuyente persona natural ejerce el comercio y arrienda dos locales comerciales. El 15 de marzo cambia su domicilio fiscal a otra ciudad del país. De acuerdo con el artículo 658-3 del Estatuto Tributario, ¿cuál es el plazo legal que tiene para actualizar su RUT y cuál es la consecuencia en caso de no hacerlo dentro del término?',
                    options: [
                        'Tiene seis meses de plazo y no existe sanción económica aplicable a personas naturales.',
                        'Debe actualizar el RUT dentro del mes siguiente a la ocurrencia del hecho (hasta el 15 de abril); si no lo hace, se expone a una sanción de dos (2) UVT por cada día de retraso en la actualización.',
                        'El plazo es de diez días hábiles bajo sanción de arresto de tres fines de semana.',
                        'La DIAN no sanciona por cambio de dirección porque la georreferenciación se realiza automáticamente por satélite.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 658-3 numeral 3 del Estatuto Tributario impone la obligación de actualizar el RUT dentro del mes siguiente al hecho que la genere; el incumplimiento acarrea sanción de dos (2) UVT por cada día de mora en la actualización.',
                },
                {
                    text: '¿En cuál de las siguientes casillas del Formulario 001 del RUT se consigna el correo electrónico obligatorio que utiliza la administración tributaria para surtir la Notificación Electrónica de sus actos oficiales?',
                    options: [
                        'Casilla 4 (Número de Identificación Tributaria).',
                        'Casilla 44 (Correo electrónico procesal de notificación).',
                        'Casilla 35 (Razón Social).',
                        'Casilla 53 (Responsabilidades y calidades tributarias).',
                    ],
                    correct: 1,
                    explanation: 'La casilla 44 del Formulario 001 del RUT corresponde a la dirección de correo electrónico procesal, a la cual se remiten obligatoriamente las notificaciones electrónicas de la DIAN con plenos efectos jurídicos vinculantes (Art. 566-1 E.T.).',
                },
                {
                    text: 'El representante legal de una fundación sin ánimo de lucro solicita el retiro de la responsabilidad 05 (Impuesto sobre la Renta del Régimen Ordinario) argumentando que por ser entidad sin ánimo de lucro no debe pagar impuestos. El Gestor I examina el caso y constata que la entidad no realizó el proceso anual de calificación o permanencia en el Régimen Tributario Especial (RTE) ante la DIAN. Conforme al Estatuto Tributario:',
                    options: [
                        'Retirar de oficio la responsabilidad 05 porque el nombre de la entidad dice "fundación sin ánimo de lucro".',
                        'Negar el retiro de la responsabilidad 05, explicando que las entidades sin ánimo de lucro pertenecen por mandato legal al régimen ordinario del impuesto sobre la renta a menos que agoten satisfactoriamente el trámite anual de calificación en el Régimen Tributario Especial (RTE) previsto en el artículo 19 y 364-5 del E.T.',
                        'Sancionar a la fundación borrándole el NIT del sistema informático de la DIAN.',
                        'Exigir que la fundación cambie su objeto social a una sociedad anónima simplificada (SAS).',
                    ],
                    correct: 1,
                    explanation: 'Los artículos 19 y 364-5 del Estatuto Tributario establecen que las ESAL son contribuyentes del régimen ordinario del impuesto de renta, salvo que soliciten y obtengan la calificación en el Régimen Tributario Especial cumpliendo los requisitos anuales fijados en la ley.',
                },
                {
                    text: 'Al verificar un trámite de solicitud de actualización del RUT para incorporar la responsabilidad 14 (Aduanero) a una persona jurídica, el solicitante no aporta la certificación bancaria de cuenta corriente o de ahorros activa a nombre de la sociedad. Conforme al Decreto 1625 de 2016 para usuarios aduaneros, el Gestor I debe:',
                    options: [
                        'Omitir el requisito bancario considerando que no tiene importancia para las aduanas.',
                        'Exigir la constancia bancaria con fecha de expedición no mayor a 30 días, informando al contribuyente que para operar en el comercio exterior es requisito indispensable tener cuenta bancaria registrada para el control cambiario y tributario.',
                        'Pedirle al representante legal su tarjeta de crédito personal para copiar los números de seguridad.',
                        'Rechazar el trámite y prohibirle exportar de por vida.',
                    ],
                    correct: 1,
                    explanation: 'El Decreto 1625 de 2016 establece como requisito para los usuarios aduaneros e importadores/exportadores adjuntar constancia de titularidad de cuenta corriente o de ahorros activa en entidad financiera vigilada por la Superfinanciera para fines de control.',
                },
                {
                    text: '¿Cuál es la causal que da lugar a la Cancelación de Oficio del RUT por parte de la DIAN sin que medie solicitud de los interesados, según el artículo 1.6.1.2.18 del Decreto 1625 de 2016?',
                    options: [
                        'Cuando el contribuyente presente una declaración con saldo a favor.',
                        'Cuando se verifique la duplicidad de inscripción de un mismo sujeto en el RUT (dos o más NIT asignados a la misma persona) o por orden de autoridad judicial competente.',
                        'Cuando el comerciante decida tomarse tres meses de vacaciones en el exterior.',
                        'Cuando la persona cumpla 65 años de edad.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 1.6.1.2.18 del Decreto 1625 de 2016 señala expresamente que la DIAN podrá cancelar de oficio el RUT cuando compruebe la duplicidad de inscripciones asignadas a un mismo titular o cuando medie orden judicial ejecutoriada.',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 4: ATENCIÓN AL CIUDADANO Y CANALES DE SERVICIO
           ---------------------------------------------------- */
        {
            id: 'm4',
            title: 'Módulo 4: Atención al Ciudadano y Canales TACI',
            navLabel: '👥 M.4: Canales TACI',
            homeLabel: 'Módulo 4: Atención, Servicio al Ciudadano y Canales TACI',
            theoryId: 'modulo-4',
            cases: [
                {
                    text: 'Un adulto mayor de 76 años, campesino de una zona rural, se presenta en el Punto de Contacto de la DIAN manifestando que no sabe usar computadores ni tiene teléfono inteligente, pero necesita urgentemente una copia física de su RUT para cobrar la venta de una cosecha de café. El funcionario de recepción le indica secamente que no lo puede atender porque no sacó cita por Internet. Al presenciar la situación, el Gestor I bajo el Protocolo de Servicio con Enfoque Diferencial y la Ley 1757 de 2015 debe:',
                    options: [
                        'Respaldar la negativa del recepcionista recordándole al adulto mayor que el agendamiento virtual es obligatorio para todos los colombianos sin excepción.',
                        'Intervenir de inmediato con calidez y respeto, garantizar la atención prioritaria sin exigencia de cita previa por ser sujeto de especial protección constitucional, orientarlo personalmente en el kiosco de autogestión guiada y entregarle la copia impresa de su RUT con lenguaje claro.',
                        'Decirle al ciudadano que regrese acompañado por un abogado que le tramite la cita en el portal web.',
                        'Cobrarle cinco mil pesos en efectivo por prestarle el servicio de impresión de la hoja del RUT.',
                    ],
                    correct: 1,
                    explanation: 'El protocolo de servicio al ciudadano de la DIAN y la Ley 1757 de 2015 consagran la atención prioritaria y preferencial a los adultos mayores y personas en situación de vulnerabilidad o analfabetismo digital, exonerándolos de la cita previa y brindándoles asistencia guiada presencial.',
                },
                {
                    text: 'La política de "Lenguaje Claro" promovida por el Departamento Administrativo de la Función Pública (DAFP) y adoptada por la DIAN exige a los servidores públicos que en sus comunicaciones verbales y escritas con el ciudadano:',
                    options: [
                        'Utilicen citas textuales en latín y jurisprudencia doctrinaria extensa para impresionar al usuario con la autoridad del Estado.',
                        'Estructuren las respuestas de forma sintética, transparente y en un vocabulario accesible, explicando claramente qué debe hacer el ciudadano, qué requisitos exige la ley y en qué plazos, evitando tecnicismos innecesarios.',
                        'Respondan únicamente con monosílabos ("sí", "no") para minimizar los registros en las grabaciones del contact center.',
                        'Remitan al peticionario el Código Civil completo para que él mismo busque la solución a su inquietud.',
                    ],
                    correct: 1,
                    explanation: 'El Lenguaje Claro busca democratizar el acceso a la administración pública, exigiendo que los actos, guías y respuestas sean comprensibles para cualquier ciudadano, permitiendo el ejercicio real de sus derechos y deberes fiscales.',
                },
                {
                    text: 'Un contador público acude al Punto de Contacto porque el Instrumento de Firma Electrónica (IFE / e-Firma) de su cliente venció y el plazo para declarar el impuesto sobre la renta vence el mismo día. Solicita orientación al Gestor I sobre cómo solucionar la contingencia de inmediato. La indicación correcta y técnica que debe suministrar el servidor es:',
                    options: [
                        'Informarle que una firma vencida no puede renovarse y que el contribuyente obligatoriamente debe pagar la sanción de extemporaneidad.',
                        'Orientarlo en la generación y renovación autónoma e inmediata de la e-Firma a través del portal transaccional de la DIAN mediante el mecanismo de clave dinámica (código OTP) remitido al correo o celular registrado en el RUT del titular.',
                        'Firmar la declaración con la firma personal del Gestor I para salvarle la fecha al usuario.',
                        'Sugerirle que falsifique la firma manual escaneada en el documento PDF.',
                    ],
                    correct: 1,
                    explanation: 'La DIAN permite la renovación y generación en línea inmediata del Instrumento de Firma Electrónica (IFE) mediante autogestión en el portal web corporativo, validando la identidad con código de seguridad OTP sin necesidad de acudir a ventanilla.',
                },
                {
                    text: 'A través del buzón de radicación virtual de la DIAN se recibe una PQRSD que contiene expresiones de molestia y enojo por parte de un contribuyente a quien se le debitó un cobro automático que considera improcedente. Al clasificar y gestionar la solicitud, el Gestor I debe:',
                    options: [
                        'Rechazar la petición y bloquear al usuario por considerarlo una persona grosera y conflictiva.',
                        'Clasificarla formalmente como reclamo por inconsistencia de cobro, tramitarla con la debida prioridad técnica, remitirla al área de cobranzas competente y responder al ciudadano dentro de los 15 días hábiles con un tono empático, respetuoso y con información verificada de fondo.',
                        'Contestarle un correo electrónico con términos ofensivos para defender el honor de la entidad.',
                        'Borrar la petición del buzón para que no impacte negativamente los indicadores de gestión de la seccional.',
                    ],
                    correct: 1,
                    explanation: 'El servidor público debe mantener la objetividad y templanza profesional. Las expresiones de inconformidad ciudadana deben encauzarse institucionalmente mediante el trámite riguroso de la PQRSD, brindando solución de fondo en los términos de ley.',
                },
                {
                    text: 'Un contribuyente domiciliado en el exterior que no puede desplazarse a Colombia necesita realizar una consulta y actualización de sus responsabilidades tributarias. Conforme a la arquitectura multicanal de la DIAN, el canal más idóneo y accesible puesto a su disposición es:',
                    options: [
                        'Exigirle que viaje a Bogotá y haga fila física en el Punto de Contacto del Centro Comercial San Martín.',
                        'Utilizar el canal virtual agendando una cita virtual por videoconferencia a través de la plataforma institucional de la DIAN, donde un funcionario lo orienta en tiempo real y valida sus documentos en línea.',
                        'Enviar una carta manuscrita por barco a través del servicio postal ordinario.',
                        'Pedirle a un vecino de su infancia que se haga pasar por él en la ventanilla seccional.',
                    ],
                    correct: 1,
                    explanation: 'El canal virtual de Citas Virtuales por videoconferencia fue diseñado por la DIAN para atender de manera directa, segura y personalizada a ciudadanos en cualquier lugar del país o del mundo, evitando desplazamientos físicos innecesarios.',
                },
                {
                    text: 'En relación con los "Clientes TACI" (Tributarios, Aduaneros y Cambiarios), el enfoque moderno de servicio de la DIAN busca principalmente:',
                    options: [
                        'Tratar a los contribuyentes como sospechosos de fraude fiscal desde el primer contacto en ventanilla.',
                        'Facilitar el cumplimiento voluntario de las obligaciones mediante asistencia oportuna, simplificación de trámites, educación tributaria y cercanía con el ciudadano.',
                        'Maximizar la imposición de multas y sanciones para aumentar los ingresos corrientes de la nación a cualquier costo.',
                        'Restringir la información pública para que los usuarios dependan obligatoriamente de intermediarios no autorizados.',
                    ],
                    correct: 1,
                    explanation: 'La misión moderna de la DIAN en el macroproceso de Cercanía con el Ciudadano se centra en la facilitación del cumplimiento voluntario y la reducción de costos de transacción para el administrado, promoviendo la legalidad mediante asistencia pedagógica.',
                },
                {
                    text: 'Durante la atención presencial en un Punto de Contacto, un ciudadano en condición de discapacidad auditiva solicita orientación para actualizar su actividad económica. Conforme a las directrices de accesibilidad institucional, la DIAN dispone de:',
                    options: [
                        'Un cartel que exige al ciudadano acudir únicamente los días viernes en horario restringido.',
                        'Servicio de intermediación con intérpretes de Lengua de Señas Colombiana (LSC) en línea a través de los canales de asistencia virtual y estaciones adaptadas.',
                        'La negativa del servicio alegando que la DIAN solo atiende trámites en formato verbal estándar.',
                        'Una sanción de dos UVT por no poder comunicarse verbalmente con el Gestor.',
                    ],
                    correct: 1,
                    explanation: 'En concordancia con las leyes de inclusión y la Convención sobre los Derechos de las Personas con Discapacidad, la DIAN cuenta con herramientas y convenios de interpretación en Lengua de Señas Colombiana (LSC) para garantizar la igualdad de acceso.',
                },
                {
                    text: 'Un usuario llama al Contact Center de la DIAN manifestando que en la puerta del Punto de Contacto unos particulares ("tramitadores") le cobraron cien mil pesos por "conseguirle una cita preferencial" y le entregaron un formulario con tachaduras. El Gestor I que recibe la comunicación debe:',
                    options: [
                        'Decirle que ese no es problema de la entidad y que fue culpa suya por pagar.',
                        'Recordarle enfáticamente que todos los trámites, formularios y citas de la DIAN son totalmente gratuitos, orientarlo sobre cómo agendar de forma directa y segura en el portal oficial y guiarlo para radicar una denuncia formal en la plataforma de PQRSD por presuntas conductas delictivas de terceros.',
                        'Ofrecerle que pague otros cincuenta mil pesos directamente a la cuenta del funcionario para validarle el formulario con tachaduras.',
                        'Colgar inmediatamente la llamada para no registrar problemas en el sistema.',
                    ],
                    correct: 1,
                    explanation: 'Es deber fundamental de los servidores de la DIAN sensibilizar a la ciudadanía sobre la absoluta gratuidad de los servicios, combatir la intermediación ilícita de tramitadores y promover los canales oficiales de denuncia institucional.',
                },
                {
                    text: 'El valor probatorio y la equivalencia jurídica del Instrumento de Firma Electrónica (IFE) frente a la firma manuscrita tradicional en Colombia se encuentra sustentado en:',
                    options: [
                        'El Código de Policía exclusivamente.',
                        'La Ley 527 de 1999 (Ley de Comercio Electrónico y Firmas Digitales) y la normatividad reglamentaria de la DIAN.',
                        'Una resolución verbal del Director de Fiscalización de turno.',
                        'La voluntad discrecional de cada funcionario que recibe la declaración.',
                    ],
                    correct: 1,
                    explanation: 'La Ley 527 de 1999 consagra el principio de equivalencia funcional, estableciendo que la firma electrónica o digital tiene la misma validez, fuerza y efectos probatorios que la firma manuscrita si cumple con los requisitos técnicos de autenticidad e integridad.',
                },
                {
                    text: 'Al finalizar la atención en ventanilla a un ciudadano que acudió a radicar una actualización del RUT, el Gestor I debe asegurarse de:',
                    options: [
                        'Quedarse con la cédula de ciudadanía original del usuario bajo custodia hasta la semana siguiente.',
                        'Hacer entrega inmediata del Formulario 001 con la leyenda "Certificado Formalizado", indicarle el número de radicado, verificar que los datos registrados correspondan exactamente a lo solicitado e invitarlo a evaluar la calidad del servicio.',
                        'Decirle al ciudadano que vuelva dentro de un mes a ver si el sistema aceptó los cambios.',
                        'Pedirle su usuario y contraseña del correo electrónico privado para "monitorearlo".',
                    ],
                    correct: 1,
                    explanation: 'El protocolo de finalización del servicio exige entregar al ciudadano la constancia formal del trámite concluido (RUT formalizado), verificar la conformidad de los datos y ofrecer la opción de calificar la atención para la retroalimentación del sistema de gestión de calidad.',
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
                    text: 'En el marco de la Ley 223 de 1995, que ordena la creación de programas de fomento de la cultura tributaria y fiscal, la DIAN suscribe convenios con universidades para operar los Núcleos de Apoyo Contable y Fiscal (NAF). El propósito central de estos núcleos es:',
                    options: [
                        'Realizar auditorías forenses coercitivas y embargar cuentas bancarias de estudiantes universitarios.',
                        'Brindar orientación y asesoría contable y tributaria gratuita a personas naturales de bajos recursos y a microempresarios, promoviendo el cumplimiento voluntario y la formalización económica en el país.',
                        'Reemplazar la planta de personal de carrera de la DIAN por estudiantes en práctica no remunerada.',
                        'Vender formularios tributarios y pólizas de seguro en las facultades de derecho.',
                    ],
                    correct: 1,
                    explanation: 'Los NAF son una iniciativa de responsabilidad social y pedagogía fiscal donde estudiantes capacitados por la DIAN prestan asistencia tributaria gratuita a personas vulnerables y emprendedores, fomentando la cultura de contribución ciudadana (Ley 223/1995).',
                },
                {
                    text: 'Un comerciante minorista titular de una ferretería acude a pedir asesoría porque un inspector de la DIAN le advirtió que debe implementar la Facturación Electrónica de Venta. El contribuyente afirma que como sus ventas son en efectivo no tiene obligación de facturar electrónicamente. Conforme al artículo 616-1 del Estatuto Tributario, el Gestor I debe explicarle que:',
                    options: [
                        'Tiene toda la razón: las ventas que se cobren en monedas o billetes en efectivo están legalmente exentas de facturación.',
                        'La obligación de expedir factura electrónica con validación previa aplica a todas las operaciones de venta de bienes o prestación de servicios realizadas por personas obligadas a facturar, independientemente de la forma de pago (efectivo, tarjeta o transferencia), siendo indispensable para la legalidad del negocio.',
                        'Solo están obligadas a facturar las multinacionales que cotizan en la bolsa de Nueva York.',
                        'Puede emitir recibos manuales en servilletas sin numeración consecutiva.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 616-1 del Estatuto Tributario establece que la factura de venta comprende la factura electrónica y los documentos equivalentes; su expedición es obligatoria en toda enajenación de bienes o servicios sin importar el medio de pago acordado.',
                },
                {
                    text: 'Una ciudadana asalariada consulta en el Punto de Contacto si existe algún beneficio fiscal tangible que la motive a exigir siempre la Factura Electrónica de Venta cuando compra ropa, víveres o electrodomésticos en los comercios. Conforme a la Ley 2277 de 2022 (Art. 336 E.T.), el servidor le informa que:',
                    options: [
                        'No existe ningún beneficio personal y solo sirve para que el comerciante pague más impuestos.',
                        'Tiene derecho a deducir en su declaración de renta anual el uno por ciento (1%) del valor total de las compras de bienes y servicios soportadas con factura electrónica de venta con validación previa pagadas por medios electrónicos (tarjetas débito/crédito, transferencias), hasta el límite legal.',
                        'La DIAN le reintegrará el 100% de sus gastos en compras en efectivo cada mes.',
                        'Exigir factura electrónica la convierte automáticamente en gran contribuyente.',
                    ],
                    correct: 1,
                    explanation: 'La Ley 2277 de 2022 adicionó al artículo 336 del E.T. la deducción del 1% del valor de las adquisiciones de bienes y servicios soportadas con factura electrónica validada pagadas con medios electrónicos para personas naturales declarantes de renta.',
                },
                {
                    text: 'Un contribuyente es notificado de una "Comunicación Persuasiva" expedida por la Dirección Seccional en la que se le indica que registra cruces exógenos con bancos por consignaciones superiores a 1.400 UVT pero no presentó su declaración de renta del año anterior. Angustiado, acude al Gestor I preguntando si está embargado. El servidor debe aclararle que:',
                    options: [
                        'La comunicación persuasiva ya constituye una sentencia penal de embargo y remate forzoso de sus bienes.',
                        'Se trata de una acción de gestión persuasiva preventiva que busca el cumplimiento voluntario, invitándolo a verificar su situación, declarar voluntariamente si está obligado y liquidar la sanción reducida correspondiente antes de que la DIAN inicie el proceso administrativo oficial con pliego de cargos o emplazamiento.',
                        'Debe ignorar la carta porque las comunicaciones persuasivas no tienen validez legal alguna.',
                        'Debe pagar inmediatamente cincuenta millones de pesos en efectivo al funcionario para archivar la carta.',
                    ],
                    correct: 1,
                    explanation: 'La gestión persuasiva de la DIAN es un mecanismo preventivo que alerta al contribuyente sobre indicios de omisión o inexactitud para que normalice voluntariamente su situación antes del inicio del proceso oficial de aforo o sanción.',
                },
                {
                    text: '¿Cuál es la diferencia fundamental entre una "Obligación Tributaria Sustancial" y una "Obligación Tributaria Formal" en el sistema tributario colombiano?',
                    options: [
                        'La obligación formal es pagar el tributo, y la sustancial es imprimir el formulario.',
                        'La obligación sustancial consiste en la obligación jurídica de dar (pagar efectivamente el impuesto nacido del hecho generador), mientras que las obligaciones formales son de hacer, soportar e informar (inscribirse en el RUT, declarar, expedir factura, enviar exógena) para facilitar la fiscalización.',
                        'Ambas obligaciones son idénticas y significan exactamente lo mismo.',
                        'La obligación sustancial solo aplica a extranjeros y la formal a colombianos nativos.',
                    ],
                    correct: 1,
                    explanation: 'La obligación sustancial es el pago del tributo al Estado (Art. 1 E.T.). Las obligaciones formales son deberes instrumentales (hacer, no hacer, tolerar) que la ley impone para asegurar el recaudo, verificación y liquidación del impuesto.',
                },
                {
                    text: 'Un pequeño comerciante dueño de una tienda de abarrotes de barrio desea formalizarse y acogerse al Régimen Simple de Tributación (RST) consagrado en el artículo 903 del Estatuto Tributario. Solicita orientación sobre las ventajas del modelo. El Gestor I le explica acertadamente que el RST:',
                    options: [
                        'Le permite operar sin pagar ningún tipo de impuesto nacional ni municipal durante toda la vida del negocio.',
                        'Es un modelo unificado que integra varios tributos (Renta, Impoconsumo e ICA consolidado municipal) en una sola declaración, con tarifas bajas sobre ingresos brutos, sin retención en la fuente a título de renta y con descuento de aportes a pensiones de empleados.',
                        'Exige tener un capital mínimo de mil millones de pesos para poder ser admitido.',
                        'Obliga al comerciante a transferir la mitad de su inventario a la DIAN como fianza.',
                    ],
                    correct: 1,
                    explanation: 'El Régimen Simple de Tributación (Art. 903 y ss. E.T.) busca la formalización simplificando las cargas tributarias, integrando Renta, Impoconsumo e ICA municipal en una sola declaración anual con anticipos bimestrales, sin sujeción a retenciones en la fuente.',
                },
                {
                    text: 'Una microempresa que factura electrónicamente consulta qué documento debe generar cuando le compra mercancía a un campesino no obligado a facturar. El Gestor I debe indicarle que el documento reglamentario es:',
                    options: [
                        'Un pagaré en blanco firmado por el vendedor.',
                        'El Documento Soporte en Adquisiciones Efectuadas a Sujetos No Obligados a Expedir Factura de Venta o Documento Equivalente, el cual debe transmitirse y validarse electrónicamente ante la DIAN para que soporte costos y deducciones.',
                        'Una declaración juramentada en notaría por cada kilo de producto comprado.',
                        'No es necesario ningún documento; basta con la palabra de las partes.',
                    ],
                    correct: 1,
                    explanation: 'El Documento Soporte Electrónico en adquisiciones a no obligados a facturar es el instrumento legal que permite al comprador soportar fiscalmente sus costos y deducciones ante la DIAN por compras efectuadas a sujetos no obligados.',
                },
                {
                    text: 'En relación con el régimen cambiario colombiano, la DIAN ejerce competencias de control y vigilancia sobre:',
                    options: [
                        'La emisión y fijación de la tasa de interés de referencia del Banco de la República.',
                        'El cumplimiento de las obligaciones cambiarias en materia de importaciones y exportaciones de bienes y servicios, gastos asociados al comercio exterior y la legalidad de las operaciones de cambio administradas.',
                        'El precio del dólar en las casas de cambio de los aeropuertos internacionales de forma discrecional.',
                        'Los préstamos bancarios hipotecarios de vivienda de interés social.',
                    ],
                    correct: 1,
                    explanation: 'A la DIAN le corresponde el control y vigilancia del cumplimiento del régimen cambiario en materia de importación y exportación de mercancías, servicios y financiación asociada al comercio exterior, de conformidad con el Decreto 4048 de 2008 y Decreto 1742 de 2020.',
                },
                {
                    text: '¿Cuál es la función que cumple el Registro RADIAN dentro del Sistema de Facturación Electrónica de la DIAN?',
                    options: [
                        'Es un radar meteorológico satelital para predecir inundaciones en las bodegas aduaneras.',
                        'Es la plataforma administrada por la DIAN donde se registran los eventos (acuse de recibo, recibo de bienes, aceptación expresa o tácita) de las facturas electrónicas de venta como títulos valores para permitir su circulación y negociación en factoring.',
                        'Un software exclusivo para liquidar las nóminas de los ministros del despacho.',
                        'Un registro de deudores morosos que se publica semanalmente en la prensa nacional.',
                    ],
                    correct: 1,
                    explanation: 'El sistema RADIAN administra el registro, consulta y trazabilidad de las facturas electrónicas de venta que adquieren la condición de título valor, permitiendo su negociación legítima (factoring electrónico) mediante eventos validados por la DIAN.',
                },
                {
                    text: 'La promoción de la "Cultura de la Contribución" como bien público en la sociedad colombiana busca primordialmente transformar la percepción ciudadana hacia el pago de impuestos para:',
                    options: [
                        'Convencer a la población de que los recursos públicos son propiedad privada de los gobernantes.',
                        'Fortalecer la confianza y legitimidad institucional, entendiendo que el cumplimiento voluntario oportuno financia los derechos sociales, reduce la desigualdad y consolida la infraestructura y la paz del país.',
                        'Lograr que los ciudadanos renuncien a todos sus derechos y garantías fundamentales.',
                        'Eliminar la carrera administrativa y privatizar todas las oficinas públicas de recaudo.',
                    ],
                    correct: 1,
                    explanation: 'La cultura de la contribución concibe el cumplimiento fiscal como una expresión de solidaridad y civismo democrático, fundamental para garantizar la sostenibilidad del Estado social de derecho y la prestación de los servicios públicos esenciales.',
                },
            ],
        },

        /* ----------------------------------------------------
           MÓDULO 6: MARCO ESTRATÉGICO, MIPG Y RESERVA TRIBUTARIA
           ---------------------------------------------------- */
        {
            id: 'm6',
            title: 'Módulo 6: MIPG, Reserva Legal y Transparencia',
            navLabel: '🔒 M.6: MIPG y Reserva',
            homeLabel: 'Módulo 6: MIPG, Reserva Tributaria y Transparencia',
            theoryId: 'modulo-6',
            cases: [
                {
                    text: 'Una periodista reconocida acude al Punto de Contacto de la DIAN solicitando que el Gestor I le imprima el expediente tributario y las declaraciones de renta de un candidato a la alcaldía, argumentando que por el derecho constitucional a la libertad de prensa y la Ley de Transparencia (Ley 1712 de 2014) la información de personas públicas es de libre acceso. Conforme al artículo 583 del Estatuto Tributario y el régimen disciplinario, ¿cuál debe ser la respuesta del servidor?',
                    options: [
                        'Imprimirle las declaraciones y concederle una entrevista exclusiva para ganar notoriedad en los medios.',
                        'Negar rotundamente la solicitud mediante respuesta motivada, explicándole que las declaraciones tributarias y bases gravables están amparadas por reserva legal tributaria absoluta (Art. 583 E.T.), no siendo de libre acceso a particulares ni a medios de comunicación, so pena de incurrir en causal de destitución disciplinaria.',
                        'Cobrarle una tarifa de prensa por cada hoja del expediente.',
                        'Consultar a través de una encuesta en redes sociales si la ciudadanía aprueba entregar la información.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 583 del Estatuto Tributario impone estricta reserva legal sobre las bases gravables y la determinación privada de los tributos. La violación de la reserva acarrea destitución inmediata del cargo (Art. 584 E.T.) y responsabilidad penal.',
                },
                {
                    text: 'Un Juez de la República especializado en Derecho Penal expide un auto judicial formal dentro de un proceso de lavado de activos, ordenando a la DIAN remitir copia certificada de las declaraciones de renta de los últimos cinco años de los imputados en la causa. Ante este requerimiento judicial formal, el Gestor I competente debe:',
                    options: [
                        'Negarse a entregar la información argumentando que la DIAN no responde a ninguna orden de jueces.',
                        'Suministrar la información solicitada en estricto cumplimiento del mandato judicial, certificando la documentación que repose en el expediente, dado que las autoridades judiciales penales constituyen una excepción legal taxativa al principio de reserva tributaria.',
                        'Exigir al Juez que pague una caución en dinero antes de abrir el sistema.',
                        'Informar a los investigados para que cambien sus datos en el RUT antes de enviar la información al juzgado.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 583 del Estatuto Tributario consagra como excepción legal que la información reservada puede suministrarse a autoridades judiciales cuando sea decretada válidamente como prueba en un proceso de su conocimiento.',
                },
                {
                    text: 'El cónyuge de una contribuyente se presenta en la ventanilla con copia del registro civil de matrimonio, exigiendo que se le expida una copia del RUT y de las declaraciones de renta de su esposa porque están en un proceso de separación de bienes. Conforme a la normatividad de reserva tributaria y protección de datos personales (Ley 1581 de 2012), el servidor debe:',
                    options: [
                        'Entregarle la información por considerar que el matrimonio otorga acceso irrestricto a los datos personales de la pareja.',
                        'Negar la entrega de los documentos al cónyuge, señalando que la reserva tributaria protege la intimidad económica de la titular y que solo ella directamente o su apoderado con poder debidamente otorgado o mediante requerimiento directo del juez de familia pueden acceder a dicha información.',
                        'Llamar a la esposa para reprocharle que no le comparte las declaraciones a su esposo.',
                        'Entregar solo la hoja 1 del RUT pero tachar el número de cédula.',
                    ],
                    correct: 1,
                    explanation: 'La reserva tributaria y el derecho al habeas data protegen la intimidad del titular. El vínculo matrimonial no otorga facultades para acceder a datos tributarios reservados sin poder especial formal o requerimiento de la autoridad judicial competente.',
                },
                {
                    text: 'En el Modelo Integrado de Planeación y Gestión (MIPG - Decreto 1499 de 2017), ¿cuál es la dimensión considerada como "el corazón del modelo", sobre la cual se cimientan el liderazgo, la integridad y el desarrollo de competencias de los servidores públicos?',
                    options: [
                        'La dimensión de Control Interno.',
                        'La dimensión de Talento Humano.',
                        'La dimensión de Gestión de Recursos Físicos.',
                        'La dimensión de Auditoría Financiera.',
                    ],
                    correct: 1,
                    explanation: 'El Decreto 1499 de 2017 define el Talento Humano como la dimensión nuclear y estratégica del MIPG, pues son las personas y sus competencias éticas y funcionales las que impulsan la generación de valor público.',
                },
                {
                    text: 'Un Gestor I recibe un requerimiento de la Contraloría General de la República en el que solicita informes sobre el estado del recaudo y fiscalización de una sociedad investigada por presunto detrimento patrimonial al Estado. Conforme a los artículos 585 y 586 del Estatuto Tributario:',
                    options: [
                        'No se puede entregar nada porque la Contraloría es un organismo externo.',
                        'La DIAN debe atender oportunamente el requerimiento del órgano de control fiscal, facilitando la información indispensable para el ejercicio de sus funciones constitucionales de vigilancia de los recursos públicos.',
                        'Se le debe cobrar una multa a la Contraloría por preguntar por expedientes privados.',
                        'Se le responde que la DIAN no rinde cuentas a nadie.',
                    ],
                    correct: 1,
                    explanation: 'Los artículos 585 y 586 del Estatuto Tributario facultan a los organismos de control del Estado (Contraloría y Procuraduría) para solicitar y acceder a informaciones tributarias estrictamente necesarias para sus investigaciones misionales.',
                },
                {
                    text: 'La Ley General de Archivos (Ley 594 de 2000) y las Tablas de Retención Documental (TRD) de la DIAN exigen que todos los expedientes de trámites tributarios gestionados por los servidores públicos:',
                    options: [
                        'Se quemen o destruyan al finalizar cada mes para desocupar los estantes de la seccional.',
                        'Se organicen, folien digital o físicamente, se conserven conforme a los tiempos fijados en las TRD y se garantice su autenticidad e integridad en el archivo institucional.',
                        'Se almacenen en los computadores personales de los funcionarios sin respaldo en la nube estatal.',
                        'Se regalen a recicladores informales para obtener fondos propios.',
                    ],
                    correct: 1,
                    explanation: 'La Ley 594 de 2000 establece que los documentos públicos son patrimonio del Estado y deben administrarse bajo principios técnicos archivísticos, respetando las TRD y garantizando la trazabilidad histórica y probatoria de las actuaciones.',
                },
                {
                    text: 'Un funcionario de la DIAN comenta en un almuerzo con conocidos detalles económicos confidenciales de un reconocido empresario local que acudió esa mañana a su ventanilla a corregir su patrimonio líquido en el RUT. Conforme al régimen sancionatorio del Estatuto Tributario (Art. 584) y el Código General Disciplinario, esta conducta constituye:',
                    options: [
                        'Una simple falta de etiqueta social sin trascendencia disciplinaria ni legal.',
                        'Una falta gravísima culposa o dolosa por violación de la reserva legal tributaria, sujeta a sanción de destitución e inhabilidad para el ejercicio de funciones públicas, además de posible responsabilidad penal.',
                        'Un acto de comunicación estratégica institucional permitido.',
                        'Una falta leve subsanable con una disculpa informal.',
                    ],
                    correct: 1,
                    explanation: 'El artículo 584 del E.T. y la Ley 1952 de 2019 sancionan con destitución del empleo al servidor público que viole la reserva legal tributaria, divulgando información protegida fuera de los canales autorizados por la ley.',
                },
                {
                    text: 'Bajo el principio de Máxima Publicidad consagrado en la Ley de Transparencia y Acceso a la Información (Ley 1712 de 2014), ¿cuál de los siguientes tipos de información que reposa en la DIAN es de acceso público general para cualquier ciudadano?',
                    options: [
                        'Los informes consolidados de metas de recaudo nacional por tipo de impuesto y las guías de atención al ciudadano.',
                        'Las declaraciones privadas de renta y cuentas bancarias de los contribuyentes.',
                        'Los datos de contraseñas de e-Firma de los usuarios del sistema.',
                        'Los expedientes de investigaciones disciplinarias en etapa de indagación previa.',
                    ],
                    correct: 0,
                    explanation: 'La Ley 1712 de 2014 promueve la publicidad y libre acceso a la información de gestión pública (estadísticas, presupuesto, planes, normatividad, directrices), mientras mantiene bajo reserva los datos sensibles o confidenciales de particulares.',
                },
                {
                    text: 'En el marco de la Gestión del Conocimiento y la Innovación del MIPG, un Gestor I que identifica una falla recurrente en el proceso de orientación de la casilla 53 del RUT que genera retrasos continuos a los usuarios debe:',
                    options: [
                        'Guardar silencio para que el problema continúe y justifique la necesidad de más horas de trabajo.',
                        'Documentar la oportunidad de mejora, formular una propuesta pedagógica de guía o infografía clara y presentarla a su líder de proceso para enriquecer las buenas prácticas del equipo.',
                        'Culpar a los usuarios de no saber leer el formulario.',
                        'Desconectar el sistema de citas de la seccional.',
                    ],
                    correct: 1,
                    explanation: 'La dimensión de Gestión del Conocimiento e Innovación fomenta que los servidores compartan aprendizajes y propongan mejoras continuas para optimizar los procesos misionales y la experiencia del ciudadano.',
                },
                {
                    text: 'La "Tercera Línea de Defensa" en el modelo de control del MIPG en la DIAN está representada por:',
                    options: [
                        'Los guardias de seguridad de la puerta de entrada a la sede.',
                        'La Oficina de Control Interno / Auditoría Interna, responsable de evaluar de manera independiente y objetiva la efectividad de los controles y del sistema de gestión institucional.',
                        'Los contribuyentes que radican peticiones y quejas.',
                        'El Ministerio de Hacienda exclusivamente.',
                    ],
                    correct: 1,
                    explanation: 'En el esquema de Tres Líneas del MIPG, la Tercera Línea está asignada a la Oficina de Control Interno, cuya misión es realizar evaluaciones independientes y asesorar a la alta dirección en el fortalecimiento institucional.',
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
                    text: 'Faltando diez minutos para finalizar el horario de atención en el Punto de Contacto, ingresa una ciudadana visiblemente fatigada proveniente de una vereda lejana que solicita orientación para inscribirse en el RUT porque al día siguiente inicia labores como auxiliar de servicios generales. El funcionario de la ventanilla vecina le dice que cierre la ventanilla y que la haga volver al día siguiente. Bajo la competencia de "Orientación al Usuario y al Ciudadano" (Nivel 4), el Gestor I debe:',
                    options: [
                        'Acoger la recomendación del compañero, apagar la pantalla y pedir a la ciudadana que se retire.',
                        'Atender a la usuaria con calidez, empatía y diligencia, realizar la validación de sus documentos y formalizar la inscripción en el RUT, asegurando que cumpla oportunamente con su trámite y evitando que incurra en costos innecesarios de transporte.',
                        'Cobrarle una tarifa extraordinaria por atenderla fuera del horario habitual.',
                        'Decirle que le deje sus documentos en una bolsa para atenderla en su casa el fin de semana.',
                    ],
                    correct: 1,
                    explanation: 'La competencia de Orientación al Ciudadano exige vocación de servicio, empatía y compromiso con el interés general, priorizando la satisfacción oportuna de las necesidades de las personas, en especial cuando se trata de ciudadanos vulnerables.',
                },
                {
                    text: 'Durante un período de alta afluencia de contribuyentes por el vencimiento anual de la declaración de renta, el sistema informático experimenta lentitud transitoria en la expedición del RUT. Varios usuarios en la sala de espera comienzan a manifestar inconformidad en voz alta. Frente a esta contingencia, la conducta esperada del Gestor I en "Comunicación Asertiva y Manejo de Crisis" es:',
                    options: [
                        'Encerrarse en la oficina y apagar las luces para evitar que los usuarios lo vean.',
                        'Salir a la sala de espera con serenidad y respeto, explicar con claridad técnica y empatía la situación tecnológica que se presenta, informar los tiempos estimados de restablecimiento y ofrecer alternativas como la autogestión virtual guiada o priorización de turnos.',
                        'Gritar a los ciudadanos advirtiéndoles que si no se callan no se atenderá a nadie más en el día.',
                        'Culpar al Presidente de la República y al Director General de la DIAN por la lentitud del sistema.',
                    ],
                    correct: 1,
                    explanation: 'La comunicación asertiva bajo presión implica mantener el autocontrol, brindar información veraz y transparente a los usuarios con respeto y generar confianza en los momentos de contingencia operativa.',
                },
                {
                    text: 'Un compañero nuevo ingresó recientemente como Gestor I al Punto de Contacto y, por falta de experiencia en el sistema Muisca, confunde con frecuencia los códigos de actividades económicas CIIU al inscribir personas naturales, provocando retrasos en la atención. Bajo la competencia de "Trabajo en Equipo y Liderazgo Formador" (Nivel 3), la mejor actuación es:',
                    options: [
                        'Publicar los errores del compañero en un grupo de redes sociales para burlarse de él.',
                        'Conversar en privado con el nuevo servidor con actitud pedagógica y constructiva, compartirle una guía práctica con los códigos CIIU más comunes, resolver sus dudas operativas y ofrecerle acompañamiento en los primeros trámites para afianzar su seguridad.',
                        'Radicar de inmediato una queja disciplinaria exigiendo que lo trasladen de ciudad.',
                        'Ignorarlo por completo y dejar que acumule quejas de los usuarios.',
                    ],
                    correct: 1,
                    explanation: 'El trabajo en equipo y el liderazgo constructivo se fundamentan en la solidaridad profesional, la transferencia de conocimientos y el apoyo mutuo para elevar la calidad general del servicio de la dependencia.',
                },
                {
                    text: 'Al implementar la DIAN una nueva versión del módulo de autogestión del RUT con reconocimiento facial y biometría, algunos servidores manifiestan rechazo argumentando que "el sistema anterior en papel funcionaba mejor". Bajo la competencia de "Adaptabilidad al Cambio y Aprendizaje Continuo", el Gestor I debe:',
                    options: [
                        'Unirse a las quejas colectivas y negarse a utilizar la nueva plataforma tecnológica.',
                        'Asumir una actitud propositiva y entusiasta frente a la modernización, participar activamente en las capacitaciones, dominar la nueva herramienta y orientar a compañeros y ciudadanos para facilitar la transición digital.',
                        'Seguir utilizando formularios físicos obsoletos a escondidas de los jefes.',
                        'Recomendar a los ciudadanos que no usen la página web de la DIAN porque la tecnología es peligrosa.',
                    ],
                    correct: 1,
                    explanation: 'La adaptabilidad al cambio exige apertura mental frente a la innovación tecnológica, compromiso con la mejora continua de las herramientas públicas y facilitación de la transformación digital institucional.',
                },
                {
                    text: 'La Directora Seccional fija una meta desafiante de evacuación de solicitudes represadas de actualización del RUT para el cierre del trimestre. El Gestor I, demostrando "Orientación a Resultados" (Nivel 4), debe:',
                    options: [
                        'Aprobar todas las solicitudes a ciegas sin verificar los documentos con tal de cumplir la cifra en el sistema.',
                        'Organizar metódicamente su plan de trabajo diario, priorizar los trámites por fecha de vencimiento y complejidad, aplicar rigurosamente los controles de calidad documental y coordinar con el equipo para alcanzar la meta sin generar reprocesos ni vulnerar normas.',
                        'Decirle al superior que las metas de la DIAN son inalcanzables y no hacer nada al respecto.',
                        'Transferir los expedientes a las bandejas de otros funcionarios para que aparezcan resueltos en su usuario.',
                    ],
                    correct: 1,
                    explanation: 'La orientación a resultados en el nivel profesional equilibra la celeridad y el cumplimiento de metas con el rigor técnico, la excelencia operativa y la legalidad de los actos administrativos.',
                },
                {
                    text: 'Durante la verificación de una solicitud de retiro de la responsabilidad del IVA, el Gestor I identifica que el solicitante aportó un certificado falso de ingresos emitido por una empresa inexistente. Bajo la competencia de "Integridad y Rectitud Ética", la actuación ineludible del servidor es:',
                    options: [
                        'Aceptar el documento para no perjudicar al contribuyente y evitarse problemas.',
                        'Rechazar de plano la solicitud motivando la decisión en la falta de veracidad de los requisitos, dejar constancia en el expediente e informar de inmediato al superior funcional y a la División Jurídica/Fiscalización para que se instaure la respectiva denuncia penal por falsedad en documento.',
                        'Pedirle al contribuyente dinero a cambio de no denunciarlo a las autoridades.',
                        'Romper el certificado falso y pedirle que traiga otro mejor elaborado.',
                    ],
                    correct: 1,
                    explanation: 'La integridad y la ética del servidor público exigen rectitud inquebrantable, rechazo total al fraude y la obligación legal de denunciar las conductas punibles de las que tenga conocimiento en el ejercicio de sus funciones (Art. 67 C.P.P.).',
                },
                {
                    text: 'En una mesa de trabajo de la seccional surgen opiniones contradictorias entre dos profesionales sobre el procedimiento aplicable a la suspensión del RUT por inconsistencias catastrales. Frente a este desacuerdo, la conducta orientada a la "Resolución Constructiva de Conflictos" es:',
                    options: [
                        'Generar confrontaciones personales y negarse a trabajar en equipo hasta que el otro funcionario sea despedido.',
                        'Promover un diálogo técnico sustentado en el Decreto 1625 de 2016, las circulares de la Subdirección de Identificación y Registro y los manuales vigentes, buscando un criterio unificado y seguro que garantice el debido proceso del contribuyente.',
                        'Decidir el trámite lanzando una moneda al aire.',
                        'Ventilar el desacuerdo en redes sociales para que el público opine quién tiene la razón.',
                    ],
                    correct: 1,
                    explanation: 'La resolución de desacuerdos funcionales en la administración pública debe fundamentarse en la argumentación jurídica objetiva, el respeto mutuo y el apego a la normatividad institucional.',
                },
                {
                    text: 'Un contribuyente se muestra muy ansioso y frustrado porque no comprende las diferencias entre el Régimen Simple de Tributación y el Régimen Ordinario, temiendo tomar una mala decisión para su emprendimiento. El Gestor I demuestra "Empatía y Escucha Activa" cuando:',
                    options: [
                        'Le dice con desprecio que si no sabe de impuestos no debió montar ningún negocio.',
                        'Escucha con atención y respeto las dudas del emprendedor, le explica con pedagogía y sencillez los beneficios y obligaciones de cada régimen tributario, y le proporciona folletos o guías claras para que adopte una decisión informada.',
                        'Le cobra una asesoría tributaria privada en una cafetería cercana.',
                        'Le entrega un texto en inglés sin explicaciones.',
                    ],
                    correct: 1,
                    explanation: 'La empatía institucional se evidencia en la capacidad de comprender las preocupaciones del ciudadano, brindándole tiempo, escucha activa y orientación pedagógica para empoderarlo en el ejercicio de sus deberes cívicos.',
                },
                {
                    text: 'Al finalizar una jornada especialmente intensa de atención al ciudadano, el Gestor I nota que una persona dejó olvidada en la ventanilla una carpeta que contiene su cédula de ciudadanía original, escrituras notariales y dinero en efectivo. La conducta que refleja el valor de la "Honestidad" en la DIAN es:',
                    options: [
                        'Apropiarse del dinero y botar los documentos a la caneca de basura.',
                        'Registrar formalmente el hallazgo ante el supervisor del Punto de Contacto y el personal de seguridad de la entidad, levantar un acta detallada de los bienes y custodiar la carpeta en caja de seguridad mientras se contacta de inmediato al titular a través del teléfono o correo del RUT.',
                        'Llevarse los documentos a su casa y esperar a que el dueño le ofrezca una recompensa.',
                        'Publicar las escrituras en Internet para que alguien reclame al dueño.',
                    ],
                    correct: 1,
                    explanation: 'El valor de la honestidad y la probidad exige custodiar con máxima transparencia los bienes ajenos extraviados, registrándolos en las bitácoras oficiales y facilitando su pronta restitución al propietario legítimo.',
                },
                {
                    text: '¿Cómo concibe un Gestor I con alta "Vocación de Servicio Público" su labor diaria en la administración del RUT y la atención a los ciudadanos?',
                    options: [
                        'Como un empleo burocrático monótono donde solo interesa marcar tarjeta de entrada y salida sin importar si las personas son atendidas con dignidad.',
                        'Como una misión social de alto impacto, donde cada orientación, trámite de RUT y respuesta a un ciudadano contribuye directamente a la formalización de la economía, la justicia fiscal y el bienestar de Colombia.',
                        'Como un puesto privilegiado para ejercer poder sobre los demás ciudadanos y negarles trámites por capricho.',
                        'Como una plataforma para conseguir clientes privados para una firma personal de asesorías.',
                    ],
                    correct: 1,
                    explanation: 'La verdadera vocación de servicio público ennoblece la función estatal: el servidor comprende que su trabajo cotidiano no es un simple trámite administrativo, sino un instrumento fundamental para construir equidad y confianza ciudadana.',
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
