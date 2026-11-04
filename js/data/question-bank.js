(function (PM) {
    'use strict';

    /**
     * BANCO OFICIAL DE PREGUNTAS DE JUICIO SITUACIONAL (CNSC / AREANDINA — DIAN 2676)
     * Convocatoria: Proceso de Selección DIAN 2676 | Operador: FUAA Areandina
     * Empleo: Gestor I (Código 301, Grado 01) — OPEC: 198476
     * 105 Casos Únicos Calibrados (15 por módulo) con distractores técnicos y longitudes equilibradas.
     */
    const MODULE_DEFINITIONS = [
    {
        "id": "m1",
        "title": "Módulo 1: Función Pública y Estructura DIAN",
        "navLabel": "🏛️ M.1: Función Pública",
        "homeLabel": "Módulo 1: Función Pública y Estructura DIAN",
        "theoryId": "modulo-1",
        "cases": [
            {
                "id": "m1_c1",
                "text": "Caso: Un contribuyente acude alterado al Punto de Contacto de la DIAN manifestando que se le están vulnerando sus derechos constitucionales porque un funcionario anterior le liquidó una sanción sin permitirle controvertir una inconsistencia detectada en el Muisca.\n\nEnunciado: Frente a la inconformidad del ciudadano y de conformidad con el debido proceso (Art. 29 C.P.) y los principios de la función administrativa (Art. 209 C.P.), al Gestor I le corresponde:",
                "options": [
                    "Remitir al ciudadano ante la División de Cobranzas para que suscriba un acuerdo de pago provisional, indicándole que las liquidaciones automáticas arrojadas por el sistema Muisca deben cancelarse antes de interponer cualquier reclamación.",
                    "Consultar el expediente en el sistema Muisca, explicarle en lenguaje claro los hechos y causales que originaron la inconsistencia y orientarlo técnica y jurídicamente sobre los términos legales para interponer los recursos de ley.",
                    "Exigirle que radique una petición formal de nulidad en la ventanilla única de correspondencia, manifestándole que en los Puntos de Contacto no existe competencia funcional para revisar o ilustrar sobre sanciones emitidas por el sistema."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta porque el artículo 29 de la C.P. consagra el debido proceso administrativo, obligando a escuchar al administrado, permitir la contradicción y orientar sobre los recursos procedentes. La opción A desconoce el derecho a la defensa al exigir pago previo y la opción C evade el deber de orientación inmediata del Gestor I."
            },
            {
                "id": "m1_c2",
                "text": "Caso: El Director Seccional solicita verbalmente al Gestor I de Asistencia al Usuario que atienda de manera preferencial y fuera de turno a un empresario allegado, exonerándolo de presentar el certificado de existencia y representación legal exigido para actualizar el RUT de su sociedad.\n\nEnunciado: Conforme al Código General Disciplinario (Ley 1952 de 2019 / Ley 2094 de 2021) y el principio de legalidad (Art. 6 C.P.), el servidor debe:",
                "options": [
                    "Tramitar la actualización solicitada dejando una anotación en la bitácora interna sobre la instrucción del superior, para salvaguardar su responsabilidad disciplinaria ante una eventual auditoría de control interno.",
                    "Explicar con respeto que la omisión de requisitos legales vulnera el ordenamiento, exigiendo que si el superior insiste en la orden debe expedirla por escrito y motivada mediante el ejercicio del derecho de representación.",
                    "Acceder a la petición verbal condicionando la entrega del formulario definitivo a que el usuario radique el certificado pendiente en el buzón electrónico dentro de los cinco días hábiles siguientes al trámite."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 38 de la Ley 1952 de 2019 consagra el derecho de representación: ante órdenes verbales contrarias a la ley o que omitan requisitos formales, el servidor debe representarlas por escrito. Las opciones A y C quebrantan el principio de legalidad al flexibilizar indebidamente los requisitos de ley."
            },
            {
                "id": "m1_c3",
                "text": "Caso: En una Dirección Seccional de la DIAN se genera una vacante temporal en el empleo de Gestor II (Grado 02). El área de Talento Humano debe proveerla conforme al Decreto Ley 927 de 2023 y el Decreto Ley 071 de 2020.\n\nEnunciado: Para proveer la vacante temporal con apego al principio de mérito, el mecanismo obligatorio de prelación es:",
                "options": [
                    "Vincular temporalmente a un profesional externo mediante un contrato de prestación de servicios de apoyo a la gestión, motivando la necesidad apremiante del servicio y la continuidad ininterrumpida de las funciones de fiscalización.",
                    "Proveer la vacante mediante encargo con el empleado con derechos de carrera del empleo inmediatamente inferior (Gestor I) que cumpla los requisitos, no tenga sanción disciplinaria y cuente con evaluación sobresaliente.",
                    "Efectuar un nombramiento provisional discrecional recayendo en el servidor con mayor antigüedad acumulada en la planta global de la seccional, prescindiendo de la verificación de la última calificación de servicios."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El Decreto Ley 927 de 2023 y el DL 071 de 2020 establecen el derecho preferente de encargo para empleados de carrera administrativa del grado inferior con perfil idóneo y calificación sobresaliente. Las opciones A y C desconocen la prelación legal del régimen especial de carrera."
            },
            {
                "id": "m1_c4",
                "text": "Caso: Un Gestor I en el Punto de Contacto recibe la solicitud de inscripción en el RUT de una sociedad comercial cuyo representante legal y accionista mayoritario es su hermano carnal.\n\nEnunciado: Conforme al artículo 11 del CPACA y el régimen disciplinario sobre conflicto de intereses, al servidor le corresponde:",
                "options": [
                    "Adelantar el trámite con estricto apego a las guías procedimentales, dejando una constancia motivada en el sistema sobre su absoluta neutralidad profesional para evitar cualquier cuestionamiento de favoritismo familiar.",
                    "Declararse formalmente impedido por escrito ante su superior jerárquico inmediato, absteniéndose de tramitar o validar la solicitud de su pariente para salvaguardar la imparcialidad y transparencia del Estado.",
                    "Asignar el turno de atención a la ventanilla contigua de otro funcionario, conservando sin embargo la custodia y revisión de los documentos físicos aportados antes de ordenar su digitalización en el repositorio central."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 11 numeral 1 del CPACA obliga al servidor a declararse impedido cuando el peticionario tenga parentesco hasta el cuarto grado de consanguinidad o segundo de afinidad. Las opciones A y C quebrantan el régimen legal de impedimentos al mantener intervención en el trámite."
            },
            {
                "id": "m1_c5",
                "text": "Caso: Al finalizar una orientación en ventanilla, un usuario ofrece una suma de dinero en efectivo a un Gestor I en agradecimiento por haberle facilitado el desbloqueo de su firma electrónica.\n\nEnunciado: De conformidad con el Código General Disciplinario (Ley 1952 de 2019) y el Código de Integridad de la DIAN, el servidor debe:",
                "options": [
                    "Recibir la suma económica manifestando al ciudadano que los recursos serán entregados al comité de bienestar social de la seccional para financiar actividades de integración comunitaria de los empleados.",
                    "Rechazar de manera categórica el dinero y cualquier obsequio, recordándole al ciudadano que todos los servicios de la DIAN son gratuitos y que recibir dádivas constituye falta gravísima disciplinaria y delito.",
                    "Aceptar el dinero para evitar una discusión con el contribuyente en sala, procediendo de inmediato a radicar un informe confidencial ante la Dirección de Gestión Corporativa para definir el destino del valor."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Ley 1952 de 2019 tipifica como falta gravísima recibir dádivas o cualquier retribución por actos propios del cargo. Los servicios estatales son formal y materialmente gratuitos. Las opciones A y C son conductas contrarias a derecho que generan destitución."
            },
            {
                "id": "m1_c6",
                "text": "Caso: Un aspirante nombrado como Gestor I en la modalidad de ingreso toma posesión de su cargo tras superar todas las fases eliminatorias del proceso de selección de la CNSC.\n\nEnunciado: De conformidad con el Decreto Ley 927 de 2023 y la normatividad de carrera específica de la DIAN, el período de prueba:",
                "options": [
                    "Tiene una duración improrrogable de doce meses, debiendo ser evaluado conjuntamente por el Director General de la DIAN y el Presidente de la Comisión Nacional del Servicio Civil mediante acto conjunto.",
                    "Tiene una duración de seis (6) meses; superado con calificación satisfactoria o sobresaliente, el empleado adquiere los derechos de carrera administrativa y es inscrito en el registro público correspondiente.",
                    "Otorga derechos de carrera de forma definitiva e inmediata desde el acta de posesión, quedando el servidor exento de evaluaciones laborales durante el primer año de ejercicio de sus funciones públicas."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El Decreto Ley 927 de 2023 y el DL 071 de 2020 determinan que el período de prueba dura 6 meses y su superación aprobatoria es el presupuesto obligatorio para la inscripción en el registro de carrera. Las opciones A y C vulneran las reglas del período de prueba."
            },
            {
                "id": "m1_c7",
                "text": "Caso: El Congreso de la República expide una ley tributaria el 20 de diciembre con vigencia inmediata, pretendiendo gravar ingresos de personas naturales que fueron causados en el mes de marzo del mismo año fiscal ya vencido.\n\nEnunciado: De conformidad con el artículo 363 de la Constitución Política de Colombia, esta disposición legal:",
                "options": [
                    "Es jurídicamente vinculante porque el principio de soberanía tributaria autoriza al legislador a determinar el alcance temporal de los gravámenes sin limitación frente a hechos de la misma vigencia fiscal.",
                    "Desconoce el principio constitucional de Irretroactividad, el cual prohíbe taxativamente que las leyes tributarias se apliquen a hechos económicos consolidados o períodos vencidos antes de su promulgación formal.",
                    "Es constitucionalmente viable únicamente si los recursos recaudados se destinan con exclusividad a financiar contingencias del presupuesto general de la nación debidamente declaradas por el Ejecutivo."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 363 de la C.P. señala que las leyes tributarias no se aplicarán con retroactividad, garantizando la seguridad jurídica y la confianza legítima de los contribuyentes. Las opciones A y C confunden las competencias del Congreso con facultades inexistentes contra la Carta Política."
            },
            {
                "id": "m1_c8",
                "text": "Caso: Un profesional que se desempeñó como Gestor I en la DIAN renunció a su cargo hace 8 meses. Actualmente pretende actuar como apoderado especial de una sociedad en un proceso de fiscalización que él mismo tramitó y sustentó.\n\nEnunciado: Conforme al régimen de incompatibilidades de los exservidores públicos (Ley 1474 de 2011 y Ley 1952 de 2019):",
                "options": [
                    "Puede asumir la representación judicial sin restricción alguna, toda vez que la desvinculación formal del cargo extingue de pleno derecho los deberes funcionales y éticos frente a la administración pública.",
                    "Se encuentra incurso en una incompatibilidad legal de dos (2) años para gestionar asuntos que conoció directamente en ejercicio de su empleo, lo cual invalida de manera absoluta su intervención procesal.",
                    "Puede intervenir válidamente como apoderado siempre que solicite una autorización expresa y motivada ante el Comité de Conciliación y Defensa Judicial de la Dirección Seccional donde laboró."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El Estatuto Anticorrupción prohíbe a exservidores públicos gestionar directa o indirectamente ante la entidad durante los 2 años posteriores a su retiro respecto de asuntos que conoció en su cargo. Las opciones A y C desconocen el régimen perentorio de inhabilidades e incompatibilidades."
            },
            {
                "id": "m1_c9",
                "text": "Caso: En el marco del Modelo Integrado de Planeación y Gestión (MIPG), un Gestor I asignado a la ventanilla de atención al ciudadano valida diariamente los documentos aportados para formalizar el RUT.\n\nEnunciado: Conforme al esquema de las Tres Líneas de Defensa adoptado por la DIAN, el Gestor I se ubica en:",
                "options": [
                    "La Tercera Línea de Defensa, cuya responsabilidad primordial consiste en auditar y emitir aseguramiento independiente sobre el cumplimiento normativo posterior de todas las áreas seccionales.",
                    "La Primera Línea de Defensa (operativa), siendo responsable directo de aplicar los controles preventivos diarios para mitigar riesgos de fraude, suplantación o error en el registro tributario.",
                    "La Segunda Línea de Defensa, cuya función exclusiva es diseñar las políticas corporativas de gestión de riesgos y evaluar técnicamente la suficiencia del marco regulatorio tributario."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. En el MIPG (Decreto 1499 de 2017), la Primera Línea está constituida por los servidores operativos que aplican los controles cotidianos frente a los riesgos. La Segunda Línea corresponde a líderes de política/riesgo y la Tercera a Control Interno (opciones A y C)."
            },
            {
                "id": "m1_c10",
                "text": "Caso: Un directivo seccional pretende imponer una sanción disciplinaria verbal de suspensión a un Gestor I sin adelantar investigación previa, acusándolo de cometer una omisión involuntaria en la radicación de un trámite.\n\nEnunciado: De conformidad con el artículo 29 de la Constitución y el Código General Disciplinario, dicha actuación:",
                "options": [
                    "Es legalmente válida en virtud de la subordinación jerárquica y el poder disciplinario preferente e inmediato que ostentan los jefes de dependencia para corregir faltas operativas menores.",
                    "Vulnera flagrantemente el derecho fundamental al debido proceso, pues toda sanción disciplinaria requiere pliego de cargos formal, etapa probatoria, descargos y garantía plena de doble instancia.",
                    "Resulta jurídicamente procedente siempre que la sanción verbal se ratifique mediante memorando interno enviado con copia a la hoja de vida dentro de las cuarenta y ocho horas siguientes."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El debido proceso disciplinario (Art. 29 C.P. y Ley 1952 de 2019) proscribe cualquier sanción sumaria o de plano sin un proceso contradictorio previo. Las opciones A y C validan vías de hecho violatorias de las garantías constitucionales del servidor público."
            },
            {
                "id": "m1_c11",
                "text": "Caso: Durante una contienda electoral, un Gestor I publica en sus redes sociales personales mensajes invitando a votar por un candidato a la alcaldía, portando en su foto de perfil el chaleco institucional de la DIAN.\n\nEnunciado: De conformidad con el artículo 127 de la Constitución Política y el régimen disciplinario sobre participación en política:",
                "options": [
                    "La conducta es legítima por tratarse del ejercicio de la libertad de expresión ciudadana en cuentas privadas que no comprometen la posición oficial de la Dirección General de la entidad.",
                    "Incurre en falta gravísima disciplinaria, pues a los servidores públicos les está prohibido utilizar el empleo, sus distintivos o insignias institucionales para respaldar causas o partidos políticos.",
                    "La actuación solo es reprochable si las publicaciones se realizaron durante la jornada laboral ordinaria o utilizando equipos de cómputo suministrados por la Dirección Seccional."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 127 de la C.P. y la Ley 1952 de 2019 prohíben taxativamente a los servidores públicos usar elementos o cargos del Estado para proselitismo político. Las opciones A y C justifican erróneamente una prohibición constitucional categórica."
            },
            {
                "id": "m1_c12",
                "text": "Caso: Un jefe de grupo ordena por escrito a un Gestor I autorizar la devolución de un saldo a favor omitiendo deliberadamente la verificación del certificado bancario y la titularidad de la cuenta receptora.\n\nEnunciado: Conforme al principio de jerarquía y los límites al deber de obediencia (Art. 91 C.P. y Ley 1952 de 2019), el servidor debe:",
                "options": [
                    "Cumplir la orden inmediatamente porque la responsabilidad disciplinaria y fiscal recae con exclusividad en el funcionario que suscribió la comunicación escrita con poder decisorio.",
                    "Abstenerse de ejecutar la orden e informar inmediatamente la irregularidad al superior del emisor o control disciplinario, dado que la obediencia no ampara órdenes manifiestamente ilegales.",
                    "Ejecutar el trámite pero anexar una constancia reservada en el sistema para exonerarse en caso de que la Contraloría General de la República inicie un proceso de responsabilidad fiscal."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 91 de la C.P. consagra que la obediencia debida no justifica la comisión de conductas contrarias a la ley. El servidor debe negarse a ejecutar órdenes abiertamente ilegales. Las opciones A y C convalidan la complicidad en infracciones a la ley."
            },
            {
                "id": "m1_c13",
                "text": "Caso: Un empleado con derechos de carrera en el empleo de Gestor I obtiene una calificación de servicios en escala definitiva insatisfactoria tras la evaluación periódica anual de desempeño laboral.\n\nEnunciado: De conformidad con la Ley 909 de 2004 y los Decretos Ley 071 de 2020 y 927 de 2023, la consecuencia jurídica directa de esta calificación es:",
                "options": [
                    "La reubicación temporal en otra dependencia seccional por el término de seis meses sin menoscabo salarial, debiendo reiniciar el proceso de concertación de objetivos laborales.",
                    "El retiro del servicio del empleado y la consecuente pérdida de los derechos de carrera administrativa, una vez quede en firme el acto administrativo de declaratoria de insubsistencia.",
                    "La prórroga automática de la concertación de compromisos por un trimestre adicional para verificar si las competencias técnicas mejoran con capacitación institucional obligatoria."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La calificación definitiva insatisfactoria genera el retiro del servicio y la declaratoria de insubsistencia del nombramiento de carrera (Art. 43 Ley 909/2004). Las opciones A y C plantean figuras no contempladas por la ley para evaluaciones reprobatorias."
            },
            {
                "id": "m1_c14",
                "text": "Caso: La DIAN cuenta con un sistema de carrera administrativa de naturaleza específica y técnica, regulado por los Decretos Ley 071 de 2020 y 927 de 2023.\n\nEnunciado: La justificación constitucional y legal que sustenta la existencia de este régimen especial de carrera en la DIAN radica en:",
                "options": [
                    "La discrecionalidad otorgada al Ministro de Hacienda para fijar regímenes salariales y disciplinarios diferenciados al margen de la Comisión Nacional del Servicio Civil.",
                    "La singularidad técnica de la función tributaria, aduanera y cambiaria, que demanda perfiles de alta especialización, integridad y estabilidad para salvaguardar el recaudo estatal.",
                    "El régimen de contratación privada que ampara a los servidores adscritos a los Puntos de Contacto para agilizar los trámites aduaneros frente al comercio internacional."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Corte Constitucional (Sentencia C-072/2021) ratificó que el régimen especial de carrera DIAN se justifica en la complejidad técnica y el impacto estratégico del recaudo y control aduanero. Las opciones A y C formulan afirmaciones falsas sobre el régimen público."
            },
            {
                "id": "m1_c15",
                "text": "Caso: Un Gestor I utiliza su computador institucional y las claves corporativas asignadas para descargar bases de datos del Muisca y elaborar declaraciones tributarias remuneradas a clientes particulares los fines de semana.\n\nEnunciado: De acuerdo con el Código General Disciplinario y el deber de custodia de los recursos públicos, esta conducta constituye:",
                "options": [
                    "Una falta leve subsanable mediante amonestación privada escrita, siempre que las declaraciones tributarias de los clientes hayan sido presentadas oportunamente sin inconsistencias.",
                    "Una falta gravísima disciplinaria y un delito de abuso de función pública, al emplear indebidamente bienes del Estado e información reservada para provecho económico particular.",
                    "Un ejercicio válido de la profesión contable o jurídica, siempre que las asesorías privadas no interfieran materialmente con el horario de atención asignado en el Punto de Contacto."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Ley 1952 de 2019 tipifica como falta gravísima utilizar bienes, software o información del Estado para beneficio propio o de terceros. Las opciones A y C pretenden legalizar conductas corruptas expresamente sancionadas por el ordenamiento."
            }
        ]
    },
    {
        "id": "m2",
        "title": "Módulo 2: Procedimiento Administrativo y CPACA",
        "navLabel": "⚖️ M.2: CPACA y Peticiones",
        "homeLabel": "Módulo 2: Procedimiento CPACA, Peticiones y PQRSD",
        "theoryId": "modulo-2",
        "cases": [
            {
                "id": "m2_c1",
                "text": "Caso: Un ciudadano radica el 2 de mayo una petición escrita solicitando copia simple de las resoluciones sancionatorias emitidas por una División Seccional en los últimos seis meses.\n\nEnunciado: De conformidad con el artículo 14 numeral 1 de la Ley 1755 de 2015 (que sustituyó el Título II del CPACA), el término perentorio para resolver esta solicitud es de:",
                "options": [
                    "Quince (15) días hábiles siguientes a su recepción, término general aplicable a toda petición ciudadana en la administración pública según las normas rectoras del procedimiento ordinario.",
                    "Diez (10) días hábiles siguientes a su recepción; si no se da respuesta en este término, se entenderá aceptada la petición y la entidad deberá entregar las copias dentro de los 3 días siguientes.",
                    "Treinta (30) días hábiles siguientes a la radicación, por tratarse de documentos que requieren una búsqueda documental y compilación exhaustiva en los archivos de gestión seccionales."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 14 numeral 1 de la Ley 1755 de 2015 señala que las peticiones de documentos e información deben resolverse en 10 días hábiles, operando la entrega gratuita obligatoria en caso de silencio. La opción A aplica el término general y la opción C aplica consultas complejas."
            },
            {
                "id": "m2_c2",
                "text": "Caso: Una comerciante radica una petición solicitando corregir su dirección en el sistema, pero omite adjuntar el documento de identidad y el poder del apoderado que la suscribe.\n\nEnunciado: Conforme al artículo 17 del CPACA sobre peticiones incompletas, al Gestor I de Asistencia al Usuario le corresponde:",
                "options": [
                    "Rechazar de plano la solicitud mediante auto administrativo no recurrible, ordenando la devolución inmediata de los antecedentes por carencia formal de los requisitos habilitantes.",
                    "Requerir a la peticionaria por escrito y por una sola vez dentro de los diez (10) días siguientes a la radicación, para que subsane los documentos faltantes en el término máximo de un (1) mes.",
                    "Suspender el trámite de manera indefinida en el sistema Muisca hasta que la interesada comparezca espontáneamente a la ventanilla con los documentos exigidos por la norma."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 17 del CPACA establece que ante peticiones incompletas la entidad debe requerir por escrito al solicitante por una sola vez dentro de los 10 días para que subsane en 1 mes. Las opciones A y C vulneran las garantías del peticionario."
            },
            {
                "id": "m2_c3",
                "text": "Caso: Habiendo transcurrido un mes completo desde el requerimiento de documentos sin que el peticionario haya aportado los soportes ni solicitado prórroga legal, la administración debe definir la actuación.\n\nEnunciado: De conformidad con el artículo 17 del CPACA, la consecuencia procesal obligatoria aplicable a esta solicitud es:",
                "options": [
                    "Archivar provisionalmente las diligencias en el expediente digital sin expedir acto administrativo, a la espera de que el interesado radique una nueva solicitud con lleno de requisitos.",
                    "Declarar el desistimiento tácito de la petición mediante resolución motivada, la cual debe notificarse personalmente y contra la que procede únicamente el recurso de reposición.",
                    "Imponer una sanción pecuniaria equivalente a dos unidades de valor tributario por inactividad procesal e incurrir en dilación injustificada de los términos de la administración."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 17 del CPACA contempla el desistimiento tácito ante la inactividad del peticionario para subsanar, decretándose mediante resolución motivada recurrible en reposición. Las opciones A y C formulan actuaciones arbitrarias contrarias a la ley."
            },
            {
                "id": "m2_c4",
                "text": "Caso: Un contribuyente interpone recurso de reposición contra una resolución seccional que le impuso una sanción por extemporaneidad en la presentación de su declaración.\n\nEnunciado: Conforme al artículo 76 del CPACA y las normas especiales del Estatuto Tributario, el término de que dispone el administrado para interponer dicho recurso es de:",
                "options": [
                    "Cinco (5) días hábiles contados a partir de la fecha de expedición formal del acto administrativo en la sede electrónica de la Dirección Seccional de Impuestos respectiva.",
                    "Diez (10) días hábiles siguientes a la notificación formal del acto administrativo sancionatorio, debiendo sustentarse por escrito con expresión concreta de los motivos de inconformidad.",
                    "Veinte (20) días hábiles siguientes a la fecha en que el contribuyente tomó conocimiento material o espontáneo del contenido resolutivo de la decisión sancionatoria."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 76 del CPACA señala que los recursos de reposición y apelación deben interponerse dentro de los diez (10) días hábiles siguientes a la notificación del acto. Las opciones A y C señalan términos inexistentes que inducen al error procesal."
            },
            {
                "id": "m2_c5",
                "text": "Caso: Al revisar una resolución seccional en firme que actualizó el RUT de una sociedad, el Gestor I detecta que en la parte resolutiva se escribió un dígito incorrecto en el número del NIT.\n\nEnunciado: De conformidad con el artículo 45 del CPACA sobre corrección de errores formales, la administración tributaria debe:",
                "options": [
                    "Demandar su propio acto ante la jurisdicción contencioso administrativa mediante la acción de lesividad, por tratarse de un acto en firme con efectos individuales.",
                    "Corregir en cualquier tiempo el error aritmético o mecanográfico mediante acto aclaratorio motivado, siempre que ello no altere el sentido material y sustancial de la decisión.",
                    "Exigir que la sociedad comercial solicite una revocatoria directa expresa de la resolución, renunciando formalmente a los efectos consolidados del registro anterior."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 45 del CPACA permite corregir en cualquier tiempo los errores aritméticos o mecanográficos que no modifiquen sustancialmente el sentido de la decisión. Las opciones A y C sobredimensionan el trámite ante un simple error mecanográfico."
            },
            {
                "id": "m2_c6",
                "text": "Caso: Se recibe en el buzón virtual de la DIAN una petición anónima que aporta pruebas fotográficas y extractos bancarios sobre una presunta defraudación fiscal continua en un comercio formal.\n\nEnunciado: Conforme a la jurisprudencia de la Corte Constitucional y el artículo 81 del CPACA, al Gestor I le corresponde:",
                "options": [
                    "Archivar de inmediato el reporte anónimo en la bandeja de descartes, en consideración a que la Constitución prohíbe dar trámite a escritos que no contengan firma e identificación plena.",
                    "Dar trámite a la denuncia trasladándola al área de Fiscalización para la verificación de los hechos, dado que aporta elementos probatorios objetivos y verificables de la infracción.",
                    "Requerir a través de la página web de la DIAN al autor desconocido para que comparezca a identificarse en el Punto de Contacto como condición previa para estudiar las pruebas."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Las autoridades públicas tienen el deber de dar trámite a peticiones y denuncias anónimas siempre que aporten indicios, hechos y pruebas objetivas verificables. Las opciones A y C desconocen el deber de combatir el fraude ante pruebas fundadas."
            },
            {
                "id": "m2_c7",
                "text": "Caso: La DIAN remite una resolución sancionatoria mediante Notificación Electrónica a la dirección procesal electrónica que figura en el RUT de un contribuyente persona jurídica.\n\nEnunciado: De conformidad con el artículo 566-1 del Estatuto Tributario, los términos legales para que el contribuyente responda o recurra se computan a partir de:",
                "options": [
                    "El mismo día y hora exactos en que el servidor de correo electrónico institucional de la DIAN generó el envío automático de la comunicación electrónica certificada.",
                    "El quinto (5) día hábil siguiente a la fecha en que el acto administrativo fue entregado y puesto a disposición en el buzón electrónico del contribuyente en el portal web.",
                    "El día hábil siguiente a aquel en que el contribuyente abra efectivamente el mensaje y descargue el archivo PDF que contiene el acto administrativo sancionatorio."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 566-1 del E.T. precisa que los términos para el contribuyente se computan a partir del quinto (5) día hábil siguiente a la entrega del correo en el buzón del RUT. Las opciones A y C desconocen la regla legal especial de notificación electrónica."
            },
            {
                "id": "m2_c8",
                "text": "Caso: Un ciudadano inconforme con el tiempo de espera en un Punto de Contacto radica una queja formal contra el funcionario de orientación exigiendo una sanción disciplinaria inmediata.\n\nEnunciado: De conformidad con la Ley 1755 de 2015, el trámite y término que legalmente corresponde para responder de fondo a esta queja es de:",
                "options": [
                    "Diez (10) días hábiles, tramitándola como una solicitud preferente de información de interés general que debe resolverse con copia a la Personería Municipal de la localidad.",
                    "Quince (15) días hábiles siguientes a la radicación, remitiéndola a la dependencia de Control Disciplinario o al canal PQRSD para informar las actuaciones adoptadas al quejoso.",
                    "Treinta (30) días hábiles, por tratarse de un reproche contra un servidor público que requiere concepto técnico previo de la Comisión de Personal de la Dirección Seccional."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Las quejas y reclamos sobre la prestación del servicio forman parte del derecho de petición ordinario y deben resolverse en el término general de quince (15) días hábiles. Las opciones A y C señalan términos y trámites inexactos."
            },
            {
                "id": "m2_c9",
                "text": "Caso: Un contribuyente consulta a un Gestor I si transcurridos tres meses desde la radicación de su solicitud sin obtener respuesta de la administración, se entiende que su petición fue aprobada.\n\nEnunciado: De conformidad con el artículo 83 y 84 del CPACA sobre el silencio administrativo, la regla general en el ordenamiento colombiano es que:",
                "options": [
                    "Opera de manera automática el silencio administrativo positivo, adquiriendo el peticionario los derechos solicitados con la simple exhibición de la constancia de radicación inicial.",
                    "Opera la figura del silencio administrativo negativo, entendiéndose que la decisión es desestimatoria y habilitando al ciudadano para interponer los recursos o acudir a la jurisdicción.",
                    "Se produce la nulidad absoluta de todo lo actuado, debiendo la entidad reiniciar oficiosamente la actuación administrativa e indemnizar pecuniariamente al solicitante por la demora."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La regla general es el silencio administrativo negativo (Art. 83 CPACA). El silencio positivo solo existe cuando la ley especial lo consagra taxativamente. Las opciones A y C formulan efectos inexistentes frente al silencio general."
            },
            {
                "id": "m2_c10",
                "text": "Caso: Un concejal municipal solicita mediante derecho de petición las declaraciones de renta y los ingresos brutos de los cinco mayores comerciantes del municipio para un debate de control político local.\n\nEnunciado: De conformidad con el artículo 583 del Estatuto Tributario y las excepciones a la reserva documental del CPACA, al Gestor I le corresponde:",
                "options": [
                    "Entregar de inmediato las copias solicitadas, toda vez que los concejales ostentan atribuciones constitucionales de control político que priman sobre la reserva de los particulares.",
                    "Negar la entrega de la información mediante oficio motivado, invocando la reserva legal tributaria estricta que prohíbe suministrar declaraciones a corporaciones de elección popular.",
                    "Suministrar la información pero requiriendo al concejal para que suscriba un acta de compromiso garantizando que los datos tributarios no serán revelados en sesiones públicas."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 583 del Estatuto Tributario ampara con reserva legal estricta las declaraciones tributarias, prohibiendo su entrega a concejales o terceros no autorizados por la ley. Las opciones A y C quebrantan la reserva con causal de destitución."
            },
            {
                "id": "m2_c11",
                "text": "Caso: Un ciudadano radica por error en el Punto de Contacto de la DIAN una solicitud de liquidación de impuesto predial unificado, tributo que corresponde a la Secretaría de Hacienda Municipal.\n\nEnunciado: Conforme al artículo 21 del CPACA sobre remisión por incompetencia, al servidor que recibe la petición le corresponde:",
                "options": [
                    "Rechazar la solicitud de plano mediante constancia verbal en ventanilla, devolviendo el documento físico al ciudadano para que lo radique personalmente en la alcaldía municipal.",
                    "Remitir la petición a la Secretaría de Hacienda competente dentro de los cinco (5) días hábiles siguientes y enviar comunicación informativa con copia del traslado al peticionario.",
                    "Archivar el radicado en la DIAN notificando al interesado que la entidad no tiene convenio interinstitucional de recaudo para tramitar impuestos territoriales o prediales."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 21 del CPACA impone remitir la petición incompetente a la autoridad competente dentro de los 5 días hábiles siguientes con comunicación al peticionario. Las opciones A y C evaden el deber legal de traslado administrativo oficioso."
            },
            {
                "id": "m2_c12",
                "text": "Caso: La Dirección Seccional advierte que reconoció por error un beneficio tributario mediante un acto administrativo particular y concreto que ya causó efectos y se encuentra ejecutoriado.\n\nEnunciado: De conformidad con el artículo 97 del CPACA sobre revocación de actos de carácter particular, para revocar dicha decisión la entidad requiere:",
                "options": [
                    "Expedir una resolución unilateral de revocatoria directa motivada en la prevalencia del interés general, sin necesidad de consultar ni comunicar previamente al beneficiario.",
                    "Obtener el consentimiento previo, expreso y por escrito del titular del derecho reconocido, o en su defecto demandar su propio acto ante la jurisdicción contencioso administrativa.",
                    "Solicitar una autorización sumaria a la Procuraduría General de la Nación para decretar la pérdida de fuerza ejecutoria del acto administrativo por decaimiento del derecho."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 97 del CPACA exige el consentimiento previo, expreso y escrito del particular para revocar actos particulares y concretos; a falta de este, la entidad debe demandar su propio acto en acción de lesividad. Las opciones A y C vulneran la seguridad jurídica."
            },
            {
                "id": "m2_c13",
                "text": "Caso: Un contribuyente interpone oportunamente el recurso de apelación contra una liquidación oficial de revisión que modificó sustancialmente sus deducciones en el impuesto sobre la renta.\n\nEnunciado: Conforme al artículo 79 del CPACA sobre los efectos de los recursos administrativos, la interposición del recurso en sede gubernativa genera:",
                "options": [
                    "Efecto devolutivo inmediato, por lo cual la administración tributaria puede adelantar el cobro coactivo de los valores liquidados mientras se desata la segunda instancia.",
                    "Efecto suspensivo de pleno derecho, lo que impide a la DIAN ejecutar el acto administrativo recurrido o cobrar las sumas debatidas hasta tanto el recurso sea resuelto en firme.",
                    "Efecto diferido provisional, facultando a la seccional para embargar preventivamente los bienes del contribuyente sin avanzar en la orden de remate o disposición patrimonial."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. En el procedimiento administrativo, los recursos se conceden en el efecto suspensivo (Art. 79 CPACA), suspendiendo la ejecutoriedad del acto hasta su firmeza. Las opciones A y C vulneran el derecho de defensa al intentar cobrar actos no ejecutoriados."
            },
            {
                "id": "m2_c14",
                "text": "Caso: La DIAN intenta notificar por correo electrónico una resolución sancionatoria a un contribuyente no formalizado, pero el mensaje es rebotado reiteradamente por buzón inexistente.\n\nEnunciado: De conformidad con el artículo 568 del Estatuto Tributario, el mecanismo subsidiario obligatorio para formalizar la notificación en este evento es:",
                "options": [
                    "La publicación de la decisión en un diario de amplia circulación nacional a costa del contribuyente en un plazo no superior a treinta días calendario.",
                    "La notificación por aviso publicado en el portal web institucional de la DIAN y en un lugar visible de la sede seccional, entendiéndose surtida al finalizar el día de publicación.",
                    "La fijación en lista en la secretaría del tribunal administrativo con jurisdicción en el domicilio fiscal del contribuyente por el término de diez días hábiles."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 568 del E.T. dispone que cuando los actos no puedan notificarse por correo físico o electrónico, se surte la notificación por aviso en la web de la DIAN y en la sede. Las opciones A y C señalan formas de notificación ajenas al procedimiento tributario."
            },
            {
                "id": "m2_c15",
                "text": "Caso: Un comerciante consulta por escrito a la Subdirección de Normativa y Doctrina de la DIAN sobre la correcta aplicación de una tarifa diferencial de retención en la fuente para un servicio tecnológico.\n\nEnunciado: De conformidad con el artículo 28 del CPACA y las normas de procedimiento tributario, los conceptos emitidos por la DIAN en respuesta a consultas:",
                "options": [
                    "Tienen fuerza vinculante y obligatoria tanto para los contribuyentes como para la administración, constituyendo normas generales de obligatorio acatamiento judicial.",
                    "No son de obligatorio cumplimiento para los particulares ni deciden situaciones concretas, pero son de obligatoria observancia para los funcionarios de la administración tributaria.",
                    "Carecen de toda validez doctrinaria institucional, sirviendo únicamente como criterios auxiliares de orientación que el funcionario puede ignorar discrecionalmente."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Los conceptos de la DIAN no obligan a los contribuyentes (Art. 28 CPACA), pero su observancia sí es obligatoria para los funcionarios de la DIAN (Art. 131 Ley 2010/2019). Las opciones A y C desconocen el régimen jurídico de los conceptos tributarios."
            }
        ]
    },
    {
        "id": "m3",
        "title": "Módulo 3: Registro Único Tributario (RUT)",
        "navLabel": "📋 M.3: Registro Único (RUT)",
        "homeLabel": "Módulo 3: Registro Único Tributario (RUT) y Obligaciones",
        "theoryId": "modulo-3",
        "cases": [
            {
                "id": "m3_c1",
                "text": "Caso: Un comerciante acude al Punto de Contacto solicitando actualizar su RUT para cancelar la responsabilidad de IVA y registrarse como \"No Responsable\", alegando que el año pasado sus ingresos no superaron las 3.500 UVT.\n\nEnunciado: De conformidad con el parágrafo 3 del artículo 437 del Estatuto Tributario, el Gestor I debe verificar que:",
                "options": [
                    "El solicitante demuestre haber cumplido la totalidad de los topes legales de ingresos brutos y patrimonio durante los últimos cinco (5) años fiscales anteriores a la solicitud.",
                    "El contribuyente acredite haber cumplido las condiciones y topes de no responsable de IVA durante el año gravable en curso y en los tres (3) años fiscales anteriores consecutivos.",
                    "El peticionario presente un balance financiero certificado por revisor fiscal que garantice que su nivel de ventas proyectado para el año venidero no superará las 1.500 UVT."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El parágrafo 3 del Art. 437 del E.T. exige haber cumplido los topes en el año en curso y en los 3 años anteriores consecutivos para poder registrarse como no responsable. Las opciones A y C exigen requisitos no contemplados en la ley tributaria."
            },
            {
                "id": "m3_c2",
                "text": "Caso: Una madre acude con su hijo de 16 años, quien obtuvo ingresos laborales y por servicios digitales, para adelantar la formalización de su inscripción en el RUT ante la DIAN.\n\nEnunciado: Conforme al Decreto 1625 de 2016 Único Reglamentario en Materia Tributaria, para la inscripción de menores de edad:",
                "options": [
                    "La inscripción solo es jurídicamente viable cuando el menor alcance la mayoría de edad (18 años), debiendo facturar transitoriamente a través del NIT de uno de sus progenitores.",
                    "El trámite debe adelantarse a través de su representante legal (padre o madre), acreditando parentesco con el registro civil de nacimiento y la tarjeta de identidad del menor.",
                    "El menor de edad puede comparecer y firmar el formulario de manera directa y autónoma sin representación legal, siempre que aporte la cédula de ciudadanía de un fiador comercial."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Los menores de edad actúan en el RUT a través de sus representantes legales acreditando parentesco (Art. 1.6.1.2.11 Decreto 1625/2016). Las opciones A y C desconocen las reglas de capacidad jurídica de los menores con ingresos fiscales."
            },
            {
                "id": "m3_c3",
                "text": "Caso: Un apoderado se presenta en ventanilla para tramitar la inscripción en el RUT de una sociedad comercial en constitución, aportando una copia simple de un poder general sin nota de presentación personal.\n\nEnunciado: Conforme a los requisitos de representación y formalización del RUT (Decreto 1625 de 2016), el Gestor I debe:",
                "options": [
                    "Rechazar el trámite indicando que para la inscripción inicial de personas jurídicas se exige comparecencia personal e indelegable del representante legal designado en estatutos.",
                    "Exigir la presentación de poder especial con facultades expresas otorgado ante notario público o copia de escritura pública de poder general con vigencia no mayor a 3 meses.",
                    "Aceptar la copia simple del poder bajo el principio de buena fe administrativa, condicionando la expedición del certificado del RUT a la ratificación escrita del representante."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Los apoderados deben aportar poder especial debidamente otorgado con presentación personal o copia auténtica de poder general vigente. La opción A desconoce la validez de la representación y la opción C quebranta los controles de seguridad tributaria."
            },
            {
                "id": "m3_c4",
                "text": "Caso: Tres comunicaciones oficiales y requerimientos tributarios remitidos por la DIAN a la dirección registrada en el RUT de un contribuyente han sido devueltos por la empresa de mensajería con la causal \"no reside\".\n\nEnunciado: De conformidad con el artículo 555-2 del Estatuto Tributario, la administración tributaria está facultada para:",
                "options": [
                    "Proceder a la cancelación inmediata y definitiva del NIT del contribuyente en el Muisca, reportándolo en las centrales de riesgo crediticio por elusión de notificaciones fiscales.",
                    "Ordenar la suspensión oficiosa de la inscripción en el RUT mediante resolución motivada, cesando la vigencia de la inscripción hasta tanto el titular actualice su domicilio.",
                    "Declarar al contribuyente como persona fiscalmente inexistente y trasladar de oficio el cobro de sus obligaciones a los parientes en primer grado de consanguinidad."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 555-2 del E.T. autoriza suspender oficiosamente el RUT cuando las comunicaciones oficiales son devueltas por causales de no ubicación. Las opciones A y C son sanciones inexistentes y violatorias del debido proceso."
            },
            {
                "id": "m3_c5",
                "text": "Caso: Un contribuyente persona natural cambia su residencia fiscal y domicilio comercial el 5 de marzo, pero acude al Punto de Contacto de la DIAN a reportar el cambio cuatro meses después.\n\nEnunciado: Conforme al artículo 658-3 numeral 3 del Estatuto Tributario sobre actualización del RUT, al contribuyente le corresponde:",
                "options": [
                    "La exoneración automática de toda sanción económica, toda vez que acudió voluntariamente a subsanar la dirección antes de ser notificado de un emplazamiento formal para declarar.",
                    "La liquidación de la sanción por actualización extemporánea del RUT, equivalente a una (1) UVT por cada día de retraso en la actualización contados a partir del mes del cambio.",
                    "Una sanción fija de cierre temporal de sus cuentas bancarias por treinta días, debiendo gestionar una autorización judicial ante el juzgado civil de su nuevo domicilio."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 658-3 numeral 3 del E.T. sanciona la actualización extemporánea del RUT con 1 UVT por cada día de retraso, debiendo actualizarse dentro del mes siguiente al hecho. Las opciones A y C desconocen la norma sancionatoria expresa."
            },
            {
                "id": "m3_c6",
                "text": "Caso: En una visita de control formal, funcionarios de la DIAN comprueban que un establecimiento abierto al público no tiene exhibido el certificado del RUT ni cuenta con el documento en sus instalaciones.\n\nEnunciado: De conformidad con el artículo 658-3 numeral 2 del Estatuto Tributario, la consecuencia sancionatoria aplicable es:",
                "options": [
                    "El decomiso inmediato de los inventarios de mercancías presentes en el local y la revocatoria definitiva de la matrícula mercantil ante la Cámara de Comercio de la ciudad.",
                    "La sanción de clausura del establecimiento de comercio por el término de tres (3) días, o una multa pecuniaria sustitutiva cuando no sea factible ejecutar la clausura física.",
                    "Una amonestación pedagógica escrita que no genera antecedente tributario siempre que el comerciante exhiba el RUT en la página web dentro de los diez días hábiles siguientes."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 658-3 numeral 2 del E.T. sanciona el no exhibir el RUT en lugar visible del establecimiento con clausura de 3 días o multa equivalente. Las opciones A y C carecen de sustento en el régimen sancionatorio tributario."
            },
            {
                "id": "m3_c7",
                "text": "Caso: En el Formulario 001 del RUT, el Gestor I debe orientar a un nuevo comerciante persona natural que inicia actividades de venta de calzado y cuyos ingresos brutos anuales estimados no superarán las 2.000 UVT.\n\nEnunciado: La clasificación de responsabilidades tributarias que legalmente corresponde registrar en la casilla 53 del formulario es:",
                "options": [
                    "Responsable del Impuesto sobre las Ventas (Código 48), toda vez que cualquier actividad comercial de bienes muebles gravados genera la calidad de responsable de IVA.",
                    "No responsable del Impuesto sobre las Ventas (Código 49), al no superar el tope de 3.500 UVT ni cumplir las demás condiciones restrictivas del artículo 437 del Estatuto Tributario.",
                    "Gran Contribuyente autorretenedor en la fuente (Código 13), debiendo presentar declaraciones mensuales consolidadas de retención a título de renta e industria y comercio."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Quienes cumplan las condiciones del parágrafo 3 del Art. 437 del E.T. se registran con el código 49 (No responsable de IVA). Las opciones A y C imponen responsabilidades tributarias manifiestamente improcedentes para este comerciante."
            },
            {
                "id": "m3_c8",
                "text": "Caso: Se radica en ventanilla una solicitud de cancelación definitiva del RUT de una sociedad anónima simplificada (S.A.S.) que culminó formalmente su proceso de liquidación privada.\n\nEnunciado: Para que proceda legalmente la cancelación definitiva del RUT conforme al Decreto 1625 de 2016, el Gestor I debe verificar:",
                "options": [
                    "Que la sociedad comercial haya conservado un saldo a favor en su última declaración de renta y que no registre empleados activos en el sistema de seguridad social integrada.",
                    "Que se acredite el registro de la cuenta final de liquidación en la Cámara de Comercio y que la sociedad se encuentre al día en todas sus obligaciones tributarias y aduaneras.",
                    "La publicación previa de tres edictos emplazatorios en la Gaceta Oficial del Congreso de la República con una antelación mínima de cuarenta y cinco días calendario al trámite."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La cancelación del RUT de personas jurídicas exige la cuenta final de liquidación registrada en Cámara de Comercio y estar a paz y salvo en obligaciones DIAN (Art. 1.6.1.2.18 Decreto 1625/2016). Las opciones A y C señalan requisitos improcedentes."
            },
            {
                "id": "m3_c9",
                "text": "Caso: Un abogado acude en representación de un contribuyente a solicitar la actualización del RUT para cambiar la actividad económica principal y modificar la responsabilidad de facturador electrónico.\n\nEnunciado: Conforme a las directrices de autogestión de la DIAN y la Resolución 1238 de 2024, la orientación correcta que el Gestor I debe brindar al apoderado es:",
                "options": [
                    "Informarle que la actualización del RUT para cambio de actividad y responsabilidades se realiza de forma 100% virtual por el portal web mediante autogestión con firma electrónica.",
                    "Exigirle que el trámite sea presencial obligatoriamente, requiriendo que el contribuyente titular comparezca personalmente a la toma de datos biométricos y huella dactilar.",
                    "Indicarle que los apoderados tienen prohibido por ley modificar datos económicos del RUT, debiendo solicitar una inspección tributaria previa en la sede de la empresa."
                ],
                "correct": 0,
                "explanation": "La opción A es la correcta. La actualización de actividades y responsabilidades es un trámite que el contribuyente o apoderado puede realizar 100% en línea mediante autogestión virtual con Instrumento de Firma Electrónica (IFE). Las opciones B y C imponen barreras de acceso injustificadas."
            },
            {
                "id": "m3_c10",
                "text": "Caso: Un microempresario decide acogerse voluntariamente al Régimen Simple de Tributación (RST) para la vigencia fiscal 2026, cumpliendo los requisitos del artículo 905 del Estatuto Tributario.\n\nEnunciado: De conformidad con el artículo 909 del Estatuto Tributario, el término perentorio para actualizar el RUT e inscribirse en el RST vence el:",
                "options": [
                    "Último día hábil del mes de enero del año gravable en el cual pretende ejercer la opción voluntaria de tributar bajo el régimen simplificado unificado.",
                    "Último día hábil del mes de febrero del año gravable para el cual se ejerce la opción; superada dicha fecha, solo podrá optar por el RST en la vigencia fiscal siguiente.",
                    "Treinta y uno (31) de marzo del año gravable correspondiente, coincidiendo con la fecha límite de renovación obligatoria de la matrícula mercantil mercantil."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 909 del E.T. determina que quienes opten por el RST deben actualizar el RUT hasta el último día hábil del mes de febrero del año gravable respectivo. Las opciones A y C confunden el término legal perentorio fijado por el legislador."
            },
            {
                "id": "m3_c11",
                "text": "Caso: Un contribuyente cuyo RUT fue suspendido por la DIAN por inconsistencias en la dirección acude al Punto de Contacto aportando un certificado de libertad y tradición reciente de su nuevo domicilio.\n\nEnunciado: De conformidad con el Decreto 1625 de 2016, el procedimiento administrativo que corresponde aplicar para normalizar su situación es:",
                "options": [
                    "Tramitar una nueva inscripción en el RUT asignando un nuevo Número de Identificación Tributaria (NIT) y cancelando los antecedentes de la inscripción suspendida.",
                    "Adelantar la actualización de la dirección en el sistema Muisca, procediendo al levantamiento formal de la suspensión una vez verificada la veracidad del nuevo domicilio aportado.",
                    "Requerir al contribuyente para que obtenga una autorización judicial previa ante el juez administrativo antes de proceder a modificar los registros del Muisca."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Una vez subsanada la causal que originó la suspensión, la DIAN actualiza el RUT y levanta la medida cautelar de suspensión (Art. 1.6.1.2.16 Decreto 1625/2016). Las opciones A y C violan la unicidad del NIT y los principios del trámite tributario."
            },
            {
                "id": "m3_c12",
                "text": "Caso: Tras el fallecimiento de un contribuyente comerciante, los herederos solicitan actualizar el RUT para que las obligaciones formales y sustanciales continúen cumpliéndose mientras se realiza la partición.\n\nEnunciado: De conformidad con el Estatuto Tributario y el Decreto 1625 de 2016, la actualización del RUT debe formalizarse a nombre de:",
                "options": [
                    "Cualquiera de los herederos a título personal, subrogándose en la titularidad del NIT del causante hasta la liquidación de la masa hereditaria en notaría.",
                    "La sucesión ilíquida del causante, manteniendo el mismo NIT del fallecido y registrando la responsabilidad de representación en cabeza del albacea o heredero con administración.",
                    "La masa sucesoral como una nueva persona jurídica de carácter societario, debiendo inscribir una personería jurídica transitoria en la Cámara de Comercio."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La sucesión ilíquida es un sujeto de obligaciones tributarias que opera bajo el mismo NIT del causante con la representación de los herederos o albacea (Art. 1.6.1.2.14 Decreto 1625/2016). Las opciones A y C desfiguran la naturaleza tributaria de la sucesión."
            },
            {
                "id": "m3_c13",
                "text": "Caso: Un ciudadano que inició un negocio de comidas rápidas con ingresos brutos superiores a las 3.500 UVT no se ha inscrito en el RUT tras seis meses de operaciones comerciales continuas.\n\nEnunciado: De conformidad con el artículo 658-3 numeral 1 del Estatuto Tributario, la sanción aplicable por no inscribirse en el RUT estando obligado a ello es:",
                "options": [
                    "La privación de la libertad mediante arresto inconmutable de seis meses, ordenado directamente por el Director Seccional de Impuestos de la jurisdicción.",
                    "Clausura del establecimiento, sede o local por un (1) día por cada mes o fracción de mes de retraso, o multa de una (1) UVT por día de retraso para quienes no tengan local.",
                    "La confiscación definitiva de la totalidad de las materias primas y bienes muebles utilizados en la actividad económica comercial en favor del erario público."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 658-3 numeral 1 del E.T. sanciona la no inscripción con clausura de 1 día por cada mes de retraso o multa de 1 UVT diaria si no tiene local. Las opciones A y C señalan sanciones inconstitucionales prohibidas en Colombia."
            },
            {
                "id": "m3_c14",
                "text": "Caso: Un ciudadano acude a inscribirse por primera vez en el RUT como persona natural para celebrar un contrato de prestación de servicios, pero el funcionario le exige certificación bancaria vigente.\n\nEnunciado: Conforme a la política de simplificación de trámites y la normativa vigente del RUT (Decreto 1625 de 2016 y circulares DIAN), la exigencia de cuenta bancaria:",
                "options": [
                    "Es un requisito obligatorio e indispensable para todos los contribuyentes sin excepción, debiendo acreditar saldo positivo en cuenta corriente o de ahorros.",
                    "Fue eliminada para la inscripción de personas naturales, exigiéndose únicamente la exhibición del documento de identidad original y el suministro de la información de ubicación.",
                    "Solo se puede exonerar si el ciudadano presenta dos declaraciones juramentadas de testigos que den fe de su domicilio permanente y solvencia moral."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Las reformas antitrámites y el Decreto 1625 de 2016 eliminaron la cuenta bancaria para la inscripción de personas naturales, bastando el documento de identidad y datos de contacto. Las opciones A y C imponen cargas abolidas por la ley."
            },
            {
                "id": "m3_c15",
                "text": "Caso: El sistema Muisca detecta que un ciudadano figura con dos números de identificación tributaria (NIT) distintos en la base de datos central de la DIAN por un error histórico de digitación.\n\nEnunciado: De conformidad con el artículo 555-2 del Estatuto Tributario y las reglas de administración del RUT, al área competente le corresponde:",
                "options": [
                    "Mantener vigentes ambos registros tributarios, distribuyendo aleatoriamente las declaraciones y obligaciones presentadas en cada uno de los formularios históricos.",
                    "Adelantar la depuración oficiosa de la información, unificando los antecedentes en el NIT correcto que corresponda a su cédula y cancelando de oficio el registro duplicado.",
                    "Exigir que el ciudadano contrate una auditoría forense externa para demostrar cuál de los dos números tributarios ha sido utilizado con mayor frecuencia comercial."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El principio de unicidad del RUT (Art. 555-2 E.T.) exige que cada persona tenga un único NIT, correspondiendo a la DIAN sanear y unificar de oficio las duplicidades. Las opciones A y C vulneran la seguridad y certeza del registro fiscal."
            }
        ]
    },
    {
        "id": "m4",
        "title": "Módulo 4: Atención al Ciudadano y Canales TACI",
        "navLabel": "🤝 M.4: Atención y Canales",
        "homeLabel": "Módulo 4: Atención al Ciudadano y Canales TACI",
        "theoryId": "modulo-4",
        "cases": [
            {
                "id": "m4_c1",
                "text": "Caso: Una ciudadana de 76 años que se desplaza en silla de ruedas llega al Punto de Contacto de la DIAN solicitando asistencia para generar una copia actualizada de su RUT para un subsidio.\n\nEnunciado: Conforme a la Ley 1171 de 2007 (protección al adulto mayor) y el protocolo de servicio inclusivo de la DIAN, el Gestor I debe:",
                "options": [
                    "Exigirle que solicite un turno digital previo a través de la página web de la DIAN, indicándole que regrese al día siguiente en el horario que el sistema le asigne.",
                    "Brindarle atención prioritaria y preferencial inmediata sin exigencia de cita previa, asignándole un orientador para acompañar la gestión del trámite de manera ágil y digna.",
                    "Informarle que la DIAN no presta atención presencial a personas con movilidad reducida sin la comparecencia obligatoria de un tutor o curador legalmente nombrado."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Ley 1171 de 2007 y los protocolos de la DIAN garantizan la atención preferencial inmediata a adultos mayores y personas con discapacidad, sin cita previa obligatoria. Las opciones A y C constituyen barreras de discriminación ilegal."
            },
            {
                "id": "m4_c2",
                "text": "Caso: La DIAN promueve la adopción de la política de \"Lenguaje Claro\" (Ley 2052 de 2020) en todas las comunicaciones escritas y verbales dirigidas a los ciudadanos y usuarios aduaneros.\n\nEnunciado: En la redacción de una respuesta a un contribuyente sobre una inconsistencia en su declaración, la aplicación del Lenguaje Claro exige:",
                "options": [
                    "Utilizar términos jurídicos y tributarios en latín junto con extensas citas doctrinales para demostrar el rigor académico y la autoridad coercitiva de la seccional.",
                    "Emplear palabras sencillas y directas, estructura gramatical ordenada, párrafos breves y explicaciones técnicas comprensibles sin perder la precisión jurídica de la norma.",
                    "Limitarse a transcribir literalmente los artículos del Estatuto Tributario sin ningún tipo de explicación pedagógica o contextual sobre los hechos objeto de consulta."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El Lenguaje Claro (Ley 2052 de 2020) busca que las comunicaciones estatales sean de fácil comprensión para cualquier ciudadano, preservando la solidez técnica. Las opciones A y C perpetúan barreras burocráticas distorsionantes."
            },
            {
                "id": "m4_c3",
                "text": "Caso: El Instrumento de Firma Electrónica (IFE) de un contribuyente obligado a declarar renta se encuentra vencido, y la fecha límite para el vencimiento de su obligación tributaria es en 48 horas.\n\nEnunciado: Conforme a los canales de autogestión de la DIAN y la Resolución 070 de 2016, la orientación oportuna que debe brindarse al usuario es:",
                "options": [
                    "Indicarle que la firma electrónica solo puede renovarse mediante radicación física de carta notariada en la sede central de la DIAN en Bogotá en un término de 15 días.",
                    "Instruirlo para que acceda al portal web de la DIAN y realice la renovación virtual inmediata de su firma mediante la opción de autogestión con código de seguridad al correo.",
                    "Informarle que ante el vencimiento del IFE debe presentar su declaración en formulario litográfico de papel en cualquier entidad bancaria autorizada de la ciudad."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La renovación del IFE se realiza en línea mediante autogestión en el portal de la DIAN de manera inmediata con claves dinámicas enviadas al correo o celular. Las opciones A y C desorientan al contribuyente exponiéndolo a sanciones."
            },
            {
                "id": "m4_c4",
                "text": "Caso: Un contribuyente llega alterado a la ventanilla alzando la voz por un cobro coactivo que considera injustificado, interrumpiendo el orden y la atención de los demás usuarios en sala.\n\nEnunciado: Aplicando las competencias comportamentales y el protocolo de servicio al ciudadano en situaciones de crisis, el Gestor I debe:",
                "options": [
                    "Responder con el mismo tono enérgico para imponer la autoridad del cargo y exigirle que guarde silencio absoluto como condición previa para escuchar su reclamo.",
                    "Mantener el autocontrol, escuchar con atención y respeto sin interrumpirlo, validar serenamente su inquietud y ofrecerle revisar los antecedentes del cobro en el sistema.",
                    "Abandonar de inmediato la ventanilla de atención y suspender el servicio al público hasta que el personal de vigilancia retire por la fuerza al contribuyente de la sede."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El protocolo de servicio y la inteligencia emocional exigen mantener la calma, aplicar la escucha activa y desescalar la tensión con empatía y firmeza profesional. Las opciones A y C agravan el conflicto y lesionan la imagen institucional."
            },
            {
                "id": "m4_c5",
                "text": "Caso: Un campesino de una zona rural sin acceso a computador ni cobertura de internet acude al Punto de Contacto consultando cómo formalizar su RUT para acceder a un crédito agropecuario.\n\nEnunciado: De conformidad con el principio de equidad en el acceso a la administración pública y el modelo de Cercanía con el Ciudadano:",
                "options": [
                    "El funcionario debe indicarle que la DIAN es una entidad 100% digital y que obligatoriamente debe contratar un asesor privado con computador para realizar el trámite.",
                    "El Gestor I debe brindarle acompañamiento presencial integral y asistido, diligenciando el formulario en el sistema y entregándole la copia del RUT de forma gratuita.",
                    "Se le debe exigir que presente una certificación de la alcaldía municipal que acredite su condición de campesino antes de autorizarle la atención personalizada en sede."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El modelo de Cercanía con el Ciudadano garantiza la atención asistida presencial para cerrar brechas digitales y asegurar la gratuidad del servicio. Las opciones A y C vulneran la inclusión y la equidad en el servicio público."
            },
            {
                "id": "m4_c6",
                "text": "Caso: En los Puntos de Contacto de la DIAN se han instalado \"Kioscos de Autogestión\" diseñados para que los usuarios realicen trámites virtuales de manera rápida y autónoma.\n\nEnunciado: El rol que le corresponde desempeñar al Gestor I de Asistencia al Usuario frente a estos kioscos es:",
                "options": [
                    "Desentenderse de la zona de autogestión, ya que dichos módulos fueron creados para operar sin ninguna intervención ni presencia de funcionarios institucionales.",
                    "Acompañar y orientar pedagógicamente a los ciudadanos en el uso de las herramientas tecnológicas, promoviendo el desarrollo de habilidades digitales tributarias.",
                    "Manejar los equipos en lugar del usuario, ingresando sus contraseñas personales para agilizar las filas sin explicar el procedimiento al ciudadano que observa."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El rol del servidor en los Kioscos es pedagógico y de facilitación, guiando al ciudadano para que adquiera autonomía en el uso de los canales virtuales. Las opciones A y C omiten la pedagogía o vulneran la seguridad digital del usuario."
            },
            {
                "id": "m4_c7",
                "text": "Caso: En el marco de la relación con los \"Clientes TACI\" (Tributarios, Aduaneros y Cambiarios), la DIAN ha evolucionado desde un enfoque eminentemente sancionatorio hacia uno de facilitación.\n\nEnunciado: Este modelo de Cercanía con el Ciudadano fundamenta su efectividad en:",
                "options": [
                    "La reducción discrecional de las tarifas de los impuestos nacionales a favor de los contribuyentes que asistan puntualmente a las capacitaciones seccionales.",
                    "La facilitación del cumplimiento voluntario de las obligaciones mediante servicios accesibles, información transparente y asistencia técnica oportuna y respetuosa.",
                    "La eliminación definitiva de los procesos de fiscalización y cobro coactivo para todas las pequeñas y medianas empresas inscritas formalmente en el RUT."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El modelo TACI y la Cercanía con el Ciudadano buscan promover el cumplimiento voluntario mediante canales ágiles, información comprensible y trato digno. Las opciones A y C proponen facultades ilegales o desmonte del control fiscal."
            },
            {
                "id": "m4_c8",
                "text": "Caso: Un contribuyente consulta sobre la validez jurídica de los trámites y notificaciones electrónicas realizadas a través del portal transaccional de la DIAN frente a los trámites físicos.\n\nEnunciado: Conforme a la Ley 527 de 1999 (comercio electrónico y mensajes de datos) y el Código de Procedimiento Administrativo:",
                "options": [
                    "Los trámites virtuales tienen una validez secundaria y condicional, requiriendo ser ratificados en papel ante notario para surtir plenos efectos probatorios.",
                    "Los mensajes de datos y las firmas electrónicas emitidas por la DIAN gozan de plena equivalencia funcional, validez jurídica y fuerza probatoria igual a los físicos.",
                    "Las actuaciones digitales solo son legalmente vinculantes para personas jurídicas, debiendo las personas naturales actuar en soportes documentales de papel."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Ley 527 de 1999 consagra el principio de equivalencia funcional: los mensajes de datos y firmas electrónicas tienen el mismo valor jurídico y probatorio que los documentos escritos. Las opciones A y C desconocen la ley."
            },
            {
                "id": "m4_c9",
                "text": "Caso: Un ciudadano pregunta a un Gestor I cuál es el período de vigencia legal del Instrumento de Firma Electrónica (IFE) expedido por la DIAN y cuándo debe renovarse.\n\nEnunciado: De conformidad con la Resolución 070 de 2016 y los manuales del servicio informático electrónico de la entidad:",
                "options": [
                    "Tiene una vigencia indeterminada y permanente, perdiendo validez únicamente cuando el contribuyente modifique su actividad económica principal en el RUT.",
                    "Tiene una vigencia legal de tres (3) años contados desde su emisión formal, pudiendo ser renovado en línea por el titular antes de su vencimiento o en cualquier momento.",
                    "Debe renovarse obligatoriamente cada doce meses mediante trámite presencial en las instalaciones del Punto de Contacto donde se formalizó la inscripción."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El IFE tiene una vigencia legal de 3 años y puede ser renovado virtualmente por el usuario antes de expirar. Las opciones A y C señalan períodos de vigencia y procedimientos errados."
            },
            {
                "id": "m4_c10",
                "text": "Caso: Al finalizar un trámite de actualización en ventanilla, el protocolo de servicio de la DIAN exige realizar el cierre de la atención garantizando la retroalimentación del ciudadano.\n\nEnunciado: La conducta que demuestra la aplicación estricta del protocolo oficial de cierre de atención presencial es:",
                "options": [
                    "Llamar de inmediato al siguiente turno en la pantalla electrónica sin emitir ninguna palabra de despedida para cumplir las metas de tiempos de espera en sala.",
                    "Preguntar al usuario si su solicitud quedó resuelta a cabalidad, entregarle el soporte documental respectivo e invitarlo cordialmente a evaluar la calidad del servicio recibido.",
                    "Retener el documento de identidad original del usuario hasta que este califique con la máxima puntuación en la encuesta de satisfacción ubicada en la ventanilla."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El cierre de atención exige verificar la satisfacción de la necesidad, entregar los soportes y permitir la evaluación libre y objetiva del servicio. Las opciones A y C vulneran los protocolos de trato digno y respeto al usuario."
            },
            {
                "id": "m4_c11",
                "text": "Caso: Un contribuyente se comunica con la línea de atención telefónica de la DIAN para verificar el estado de su solicitud de devolución de saldos a favor radicada hace 20 días.\n\nEnunciado: Conforme a los estándares de atención en canales no presenciales y el deber de trazabilidad del servicio, el servidor debe:",
                "options": [
                    "Manifestar al usuario que los canales telefónicos son de carácter estrictamente informativo y que no permiten verificar radicados de dependencias operativas seccionales.",
                    "Validar la identidad del titular con preguntas de seguridad, consultar el expediente en el sistema Muisca y detallarle con precisión la etapa procesal en que se encuentra el trámite.",
                    "Solicitarle que cuelgue la llamada y radique un nuevo derecho de petición en la página web para que la dependencia de Cobranzas le responda por escrito en un mes."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Los canales telefónicos de la DIAN están interconectados con el Muisca para informar el estado real de los trámites con previa validación de seguridad. Las opciones A y C niegan injustificadamente la información al usuario."
            },
            {
                "id": "m4_c12",
                "text": "Caso: Una persona con discapacidad auditiva acude al Punto de Contacto de la DIAN para solicitar la inscripción en el RUT, encontrándose el personal sin intérprete de lengua de señas presencial.\n\nEnunciado: De conformidad con la Ley Estatutaria 1618 de 2013 y el protocolo de accesibilidad institucional, la entidad debe:",
                "options": [
                    "Aplazar la atención y solicitar al ciudadano que regrese acompañado de un familiar que pueda traducir verbalmente las instrucciones del formulario tributario.",
                    "Activar el servicio de interpretación virtual en línea (Centro de Relevo) o facilitar canales escritos de comunicación para garantizar la atención inmediata y autónoma.",
                    "Rechazar el trámite en ventanilla y ordenar que la solicitud sea remitida mediante correo certificado por intermedio de una asociación de personas sordas."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Ley Estatutaria 1618 de 2013 y las políticas de la DIAN exigen utilizar herramientas tecnológicas como el Centro de Relevo y medios escritos para garantizar la inclusión inmediata. Las opciones A y C discriminan al ciudadano."
            },
            {
                "id": "m4_c13",
                "text": "Caso: Un usuario radica en el sistema de PQRSD de la DIAN un escrito titulado \"Denuncia por Corrupción\", pero al leer su contenido se constata que se trata de un reclamo por demora en la entrega de una cita.\n\nEnunciado: De conformidad con las reglas de tipificación de peticiones en el marco del CPACA y las normas de servicio al ciudadano, al servidor le corresponde:",
                "options": [
                    "Rechazar el escrito por indebida denominación formal, exigiendo que el ciudadano radique un nuevo documento bajo el título exacto de \"Reclamo Administrativo\".",
                    "Clasificar y tramitar el escrito según su contenido material real como un reclamo sobre el servicio, respondiéndolo de fondo en el término perentorio de 15 días hábiles.",
                    "Remitir el documento a la Fiscalía General de la Nación para que aperture una noticia criminal contra los funcionarios del Punto de Contacto señalados en el texto."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. En el derecho de petición prima la realidad material sobre la titulación que le dé el ciudadano. La administración debe encauzar y responder el reclamo en 15 días. Las opciones A y C son respuestas desproporcionadas y formalistas."
            },
            {
                "id": "m4_c14",
                "text": "Caso: En un Punto de Contacto se produce una falla generalizada en la red de datos del Muisca durante el último día de vencimiento de plazos para actualizar el RUT del sector comercial.\n\nEnunciado: Conforme a los protocolos de contingencia tecnológica y continuidad del servicio en la DIAN, a los funcionarios de atención les corresponde:",
                "options": [
                    "Cerrar las puertas del Punto de Contacto y colocar un aviso informando que por razones de fuerza mayor no habrá atención hasta el siguiente día hábil.",
                    "Informar con claridad a los usuarios presentes sobre la contingencia técnica, recepcionar los documentos físicos mediante radicación de contingencia y registrar la comparecencia.",
                    "Obligar a los contribuyentes a trasladarse inmediatamente a la sede de la DIAN en la ciudad más cercana para radicar el trámite antes de la medianoche."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El protocolo de contingencia exige informar al público, recibir los soportes en contingencia y certificar la comparecencia oportuna del usuario para evitar sanciones. Las opciones A y C vulneran la continuidad del servicio público."
            },
            {
                "id": "m4_c15",
                "text": "Caso: Durante una atención presencial, un ciudadano de escasos recursos económicos manifiesta angustia y llanto porque desconoce cómo responder una citación tributaria recibida en su domicilio.\n\nEnunciado: Conforme a la competencia de \"Orientación al Usuario y al Ciudadano\" (Resolución 065 de 2024), el Gestor I debe:",
                "options": [
                    "Amonestar al ciudadano recordándole que el llanto no exime del pago de las obligaciones fiscales ni suspende los plazos perentorios del Estatuto Tributario.",
                    "Brindarle apoyo con empatía, serenidad y trato humanizado, explicándole con lenguaje sencillo el contenido de la citación y los pasos claros para atender el requerimiento.",
                    "Indicarle que la DIAN solo atiende aspectos contables y que para recibir apoyo emocional debe dirigirse a la Secretaría de Salud o a un centro de conciliación."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Resolución 065 de 2024 consagra el trato respetuoso, empático y humanizado, orientando al ciudadano en situación de vulnerabilidad con claridad y disposición de servicio. Las opciones A y C carecen de sensibilidad ética y profesional."
            }
        ]
    },
    {
        "id": "m5",
        "title": "Módulo 5: Cultura Tributaria y Obligaciones TACI",
        "navLabel": "💡 M.5: Cultura y Obligaciones",
        "homeLabel": "Módulo 5: Cultura Tributaria y Obligaciones TACI",
        "theoryId": "modulo-5",
        "cases": [
            {
                "id": "m5_c1",
                "text": "Caso: Un comerciante acude a la DIAN preguntando si puede acogerse voluntariamente a la Factura Electrónica de Venta a pesar de estar registrado como no responsable de IVA en el RUT.\n\nEnunciado: De conformidad con el artículo 616-1 del Estatuto Tributario y la Resolución 165 de 2023, la respuesta jurídica correcta es que:",
                "options": [
                    "La facturación electrónica está legalmente prohibida para sujetos no responsables de IVA, acarreando la cancelación inmediata de su inscripción tributaria.",
                    "Cualquier persona natural o jurídica puede optar voluntariamente por facturar electrónicamente, quedando sujeta a las condiciones y validaciones técnicas del sistema.",
                    "Solo se permite la facturación voluntaria si el comerciante constituye una póliza de cumplimiento bancario a favor de la DIAN por valor de 500 UVT."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 616-1 del E.T. y la Res. 165/2023 permiten que los no obligados adopten voluntariamente la factura electrónica, debiendo cumplir los requisitos técnicos del sistema. Las opciones A y C imponen prohibiciones o requisitos falsos."
            },
            {
                "id": "m5_c2",
                "text": "Caso: En el marco de la Ley 223 de 1995, la DIAN opera los Núcleos de Apoyo Contable y Fiscal (NAF) en alianza con diversas instituciones de educación superior del país.\n\nEnunciado: El objetivo primordial de los NAF en la estrategia de asistencia al ciudadano de la DIAN consiste en:",
                "options": [
                    "Sustituir a los funcionarios de carrera de los Puntos de Contacto para delegar en estudiantes la liquidación de sanciones y actos de fiscalización coactiva.",
                    "Brindar orientación tributaria gratuita a personas de baja renta y microempresarios, promoviendo la cultura fiscal y la formación práctica de los estudiantes.",
                    "Auditar externamente a las empresas multinacionales para verificar el pago oportuno de las retenciones en la fuente sobre transacciones transfronterizas."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Los NAF son espacios pedagógicos y de servicio gratuito dirigidos a personas de menores ingresos y microempresarios, apoyando la cultura contributiva. Las opciones A y C desfiguran la finalidad exclusivamente orientadora de los NAF."
            },
            {
                "id": "m5_c3",
                "text": "Caso: Un comerciante obligado a facturar electrónicamente sufre un corte imprevisto de energía eléctrica y caída total de internet en su establecimiento de comercio durante la jornada.\n\nEnunciado: Conforme a la Resolución 165 de 2023 sobre contingencias en la facturación electrónica, el contribuyente debe:",
                "options": [
                    "Suspender de inmediato la venta de bienes y cerrar las puertas del local comercial hasta que la empresa de servicios públicos restablezca el fluido eléctrico.",
                    "Expedir factura electrónica de venta por talonario o de papel (contingencia), debiendo transmitirla al sistema de la DIAN en un plazo no mayor a 48 horas.",
                    "Entregar a los clientes recibos informales manuscritos sin numeración, exonerándose de reportar las transacciones efectuadas durante el día de la falla."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Ante contingencias técnicas del facturador, se expide factura de talonario/papel autorizada y se transmite a la DIAN dentro de las 48 horas siguientes al restablecimiento (Res. 165/2023). Las opciones A y C lesionan el comercio o fomentan la evasión."
            },
            {
                "id": "m5_c4",
                "text": "Caso: Durante una visita de control formal, funcionarios de la DIAN comprueban que un restaurante obligado a facturar no entrega la factura electrónica a sus clientes en las compras.\n\nEnunciado: De conformidad con el artículo 657 del Estatuto Tributario, la sanción que legalmente corresponde imponer en este caso es:",
                "options": [
                    "El embargo preventivo y secuestro inmediato de todos los bienes muebles y cuentas de ahorro de los socios propietarios del restaurante visitado.",
                    "La sanción de clausura o cierre del establecimiento de comercio por el término de tres (3) días, mediante la imposición de los sellos oficiales de la DIAN.",
                    "Una amonestación pedagógica no vinculante que solo se convertirá en sanción económica si el contribuyente reincide en tres oportunidades en el mismo año."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 657 numeral 1 del E.T. sanciona la no expedición de factura con la clausura del establecimiento por 3 días mediante imposición de sellos. Las opciones A y C señalan medidas desproporcionadas o de falsa laxitud legal."
            },
            {
                "id": "m5_c5",
                "text": "Caso: Una ciudadana asalariada consulta a un Gestor I si tiene algún beneficio tributario personal al exigir factura electrónica de venta con su nombre y cédula en sus compras de bienes y servicios.\n\nEnunciado: De conformidad con el artículo 336 del Estatuto Tributario (modificado por la Ley 2277 de 2022), el beneficio legal consiste en:",
                "options": [
                    "La devolución en dinero en efectivo del cincuenta por ciento (50%) del valor del IVA pagado en todas las adquisiciones soportadas electrónicamente.",
                    "Deducir en su declaración de renta el uno por ciento (1%) del valor de las compras soportadas con factura electrónica de venta pagadas por medios electrónicos.",
                    "La exoneración total del pago del impuesto sobre la renta por un período de dos años consecutivos, independientemente del nivel de ingresos que perciba."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 336 numeral 5 del E.T. consagra una deducción del 1% del valor de las compras con factura electrónica pagadas con medios electrónicos (hasta 240 UVT). Las opciones A y C formulan incentivos inexistentes en el régimen de renta."
            },
            {
                "id": "m5_c6",
                "text": "Caso: Al analizar las conductas de los contribuyentes frente al cumplimiento tributario, el Gestor I debe diferenciar conceptualmente entre \"elusión fiscal\" y \"evasión tributaria\".\n\nEnunciado: Desde la perspectiva técnica y jurídica del derecho tributario colombiano, la elusión fiscal se caracteriza por:",
                "options": [
                    "La falsificación material de facturas electrónicas y la omisión deliberada de ingresos brutos en la declaración de renta para ocultar el patrimonio real.",
                    "El aprovechamiento abusivo o artificioso de vacíos normativos para evitar o reducir el pago de tributos sin violar directamente la literalidad de la ley.",
                    "El pago anticipado y oportuno de las obligaciones sustanciales para acceder a los descuentos legalmente consagrados en el Estatuto Tributario."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La elusión fiscal aprovecha vacíos legales o figuras artificiosas para reducir el impuesto (abuso tributario Art. 869 E.T.), mientras la evasión es la violación directa y punible de la ley (opción A). La opción C es simple cumplimiento legal."
            },
            {
                "id": "m5_c7",
                "text": "Caso: Un contribuyente recibe una \"Comunicación Persuasiva\" de la DIAN señalándole que se detectaron inconsistencias entre sus consignaciones bancarias y sus ingresos declarados.\n\nEnunciado: Conforme a la naturaleza de las acciones de cobro y facilitación de la DIAN, esta comunicación persuasiva:",
                "options": [
                    "Constituye un requerimiento especial formal que fija la posición definitiva del Estado y agota de manera automática la vía gubernativa previa.",
                    "Es una invitación preventiva para que el administrado revise su situación y corrija voluntariamente sus declaraciones antes de que se inicie un proceso formal.",
                    "Es un título ejecutivo que presta mérito para decretar el embargo de cuentas bancarias y remate de bienes sin necesidad de previa fiscalización."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La comunicación persuasiva no es un acto administrativo que determine tributos ni sancione; es un mecanismo preventivo que invita a la autocorrección voluntaria. Las opciones A y C confunden el oficio persuasivo con actos determinativos o ejecutivos."
            },
            {
                "id": "m5_c8",
                "text": "Caso: Una empresa adquiere materias primas a un artesano persona natural que no está obligado a expedir factura de venta ni documento equivalente por sus operaciones.\n\nEnunciado: Para que la empresa pueda soportar válidamente dicho costo o deducción en su declaración de renta (Resolución 165 de 2023), debe:",
                "options": [
                    "Exigirle al artesano que se inscriba como responsable de IVA y emita factura electrónica como condición previa al desembolso del pago comercial acordado.",
                    "Generar y transmitir electrónicamente a la DIAN el Documento Soporte en adquisiciones efectuadas a sujetos no obligados a expedir factura o documento equivalente.",
                    "Elaborar un recibo de caja interno en papel firmado por el contador de la empresa sin necesidad de reporte o validación en los sistemas de la DIAN."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Las compras a no obligados a facturar deben respaldarse mediante el Documento Soporte Electrónico transmitido a la DIAN para su procedencia fiscal (Art. 771-2 E.T. y Res. 165/2023). Las opciones A y C imponen cargas ilegales o desconocen el documento soporte."
            },
            {
                "id": "m5_c9",
                "text": "Caso: Un profesional independiente con ingresos brutos de 1.800 UVT analiza la conveniencia de acogerse al Régimen Simple de Tributación (RST) frente al régimen ordinario de renta.\n\nEnunciado: Entre los beneficios tributarios que otorga el RST a sus contribuyentes (artículo 911 del Estatuto Tributario) se destaca que:",
                "options": [
                    "Quedan plenamente exonerados del pago de cualquier tarifa de impuesto de industria y comercio (ICA) en todos los municipios y distritos del país.",
                    "A los contribuyentes del RST no se les practica retención en la fuente a título de renta ni están obligados a practicar retención, salvo pagos laborales.",
                    "Se les autoriza a no expedir factura electrónica ni llevar contabilidad mercantil, pudiendo fijar libremente sus ingresos sin control fiscal posterior."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. A los inscritos en el RST no se les practica retención en la fuente a título de renta ni ellos la practican, excepto en relaciones laborales (Art. 911 E.T.). Las opciones A y C contienen afirmaciones falsas sobre el ICA y la factura en el RST."
            },
            {
                "id": "m5_c10",
                "text": "Caso: La Subdirección de Asistencia al Ciudadano diseña campañas pedagógicas para promover la \"Cultura de la Contribución\" como un bien público esencial en la sociedad colombiana.\n\nEnunciado: Desde el marco axiológico del Estado Social de Derecho y el artículo 95 numeral 9 de la Constitución, la cultura contributiva busca:",
                "options": [
                    "Promover el temor a las sanciones pecuniarias y penas de privación de la libertad como único incentivo eficaz para recaudar los recursos presupuestales.",
                    "Fomentar la conciencia de que el pago justo y solidario de los tributos es indispensable para financiar el gasto social, la equidad y la paz en Colombia.",
                    "Lograr que los ciudadanos asuman el pago de tributos sin derecho a exigir transparencia o rendición de cuentas sobre el destino de los dineros públicos."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La cultura de la contribución concibe el cumplimiento fiscal como una expresión de civismo solidario indispensable para sostener los fines sociales del Estado (Art. 95 C.P.). Las opciones A y C contradicen los principios democráticos y pedagógicos."
            },
            {
                "id": "m5_c11",
                "text": "Caso: Una empresa comercializadora requiere utilizar sus facturas electrónicas de venta a crédito como título valor para negociarlas en operaciones de factoring comercial.\n\nEnunciado: De conformidad con la Resolución 085 de 2022 de la DIAN, para que la factura electrónica de venta constituya título valor negociable, se requiere:",
                "options": [
                    "Estampar una firma manuscrita notariada en el documento físico de representación gráfica impreso por la empresa proveedora de los bienes.",
                    "Registrar los eventos de acuse de recibo de la factura, recibo de las mercancías, aceptación expresa o tácita y su inscripción en el sistema RADIAN.",
                    "Obtener una autorización previa y por escrito de la Superintendencia Financiera de Colombia certificando la idoneidad crediticia de la transacción."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La circulación de la factura electrónica como título valor exige los eventos de acuse de recibo de factura y mercancía, aceptación y su registro en la plataforma RADIAN administrada por la DIAN. Las opciones A y C señalan trámites inexistentes."
            },
            {
                "id": "m5_c12",
                "text": "Caso: Un contribuyente persona natural presenta su declaración de renta dos meses después de la fecha límite establecida en el calendario tributario del Gobierno Nacional.\n\nEnunciado: Conforme al artículo 641 del Estatuto Tributario, la sanción por extemporaneidad aplicable antes de que la DIAN le notifique emplazamiento es de:",
                "options": [
                    "El medio por ciento (0.5%) del total de los ingresos brutos del contribuyente por cada día calendario transcurrido desde el vencimiento del plazo fijado.",
                    "El cinco por ciento (5%) del total del impuesto a cargo por cada mes o fracción de mes calendario de retraso, sin que exceda del ciento por ciento (100%) del impuesto.",
                    "Una tarifa fija de diez (10) UVT sin importar el monto del impuesto liquidado ni el número de meses o días de retraso en la presentación de la declaración."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 641 del E.T. determina una sanción del 5% del impuesto a cargo por mes o fracción de mes calendario de extemporaneidad sin superar el 100%. Las opciones A y C formulan tarifas o bases sancionatorias incompatibles con la norma."
            },
            {
                "id": "m5_c13",
                "text": "Caso: El Congreso establece que los alimentos de la canasta básica familiar y los medicamentos esenciales no causarán el Impuesto sobre las Ventas (IVA).\n\nEnunciado: La fundamentación constitucional que ampara esta decisión legislativa se sustenta primordialmente en el principio de:",
                "options": [
                    "Eficiencia administrativa, buscando simplificar los algoritmos del sistema Muisca al momento de liquidar los formularios bimestrales de IVA.",
                    "Progresividad y equidad tributaria (Art. 363 C.P.), evitando que las personas de menores ingresos soporten una carga fiscal regresiva en sus necesidades vitales.",
                    "Celeridad gubernativa, con el propósito de acelerar el crecimiento patrimonial de los conglomerados económicos que distribuyen alimentos al por mayor."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La exclusión de bienes básicos en el IVA materializa los principios de progresividad y equidad tributaria (Art. 363 C.P.), protegiendo el mínimo vital frente a impuestos indirectos regresivos. Las opciones A y C carecen de sustento constitucional."
            },
            {
                "id": "m5_c14",
                "text": "Caso: Una persona jurídica obligada a reportar información exógena tributaria no presenta los medios magnéticos requeridos por la DIAN dentro del plazo fijado en la resolución anual.\n\nEnunciado: De conformidad con el artículo 651 del Estatuto Tributario (modificado por la Ley 2277 de 2022), la consecuencia jurídica de esta omisión es:",
                "options": [
                    "La cancelación automática del RUT y la inhabilidad para celebrar contratos con el Estado por un término improrrogable de diez años consecutivos.",
                    "La imposición de una multa pecuniaria graduada según el valor de la información no suministrada, con un tope máximo legal fijado en 7.500 UVT.",
                    "Una orden judicial de arresto preventivo contra el representante legal de la empresa por obstrucción a la labor de fiscalización tributaria de la DIAN."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 651 del E.T. contempla una sanción pecuniaria proporcional para quien no suministre información exógena tributaria, con un límite de 7.500 UVT. Las opciones A y C señalan sanciones exorbitantes prohibidas por el ordenamiento."
            },
            {
                "id": "m5_c15",
                "text": "Caso: Una empresa clasificada como agente retenedor de IVA adquiere bienes gravados de un comerciante persona natural responsable del régimen común de IVA.\n\nEnunciado: En el mecanismo de recaudo anticipado de retención en la fuente a título de IVA (ReteIVA - Art. 437-1 E.T.), al agente retenedor le corresponde:",
                "options": [
                    "Cobrarle un tributo adicional al proveedor y exigirle que consigne el valor en efectivo en una cuenta fiduciaria del Ministerio de Comercio.",
                    "Retener y consignar a la DIAN el porcentaje legal fijado sobre el valor del IVA facturado (tarifa general del 15% de retención sobre el impuesto generado).",
                    "Exonerar del pago de IVA al comerciante expidiéndole un certificado de paz y salvo tributario que lo exima de declarar el impuesto en su seccional."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La retención en la fuente de IVA (Art. 437-1 E.T.) consiste en retener hasta el 15% del valor del impuesto generado en la operación para transferirlo a la DIAN como recaudo anticipado. Las opciones A y C desconocen el mecanismo de retención."
            }
        ]
    },
    {
        "id": "m6",
        "title": "Módulo 6: MIPG, Reserva Legal y Transparencia",
        "navLabel": "🔒 M.6: MIPG y Reserva",
        "homeLabel": "Módulo 6: MIPG, Reserva Legal y Transparencia",
        "theoryId": "modulo-6",
        "cases": [
            {
                "id": "m6_c1",
                "text": "Caso: Una periodista solicita en ventanilla que el Gestor I le imprima las declaraciones de renta y los ingresos brutos de tres candidatos presidenciales para una nota investigativa.\n\nEnunciado: De conformidad con el artículo 583 del Estatuto Tributario y la Ley 1712 de 2014 (Ley de Transparencia), al servidor público le corresponde:",
                "options": [
                    "Entregar de inmediato las declaraciones de renta invocando la primacía constitucional de la libertad de prensa y el derecho ciudadano a la información pública.",
                    "Negar la entrega de los documentos mediante respuesta motivada, invocando la reserva legal tributaria estricta que protege la intimidad económica de los contribuyentes.",
                    "Entregar únicamente la carátula de los formularios borrando con tinta los nombres de los declarantes pero conservando visibles las cifras de ingresos y patrimonio."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 583 del E.T. ampara las declaraciones tributarias con reserva legal estricta frente a particulares y medios de comunicación. La Ley 1712 de 2014 reconoce esta reserva como excepción legítima al acceso a la información (opciones A y C)."
            },
            {
                "id": "m6_c2",
                "text": "Caso: Un Juez Penal de la República libra una orden judicial motivada dentro de un proceso por lavado de activos, requiriendo copia de las declaraciones tributarias de un imputado.\n\nEnunciado: De conformidad con las excepciones legales a la reserva tributaria (artículo 583 del Estatuto Tributario), la DIAN debe:",
                "options": [
                    "Negar la solicitud al funcionario judicial argumentando que la reserva tributaria es de carácter absoluto y no admite ninguna excepción procesal o penal.",
                    "Remitir de forma expedita y bajo estricta cadena de custodia la información solicitada al despacho judicial requirente para que obre como prueba procesal.",
                    "Exigir que la orden judicial sea ratificada previamente por el Ministro de Hacienda y Crédito Público mediante resolución ejecutiva de autorización."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 583 del Estatuto Tributario contempla como excepción legal la entrega de información reservada cuando medie orden de autoridad judicial competente. Las opciones A y C obstruyen indebidamente la administración de justicia."
            },
            {
                "id": "m6_c3",
                "text": "Caso: El cónyuge de una comerciante acude al Punto de Contacto con el registro civil de matrimonio exigiendo copia de los extractos y declaraciones de su esposa para un trámite de divorcio.\n\nEnunciado: Conforme al principio de reserva tributaria y el régimen de protección de datos personales (Habeas Data), el Gestor I debe:",
                "options": [
                    "Facilitar la información requerida toda vez que la sociedad conyugal vigente genera derechos de copropiedad universal sobre todos los antecedentes tributarios.",
                    "Negar la entrega de la información explicando que la reserva tributaria protege al titular directo y que el vínculo matrimonial no confiere representación sin poder especial.",
                    "Entregarle copia digital de los formularios condicionándolo a que suscriba un pagaré en garantía de no divulgar los datos a terceros ajenos al matrimonio."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La reserva tributaria protege la intimidad del contribuyente. El vínculo matrimonial no otorga facultades para acceder a datos reservados sin poder especial formal (Art. 583 E.T.). Las opciones A y C violan el régimen de protección de datos."
            },
            {
                "id": "m6_c4",
                "text": "Caso: En el Modelo Integrado de Planeación y Gestión (MIPG - Decreto 1499 de 2017), se articulan siete dimensiones operativas para garantizar la eficacia institucional de la DIAN.\n\nEnunciado: La dimensión que se considera el corazón y motor del MIPG, al dinamizar el desarrollo y compromiso de los servidores públicos en la entidad, es:",
                "options": [
                    "La dimensión de Gestión de Recursos Financieros e Infraestructura Física, orientada a la adquisición de herramientas de cómputo y mobiliario para las sedes.",
                    "La dimensión del Talento Humano, concebida como el eje nuclear del modelo al reconocer a los servidores como el activo más valioso de la administración.",
                    "La dimensión de Control Disciplinario Interno, enfocada en la investigación sumaria y sanción coercitiva de los funcionarios operativos de la seccional."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El Decreto 1499 de 2017 define el Talento Humano como la dimensión nuclear del MIPG, ya que son los servidores públicos quienes dinamizan las demás dimensiones. Las opciones A y C señalan componentes secundarios o inexistentes como eje."
            },
            {
                "id": "m6_c5",
                "text": "Caso: Un servidor de la DIAN revela en un almuerzo con allegados datos confidenciales sobre los ingresos reales y bienes no declarados de un reconocido comerciante de la ciudad.\n\nEnunciado: De conformidad con el artículo 584 del Estatuto Tributario y el Código General Disciplinario, la sanción aplicable a esta conducta es:",
                "options": [
                    "Una amonestación verbal privada que no dejará constancia en la hoja de vida, en consideración a que la revelación ocurrió fuera de las instalaciones físicas de la entidad.",
                    "La destitución inmediata del cargo por incurrir en falta gravísima disciplinaria y la correspondiente compulsa de copias a la Fiscalía por violación de reserva.",
                    "La suspensión provisional del cargo por diez días con derecho al goce del cincuenta por ciento del salario mensual básico mientras se adelanta la investigación."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 584 del E.T. sanciona con destitución inmediata al servidor público que viole la reserva legal tributaria, tipificándose falta gravísima disciplinaria (Ley 1952 de 2019). Las opciones A y C son inadmisibles ante la gravedad de la falta."
            },
            {
                "id": "m6_c6",
                "text": "Caso: En el esquema de las Tres Líneas de Defensa del MIPG adoptado por la DIAN, se define la estructura de responsabilidades para la gestión y mitigación de riesgos institucionales.\n\nEnunciado: La \"Tercera Línea de Defensa\" se encuentra representada en la DIAN por:",
                "options": [
                    "Los funcionarios de atención al ciudadano que aplican los controles operativos cotidianos en las ventanillas de los Puntos de Contacto de las seccionales.",
                    "La Oficina de Control Interno, encargada de evaluar de forma independiente, posterior y objetiva la eficacia de los controles y del sistema de gestión institucional.",
                    "Los contribuyentes y veedurías ciudadanas que interponen quejas formales en el buzón virtual de la entidad contra las actuaciones administrativas."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Tercera Línea del MIPG está representada por la Oficina de Control Interno, encargada de evaluar de forma independiente la eficacia de los controles institucionales. La Primera Línea son los operativos (opción A) y la opción C es control social."
            },
            {
                "id": "m6_c7",
                "text": "Caso: Bajo el principio de máxima publicidad consagrado en la Ley 1712 de 2014 (Ley de Transparencia), un ciudadano solicita copia de los manuales de atención y guías de servicio de la DIAN.\n\nEnunciado: De conformidad con el régimen legal de acceso a la información pública, la administración tributaria debe:",
                "options": [
                    "Rechazar la solicitud argumentando que todos los documentos institucionales internos de la DIAN son de carácter estrictamente clasificado y de reserva estatal.",
                    "Suministrar la información de manera inmediata y gratuita, al tratarse de información pública clasificada como información pública obligatoria sin reserva.",
                    "Exigir que el ciudadano demuestre un interés jurídico legítimo y directo en un trámite administrativo en curso como requisito para acceder a las guías de servicio."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Ley 1712 de 2014 ordena la publicidad de las guías de servicio, reglamentos y cifras agregadas de recaudo, manteniendo bajo reserva los datos de particulares. Las opciones A y C niegan ilegalmente la información pública accesible a todos."
            },
            {
                "id": "m6_c8",
                "text": "Caso: La Ley General de Archivos (Ley 594 de 2000) y las Tablas de Retención Documental (TRD) de la DIAN regulan la conservación y custodia de los expedientes tributarios y aduaneros.\n\nEnunciado: La razón primordial que obliga a conservar los expedientes en los archivos de gestión y centrales conforme a las TRD radica en:",
                "options": [
                    "Evitar el costo del reciclaje de papel y justificar el mantenimiento del personal de archivo en las sedes seccionales de la entidad a nivel nacional.",
                    "Preservar el patrimonio documental y el valor probatorio, histórico y técnico de los actos de la administración que respaldan las decisiones del Estado.",
                    "Permitir que cualquier funcionario de la entidad pueda destruir discrecionalmente los documentos que considere obsoletos al término de un año fiscal."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Ley 594 de 2000 obliga a organizar y custodiar los expedientes públicos bajo estrictas TRD que preserven la memoria institucional y su valor probatorio. Las opciones A y C desconocen el marco legal del archivo documental del Estado."
            },
            {
                "id": "m6_c9",
                "text": "Caso: Un Gestor I recibe un requerimiento de la Oficina de Control Interno de la DIAN solicitando acceso inmediato a las bitácoras de atención de su ventanilla en una auditoría de gestión.\n\nEnunciado: De conformidad con el deber de colaboración armónica institucional y el marco regulatorio del control interno (Ley 87 de 1993):",
                "options": [
                    "El funcionario debe negarse a entregar la información alegando que los auditores internos pertenecen a una dependencia distinta que no es su jefe inmediato.",
                    "El servidor tiene el deber legal de prestar colaboración oportuna y suministrar los soportes requeridos para permitir la evaluación objetiva de los controles del área.",
                    "Solo debe entregar los documentos si la Oficina de Control Interno cuenta con una orden judicial previa expedida por un magistrado del Consejo de Estado."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Los servidores públicos tienen el deber legal de colaborar con las auditorías de Control Interno para evaluar y perfeccionar los controles de la Primera Línea. Las opciones A y C entorpecen la vigilancia institucional."
            },
            {
                "id": "m6_c10",
                "text": "Caso: Un ciudadano exige a la DIAN mediante acción de Hábeas Data rectificar su dirección en la base de datos central, demostrando que fue víctima de un error de digitación por parte de un funcionario.\n\nEnunciado: Conforme a la Ley Estatutaria 1266 de 2008 y la Ley 1581 de 2012 sobre protección de datos personales, a la DIAN le corresponde:",
                "options": [
                    "Negar la rectificación indicando que las bases de datos de la administración tributaria son inmodificables una vez registradas en el repositorio central de la entidad.",
                    "Proceder a la corrección y actualización oportuna y gratuita de la información errónea en el RUT, garantizando la veracidad y calidad de los datos del titular.",
                    "Cobrarle al contribuyente los costos administrativos del reprocesamiento informático del sistema como presupuesto para actualizar la dirección física."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El hábeas data faculta al titular a rectificar sus datos; en la DIAN, este derecho se ejerce de forma directa a través de la actualización formal del RUT. Las opciones A y C vulneran el derecho fundamental al Hábeas Data."
            },
            {
                "id": "m6_c11",
                "text": "Caso: En la gestión diaria del Punto de Contacto, un Gestor I advierte un intento sistemático de inscripción en el RUT utilizando contratos de arrendamiento falsificados por una red de tramitadores.\n\nEnunciado: Conforme a la Política de Gestión del Riesgo del MIPG y el deber de denuncia (Art. 67 del Código de Procedimiento Penal), el servidor debe:",
                "options": [
                    "Ocultar el hecho para evitar que la seccional pierda los indicadores de cumplimiento en las metas de registro de nuevos contribuyentes en la ciudad.",
                    "Reportar formalmente la alerta de riesgo en el sistema institucional y poner en conocimiento de la División Jurídica y la Fiscalía las presuntas falsedades detectadas.",
                    "Cobrarle una tarifa extraordinaria a los tramitadores para compensar el riesgo operativo en que incurre la seccional al tramitar formularios fraudulentos."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Política de Riesgo y el Código Penal obligan al servidor público a denunciar los delitos de los que tenga conocimiento en el ejercicio del cargo. Las opciones A y C constituyen encubrimiento o delitos de corrupción graves."
            },
            {
                "id": "m6_c12",
                "text": "Caso: Un compañero de ventanilla que olvidó su clave de acceso al sistema Muisca le pide a un Gestor I que le preste su usuario y contraseña personal para atender el turno de un usuario.\n\nEnunciado: De conformidad con las políticas de Seguridad de la Información del MIPG y el manual de contraseñas de la DIAN, el funcionario debe:",
                "options": [
                    "Facilitar sus credenciales de manera inmediata en cumplimiento del principio de solidaridad laboral y compañerismo en el servicio público.",
                    "Negarse categóricamente a suministrar sus credenciales personales, indicándole a su compañero que debe gestionar el desbloqueo formal por la mesa de ayuda.",
                    "Prestar la clave pero supervisar personalmente que su compañero no ingrese a expedientes tributarios que registren saldos a favor multimillonarios."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. Las credenciales de acceso a los sistemas de la DIAN son personales e intransferibles; prestarlas viola la seguridad informática y acarrea responsabilidad disciplinaria. Las opciones A y C vulneran los protocolos de seguridad."
            },
            {
                "id": "m6_c13",
                "text": "Caso: Un ciudadano solicita mediante la web conocer el plan anual de compras, la escala salarial de los directivos y las cifras consolidadas de recaudo mensual de la Dirección Seccional.\n\nEnunciado: Conforme a la Ley 1712 de 2014 sobre transparencia activa y acceso a la información pública, estos documentos corresponden a:",
                "options": [
                    "Secretos de Estado amparados con reserva de seguridad nacional que solo pueden ser conocidos por el Presidente y los comandantes de las Fuerzas Militares.",
                    "Información pública obligatoria que debe estar publicada de manera permanente y actualizada en la sección de Transparencia del portal web de la DIAN.",
                    "Información comercial clasificada que solo puede divulgarse previo pago de una tarifa arancelaria fijada por el Ministerio de Tecnologías de la Información."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Ley 1712 de 2014 clasifica la contratación, presupuestos, escalas salariales y cifras agregadas como información pública de divulgación activa obligatoria en la web. Las opciones A y C son barreras contrarias a la transparencia."
            },
            {
                "id": "m6_c14",
                "text": "Caso: Un expediente físico que contiene la liquidación oficial de un contribuyente se extravía durante el traslado entre la oficina de correspondencia y el archivo de gestión seccional.\n\nEnunciado: De conformidad con el artículo 126 del Código General del Proceso y la Ley 594 de 2000, el procedimiento administrativo obligatorio a seguir es:",
                "options": [
                    "Declarar la caducidad definitiva del cobro tributario y ordenar el archivo de las investigaciones por imposibilidad material de adelantar el trámite.",
                    "Iniciar de manera oficiosa e inmediata el trámite de reconstrucción de expediente con base en los antecedentes y copias digitales alojados en el Muisca.",
                    "Exigir que el contribuyente investigado aporte nuevamente la totalidad de sus libros de contabilidad originales para rehacer el expediente perdido."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La pérdida de expedientes impone el deber oficioso de reconstrucción inmediata utilizando las copias del sistema informático y antecedentes existentes. Las opciones A y C renuncian a la acción fiscal o trasladan la carga indebidamente."
            },
            {
                "id": "m6_c15",
                "text": "Caso: El Estado colombiano es condenado judicialmente al pago de una millonaria indemnización tras comprobarse que un funcionario de la DIAN vendió información reservada a un competidor comercial.\n\nEnunciado: De conformidad con el artículo 90 de la Constitución Política sobre responsabilidad patrimonial del Estado, la entidad pública condenada:",
                "options": [
                    "Debe asumir la pérdida patrimonial con cargo al presupuesto nacional sin poder ejercer ninguna acción legal de cobro contra el servidor responsable.",
                    "Tiene el deber constitucional y legal de iniciar la acción de repetición contra el funcionario para recuperar el valor pagado por su conducta dolosa o gravemente culposa.",
                    "Debe solicitar a la Corte Constitucional la condonación de la indemnización argumentando la falta de disponibilidad de recursos en las arcas del tesoro nacional."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El artículo 90 de la C.P. impone al Estado el deber de repetir contra el servidor que con dolo o culpa grave haya causado una condena judicial en contra de la entidad. Las opciones A y C plantean la impunidad fiscal contraria a la Carta."
            }
        ]
    },
    {
        "id": "m7",
        "title": "Módulo 7: Competencias Res. 065 de 2024",
        "navLabel": "⭐ M.7: Competencias 065",
        "homeLabel": "Módulo 7: Competencias Comportamentales Res. 065 de 2024",
        "theoryId": "modulo-7",
        "cases": [
            {
                "id": "m7_c1",
                "text": "Caso: Faltando diez minutos para concluir la jornada de atención presencial en el Punto de Contacto, ingresa un ciudadano de la tercera edad con un turno prioritario para tramitar el RUT.\n\nEnunciado: Demostrando la competencia de \"Orientación al Usuario y al Ciudadano\" (Nivel Profesional - Res. 065 de 2024), el Gestor I debe:",
                "options": [
                    "Indicarle con firmeza que la jornada laboral está a punto de culminar y que debe regresar a primera hora del día siguiente para ser atendido sin afán.",
                    "Recibir al ciudadano con disposición, respeto y amabilidad, adelantando el trámite de forma ágil y completa para garantizar la solución efectiva de su necesidad.",
                    "Atenderlo rápidamente pero omitir la verificación de los soportes y la entrega de la copia formal del RUT con el fin de salir a la hora exacta de su turno."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Resolución 065 de 2024 define en Orientación al Usuario la conducta de atender con disposición, respeto y empatía, brindando soluciones oportunas sin importar la proximidad del cierre. Las opciones A y C incumplen el estándar de servicio."
            },
            {
                "id": "m7_c2",
                "text": "Caso: Durante una contingencia por caída temporal de los servidores del Muisca, varios usuarios en la sala de espera manifiestan exasperación y desconfianza en el servicio.\n\nEnunciado: Demostrando la competencia de \"Comunicación Efectiva\" (Nivel Profesional - Res. 065 de 2024), al Gestor I le corresponde:",
                "options": [
                    "Permanecer en silencio en su puesto de trabajo con la mirada fija en el monitor a la espera de que los ingenieros de sistemas informáticos resuelvan la falla.",
                    "Dirigirse a los usuarios con serenidad y lenguaje claro, explicando de manera transparente la contingencia técnica, los tiempos estimados y las medidas de contingencia adoptadas.",
                    "Manifestar a los ciudadanos presentes que las fallas de la DIAN son crónicas y que la administración central no invierte recursos suficientes en plataformas tecnológicas."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. En Comunicación Efectiva (Res. 065/2024), el servidor transmite información clara, veraz y oportuna, disipando barreras y generando confianza en momentos de crisis. Las opciones A y C bloquean la comunicación o denigran de la entidad."
            },
            {
                "id": "m7_c3",
                "text": "Caso: Un funcionario nuevo con nombramiento en período de prueba se incorpora al equipo de asistencia en el Punto de Contacto y muestra dudas en el manejo del módulo de RUT.\n\nEnunciado: Demostrando la competencia de \"Trabajo en Equipo\" (Nivel Profesional - Res. 065 de 2024), el Gestor I con mayor experiencia debe:",
                "options": [
                    "Dejar que el nuevo servidor resuelva solo sus dudas operativas, en consideración a que la superación del período de prueba es una responsabilidad exclusivamente individual.",
                    "Mostrar disposición para cooperar, compartir conocimientos prácticos y orientarlo con paciencia en los procedimientos para fortalecer el desempeño del equipo seccional.",
                    "Reportar de inmediato la falta de pericia del nuevo empleado al superior jerárquico para que quede consignada en su primera evaluación parcial de desempeño."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El Trabajo en Equipo (Res. 065/2024) exige colaborar, compartir saberes y cuidar el clima laboral en procura del logro de metas colectivas. Las opciones A y C denotan egoísmo profesional y hostilidad laboral."
            },
            {
                "id": "m7_c4",
                "text": "Caso: La DIAN expide una nueva resolución que modifica integralmente el trámite de retiro de responsabilidades tributarias en el RUT mediante un nuevo procedimiento digital.\n\nEnunciado: Demostrando la competencia de \"Adaptabilidad\" (Nivel Profesional - Res. 065 de 2024), el Gestor I debe:",
                "options": [
                    "Manifestar inconformidad ante el cambio y continuar aplicando el procedimiento anterior argumentando que el nuevo sistema digital es dispendioso y poco intuitivo.",
                    "Asumir una actitud receptiva frente al cambio, estudiar oportunamente la normatividad y apropiar el uso de la nueva herramienta digital para aplicarla en su trabajo.",
                    "Delegar temporalmente en los demás compañeros del grupo la atención de esos trámites específicos mientras el área central decide si la resolución se mantendrá vigente."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Adaptabilidad (Res. 065/2024) implica asimilar positivamente los cambios normativos y tecnológicos, aprendiendo con rapidez para mejorar la gestión. Las opciones A y C evidencian resistencia al cambio y negligencia."
            },
            {
                "id": "m7_c5",
                "text": "Caso: Al finalizar el trimestre, la Subdirección asigna una meta exigente de atención y depuración de radicados acumulados en el Punto de Contacto de la seccional.\n\nEnunciado: Demostrando la competencia de \"Orientación al Logro\" (Nivel Profesional - Res. 065 de 2024), el Gestor I debe:",
                "options": [
                    "Rechazar la meta asignada manifestando al superior que no asumirá más trabajo del habitual sin la expedición previa de una resolución de horas extras remuneradas.",
                    "Organizar su jornada laboral con un plan de trabajo riguroso, monitorear sus avances diarios y esforzarse por superar los estándares con calidad y eficacia.",
                    "Evacuar los radicados de manera acelerada aprobando las solicitudes sin verificar la autenticidad de los soportes con tal de reportar cifras altas en el tablero."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Orientación al Logro (Res. 065/2024) exige planificar, trabajar con perseverancia y orientar las acciones a la superación de metas con alta calidad. Las opciones A y C representan desinterés o sacrificio inaceptable del rigor técnico."
            },
            {
                "id": "m7_c6",
                "text": "Caso: Durante la verificación de una solicitud de actualización del RUT, el Gestor I advierte que el peticionario es un amigo de infancia que le pide omitir un requisito reglamentario menor.\n\nEnunciado: Demostrando la competencia de \"Comportamiento Ético\" (Nivel Profesional - Res. 065 de 2024), el servidor debe:",
                "options": [
                    "Acceder a la solicitud del amigo en virtud del principio de confianza legítima, considerando que la omisión de un documento formal no genera un perjuicio económico al Estado.",
                    "Actuar con imparcialidad e integridad bajo el Código de Ética de la DIAN, explicándole con amabilidad y firmeza que debe cumplir la totalidad de los requisitos legales exigidos.",
                    "Recomendarle a su amigo que regrese en el turno de la tarde y busque la ventanilla de otro funcionario que tenga un criterio de atención más flexible."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El Comportamiento Ético (Res. 065/2024) exige coherencia, imparcialidad y rectitud bajo el Código de Integridad, tratando a todos por igual sin favoritismos. Las opciones A y C son conductas contrarias a la ética pública."
            },
            {
                "id": "m7_c7",
                "text": "Caso: En el Punto de Contacto se presentan fallas recurrentes en el agendamiento presencial de citas, provocando congestiones imprevistas en la recepción de la sede.\n\nEnunciado: Demostrando la competencia de \"Iniciativa\" (Nivel Profesional - Res. 065 de 2024), al Gestor I le corresponde:",
                "options": [
                    "Limitarse a atender exclusivamente los turnos que logren ingresar a su ventanilla, sin proponer ninguna acción frente al desorden que se observa en la sala de espera.",
                    "Proponer de manera autónoma y constructiva a su coordinador un plan operativo de contingencia con triaje de orientación rápida en la entrada para descongestionar la sede.",
                    "Publicar en redes sociales quejas sobre la mala planeación de la seccional para que la opinión pública presione al Director General en la solución de las fallas."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Iniciativa (Res. 065/2024) consiste en actuar proactivamente, diseñando soluciones prácticas y ágiles ante situaciones imprevistas para mejorar el servicio. Las opciones A y C muestran pasividad o deslealtad institucional."
            },
            {
                "id": "m7_c8",
                "text": "Caso: El Gestor I nota que muchos ciudadanos adultos mayores no logran descargar la copia de su RUT desde los kioscos de autogestión por dificultades de lectura digital.\n\nEnunciado: Demostrando la competencia de \"Innovación\" (Nivel Profesional - Res. 065 de 2024), el funcionario debe:",
                "options": [
                    "Proponer que se eliminen los kioscos de autogestión de la seccional y se regrese a la entrega exclusiva de formularios de papel litográfico impreso.",
                    "Diseñar e implementar una guía didáctica ilustrada paso a paso con letras grandes y colores intuitivos para facilitar la autogestión de los adultos mayores en sala.",
                    "Recomendar a la vigilancia que impida el acceso a la zona de kioscos de cualquier persona que no demuestre competencias en el manejo de computadores."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Innovación (Res. 065/2024) consiste en crear soluciones pertinentes y creativas que resuelvan problemas y agreguen valor a los usuarios. Las opciones A y C representan retroceso o exclusión arbitraria."
            },
            {
                "id": "m7_c9",
                "text": "Caso: En una auditoría de calidad se identifican inconsistencias en varios trámites de suspensión del RUT por falta de uniformidad en los criterios de los funcionarios de ventanilla.\n\nEnunciado: Demostrando la competencia de \"Solución de Problemas\" (Nivel Profesional - Res. 065 de 2024), el Gestor I debe:",
                "options": [
                    "Atribuir la responsabilidad de las fallas a los funcionarios de la jornada vespertina, deslindándose de cualquier compromiso en la corrección de los procesos.",
                    "Analizar las causas del problema con base en hechos, datos y normatividad vigente, participando en la estandarización técnica de un manual unificado para el área.",
                    "Sugerir que se suspendan todas las revisiones de auditoría interna hasta que la Dirección Seccional designe un asesor externo que decida cada caso."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Solución de Problemas (Res. 065/2024) exige sustentar las decisiones en hechos, normatividad y datos, atacando las causas para asegurar el control de calidad. Las opciones A y C evaden la responsabilidad técnica."
            },
            {
                "id": "m7_c10",
                "text": "Caso: Un Gestor I desempeña sus funciones en la modalidad de teletrabajo o esquema híbrido en el subproceso de Asistencia al Usuario de la Dirección Seccional.\n\nEnunciado: Conforme a la competencia de \"Autogestión del Trabajo\" (Nivel Profesional - Capítulo V Res. 065 de 2024), el servidor debe:",
                "options": [
                    "Desconectarse de los canales de comunicación institucional y atender las solicitudes únicamente cuando su disponibilidad personal se lo permita.",
                    "Administrar sus tiempos con motivación, autonomía y estricto cumplimiento de metas, respondiendo con inmediatez y preservando la confidencialidad de la información tributaria.",
                    "Compartir sus claves institucionales con familiares en el hogar para que le ayuden a evacuar con mayor rapidez los radicados digitales asignados en la semana."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La Autogestión del Trabajo (Res. 065/2024) implica autonomía, responsabilidad en metas, comunicación oportuna y estricta seguridad de la información. Las opciones A y C representan faltas disciplinarias y abandono de funciones."
            },
            {
                "id": "m7_c11",
                "text": "Caso: En una reunión de grupo se genera un desacuerdo entre dos compañeros sobre la interpretación de un decreto reglamentario sobre retención en la fuente.\n\nEnunciado: Aplicando la competencia de \"Liderazgo de Servicio y Clima Laboral\" (Res. 065 de 2024), el Gestor I debe:",
                "options": [
                    "Tomar partido de manera agresiva por uno de los compañeros, desacreditando públicamente los conocimientos técnicos del otro funcionario ante el coordinador.",
                    "Promover una discusión constructiva y serena, invitando a contrastar el texto legal de la norma y los conceptos oficiales de la DIAN para llegar a un consenso técnico.",
                    "Abandonar la sala de reuniones manifestando que los desacuerdos entre colegas no le incumben mientras sus propias metas laborales individuales estén al día."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El liderazgo y trabajo armónico impulsan el consenso técnico constructivo apoyado en la normatividad y el respeto mutuo (Res. 065/2024). Las opciones A y C destruyen el clima de trabajo o muestran indolencia."
            },
            {
                "id": "m7_c12",
                "text": "Caso: Un contribuyente se niega a firmar el acuse de recibo de una orientación en ventanilla y acusa al funcionario de incompetencia profesional sin fundamento objetivo.\n\nEnunciado: Conforme a la competencia de \"Negociación y Manejo de Conflictos\" (Res. 065 de 2024), el servidor público debe:",
                "options": [
                    "Romper el formulario del trámite frente al contribuyente y negarle cualquier otra atención en el Punto de Contacto de la seccional.",
                    "Mantener el control emocional, explicarle con respeto y firmeza la validez del trámite realizado y dejar una constancia escrita del hecho suscrita por un testigo del área.",
                    "Enfrascarse en una discusión verbal con el usuario para defender su honor profesional ante los demás compañeros y ciudadanos presentes en sala."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. En el manejo de conflictos (Res. 065/2024) prima la serenidad, la firmeza profesional y el aseguramiento documental legal ante conductas conflictivas. Las opciones A y C violan los deberes del servicio público."
            },
            {
                "id": "m7_c13",
                "text": "Caso: En época de vencimiento de declaraciones de renta, el Punto de Contacto atiende a más de 500 personas diarias, generando un ambiente de alta tensión y fatiga en el personal.\n\nEnunciado: Demostrando la competencia de \"Resiliencia y Control Emocional\" (Res. 065 de 2024), el Gestor I debe:",
                "options": [
                    "Manifestar su frustración quejándose continuamente ante los usuarios para que estos comprendan el sacrificio que hacen los funcionarios públicos al atenderlos.",
                    "Gestionar la presión con serenidad, aplicar pausas activas programadas y mantener un trato cortés, empático y de alta calidad técnica con cada ciudadano que atiende.",
                    "Disminuir deliberadamente el ritmo de atención en la ventanilla para forzar a la coordinación seccional a contratar personal de apoyo de forma inmediata."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. La resiliencia y el autocontrol permiten gestionar la presión laboral manteniendo estándares de excelencia y trato respetuoso (Res. 065/2024). Las opciones A y C son conductas perjudiciales para la atención al público."
            },
            {
                "id": "m7_c14",
                "text": "Caso: Al revisar la documentación aportada para registrar una nueva empresa, el Gestor I nota que el certificado de existencia de Cámara de Comercio tiene sellos borrosos e indicios de alteración.\n\nEnunciado: Demostrando la competencia de \"Rigor Técnico y Minuciosidad\" (Res. 065 de 2024), el servidor debe:",
                "options": [
                    "Ignorar los sellos borrosos y aprobar el trámite para no afectar los tiempos promedio de espera de la ventanilla ni generar molestias al usuario en sala.",
                    "Verificar minuciosamente la autenticidad del documento mediante consulta directa en el Registro Único Empresarial y Social (RUES) antes de formalizar la inscripción en el RUT.",
                    "Rechazar el trámite de plano sin realizar ninguna verificación informática previa y ordenar que el usuario sea retenido en la portería de la sede seccional."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El rigor técnico exige contrastar y validar la autenticidad de los soportes utilizando las herramientas interoperables del Estado (RUES) para prevenir fraudes. La opción A es negligente y la opción C es una vía de hecho desproporcionada."
            },
            {
                "id": "m7_c15",
                "text": "Caso: Un Gestor I es consultado por un usuario sobre cómo evadir legalmente el pago de una sanción tributaria en firme mediante maniobras de ocultamiento de bienes.\n\nEnunciado: Conforme a la competencia de \"Compromiso Institucional y Ética Pública\" (Res. 065 de 2024), el servidor debe:",
                "options": [
                    "Brindarle la asesoría solicitada a título personal y confidencial fuera del Punto de Contacto, cobrándole honorarios profesionales privados como contador.",
                    "Recordarle enfáticamente que el rol de los servidores de la DIAN es velar por el cumplimiento de la ley y el recaudo ético, rechazando cualquier maniobra de evasión.",
                    "Hacerse el desentendido y derivar al ciudadano a la ventanilla de un compañero recién posesionado para que este asuma el manejo de la conversación irregular."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El compromiso institucional y la ética pública exigen actuar como guardianes de la legalidad y el recaudo público, rechazando cualquier forma de evasión o fraude fiscal. Las opciones A y C son conductas corruptas o evasivas."
            }
        ]
    }
];

    function buildQuestionBank() {
        return MODULE_DEFINITIONS.map(({ cases, ...meta }) => {
            const questions = cases.map((baseCase, i) => {
                const caseNum = i + 1;
                return {
                    id: baseCase.id || `${meta.id}_q${caseNum}`,
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

    PM.MODULE_DEFINITIONS = MODULE_DEFINITIONS;
    PM.buildQuestionBank = buildQuestionBank;
    PM.QUESTION_BANK = QUESTION_BANK;
})((window.PrepMaster = window.PrepMaster || {}));
