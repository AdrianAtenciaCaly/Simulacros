(function (PM) {
    'use strict';

    /**
     * BANCO DE PREGUNTAS DE JUICIO SITUACIONAL (CNSC / AREANDINA — DIAN 2676)
     * Convocatoria: Proceso de Selección DIAN 2676 | Operador: FUAA Areandina
     * Empleo: Gestor I (Código 301, Grado 01) — OPEC: 198476
     * 257 casos tipo examen (Caso + Enunciado + 3 opciones A/B/C), con nivel de dificultad progresivo y casos integrados: 186 funcionales (m1-m6, 70% eliminatorio) + 71 comportamentales/integridad (m7, Res. 065/2024 y Código de Integridad DIAN). El simulacro final usa 150F + 25C + 25I en bloques identificados, sin repetir preguntas; el banco ampliado permite práctica avanzada del puesto Gestor I (CC-AU-3008).
     * Fuentes de referencia: Diccionario de Competencias Comportamentales (Res. 065/2024) y
     * Guía de Orientación al Aspirante DIAN 2676 (incorporada en teoría; PDF guía imagen-base).
     */
    const MODULE_DEFINITIONS = [
    {
        "id": "m1",
        "examArea": "funcional",
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
            },
            {
                "id": "m1_c16",
                "text": "Caso: Un Gestor I advierte que una orientación informal difundida por un compañero en el Punto de Contacto contradice un concepto vigente de la Subdirección de Normativa y Doctrina de la DIAN sobre actualización del RUT.\n\nEnunciado: Conforme al principio de legalidad (Art. 6 y 209 C.P.) y al deber funcional de observancia de la doctrina institucional, el Gestor I debe:",
                "options": [
                    "Mantener la orientación del compañero para no generar confusión entre los usuarios, aclarando que cada funcionario interpreta los conceptos según la complejidad del caso atendido.",
                    "Corregir la información con sustento en la norma y el concepto vigente, informando al usuario de manera clara y oportuna, y comunicar la inconsistencia por el canal interno correspondiente.",
                    "Evitar intervenir en la atención de otro servidor, limitándose a registrar la situación en su informe mensual de actividades para que sea evaluada en la auditoría de gestión."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el servidor debe actuar conforme a la Constitución, la ley y la doctrina institucional, garantizando información veraz al ciudadano y reportando inconsistencias por los canales internos. A afecta la legalidad y C omite el deber inmediato de corrección y protección del usuario."
            },
            {
                "id": "m1_c17",
                "text": "Caso: Durante una jornada de alta afluencia, el sistema Muisca presenta intermitencia y un usuario exige que el Gestor I le expida manualmente un certificado del RUT sin validación en la base oficial.\n\nEnunciado: Frente a la solicitud y de acuerdo con los principios de eficacia, legalidad y responsabilidad administrativa, el Gestor I debe:",
                "options": [
                    "Expedir un certificado provisional firmado en físico para atender la urgencia del ciudadano, comprometiéndose a registrar la operación cuando el sistema se normalice.",
                    "Informar con transparencia la contingencia tecnológica, abstenerse de emitir certificaciones sin soporte oficial y orientar al usuario sobre los canales alternos y el momento para retomar el trámite.",
                    "Suspender toda la atención en ventanilla hasta el restablecimiento total del sistema, sin ofrecer alternativas ni registrar las solicitudes recibidas durante la falla."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: no se pueden expedir actos o certificaciones sin respaldo en la información oficial; el servidor debe informar con claridad, aplicar protocolos de contingencia y orientar alternativas. A genera riesgo jurídico y C vulnera el deber de servicio."
            },
            {
                "id": "m1_c18",
                "text": "Caso: Un Gestor I recibe una instrucción escrita de su coordinador para priorizar la validación de expedientes de un contribuyente específico, omitiendo el orden de turnos establecido en el Punto de Contacto.\n\nEnunciado: Conforme al principio de igualdad (Art. 13 C.P.), moralidad administrativa y deberes del servidor público, la actuación ajustada a derecho es:",
                "options": [
                    "Cumplir la instrucción por tratarse de una orden escrita de un superior jerárquico, dejando constancia interna de que el cambio de orden obedeció a una directriz operativa.",
                    "Aplicar el criterio de turnos y reglas de priorización legal (personas con discapacidad, adultos mayores u otros casos previstos), explicando que no es procedente favorecer a un usuario por fuera de la norma.",
                    "Atender al contribuyente indicado fuera de turno solo si el coordinador asume por correo electrónico la responsabilidad, sin comunicar la situación a los demás usuarios en sala."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el trato igualitario y la prioridad solo proceden por causales legales o de política pública, no por discrecionalidad. A y C convalidan un favorecimiento indebido contrario a la moralidad e igualdad."
            },
            {
                "id": "m1_c19",
                "text": "Caso: En el marco de una evaluación de desempeño, el jefe inmediato le exige al Gestor I modificar indicadores reportados en el sistema interno para mejorar los resultados del área.\n\nEnunciado: De acuerdo con el Código General Disciplinario (Ley 1952 de 2019), el Código de Integridad de la DIAN y el deber de objetividad, el Gestor I debe:",
                "options": [
                    "Ajustar los indicadores según lo solicitado para proteger la calificación del equipo, siempre que el cambio no afecte directamente el recaudo o derechos de terceros.",
                    "Negarse a alterar información oficial, sustentar la veracidad de los datos y reportar la solicitud por los canales de integridad o control interno competentes.",
                    "Modificar únicamente los indicadores de gestión interna no auditables y conservar una copia privada de los datos reales para usarla en caso de una revisión posterior."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: falsear información institucional vulnera la honestidad, objetividad y puede configurar faltas disciplinarias. A y C normalizan la manipulación de datos y exponen al servidor y a la entidad."
            },
            {
                "id": "m1_c20",
                "text": "Caso: Un ciudadano presenta una tutela alegando vulneración del derecho de petición por falta de respuesta a una solicitud radicada en la DIAN, y el Gestor I es requerido para aportar información sobre el trámite.\n\nEnunciado: Conforme al artículo 86 de la Constitución y al deber de colaboración con la administración de justicia, el Gestor I debe:",
                "options": [
                    "Suministrar de inmediato, completa y veraz la información solicitada por la autoridad judicial dentro del término señalado, con los soportes del expediente que obren en su poder.",
                    "Responder únicamente si el Director Seccional autoriza expresamente la entrega, aun cuando ello implique vencer el término perentorio fijado por el juez constitucional.",
                    "Remitir una respuesta general indicando que el trámite se encuentra en gestión, sin anexar soportes ni fechas verificables de la actuación administrativa."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta en el sentido de cumplir oportunamente: en tutela los términos son perentorios y el servidor debe colaborar con información veraz y completa. A retrasa injustificadamente y C incumple el deber de colaboración y puede agravar la vulneración alegada."
            },
            {
                "id": "m1_c21",
                "text": "Caso: La DIAN implementa un nuevo procedimiento digital para agendamiento y validación biométrica en los Puntos de Contacto, y el Gestor I debe aplicarlo desde la fecha señalada en la circular interna.\n\nEnunciado: En aplicación del principio de eficacia y del deber de actualización funcional, la conducta más adecuada del Gestor I es:",
                "options": [
                    "Continuar aplicando el procedimiento anterior hasta dominar completamente el nuevo, para evitar errores durante la atención al ciudadano en la primera semana.",
                    "Capacitarse con los lineamientos oficiales, aplicar el nuevo procedimiento desde su vigencia y orientar a los usuarios sobre los cambios con lenguaje claro.",
                    "Delegar la aplicación del nuevo procedimiento en compañeros con mayor experiencia tecnológica mientras atiende solo trámites manuales conocidos."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el servidor debe cumplir los procedimientos vigentes, actualizarse y garantizar continuidad del servicio con orientación clara. A posterga indebidamente la norma interna aplicable y C evade responsabilidades propias del cargo."
            },
            {
                "id": "m1_c22",
                "text": "Caso: Un usuario solicita al Gestor I información sobre el estado de un proceso de fiscalización de un tercero, aportando únicamente el nombre comercial de la empresa.\n\nEnunciado: Conforme a los deberes de reserva, protección de datos y debido proceso, el Gestor I debe:",
                "options": [
                    "Consultar el expediente del tercero y entregar un resumen verbal del estado del proceso para satisfacer la solicitud ciudadana, siempre que no se entregue copia física.",
                    "Abstenerse de suministrar información sobre terceros sin legitimación legal, explicar las restricciones de reserva y orientar al solicitante sobre los mecanismos válidos cuando procedan.",
                    "Solicitar al usuario que radique una petición anónima para que el área de fiscalización le responda con el detalle del proceso en curso."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la información de terceros, especialmente en actuaciones tributarias, está protegida por reserva y normas de datos; el servidor debe negar información no autorizada y orientar adecuadamente. A vulnera la reserva y C propone un cauce improcedente."
            },
            {
                "id": "m1_c23",
                "text": "Caso: En una auditoría interna se detecta que un trámite de actualización del RUT fue gestionado sin el soporte documental completo por presión de tiempo en ventanilla.\n\nEnunciado: Desde el enfoque de autocontrol y las Tres Líneas de Defensa del MIPG, la actuación esperada del Gestor I como primera línea es:",
                "options": [
                    "Justificar la omisión señalando la alta demanda del servicio, sin revisar el expediente, porque el control posterior corresponde exclusivamente a la Oficina de Control Interno.",
                    "Reconocer el hallazgo, revisar el caso, aportar los soportes o gestionar la corrección conforme al procedimiento y aplicar medidas para evitar la recurrencia.",
                    "Solicitar que el hallazgo se reclasifique como observación menor para no afectar los indicadores del área, aun cuando falten documentos habilitantes."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la primera línea ejecuta controles y corrige desviaciones en su operación diaria. A y C trasladan indebidamente la responsabilidad y debilitan el control institucional."
            },
            {
                "id": "m1_c24",
                "text": "Caso: Un contribuyente ofrece al Gestor I un obsequio de bajo valor al finalizar una orientación, insistiendo en que es una muestra cultural sin intención indebida.\n\nEnunciado: Conforme al régimen disciplinario, las políticas de integridad y prevención de conflicto de intereses, el Gestor I debe:",
                "options": [
                    "Aceptar el obsequio si su valor es mínimo y registrarlo verbalmente con un compañero, para evitar incomodar al ciudadano en el Punto de Contacto.",
                    "Rechazar cortésmente cualquier obsequio, explicar que los servidores públicos no reciben dádivas por sus funciones y mantener el trato respetuoso con el usuario.",
                    "Recibir el obsequio y entregarlo al final del día al coordinador para que decida su destino, sin dejar registro formal en el sistema de integridad."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: aceptar dádivas, incluso de bajo valor, puede afectar la imparcialidad y generar riesgo disciplinario; la conducta íntegra es rechazar con respeto y claridad. A y C no eliminan el riesgo ni garantizan trazabilidad adecuada."
            },
            {
                "id": "m1_c25",
                "text": "Caso: El Gestor I identifica que un formato físico utilizado en el Punto de Contacto no corresponde a la versión vigente publicada por la DIAN, lo que puede inducir errores en los trámites del RUT.\n\nEnunciado: De acuerdo con el principio de eficacia, la gestión documental y el deber de calidad del servicio, el Gestor I debe:",
                "options": [
                    "Continuar usando el formato hasta agotar las existencias impresas, informando a los usuarios que verifiquen por su cuenta la versión correcta en la página web.",
                    "Suspender el uso del formato desactualizado, informar al responsable del proceso, solicitar la versión vigente y orientar a los usuarios con la información correcta.",
                    "Modificar manualmente los campos del formato antiguo en cada atención, sin reportar la situación, para agilizar la atención mientras llega la nueva versión."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: usar documentos desactualizados afecta la legalidad y calidad del servicio; el servidor debe detener el riesgo, escalarlo y asegurar orientación correcta. A traslada la carga al ciudadano y C altera controles documentales sin autorización."
            },
            {
                "id": "m1_c26",
                "text": "Caso: Un Gestor I en encargo provisional detecta que, por una instrucción verbal del jefe de área, se está priorizando la atención de trámites de contribuyentes remitidos por un gremio, desplazando a usuarios con turno y a personas con derecho a atención prioritaria.\n\nEnunciado: Considerando legalidad (Art. 6 y 209 C.P.), igualdad (Art. 13 C.P.), deberes del servidor y el régimen disciplinario, la decisión más ajustada es:",
                "options": [
                    "Cumplir la instrucción verbal mientras el jefe asume la responsabilidad, registrando solo en una nota personal el cambio en el orden de atención.",
                    "Aplicar las reglas legales de turnos y prioridad, suspender la práctica irregular, documentar lo ocurrido y canalizar la instrucción por los medios formales correspondientes, sin ejecutar órdenes contrarias a derecho.",
                    "Reorganizar la fila de forma discrecional para alternar entre remitidos del gremio y usuarios regulares, evitando reportar la situación para no afectar el clima laboral."
                ],
                "correct": 1,
                "explanation": "La opción B integra legalidad, igualdad e integridad: no se ejecutan prácticas contrarias a derecho, se protege la atención prioritaria/turnos y se deja trazabilidad formal. A y C normalizan un trato desigual y omiten el deber de actuación ajustada a norma."
            },
            {
                "id": "m1_c27",
                "text": "Caso: En una actuación administrativa, el Gestor I recibe información sensible de un contribuyente y, además, un compañero le solicita acceso al expediente para \"agilizar\" una respuesta, sin que ese compañero participe formalmente en el trámite.\n\nEnunciado: Conforme a reserva, necesidad de conocimiento, seguridad de la información y principios de la función administrativa, el Gestor I debe:",
                "options": [
                    "Compartir el acceso porque ambos pertenecen a la misma dependencia y la rapidez del servicio prevalece sobre las restricciones internas.",
                    "Limitar el acceso a quienes intervienen legítimamente en la actuación, verificar la finalidad, usar canales institucionales y negar accesos no autorizados, dejando trazabilidad cuando corresponda.",
                    "Enviar copia del expediente por mensajería personal institucional externa al procedimiento, solicitando al compañero que borre la información tras usarla."
                ],
                "correct": 1,
                "explanation": "La opción B aplica reserva, finalidad y control: el acceso se restringe a necesidad legítima y canales formales. A amplía indebidamente el acceso y C expone información fuera de controles."
            },
            {
                "id": "m1_c28",
                "text": "Caso: Un ciudadano interpone queja disciplinaria y tutela contra una actuación en la que intervino el Gestor I. El supervisor le pide \"ajustar\" la versión de los hechos en el informe interno para reducir riesgo institucional.\n\nEnunciado: Frente a esta solicitud, y de acuerdo con ética pública, debido proceso, deber de verdad y responsabilidad disciplinaria, el Gestor I debe:",
                "options": [
                    "Modificar el informe para mantener coherencia institucional, siempre que los cambios no alteren datos numéricos del expediente.",
                    "Rendir un informe veraz, completo y soportado en evidencias, abstenerse de falsear hechos y atender los requerimientos por los canales competentes.",
                    "Presentar dos versiones: una interna ajustada y otra reservada con los hechos reales, sin remitir esta última a la autoridad competente."
                ],
                "correct": 1,
                "explanation": "La opción B protege la veracidad, el debido proceso y la integridad institucional. A y C implican falseamiento u ocultamiento de información, con riesgo disciplinario y jurídico."
            },
            {
                "id": "m1_c29",
                "text": "Caso: Durante una feria de servicios, un contratista de apoyo logístico solicita al Gestor I que valide datos de contacto de contribuyentes atendidos para una campaña comercial posterior.\n\nEnunciado: Considerando finalidad, protección de datos, reserva y uso debido de la información pública/administrativa, la actuación correcta es:",
                "options": [
                    "Entregar la base si los contribuyentes fueron atendidos en un evento público y el contratista firmó un compromiso de confidencialidad verbal.",
                    "Negar el uso de datos para fines ajenos a la finalidad del servicio, abstenerse de entregar información sin autorización legal/procedimental y reportar la solicitud si vulnera controles.",
                    "Compartir solo teléfonos y correos, excluyendo nombres, para reducir el riesgo de identificación."
                ],
                "correct": 1,
                "explanation": "La opción B aplica finalidad y protección de datos: la información obtenida en el servicio no puede usarse para fines comerciales no autorizados. A y C permiten un tratamiento indebido."
            },
            {
                "id": "m1_c30",
                "text": "Caso: Un Gestor I debe aplicar simultáneamente un procedimiento interno de atención, una petición con término de Ley 1755/2015 y una restricción de reserva sobre datos de tercero mencionados en la misma solicitud.\n\nEnunciado: La actuación profesionalmente correcta exige:",
                "options": [
                    "Responder dentro del término ignorando la reserva, porque el derecho de petición prevalece siempre sobre cualquier otra limitación.",
                    "Tramitar la petición dentro del término legal, respondiendo de fondo lo procedente, aplicando la reserva cuando corresponda, motivando la decisión y usando el procedimiento interno aplicable.",
                    "Suspender la respuesta hasta que todas las áreas internas emitan concepto, aunque se venzan los términos legales."
                ],
                "correct": 1,
                "explanation": "La opción B armoniza derecho de petición, términos, debido proceso y reserva: se responde oportunamente, pero sin divulgar información protegida cuando la ley lo impide. A absolutiza un derecho y C vulnera oportunidad."
            },
            {
                "id": "m1_c31",
                "text": "Caso: Al revisar su gestión, el Gestor I advierte que un indicador de calidad se cumplió formalmente, pero las orientaciones entregadas generaron reprocesos por falta de verificación de soporte en casos complejos de RUT.\n\nEnunciado: Desde eficacia, mejora continua y control de primera línea (MIPG), debe:",
                "options": [
                    "Mantener la práctica porque el indicador fue cumplido y los reprocesos dependen de la conducta de los contribuyentes.",
                    "Analizar causas, ajustar la verificación/orientación en casos complejos, proponer mejoras al procedimiento y priorizar resultados efectivos, no solo cumplimiento formal.",
                    "Reducir la verificación documental en todos los casos para mejorar tiempos promedio de atención."
                ],
                "correct": 1,
                "explanation": "La opción B refleja eficacia sustancial y autocontrol: cumplir metas no justifica calidad deficiente; se corrigen causas y se mejora el servicio. A se queda en lo formal y C aumenta riesgo."
            }
        ]
    },
    {
        "id": "m2",
        "examArea": "funcional",
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
            },
            {
                "id": "m2_c16",
                "text": "Caso: Un contribuyente radica en el portal web de la DIAN una petición solicitando copia de su historial de direcciones registradas en el RUT para un trámite bancario.\n\nEnunciado: De conformidad con la Ley 1755 de 2015, el término máximo para resolver esta petición de documentos e información es de:",
                "options": [
                    "Diez (10) días hábiles contados desde la radicación, debiendo la entidad entregar la información o responder de fondo dentro de dicho plazo.",
                    "Quince (15) días hábiles por tratarse de una solicitud presentada por medios electrónicos que requiere validación de identidad del titular.",
                    "Tres (3) días hábiles, porque el historial del RUT es información automatizada que el sistema Muisca debe generar de forma inmediata."
                ],
                "correct": 0,
                "explanation": "La opción A es correcta: las peticiones de documentos e información se resuelven en 10 días hábiles (Art. 14, Ley 1755/2015). B confunde con el término general y C desconoce el término legal."
            },
            {
                "id": "m2_c17",
                "text": "Caso: El Gestor I recibe en el Punto de Contacto a un ciudadano que desea formular una queja por la atención recibida, pero manifiesta no saber cómo radicarla por escrito.\n\nEnunciado: Conforme al derecho de petición y a los deberes de orientación, el Gestor I debe:",
                "options": [
                    "Negar la recepción indicando que toda queja debe presentarse exclusivamente por el portal web sin apoyo presencial de la entidad.",
                    "Orientar al ciudadano sobre los canales habilitados, facilitar el registro de la queja y garantizar que quede radicada con trazabilidad para su trámite competente.",
                    "Registrar la inconformidad solo de manera verbal ante el coordinador, sin generar radicado ni entregar constancia al usuario."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la administración debe facilitar el ejercicio efectivo del derecho de petición/queja y asegurar trazabilidad. A crea barrera indebida y C impide seguimiento."
            },
            {
                "id": "m2_c18",
                "text": "Caso: Una sociedad recibe en su buzón electrónico del RUT la notificación de un requerimiento de la DIAN, pero el representante legal afirma no haber abierto el mensaje.\n\nEnunciado: De conformidad con el artículo 566-1 del Estatuto Tributario, la notificación electrónica se entiende surtida para el cómputo de términos:",
                "options": [
                    "Únicamente cuando el destinatario abre el mensaje y descarga el acto administrativo en el portal.",
                    "Cuando el acto se pone a disposición en el buzón electrónico y se cumplen las condiciones legales de sur-tición, con independencia de la apertura efectiva.",
                    "Solo si la DIAN envía además una copia física por correo certificado a la dirección registrada en el RUT."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el 566-1 E.T. regula la notificación electrónica y el inicio de términos sin depender de la apertura efectiva. A y C no reflejan la regla legal."
            },
            {
                "id": "m2_c19",
                "text": "Caso: Un apoderado interpone recurso de reposición contra un acto de la DIAN tres días hábiles después de vencido el término legal.\n\nEnunciado: Conforme al artículo 76 del CPACA, la administración debe:",
                "options": [
                    "Admitir el recurso por razones de equidad si el contribuyente alega dificultades técnicas en la radicación.",
                    "Rechazar el recurso por extemporaneidad mediante acto motivado, respetando los términos perentorios del procedimiento administrativo.",
                    "Trasladar el escrito como consulta interna para que otra dependencia decida de fondo si resulta conveniente."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: los recursos deben presentarse en término; la extemporaneidad implica rechazo por improcedencia temporal. A y C flexibilizan indebidamente plazos legales."
            },
            {
                "id": "m2_c20",
                "text": "Caso: Al estudiar una petición, el Gestor I determina que la decisión compete a una dependencia diferente de la misma seccional.\n\nEnunciado: Conforme al CPACA y la Ley 1755 de 2015, la actuación correcta es:",
                "options": [
                    "Responder al peticionario que radique nuevamente ante la dependencia competente, sin remitir internamente la solicitud.",
                    "Remitir la petición al competente dentro del término legal y comunicar al peticionario el traslado efectuado.",
                    "Retener la solicitud hasta obtener un concepto informal y responder sin formalizar el traslado ni informar al ciudadano."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la administración debe garantizar continuidad del trámite y comunicar el traslado. A genera carga injustificada y C afecta transparencia y oportunidad."
            },
            {
                "id": "m2_c21",
                "text": "Caso: Un ciudadano solicita revocatoria directa de un acto particular que negó una actualización en el RUT, aportando nuevos soportes.\n\nEnunciado: De acuerdo con los artículos 93 y siguientes del CPACA, frente a esta solicitud la DIAN debe:",
                "options": [
                    "Tramitarla cuando cumpla requisitos de oportunidad y fundamento, verificando causales y el respeto de derechos adquiridos cuando aplique.",
                    "Rechazar automáticamente toda revocatoria directa porque los actos del RUT solo admiten reposición dentro de diez días.",
                    "Suspender indefinidamente los efectos del acto sin adoptar decisión formal mientras el solicitante reúne documentos."
                ],
                "correct": 0,
                "explanation": "La opción A es correcta: la revocatoria directa procede según causales, oportunidad y límites legales. B desconoce la figura y C omite el deber de decidir."
            },
            {
                "id": "m2_c22",
                "text": "Caso: El área competente requiere información adicional para responder una consulta tributaria compleja y advierte que no alcanzará el término ordinario.\n\nEnunciado: Conforme al artículo 14 de la Ley 1755 de 2015, la entidad puede:",
                "options": [
                    "Prorrogar el término de respuesta hasta por treinta (30) días hábiles adicionales, informando al peticionario antes del vencimiento e indicando los motivos.",
                    "Extender el plazo indefinidamente mientras consolida la información interna, sin comunicar una nueva fecha de respuesta.",
                    "Responder parcialmente dentro del término y exigir que el ciudadano radique una nueva petición por los aspectos pendientes."
                ],
                "correct": 0,
                "explanation": "La opción A es correcta: la Ley 1755 permite prórroga justificada en consultas, informada antes del vencimiento. B y C vulneran el derecho a respuesta oportuna."
            },
            {
                "id": "m2_c23",
                "text": "Caso: Un contribuyente solicita que la respuesta a su petición sea enviada al canal electrónico autorizado.\n\nEnunciado: De acuerdo con las normas de derecho de petición y notificación aplicables, la administración debe:",
                "options": [
                    "Usar el medio solicitado cuando sea procedente y esté habilitado, dejando constancia del envío y cumpliendo las formalidades legales.",
                    "Exigir siempre comparecencia personal en el Punto de Contacto, aun cuando el peticionario haya autorizado un canal electrónico válido.",
                    "Responder únicamente mediante publicación genérica en la página web, sin comunicación directa al canal autorizado."
                ],
                "correct": 0,
                "explanation": "La opción A es correcta: se deben respetar canales autorizados cuando procedan, con trazabilidad. B impone carga innecesaria y C no garantiza comunicación efectiva."
            },
            {
                "id": "m2_c24",
                "text": "Caso: Antes de notificar un acto que resuelve una petición, el Gestor I detecta un error mecanográfico en el nombre del solicitante, aunque el NIT y la decisión son correctos.\n\nEnunciado: Conforme al artículo 45 del CPACA, procede:",
                "options": [
                    "Revocar totalmente el acto y emitir uno nuevo, porque cualquier error de identificación invalida la decisión.",
                    "Corregir el error formal mediante aclaración o corrección, siempre que no se altere el sentido sustancial de la decisión.",
                    "Notificar el acto sin corregirlo, indicando al ciudadano que aclare el error en sus gestiones externas."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el Art. 45 CPACA permite corregir errores formales sin modificar el fondo. A es desproporcionado y C afecta eficacia."
            },
            {
                "id": "m2_c25",
                "text": "Caso: Un usuario radica una queja por demora en la actualización de su RUT y solicita información sobre las actuaciones adelantadas.\n\nEnunciado: De conformidad con la Ley 1755 de 2015, el término general para resolver quejas y reclamos es de:",
                "options": [
                    "Quince (15) días hábiles siguientes a la radicación, salvo norma especial que disponga un término distinto.",
                    "Diez (10) días hábiles, por asimilarse a una solicitud de documentos del expediente.",
                    "Treinta (30) días calendario, prorrogables automáticamente cuando intervengan varias dependencias."
                ],
                "correct": 0,
                "explanation": "La opción A es correcta: el término general es de 15 días hábiles para peticiones/quejas/reclamos (Art. 14, Ley 1755/2015). B y C señalan términos incorrectos."
            },
            {
                "id": "m2_c26",
                "text": "Caso: Un contribuyente radica por correo electrónico una petición ambigua que mezcla solicitud de copias, queja por atención y consulta sobre el término para responder un requerimiento tributario; no indica con claridad qué pretende en cada punto.\n\nEnunciado: Conforme a la Ley 1755 de 2015 y al deber de eficacia, el Gestor I debe:",
                "options": [
                    "Responder todo en 30 días hábiles por tratarse de una solicitud compleja con varios temas.",
                    "Analizar el contenido, tramitar cada pretensión según su naturaleza y término aplicable (copias, queja, consulta), y si falta claridad esencial requerir una sola vez para precisar lo necesario sin dilatar injustificadamente.",
                    "Rechazar la petición completa por falta de claridad, exigiendo que el ciudadano radique tres solicitudes independientes antes de cualquier trámite."
                ],
                "correct": 1,
                "explanation": "La opción B aplica trámite por naturaleza de la pretensión y eficacia; el requerimiento solo procede cuando es necesario y por una vez. A usa un término incorrecto y C impone barreras desproporcionadas."
            },
            {
                "id": "m2_c27",
                "text": "Caso: La DIAN notifica electrónicamente un acto a un contribuyente. El mensaje llega al buzón registrado, pero el apoderado alega que el poder fue revocado y que la notificación debió hacerse a una nueva dirección.\n\nEnunciado: Ante un caso que combina notificación electrónica (E.T. 566-1) y representación, la actuación más ajustada es:",
                "options": [
                    "Dar por inválida automáticamente la notificación solo con la afirmación del apoderado, sin verificar registros ni soportes.",
                    "Verificar la dirección/canal válido en el RUT y los soportes de representación vigentes al momento de la actuación; responder y encauzar la corrección registral o procesal según corresponda, respetando las reglas de notificación.",
                    "Repetir notificaciones por todos los canales posibles sin análisis jurídico, para evitar controversias."
                ],
                "correct": 1,
                "explanation": "La opción B exige verificación de hechos registrales y de representación antes de concluir efectos jurídicos. A decide sin soporte y C no resuelve la validez jurídica."
            },
            {
                "id": "m2_c28",
                "text": "Caso: Un peticionario solicita documentos que contienen datos propios y, mezclados, datos tributarios de terceros no autorizados. El término de respuesta está próximo a vencer.\n\nEnunciado: Conforme a derecho de petición, transparencia y reserva legal, procede:",
                "options": [
                    "Entregar el expediente completo para cumplir el término, dejando que el peticionario filtre la información sensible.",
                    "Responder oportunamente entregando la información procedente y aplicando reserva/tacha o supresión de datos protegidos de terceros, motivando la restricción cuando corresponda.",
                    "Guardar silencio hasta obtener autorización de todos los terceros mencionados, aunque se supere el término legal."
                ],
                "correct": 1,
                "explanation": "La opción B armoniza oportunidad y reserva: se cumple el deber de responder sin divulgar información protegida. A vulnera reserva y C incumple el término."
            },
            {
                "id": "m2_c29",
                "text": "Caso: Tras una respuesta de fondo, el contribuyente presenta recurso de reposición y, en el mismo escrito, formula una nueva petición sobre hechos distintos. La dependencia debe evitar confundir actuaciones.\n\nEnunciado: La gestión correcta es:",
                "options": [
                    "Resolver todo como recurso de reposición, aplicando un único término y una sola decisión.",
                    "Tramitar el recurso contra el acto según el procedimiento/término de recursos y, si la nueva petición es autónoma, radicarla/tramitarla por la vía correspondiente con su término, informando claramente al interesado.",
                    "Archivar la nueva petición por haberse presentado junto con un recurso."
                ],
                "correct": 1,
                "explanation": "La opción B separa actuaciones con naturalezas distintas, preserva términos y claridad procesal. A mezcla vías y C desconoce el derecho de petición."
            },
            {
                "id": "m2_c30",
                "text": "Caso: Una petición incompleta fue requerida en término. El ciudadano aporta parte de los soportes al día 20 y los restantes al día 45, sin haber solicitado prórroga antes del vencimiento del mes.\n\nEnunciado: Conforme al CPACA (peticiones incompletas/desistimiento tácito), la decisión correcta es:",
                "options": [
                    "Admitir todos los soportes porque el ciudadano mostró voluntad de cumplir y responder de fondo.",
                    "Evaluar la completitud dentro del término legal aplicable; si no se subsanó oportunamente, decretar desistimiento tácito mediante acto motivado cuando proceda, respetando recursos.",
                    "Ignorar los soportes extemporáneos y mantener el expediente abierto indefinidamente."
                ],
                "correct": 1,
                "explanation": "La opción B aplica el régimen de subsanación y desistimiento tácito con debido proceso. A desconoce el término y C deja la actuación sin decisión."
            },
            {
                "id": "m2_c31",
                "text": "Caso: El peticionario solicita que se le responda por un canal no autorizado y, además, pide copia de un acto que aún no ha sido notificado formalmente a su destinatario, quien es un tercero.\n\nEnunciado: La actuación más segura jurídicamente es:",
                "options": [
                    "Enviar el acto por el canal solicitado para agilizar, si quien pide demuestra interés legítimo verbalmente.",
                    "Usar canales autorizados, verificar legitimación y estado de notificación del acto; solo entregar información/documentos cuando exista habilitación legal y sin vulnerar notificación, reserva o debido proceso.",
                    "Publicar el acto en redes internas para que cualquier interesado lo consulte."
                ],
                "correct": 1,
                "explanation": "La opción B protege canal, legitimación, notificación y reserva. A y C exponen la actuación a invalidez y divulgación indebida."
            }
        ]
    },
    {
        "id": "m3",
        "examArea": "funcional",
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
            },
            {
                "id": "m3_c16",
                "text": "Caso: Un profesional independiente solicita al Gestor I orientación para inscribirse en el RUT por primera vez, indicando que desarrollará actividades económicas como servicios profesionales y también venderá productos ocasionalmente.\n\nEnunciado: Conforme al Decreto 1625 de 2016 y a los procedimientos del RUT, el Gestor I debe:",
                "options": [
                    "Inscribirlo únicamente con la actividad de mayores ingresos, indicando que las demás actividades se registran solo cuando genere declaraciones por cada impuesto.",
                    "Orientarlo para registrar todas las responsabilidades y actividades económicas que correspondan según su realidad, verificando soportes y la correcta clasificación en el formulario del RUT.",
                    "Exigir que primero constituya una persona jurídica, porque el RUT no permite registrar simultáneamente actividades de servicios y de venta para personas naturales."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el RUT debe reflejar la situación real del obligado (responsabilidades, actividades CIIU y datos de ubicación/contacto) con validación de soportes. A genera información incompleta y C es falso."
            },
            {
                "id": "m3_c17",
                "text": "Caso: Una persona natural inscrita en el RUT cambia su dirección de notificación y correo electrónico, pero continúa recibiendo comunicaciones de la DIAN en la dirección anterior.\n\nEnunciado: De acuerdo con el artículo 555-2 del E.T. y el deber de actualización del RUT, la actuación correcta es:",
                "options": [
                    "Mantener la dirección anterior mientras la DIAN no confirme la actualización, porque el cambio solo produce efectos al inicio del siguiente año gravable.",
                    "Actualizar oportunamente los datos de ubicación y notificación en el RUT, aportando los soportes cuando apliquen, para que las comunicaciones se surtan en los canales vigentes.",
                    "Solicitar que las notificaciones se suspendan temporalmente hasta que el contribuyente presente una escritura pública que acredite el cambio de domicilio."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el obligado debe mantener actualizado el RUT; los datos de notificación son críticos para comunicaciones y términos. A desconoce el deber de actualización y C exige un requisito no aplicable de forma general."
            },
            {
                "id": "m3_c18",
                "text": "Caso: El representante legal de una sucesión ilíquida acude al Punto de Contacto para actualizar responsabilidades en el RUT, pero presenta copia simple del documento que lo acredita.\n\nEnunciado: Conforme a los procedimientos de validación documental del RUT, el Gestor I debe:",
                "options": [
                    "Aceptar la copia simple si el representante declara bajo juramento que el documento es auténtico, para evitar reprocesos al contribuyente.",
                    "Verificar la calidad del representante y exigir el soporte idóneo conforme al procedimiento aplicable, orientando sobre la forma correcta de acreditar la representación.",
                    "Actualizar provisionalmente el RUT y dejar una nota interna para que el contribuyente aporte el documento original dentro de los seis meses siguientes."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: los trámites del RUT requieren validación de identidad y representación con soportes válidos según el caso. A y C debilitan controles y pueden generar inconsistencias registrales."
            },
            {
                "id": "m3_c19",
                "text": "Caso: Un comerciante inscrito como responsable de IVA solicita su retiro de dicha responsabilidad en el RUT, alegando disminución de ventas en el último trimestre.\n\nEnunciado: De conformidad con el parágrafo 3 del artículo 437 del E.T. y la verificación registral, el Gestor I debe:",
                "options": [
                    "Aprobar el retiro de inmediato si el contribuyente presenta una certificación privada de ingresos del último trimestre, sin revisar períodos anteriores.",
                    "Verificar el cumplimiento de los topes legales en los períodos exigidos por la norma antes de registrar el cambio, y orientar al contribuyente sobre los soportes y efectos tributarios.",
                    "Negar toda solicitud de retiro de responsabilidad de IVA en el Punto de Contacto, indicando que solo procede mediante proceso de fiscalización."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el retiro de la responsabilidad de IVA exige verificar condiciones legales en los períodos previstos (no solo un trimestre), con aplicación correcta del procedimiento. A es insuficiente y C es improcedente."
            },
            {
                "id": "m3_c20",
                "text": "Caso: Un usuario solicita la inscripción en el RUT de un consorcio que ejecutará un contrato estatal, pero los integrantes no han definido quién actuará como representante para efectos tributarios.\n\nEnunciado: Conforme a las reglas del RUT para estructuras sin personería jurídica y a los requisitos de formalización, el Gestor I debe:",
                "options": [
                    "Inscribir el consorcio con los datos de cualquiera de los integrantes, aclarando que la representación podrá definirse después ante la entidad contratante.",
                    "Orientar que el trámite requiere la documentación que acredite la existencia del consorcio y la representación/atribuciones para efectos del RUT, validando la información de los integrantes.",
                    "Crear dos inscripciones independientes, una por cada integrante, para evitar demoras mientras se define la representación del consorcio."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el registro debe corresponder a la figura contractual y su representación, con soportes que permitan identificar responsabilidades. A y C generan registros inexactos o duplicados."
            },
            {
                "id": "m3_c21",
                "text": "Caso: Al revisar una solicitud de actualización, el Gestor I detecta diferencias entre la actividad económica declarada y el soporte de cámara de comercio aportado por una persona jurídica.\n\nEnunciado: Conforme al deber de calidad de la información registral del RUT, el Gestor I debe:",
                "options": [
                    "Registrar la actividad económica indicada verbalmente por el contribuyente para agilizar el trámite y sugerirle actualizar la cámara de comercio posteriormente.",
                    "Confrontar la información con los soportes idóneos, solicitar aclaración o corrección documental y registrar la actividad acorde con la evidencia válida.",
                    "Mantener la actividad anterior sin cambios, aunque el soporte demuestre una modificación, para evitar inconsistencias con declaraciones ya presentadas."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la información del RUT debe ser consistente con los soportes; ante inconsistencias se debe sanear antes de registrar. A y C perpetúan errores registrales."
            },
            {
                "id": "m3_c22",
                "text": "Caso: Un ciudadano reporta que su NIT aparece asociado en el RUT a una dirección que nunca ha utilizado, sospechando suplantación en la actualización de datos.\n\nEnunciado: Frente a esta situación, y de acuerdo con los protocolos de seguridad y corrección registral, el Gestor I debe:",
                "options": [
                    "Indicarle que solicite una nueva inscripción en el RUT para obtener un NIT distinto, evitando usar el registro comprometido.",
                    "Orientar la activación de los mecanismos de verificación de identidad, recepción de soportes y trámite de corrección/bloqueo según procedimiento, escalando el caso a las áreas competentes.",
                    "Actualizar de inmediato la dirección con la información verbal del ciudadano, sin validar identidad ni soportes, para cerrar rápidamente el reporte."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: ante posible suplantación se requiere verificación reforzada, trazabilidad y aplicación de protocolos de seguridad/corrección. A no resuelve el riesgo y C puede agravar el fraude."
            },
            {
                "id": "m3_c23",
                "text": "Caso: Un contribuyente solicita copia del certificado del RUT, pero el documento solicitado corresponde a información con datos sensibles de contacto que serán usados por un tercero no autorizado.\n\nEnunciado: Conforme a la reserva, protección de datos personales y reglas de acceso a la información tributaria, el Gestor I debe:",
                "options": [
                    "Entregar la copia completa del RUT a cualquier solicitante que conozca el NIT, porque el registro es público para efectos comerciales.",
                    "Suministrar la información únicamente al titular o a quien acredite legitimación, aplicando las restricciones legales sobre datos y reserva cuando corresponda.",
                    "Publicar el certificado en el expediente físico del Punto de Contacto para consulta abierta, facilitando la transparencia de la información registral."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el acceso a información del RUT debe respetar legitimación, protección de datos y reservas legales aplicables. A y C exponen datos indebidamente."
            },
            {
                "id": "m3_c24",
                "text": "Caso: Una persona jurídica formaliza su inscripción en el RUT y pregunta al Gestor I cuál es la utilidad de mantener actualizada la casilla de responsabilidades, calidades y atributos.\n\nEnunciado: La orientación correcta del Gestor I es explicar que esta información:",
                "options": [
                    "Es meramente informativa y no afecta el cumplimiento de obligaciones tributarias, aduaneras o cambiarias mientras se presenten las declaraciones a tiempo.",
                    "Permite a la DIAN identificar obligaciones, clasificar al administrado y dirigir comunicaciones y controles conforme a su situación fiscal real.",
                    "Solo se utiliza para fines estadísticos internos y puede permanecer desactualizada hasta que la entidad requiera una actualización masiva."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: las responsabilidades/calidades determinan obligaciones formales y sustanciales, clasificación y gestión de comunicaciones/controles. A y C minimizan efectos jurídicos y operativos relevantes."
            },
            {
                "id": "m3_c25",
                "text": "Caso: Un contribuyente persona natural solicita cancelar su inscripción en el RUT porque cerró su actividad económica, pero aún tiene obligaciones tributarias pendientes de periodos anteriores.\n\nEnunciado: Conforme al artículo 555-2 del E.T. y a los procedimientos registrales, el Gestor I debe:",
                "options": [
                    "Cancelar la inscripción de forma inmediata, ya que el cese de actividades extingue automáticamente cualquier obligación formal o sustancial anterior.",
                    "Orientar que la cancelación/suspensión del RUT está sujeta a verificación de requisitos legales y que el cese de actividades no elimina por sí solo obligaciones pendientes.",
                    "Rechazar definitivamente la solicitud sin análisis, indicando que ninguna inscripción en el RUT puede cancelarse una vez asignado el NIT."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la situación registral debe revisarse conforme a norma; el cierre de actividad no borra obligaciones previas y pueden existir restricciones o trámites específicos. A y C son afirmaciones absolutas incorrectas."
            },
            {
                "id": "m3_c32",
                "text": "Caso: Una persona natural aparece en bases informativas con actividad económica que no reconoce y solicita al Gestor I actualizar el RUT de inmediato para eliminarla, sin soportes y con señales de posible suplantación.\n\nEnunciado: Conforme a seguridad registral, verificación de identidad, soportes y procedimiento RUT, el Gestor I debe:",
                "options": [
                    "Eliminar la actividad de inmediato con base en la declaración verbal para proteger al ciudadano.",
                    "Aplicar verificación reforzada de identidad, recibir/validar soportes, orientar la corrección por el trámite seguro correspondiente y escalar el caso ante sospecha de suplantación, sin hacer cambios no soportados.",
                    "Crear un nuevo NIT para aislar el riesgo y cerrar el registro anterior sin análisis."
                ],
                "correct": 1,
                "explanation": "La opción B prioriza integridad del registro y protección del titular: no se hacen cambios sin soporte/verificación y se activa ruta segura. A y C agravan el riesgo registral."
            },
            {
                "id": "m3_c33",
                "text": "Caso: Un contribuyente solicita estado \"No responsable de IVA\" aportando certificación de ingresos del año en curso, pero omite información de años anteriores exigidos por la norma para verificar topes.\n\nEnunciado: La decisión técnicamente correcta en el trámite RUT es:",
                "options": [
                    "Aprobar el cambio porque el año actual es el más relevante para la capacidad económica.",
                    "Verificar el cumplimiento de condiciones en los períodos exigidos por el Art. 437 E.T. (según regla aplicable) y requerir/obtener la información o soportes necesarios antes de aprobar el cambio.",
                    "Aprobar provisionalmente y revertir si una fiscalización posterior encuentra inconsistencias."
                ],
                "correct": 1,
                "explanation": "La opción B exige verificación legal completa antes del cambio registral. A aplica un criterio incompleto y C traslada un error evitable al control posterior."
            },
            {
                "id": "m3_c34",
                "text": "Caso: Una sociedad actualiza representante legal en cámara de comercio, pero en el RUT aún figura el anterior. Un apoderado del representante saliente intenta radicar trámites urgentes.\n\nEnunciado: Para evitar suplantación o actuación sin legitimación, el Gestor I debe:",
                "options": [
                    "Atender al apoderado saliente si presenta copia del poder antiguo, para no afectar operaciones comerciales.",
                    "Verificar la representación vigente con soportes idóneos y el estado registral; solo permitir actuaciones de quien acredite legitimación actual y orientar la actualización correspondiente.",
                    "Permitir el trámite si el apoderado declara que el cambio en cámara aún no fue socializado internamente."
                ],
                "correct": 1,
                "explanation": "La opción B protege legitimación y seguridad jurídica: la actuación depende de representación vigente acreditada. A y C aceptan legitimación dudosa."
            },
            {
                "id": "m3_c35",
                "text": "Caso: En la inscripción RUT de una entidad sin ánimo de lucro, el solicitante entrega estatutos incompletos y no acredita con claridad la representación ni la dirección de notificación.\n\nEnunciado: El Gestor I debe:",
                "options": [
                    "Inscribir con datos parciales para asignar NIT rápidamente y completar la información después por teléfono.",
                    "Exigir la documentación necesaria para identificar al sujeto, su representación, responsabilidades y datos de contacto/notificación; no formalizar un registro inconsistente.",
                    "Registrar la dirección de un tercero conocido para asegurar que la DIAN pueda notificar."
                ],
                "correct": 1,
                "explanation": "La opción B garantiza calidad registral y capacidad de notificación/identificación. A crea un registro defectuoso y C asigna datos falsos o no autorizados."
            },
            {
                "id": "m3_c36",
                "text": "Caso: Un contribuyente pide actualizar correo electrónico para notificaciones y, al mismo tiempo, solicita copia del RUT; el funcionario nota que la solicitud proviene de un canal con señales de suplantación.\n\nEnunciado: La respuesta más segura es:",
                "options": [
                    "Actualizar el correo de inmediato porque el dato es fácil de cambiar y luego entregar la copia.",
                    "Aplicar controles de autenticación/verificación de identidad antes de cambiar datos de notificación o entregar información; orientar el canal seguro y documentar la alerta.",
                    "Negarse a toda atención sin explicar canales alternos, cerrando el caso."
                ],
                "correct": 1,
                "explanation": "La opción B protege contra redirección de notificaciones y fuga de información. A facilita fraude y C no presta orientación adecuada."
            },
            {
                "id": "m3_c37",
                "text": "Caso: Una sucesión ilíquida requiere actualización en RUT, pero existen discrepancias entre el documento de representación, el nombre del causante y los soportes aportados.\n\nEnunciado: El Gestor I debe:",
                "options": [
                    "Registrar el cambio usando el documento más reciente, ignorando las discrepancias menores de nombres.",
                    "Hacer depuración documental: identificar la inconsistencia, solicitar aclaración/soportes idóneos y solo registrar cuando la representación y la identidad estén claramente acreditadas.",
                    "Actualizar provisionalmente y dejar que el área jurídica valide después, sin informar al solicitante."
                ],
                "correct": 1,
                "explanation": "La opción B evita errores de identificación y representación en un caso sensible. A y C trasladan o consolidan inconsistencias."
            }
        ]
    },
    {
        "id": "m4",
        "examArea": "funcional",
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
            },
            {
                "id": "m4_c16",
                "text": "Caso: Un adulto mayor con dificultad para usar medios digitales llega al Punto de Contacto sin cita previa para obtener orientación sobre la actualización de su RUT.\n\nEnunciado: Conforme a los principios de atención al ciudadano, enfoque diferencial y canales TACI, el Gestor I debe:",
                "options": [
                    "Indicarle que todos los trámites deben gestionarse exclusivamente por autogestión web y que regrese cuando un familiar pueda diligenciar el formulario en línea.",
                    "Brindar orientación clara y prioritaria según las reglas de atención diferencial, explicarle las opciones presenciales y digitales disponibles y apoyarlo en el encauzamiento del trámite.",
                    "Entregarle un instructivo general impreso sin verificar si comprende los pasos, para mantener el tiempo promedio de atención de la ventanilla."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el servicio debe ser accesible, con enfoque diferencial y lenguaje claro, orientando al usuario según su necesidad y capacidad. A crea una barrera injustificada y C incumple el deber de orientación efectiva."
            },
            {
                "id": "m4_c17",
                "text": "Caso: Un contribuyente manifiesta inconformidad porque recibió información diferente en el contact center telefónico y en el Punto de Contacto sobre el mismo trámite del RUT.\n\nEnunciado: Desde la perspectiva de gestión de servicio y confiabilidad de la información institucional, el Gestor I debe:",
                "options": [
                    "Sostener la información dada en ventanilla sin verificar fuentes, indicando que los canales telefónicos suelen cometer errores de interpretación.",
                    "Verificar el procedimiento vigente en las fuentes oficiales, aclarar la información correcta al ciudadano con lenguaje claro y reportar la inconsistencia por el mecanismo interno definido.",
                    "Sugerir al ciudadano que presente una tutela de inmediato, ya que la contradicción entre canales constituye una vulneración automática de sus derechos."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la DIAN debe ofrecer información consistente y verificable; el servidor corrige con base en fuentes oficiales y gestiona la mejora. A no resuelve el problema y C es desproporcionado sin agotar la gestión de servicio."
            },
            {
                "id": "m4_c18",
                "text": "Caso: Durante la atención, el Gestor I identifica que el usuario puede completar parte de su solicitud mediante autogestión guiada en un kiosco digital del Punto de Contacto.\n\nEnunciado: Conforme a la estrategia de canales de atención y promoción de la autogestión, la actuación adecuada es:",
                "options": [
                    "Realizar todo el trámite en ventanilla sin mencionar el kiosco, para evitar que el usuario cometa errores en la plataforma digital.",
                    "Orientar al usuario sobre el uso del kiosco de autogestión guiada, verificar si requiere apoyo y asegurar que comprenda los pasos y soportes necesarios.",
                    "Exigir que el usuario utilice el kiosco sin asistencia, aun cuando manifieste no entender el proceso, para reducir la fila de atención presencial."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: promover autogestión no significa abandonar al ciudadano; se debe orientar y acompañar según necesidad, garantizando eficacia y comprensión. A desaprovecha el canal y C traslada indebidamente el riesgo al usuario."
            },
            {
                "id": "m4_c19",
                "text": "Caso: Un ciudadano solicita ayuda para recuperar el acceso a su cuenta en el portal transaccional y habilitar mecanismos de firma/autenticación electrónica para trámites ante la DIAN.\n\nEnunciado: En el marco de los servicios digitales y de seguridad de la información, el Gestor I debe:",
                "options": [
                    "Solicitar al usuario sus claves personales para ingresarlas desde el equipo de ventanilla y resolver rápidamente el problema de acceso.",
                    "Orientar el procedimiento oficial de recuperación/habilitación, verificar identidad por los medios previstos y remitir al canal técnico competente cuando el caso lo requiera, sin solicitar contraseñas.",
                    "Crear una nueva cuenta con datos alternos para evitar el proceso de recuperación, informando al usuario que podrá unificarla más adelante."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: los mecanismos de autenticación/firma exigen protección de credenciales y verificación de identidad; el servidor nunca debe pedir claves. A y C comprometen la seguridad y la integridad del registro."
            },
            {
                "id": "m4_c20",
                "text": "Caso: En una jornada de atención masiva, varios usuarios se quejan por la falta de claridad en los requisitos para formalizar una inscripción en el RUT.\n\nEnunciado: Aplicando la política de lenguaje claro y mejora del servicio, el Gestor I debe:",
                "options": [
                    "Mantener la explicación técnica habitual, ya que los requisitos tributarios no pueden simplificarse sin perder precisión jurídica.",
                    "Explicar los requisitos con lenguaje claro, confirmar la comprensión del usuario, entregar orientación consistente y comunicar la necesidad recurrente a su coordinador para ajustar la información al ciudadano.",
                    "Responder únicamente remitiendo al usuario a la norma general, sin traducir los requisitos al caso concreto ni verificar si entendió el procedimiento."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: lenguaje claro mejora acceso efectivo al servicio sin sacrificar corrección; además, identificar patrones permite mejorar la atención. A y C dificultan la comprensión y aumentan reprocesos."
            },
            {
                "id": "m4_c21",
                "text": "Caso: Una persona en condición de discapacidad auditiva requiere orientación para radicar una solicitud relacionada con su RUT y manifiesta barreras de comunicación en el Punto de Contacto.\n\nEnunciado: Conforme al enfoque diferencial y a los deberes de servicio incluyente, el Gestor I debe:",
                "options": [
                    "Atender la solicitud solo si el usuario acude con un intérprete particular, debido a que la DIAN no realiza ajustes en la atención presencial.",
                    "Aplicar los ajustes razonables y apoyos disponibles en el punto, comunicar la información por medios accesibles y garantizar la comprensión y el trámite efectivo de la solicitud.",
                    "Limitar la atención a la entrega de un formato físico para que el usuario lo diligencie en casa, sin verificar si puede acceder a la información requerida."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el servicio debe ser incluyente y efectivo, con ajustes razonables y comunicación accesible. A y C generan barreras discriminatorias."
            },
            {
                "id": "m4_c22",
                "text": "Caso: Un usuario agenda una cita virtual para orientación, pero el día de la atención no puede conectarse por fallas de conectividad en su zona.\n\nEnunciado: De acuerdo con la gestión de canales y continuidad del servicio, el Gestor I debe:",
                "options": [
                    "Cerrar la cita como inasistencia sin ofrecer alternativas, indicando que la responsabilidad técnica del canal es exclusiva del ciudadano.",
                    "Orientar sobre la reprogramación y los canales alternos disponibles (presencial, telefónico u otros habilitados), registrando la novedad según el procedimiento.",
                    "Realizar la orientación por un canal personal no institucional del funcionario para evitar la reprogramación, sin dejar trazabilidad del servicio."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la entidad debe facilitar continuidad del servicio por canales oficiales y con trazabilidad. A ignora el deber de orientación y C afecta seguridad y registro institucional."
            },
            {
                "id": "m4_c23",
                "text": "Caso: Al finalizar una atención, el Gestor I debe registrar la tipificación del trámite y el resultado de la orientación brindada en el sistema de gestión del Punto de Contacto.\n\nEnunciado: Esta práctica es importante principalmente porque:",
                "options": [
                    "Permite medir tiempos, calidad y trazabilidad del servicio, generando información para la gestión, seguimiento y mejora institucional.",
                    "Sirve únicamente para cumplir un requisito formal sin impacto en la planeación, estadísticas o mejora de los canales de atención.",
                    "Faculta al funcionario para modificar posteriormente los datos del usuario en el RUT sin soportes, siempre que la tipificación quede completa."
                ],
                "correct": 0,
                "explanation": "La opción A es correcta: la tipificación y registro soportan trazabilidad, indicadores y mejora del servicio. B desconoce su utilidad y C atribuye una facultad indebida sobre datos registrales."
            },
            {
                "id": "m4_c24",
                "text": "Caso: Un ciudadano llega alterado por una devolución de documentos y utiliza un tono ofensivo contra el Gestor I en el Punto de Contacto.\n\nEnunciado: Conforme a los protocolos de servicio, respeto y seguridad, la actuación más adecuada es:",
                "options": [
                    "Responder con el mismo tono para imponer autoridad y demostrar que el funcionario no acepta faltas de respeto en la ventanilla.",
                    "Mantener una comunicación respetuosa y asertiva, explicar con claridad las razones del procedimiento, intentar desescalar la situación y acudir al protocolo de apoyo si hay riesgo.",
                    "Suspender la atención de inmediato sin explicación y ordenar el retiro del ciudadano, sin activar ningún protocolo ni registrar lo ocurrido."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el servidor debe preservar el respeto, la claridad y la seguridad, aplicando protocolos ante conductas disruptivas. A escala el conflicto y C omite deberes de atención y registro."
            },
            {
                "id": "m4_c25",
                "text": "Caso: Un usuario pregunta si puede autorizar a otra persona para consultar información y adelantar gestiones en su nombre ante la DIAN.\n\nEnunciado: En materia de atención y seguridad del trámite, el Gestor I debe:",
                "options": [
                    "Permitir que cualquier tercero actúe con una autorización verbal del titular, siempre que conozca el número de documento y el NIT.",
                    "Orientar sobre los requisitos de representación o autorización válidos según el trámite, verificando identidad y soportes antes de permitir actuaciones de terceros.",
                    "Negar toda posibilidad de representación, indicando que los trámites ante la DIAN son siempre personales e indelegables."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la actuación de terceros requiere legitimación idónea y verificación; la regla varía según el trámite. A compromete seguridad y C desconoce figuras válidas de representación."
            },
            {
                "id": "m4_c26",
                "text": "Caso: En hora pico, el sistema de turnos falla y confluyen usuarios con cita, adultos mayores sin cita, una persona con discapacidad y contribuyentes que exigen atención inmediata por vencimientos.\n\nEnunciado: La gestión más ajustada al servicio, enfoque diferencial y orden operativo es:",
                "options": [
                    "Atender estrictamente por orden de llegada de quienes alcancen a registrarse manualmente, sin aplicar criterios de prioridad.",
                    "Aplicar un protocolo claro de contingencia: identificar prioridades legales, comunicar tiempos/criterios con lenguaje claro, organizar turnos alternos trazables y orientar a los demás sobre opciones de atención.",
                    "Cerrar el punto de contacto hasta que el sistema vuelva, sin atención presencial."
                ],
                "correct": 1,
                "explanation": "La opción B combina continuidad del servicio, prioridad legal, transparencia y trazabilidad. A ignora enfoque diferencial y C abandona la atención sin gestión de contingencia."
            },
            {
                "id": "m4_c27",
                "text": "Caso: Un ciudadano solicita orientación por videollamada institucional, pero su conexión es inestable y comparte pantalla con documentos que contienen datos de terceros.\n\nEnunciado: El Gestor I debe:",
                "options": [
                    "Continuar la videollamada para resolver rápido, aunque se visualicen datos de terceros.",
                    "Proteger la confidencialidad: advertir sobre la exposición de datos, suspender o ajustar la interacción segura, orientar canales alternos y tratar solo información necesaria con verificación adecuada.",
                    "Pedir que envíe todos los documentos por WhatsApp personal del funcionario para evitar fallas de conexión."
                ],
                "correct": 1,
                "explanation": "La opción B protege datos y mantiene orientación segura. A expone terceros y C usa un canal no institucional e inseguro."
            },
            {
                "id": "m4_c28",
                "text": "Caso: Un usuario presenta una queja compleja que involucra una posible falla del canal web, un cobro informado por correspondencia y una duda de RUT. Exige respuesta inmediata y definitiva en ventanilla.\n\nEnunciado: La mejor actuación de Asistencia al Usuario es:",
                "options": [
                    "Dar una respuesta definitiva sobre todos los puntos con la información disponible, aunque parte no esté verificada.",
                    "Delimitar cada asunto, brindar orientación verificada en lo que corresponde a su alcance, registrar la PQRSD/trámite pertinente, informar tiempos/canales y escalar los componentes especializados sin promesas falsas.",
                    "Negarse a atender porque la solicitud mezcla varios temas."
                ],
                "correct": 1,
                "explanation": "La opción B gestiona la complejidad con claridad, veracidad, trazabilidad y escalamiento. A arriesga desinformación y C niega el servicio."
            },
            {
                "id": "m4_c29",
                "text": "Caso: Un contribuyente con barrera idiomática comprende parcialmente el español. El trámite requiere consentimiento informado sobre uso de datos de contacto y validación de soportes.\n\nEnunciado: Para garantizar atención efectiva y comprensión real, el Gestor I debe:",
                "options": [
                    "Continuar si el usuario asiente con la cabeza, sin verificar comprensión específica.",
                    "Usar lenguaje claro, apoyos disponibles, ejemplos sencillos y verificación de comprensión sobre los puntos críticos (datos, consentimiento, soportes), documentando adecuadamente la atención.",
                    "Exigir que regrese con traductor privado y no prestar orientación mientras tanto."
                ],
                "correct": 1,
                "explanation": "La opción B asegura comprensión efectiva y trato digno, especialmente en actos que requieren entendimiento. A asume consentimiento y C impone una barrera innecesaria."
            },
            {
                "id": "m4_c30",
                "text": "Caso: Tras una caída masiva del portal, decenas de usuarios llegan con la misma inquietud. El equipo responde con mensajes contradictorios por falta de información unificada.\n\nEnunciado: La conducta profesional más adecuada es:",
                "options": [
                    "Responder cada caso con la versión que cada funcionario recuerde para evitar demoras.",
                    "Consultar/solicitar la instrucción oficial vigente, unificar el mensaje con lenguaje claro, informar alternativas y tiempos estimados cuando estén confirmados, y registrar la incidencia recurrente.",
                    "Publicar en redes personales del equipo una explicación no oficial para calmar a los usuarios."
                ],
                "correct": 1,
                "explanation": "La opción B prioriza información oficial, consistencia y transparencia. A genera desinformación y C usa canales no autorizados."
            },
            {
                "id": "m4_c31",
                "text": "Caso: Un usuario solicita ayuda para completar una actuación digital y ofrece su usuario/contraseña para que el Gestor I \"entre rápido\" desde el equipo institucional.\n\nEnunciado: La actuación correcta en atención digital segura es:",
                "options": [
                    "Aceptar las credenciales solo esta vez, sin guardarlas, para solucionar el problema del ciudadano.",
                    "Rechazar el uso de credenciales del usuario, orientar el procedimiento seguro de acceso/recuperación con verificación de identidad y nunca capturar o reutilizar claves.",
                    "Pedir que escriba la contraseña en un papel para destruirlo después de la atención."
                ],
                "correct": 1,
                "explanation": "La opción B protege seguridad, privacidad y responsabilidad institucional. A y C exponen credenciales y crean riesgo grave."
            }
        ]
    },
    {
        "id": "m5",
        "examArea": "funcional",
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
            },
            {
                "id": "m5_c16",
                "text": "Caso: Un pequeño comerciante consulta al Gestor I por qué debe expedir factura electrónica y qué riesgo corre si continúa entregando comprobantes informales.\n\nEnunciado: De acuerdo con la cultura de la contribución y las obligaciones formales (Art. 615 y 616-1 E.T.), la orientación correcta es:",
                "options": [
                    "Indicar que la factura electrónica es opcional para pequeños comercios y solo se exige cuando el cliente la solicita expresamente para efectos contables.",
                    "Explicar que la facturación electrónica es un mecanismo de soporte de operaciones sujeto a requisitos legales, y que su incumplimiento puede generar sanciones conforme a la normativa tributaria.",
                    "Señalar que basta con registrar las ventas en un cuaderno interno, porque la DIAN valida las operaciones únicamente a través de la declaración anual."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el Gestor I debe orientar sobre la obligación formal y sus efectos, sin reemplazar asesoría particular pero dando información precisa. A y C minimizan obligaciones y riesgos legales."
            },
            {
                "id": "m5_c17",
                "text": "Caso: Durante una feria de formalización, un emprendedor pregunta la diferencia entre obligaciones sustanciales y obligaciones formales.\n\nEnunciado: La explicación ajustada que debe brindar el Gestor I es:",
                "options": [
                    "Las obligaciones sustanciales se refieren al pago del tributo debido, mientras que las formales comprenden deberes como inscribirse, declarar, facturar, informar y conservar soportes.",
                    "Las obligaciones formales son las únicas exigibles a personas naturales, y las sustanciales aplican exclusivamente a grandes contribuyentes y personas jurídicas.",
                    "No existe diferencia práctica entre ambas, porque el incumplimiento de cualquier deber tributario siempre se sanciona de la misma manera."
                ],
                "correct": 0,
                "explanation": "La opción A es correcta: distingue el deber material de pagar del conjunto de deberes instrumentales/procedimentales. B y C contienen errores conceptuales que afectan la orientación al ciudadano."
            },
            {
                "id": "m5_c18",
                "text": "Caso: Un responsable obligado a facturar electrónicamente sufre una falla tecnológica y no puede transmitir facturas al sistema autorizado durante algunas horas.\n\nEnunciado: En orientación general sobre facturación electrónica, el Gestor I debe indicar que:",
                "options": [
                    "Puede suspender todas las ventas hasta que el sistema se restablezca, porque no existe ningún mecanismo alterno para soportar operaciones en contingencia.",
                    "Debe atender los procedimientos de contingencia previstos en la normativa de facturación electrónica y posteriormente cumplir la transmisión/regularización según las reglas aplicables.",
                    "Puede emitir comprobantes informales sin requisitos y reportarlos acumulados al final del año, sin aplicar los esquemas de contingencia definidos por la DIAN."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la normativa prevé mecanismos de contingencia con condiciones y deberes posteriores; la orientación debe ser prudente y remitir a la regla vigente. A y C son inexactos."
            },
            {
                "id": "m5_c19",
                "text": "Caso: Un ciudadano consulta en un Núcleo de Apoyo Contable y Fiscal (NAF) cómo organizar sus soportes de ingresos y gastos para cumplir sus deberes tributarios.\n\nEnunciado: Conforme al propósito de los NAF y a la cultura de la contribución, el Gestor I debe:",
                "options": [
                    "Elaborar la contabilidad completa del ciudadano y firmar sus declaraciones, asumiendo la representación tributaria como parte del servicio NAF.",
                    "Brindar orientación pedagógica sobre organización de soportes, deberes formales y uso de canales oficiales, sin sustituir la responsabilidad del obligado ni emitir asesoría particular vinculante.",
                    "Indicar que los NAF solo atienden a grandes contribuyentes y remitir al ciudadano a un proceso de fiscalización para resolver sus dudas básicas."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: los NAF promueven cultura contributiva y orientación general; no reemplazan la responsabilidad del contribuyente ni funciones reservadas. A excede el alcance y C desconoce el propósito del programa."
            },
            {
                "id": "m5_c20",
                "text": "Caso: Un contribuyente manifiesta dificultad económica para cumplir una obligación en mora y pregunta qué opciones existen antes de enfrentar medidas de cobro.\n\nEnunciado: En una orientación inicial desde asistencia al usuario, el Gestor I debe:",
                "options": [
                    "Garantizar que la DIAN condonará automáticamente intereses y sanciones si el contribuyente explica verbalmente su situación económica en ventanilla.",
                    "Informar de manera general sobre la importancia de atender la obligación, los canales oficiales para conocer el estado de cuenta y las alternativas previstas en la normativa, remitiendo a la dependencia competente cuando aplique.",
                    "Aconsejar no presentar declaraciones ni realizar pagos hasta recibir una notificación de cobro coactivo, para evitar generar nuevos soportes en el sistema."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el Gestor I orienta con información general, verificable y por canales oficiales, sin prometer beneficios no automáticos. A crea falsas expectativas y C incentiva incumplimiento."
            },
            {
                "id": "m5_c21",
                "text": "Caso: Un microempresario pregunta si puede acogerse al Régimen Simple de Tributación (RST) y cuáles son las ventajas generales frente a su situación actual.\n\nEnunciado: La actuación adecuada del Gestor I es:",
                "options": [
                    "Confirmar de inmediato su inclusión en el RST porque todo microempresario califica automáticamente por tener bajos ingresos.",
                    "Orientar sobre la existencia del RST (Art. 903 E.T. y normas reglamentarias), explicar que su procedencia depende del cumplimiento de requisitos y remitir a las fuentes oficiales para validar su caso.",
                    "Negar la posibilidad sin revisar criterios generales, indicando que el RST fue eliminado y que todos los contribuyentes deben tributar por el régimen ordinario."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la orientación debe ser precisa, condicionada a requisitos legales y basada en fuentes oficiales. A y C entregan información incorrecta."
            },
            {
                "id": "m5_c22",
                "text": "Caso: Un contribuyente consulta si puede descontar cualquier gasto personal en sus obligaciones tributarias solo por contar con un recibo de pago.\n\nEnunciado: En el marco de la cultura de la contribución y la correcta orientación, el Gestor I debe:",
                "options": [
                    "Afirmar que todo recibo permite disminuir impuestos, porque el soporte de pago demuestra automáticamente la procedencia fiscal del gasto.",
                    "Explicar que los beneficios, costos o deducciones dependen de requisitos legales específicos y de la correcta sustentación, orientando a revisar la norma y canales oficiales aplicables.",
                    "Indicar que la procedencia de costos y deducciones es una decisión discrecional del funcionario que atiende, según la apariencia razonable del soporte."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: no todo pago es deducible/procedente; la orientación debe evitar afirmaciones absolutas y remitir a requisitos normativos. A y C inducen error."
            },
            {
                "id": "m5_c23",
                "text": "Caso: En una actividad de pedagogía tributaria, varios asistentes confunden el deber de presentar una declaración informativa con el pago efectivo de un impuesto.\n\nEnunciado: La orientación más clara del Gestor I es:",
                "options": [
                    "Explicar que una declaración informativa comunica datos a la administración y no siempre implica pagar, mientras que la obligación sustancial consiste en pagar el tributo cuando exista.",
                    "Indicar que toda declaración, sin excepción, genera un valor a pagar y que las declaraciones informativas solo cambian el nombre del impuesto.",
                    "Señalar que las declaraciones informativas son opcionales y pueden omitirse si el contribuyente no tiene recursos para cumplir obligaciones formales."
                ],
                "correct": 0,
                "explanation": "La opción A es correcta: diferencia entre deberes formales de información y obligaciones de pago. B y C confunden conceptos y pueden generar incumplimiento."
            },
            {
                "id": "m5_c24",
                "text": "Caso: Un comerciante pregunta qué debe hacer si la DIAN establece la exigencia de facturación electrónica para su actividad y aún no ha adoptado el sistema.\n\nEnunciado: La orientación inicial adecuada del Gestor I es:",
                "options": [
                    "Recomendar esperar un requerimiento sancionatorio para iniciar la implementación, ya que las obligaciones tecnológicas solo se vuelven exigibles tras una fiscalización.",
                    "Informar sobre la obligación de adoptar el mecanismo de facturación electrónica conforme a la normativa, consultar el calendario/condiciones aplicables y usar los canales oficiales y guías de habilitación.",
                    "Sugerir continuar con facturación manual indefinidamente si el volumen de ventas es bajo, registrando las operaciones solo en medios privados."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la orientación debe promover cumplimiento oportuno, remitiendo a reglas, habilitación y canales oficiales. A y C promueven mora e incumplimiento."
            },
            {
                "id": "m5_c25",
                "text": "Caso: Un contribuyente pregunta por qué la DIAN insiste en conservar soportes de operaciones y declaraciones durante los plazos legales.\n\nEnunciado: La respuesta correcta del Gestor I es que la conservación de soportes:",
                "options": [
                    "Es un trámite opcional útil solo para estadísticas internas del contribuyente, sin relación con procesos de verificación o fiscalización.",
                    "Permite acreditar la veracidad de las operaciones, atender requerimientos, ejercer el derecho de defensa y cumplir deberes formales dentro de los términos legales.",
                    "Solo es necesaria cuando el contribuyente prevé solicitar una devolución, pudiendo eliminar los demás documentos al cierre de cada mes."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la conservación documental respalda cumplimiento, control y defensa del contribuyente. A y C desconocen su finalidad legal."
            },
            {
                "id": "m5_c26",
                "text": "Caso: Un pequeño contribuyente obligado a factura electrónica informa que, por falla eléctrica, expidió documentos de contingencia durante dos días y no sabe si debe transmitirlos ni qué soporte conservar.\n\nEnunciado: En orientación basada en la documentación (facturación electrónica/contingencia), el Gestor I debe:",
                "options": [
                    "Indicar que los documentos de contingencia reemplazan definitivamente la factura electrónica y no requieren transmisión posterior.",
                    "Orientar que la contingencia es excepcional, debe cumplir condiciones y transmisión/regularización según la normativa vigente, conservar soportes y verificar requisitos aplicables al caso por canales oficiales.",
                    "Recomendar anular las ventas y rehacerlas cuando el sistema funcione, sin revisar efectos tributarios o documentales."
                ],
                "correct": 1,
                "explanation": "La opción B da orientación correcta y prudente: contingencia no elimina deberes de regularización/soporte; se remite a regla vigente. A y C desinforman."
            },
            {
                "id": "m5_c27",
                "text": "Caso: Un contribuyente pregunta si puede acogerse al RST porque \"sus ingresos son bajos\", pero también participa en estructuras societarias y tiene actividades que podrían generar incompatibilidades.\n\nEnunciado: La orientación profesional adecuada es:",
                "options": [
                    "Confirmar el ingreso al RST porque el único criterio relevante es el monto aproximado de ingresos.",
                    "Explicar que el RST depende del cumplimiento integral de requisitos y ausencia de causales de exclusión/incompatibilidad según la norma; orientar verificación por fuentes oficiales sin afirmar elegibilidad sin revisión completa.",
                    "Negar automáticamente por tener cualquier relación empresarial, sin revisar el tipo de participación o la norma aplicable."
                ],
                "correct": 1,
                "explanation": "La opción B evita afirmaciones absolutas y se ajusta al análisis normativo integral. A y C simplifican en exceso y pueden inducir error."
            },
            {
                "id": "m5_c28",
                "text": "Caso: Un comerciante recibe orientación contradictoria: un tercero le dijo que un ingreso no declarado \"no cuenta\" si no le emitieron factura. Consulta a la DIAN por el deber de cumplimiento.\n\nEnunciado: La orientación correcta de cultura de la contribución es:",
                "options": [
                    "Confirmar que sin factura no existe ingreso fiscal y por tanto no hay deber de declarar.",
                    "Explicar que las obligaciones tributarias dependen de la realidad económica/normativa aplicable; la falta de factura puede ser incumplimiento formal, pero no elimina por sí sola la obligación sustancial o deberes de información cuando procedan.",
                    "Aconsejar no mencionar el ingreso hasta que la DIAN lo detecte, para evitar ajustes."
                ],
                "correct": 1,
                "explanation": "La opción B distingue forma y sustancia sin promover evasión: la ausencia de factura no borra automáticamente hechos económicos relevantes. A y C son incorrectos."
            },
            {
                "id": "m5_c29",
                "text": "Caso: Una persona natural pregunta por beneficios tributarios asociados a pagos electrónicos y soportes, pero mezcla conceptos de deducciones, costos y descuentos sin distinguirlos.\n\nEnunciado: El Gestor I debe:",
                "options": [
                    "Responder con un ejemplo genérico indicando que todos esos conceptos funcionan igual si hay factura.",
                    "Aclarar, en lenguaje comprensible, que costos, deducciones y beneficios tienen requisitos legales distintos; orientar sobre la necesidad de soportes válidos y verificación normativa/canales oficiales sin asesoría particular vinculante.",
                    "Evitar la explicación porque son temas contables que la DIAN no debe abordar en asistencia al ciudadano."
                ],
                "correct": 1,
                "explanation": "La opción B brinda orientación útil y precisa, diferenciando conceptos sin invadir asesoría particular. A confunde categorías y C omite el deber de orientación."
            },
            {
                "id": "m5_c30",
                "text": "Caso: Un contribuyente en mora quiere \"ponerse al día\" pero desconoce si debe corregir declaraciones, presentar informativas, actualizar RUT o atender una comunicación electrónica vencida.\n\nEnunciado: La orientación más completa y segura es:",
                "options": [
                    "Indicarle que solo debe pagar el valor que recuerde y esperar que el sistema ajuste lo demás.",
                    "Orientar una revisión por obligaciones (RUT actualizado, comunicaciones/notificaciones, declaraciones/informativas, soportes y pago), usando canales oficiales para verificar estado de cuenta y remitiendo a las dependencias competentes cuando el caso requiera actuación específica.",
                    "Recomendar no actuar hasta recibir cobro coactivo, porque cualquier corrección genera más sanciones automáticamente."
                ],
                "correct": 1,
                "explanation": "La opción B promueve cumplimiento integral y verificación oficial, sin promesas ni omisiones. A y C son incompletos o contraproducentes."
            },
            {
                "id": "m5_c31",
                "text": "Caso: Un emprendedor pregunta si puede operar sin expedir factura electrónica porque sus ventas son \"esporádicas\" y cobra por transferencias personales.\n\nEnunciado: Conforme a deberes formales y cultura de cumplimiento, el Gestor I debe:",
                "options": [
                    "Confirmar que las ventas esporádicas y transferencias personales están exentas de facturación y registro.",
                    "Orientar que la exigencia de facturar/soportar operaciones depende de la normativa aplicable, calidad del obligado y sistema de facturación; la informalidad o el medio de pago no elimina por sí sola los deberes formales.",
                    "Sugerir emitir recibos informales mientras las ventas no superen un monto que el usuario estime razonable."
                ],
                "correct": 1,
                "explanation": "La opción B evita generalizaciones y orienta al cumplimiento según norma. A y C promueven informalidad."
            }
        ]
    },
    {
        "id": "m6",
        "examArea": "funcional",
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
            },
            {
                "id": "m6_c16",
                "text": "Caso: En una revisión de procesos del Punto de Contacto, el Gestor I detecta que se reciben documentos sin lista de verificación estandarizada, lo que genera reprocesos frecuentes.\n\nEnunciado: Desde el Modelo Integrado de Planeación y Gestión (MIPG) y la cultura de control, la acción más apropiada es:",
                "options": [
                    "Continuar con la práctica actual porque cada funcionario puede definir su propio método de revisión según la experiencia adquirida en ventanilla.",
                    "Proponer y aplicar, según el procedimiento, un control operativo sencillo (como lista de verificación) para prevenir errores y reportar la mejora al responsable del proceso.",
                    "Trasladar la responsabilidad a la Oficina de Control Interno para que diseñe todos los controles operativos, sin intervenir en la mejora del proceso."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la primera línea de defensa gestiona riesgos y controles diarios; MIPG promueve mejora continua y autocontrol. A perpetúa el riesgo y C desconoce la corresponsabilidad operativa."
            },
            {
                "id": "m6_c17",
                "text": "Caso: Un contratista solicita acceso a una base de datos con información tributaria de contribuyentes para cruzar estadísticas de atención, sin que ello esté previsto en el objeto contractual.\n\nEnunciado: Conforme a la reserva legal tributaria (Arts. 583 y 584 E.T.) y al principio de finalidad, el Gestor I debe:",
                "options": [
                    "Autorizar el acceso si el contratista firma un acuerdo de confidencialidad verbal, porque la información se usará solo con fines estadísticos.",
                    "Negar el acceso no autorizado y orientar que cualquier tratamiento de información reservada debe contar con habilitación legal, necesidad funcional y controles formales.",
                    "Entregar la información anonimizada por iniciativa propia, sin validación institucional, para apoyar la elaboración de estadísticas externas."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la información tributaria está protegida por reserva; su acceso exige sustento legal y controles. A y C exponen datos sin autorización válida."
            },
            {
                "id": "m6_c18",
                "text": "Caso: Un ciudadano presenta una solicitud de acceso a información pública sobre estadísticas agregadas de atención en los Puntos de Contacto, sin pedir datos personales de contribuyentes.\n\nEnunciado: De acuerdo con la Ley 1712 de 2014 (Transparencia y Acceso a la Información Pública), la DIAN debe:",
                "options": [
                    "Entregar la información pública disponible en los términos legales, siempre que no esté sujeta a reserva o excepción constitucional/legal.",
                    "Negar toda solicitud de información estadística porque la DIAN maneja datos tributarios y toda su información es reservada.",
                    "Responder únicamente si el solicitante demuestra un interés directo y acredita la finalidad judicial de la solicitud."
                ],
                "correct": 0,
                "explanation": "La opción A es correcta: la transparencia es la regla general para información pública no reservada; la reserva tributaria protege datos específicos, no impide estadísticas agregadas públicas. B y C aplican excepciones de forma indebida."
            },
            {
                "id": "m6_c19",
                "text": "Caso: En la gestión de un expediente físico de trámites del RUT, el Gestor I encuentra documentos sin foliar y sin clasificación clara en la serie documental correspondiente.\n\nEnunciado: Conforme a la gestión documental y archivo (Ley 594 de 2000 y lineamientos institucionales), la actuación correcta es:",
                "options": [
                    "Archivar los documentos tal como se encuentran para no alterar el orden en que fueron recibidos, aunque no exista foliado ni clasificación.",
                    "Organizar el expediente conforme a los principios de orden, procedencia y foliación, aplicando las tablas de retención/documentales y reportando la novedad si afecta el control del archivo.",
                    "Digitalizar los documentos y destruir los soportes físicos de inmediato para ahorrar espacio, sin validar tablas de retención ni autorización."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la gestión documental exige organización, trazabilidad y cumplimiento de instrumentos archivísticos. A mantiene el desorden y C puede vulnerar reglas de conservación/eliminación."
            },
            {
                "id": "m6_c20",
                "text": "Caso: El equipo del Punto de Contacto recibe resultados de una medición de experiencia del ciudadano que evidencian demoras en la orientación inicial.\n\nEnunciado: En el marco de MIPG (gestión por resultados y mejora continua), el Gestor I debe:",
                "options": [
                    "Desestimar la medición porque la percepción ciudadana es subjetiva y no se relaciona con el cumplimiento de metas institucionales.",
                    "Analizar las causas operativas de la demora, participar en acciones de mejora dentro de su rol y aplicar ajustes que favorezcan oportunidad y calidad del servicio.",
                    "Aumentar el ritmo de atención omitiendo explicaciones necesarias, para mejorar el indicador de tiempo sin considerar la efectividad de la orientación."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: MIPG impulsa decisiones basadas en información y mejora continua; el servicio debe ser oportuno y efectivo. A ignora evidencia útil y C sacrifica calidad."
            },
            {
                "id": "m6_c21",
                "text": "Caso: Un funcionario de otra entidad solicita por teléfono información puntual de la declaración de renta de un contribuyente para una verificación interna.\n\nEnunciado: Conforme al artículo 583 del E.T. y a los procedimientos de intercambio de información, el Gestor I debe:",
                "options": [
                    "Suministrar la información por teléfono para colaborar con la otra entidad, siempre que el solicitante indique su cargo y la finalidad de la consulta.",
                    "Abstenerse de entregar información reservada por canales no formales y orientar que el intercambio debe tramitarse por los mecanismos legales e institucionales autorizados.",
                    "Enviar una captura de pantalla del sistema al correo personal del solicitante para agilizar la cooperación interinstitucional."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la reserva tributaria exige canales formales y habilitación legal para cualquier acceso o intercambio. A y C violan la reserva y controles de seguridad."
            },
            {
                "id": "m6_c22",
                "text": "Caso: La dirección de la seccional define una acción preventiva para reducir el riesgo de suplantación en trámites del RUT, asignando responsabilidades a los Gestores I.\n\nEnunciado: Dentro del esquema de gestión de riesgos de MIPG, esta actuación corresponde principalmente a:",
                "options": [
                    "La tercera línea de defensa, porque toda medida preventiva debe ser ejecutada únicamente por la Oficina de Control Interno.",
                    "La primera y segunda línea según sus roles: operación y supervisión/asesoría implementan controles, mientras la auditoría interna evalúa independientemente.",
                    "Un mecanismo ajeno a MIPG, dado que la gestión de riesgos solo aplica a procesos financieros y de recaudo."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el modelo de tres líneas distribuye responsabilidades entre gestión operativa, funciones de soporte/riesgo y aseguramiento independiente. A y C interpretan erróneamente el modelo."
            },
            {
                "id": "m6_c23",
                "text": "Caso: Un ciudadano solicita conocer qué datos personales asociados a su RUT conserva la DIAN y pide corrección de uno de ellos por estar desactualizado.\n\nEnunciado: En coordinación con las normas de protección de datos y atención al ciudadano, el Gestor I debe:",
                "options": [
                    "Negar la solicitud indicando que los datos del RUT no pueden ser consultados ni corregidos por el titular una vez inscritos.",
                    "Orientar al titular sobre los canales y requisitos para el ejercicio de sus derechos y gestionar la corrección registral cuando proceda, previa verificación de identidad y soportes.",
                    "Modificar el dato sin verificación para atender rápidamente al ciudadano, asumiendo que el titular siempre conoce la información correcta."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: el titular puede solicitar acceso/corrección por canales definidos, con verificación y soportes para proteger la integridad del registro. A y C son incorrectos y riesgosos."
            },
            {
                "id": "m6_c24",
                "text": "Caso: Al preparar un informe de gestión, el Gestor I identifica que un indicador fue calculado con datos incompletos por un error en la fuente de información.\n\nEnunciado: Conforme a los principios de transparencia, integridad de la información y control, el Gestor I debe:",
                "options": [
                    "Mantener el indicador publicado para no afectar la imagen del área, esperando corregirlo en el siguiente periodo de reporte.",
                    "Informar oportunamente la inconsistencia, corregir el dato con sustento verificable y dejar trazabilidad del ajuste realizado.",
                    "Eliminar el indicador del informe sin explicación, evitando referencias a la fuente o al método de cálculo utilizado."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la información de gestión debe ser veraz y trazable; corregir transparentemente fortalece el control y la confianza. A y C afectan la integridad institucional."
            },
            {
                "id": "m6_c25",
                "text": "Caso: Un líder de proceso solicita al Gestor I compartir por un grupo de mensajería no institucional el listado de contribuyentes citados para una jornada de asistencia, para agilizar la logística.\n\nEnunciado: Conforme a la seguridad de la información, reserva y gobierno de datos, el Gestor I debe:",
                "options": [
                    "Compartir el listado por el canal solicitado, siempre que los participantes del grupo sean funcionarios o contratistas de la entidad.",
                    "Usar únicamente canales institucionales autorizados y verificar que la información compartida sea la mínima necesaria conforme a la finalidad y permisos aplicables.",
                    "Publicar el listado en un archivo accesible para todo el equipo sin controles, para facilitar la consulta durante la jornada."
                ],
                "correct": 1,
                "explanation": "La opción B es correcta: la protección de datos exige canales seguros, minimización y autorización. A y C exponen información sensible en canales o accesos no controlados."
            },
            {
                "id": "m6_c26",
                "text": "Caso: Un área solicita consolidar información para un informe de servicio usando datos de RUT, PQRSD y trazabilidad operativa. Parte de la información incluye datos personales no necesarios para el indicador.\n\nEnunciado: Conforme a MIPG, gobierno de datos, minimización y protección de información, el Gestor I debe:",
                "options": [
                    "Compartir toda la base para que el área de informes decida qué usar, agilizando la entrega.",
                    "Entregar solo los datos mínimos necesarios para la finalidad legítima, usar canales autorizados, aplicar controles de acceso y evitar exponer información sensible innecesaria.",
                    "Anonimizar manualmente eliminando nombres al azar, sin validar si otros campos permiten identificar al titular."
                ],
                "correct": 1,
                "explanation": "La opción B aplica minimización, finalidad y seguridad. A sobreexpone datos y C hace una anonimización insuficiente/no controlada."
            },
            {
                "id": "m6_c27",
                "text": "Caso: Un juez civil solicita información tributaria en un proceso distinto de los supuestos habilitados expresamente por la reserva tributaria; no se observa orden/competencia en los términos de la norma aplicable.\n\nEnunciado: La actuación correcta es:",
                "options": [
                    "Entregar la información por tratarse de una autoridad judicial, sin revisar la habilitación específica.",
                    "Verificar la competencia, fundamento legal y alcance de la solicitud; si no encuadra en las excepciones/procedimiento aplicable, abstenerse de entregar datos reservados y encauzar por el canal institucional competente.",
                    "Enviar un resumen informal por correo para colaborar, evitando registrar la entrega."
                ],
                "correct": 1,
                "explanation": "La opción B protege la reserva legal tributaria (Art. 583/584 E.T. y reglas aplicables) y exige cauce formal. A asume una excepción inexistente y C evade controles."
            },
            {
                "id": "m6_c28",
                "text": "Caso: En una respuesta de transparencia, la entidad puede entregar estadísticas de atención, pero el solicitante también pide números de identificación de contribuyentes atendidos en casos específicos.\n\nEnunciado: La respuesta ajustada a Ley 1712 y protección/reserva de datos es:",
                "options": [
                    "Negar toda la solicitud por incluir un componente sensible.",
                    "Entregar la información pública/estadística procedente y negar o restringir los datos personales/reservados, motivando la excepción y aplicando el principio de divisibilidad cuando corresponda.",
                    "Entregar los números de identificación si el solicitante afirma que usará la información con fines académicos."
                ],
                "correct": 1,
                "explanation": "La opción B aplica divisibilidad: se entrega lo público y se protege lo reservado/personal. A es excesivo y C no constituye habilitación suficiente."
            },
            {
                "id": "m6_c29",
                "text": "Caso: Un equipo propone usar una herramienta de IA no autorizada para resumir expedientes con datos de contribuyentes y acelerar respuestas.\n\nEnunciado: Desde seguridad de la información, reserva y control institucional, el Gestor I debe:",
                "options": [
                    "Usarla si mejora la productividad, siempre que luego borre el historial.",
                    "Abstenerse de cargar información sensible en herramientas no autorizadas, seguir los lineamientos institucionales de seguridad/gobierno de datos y reportar la necesidad por canales formales.",
                    "Cargar solo fragmentos de expedientes, suponiendo que así desaparece el riesgo."
                ],
                "correct": 1,
                "explanation": "La opción B protege confidencialidad y cumplimiento: herramientas no autorizadas pueden exponer datos reservados. A y C subestiman el riesgo."
            },
            {
                "id": "m6_c30",
                "text": "Caso: Se detecta un patrón de errores en validación documental que afecta varios Puntos de Contacto. Cada equipo lo corrige de forma distinta y no hay trazabilidad común.\n\nEnunciado: La respuesta alineada con MIPG (mejora continua, control y gestión del conocimiento) es:",
                "options": [
                    "Permitir que cada punto mantenga su criterio para respetar la autonomía operativa.",
                    "Documentar el riesgo/causa, estandarizar la corrección con base en procedimiento vigente, comunicar la pauta, capacitar y hacer seguimiento con trazabilidad.",
                    "Esperar la auditoría anual para que controle y defina la corrección."
                ],
                "correct": 1,
                "explanation": "La opción B aplica primera/segunda línea: estandariza, controla y mejora con evidencia. A genera inconsistencia y C es reactivo tardío."
            },
            {
                "id": "m6_c31",
                "text": "Caso: Un funcionario comparte por error un archivo con datos de contribuyentes en un repositorio de acceso amplio. El Gestor I lo detecta al buscar información para una respuesta.\n\nEnunciado: La actuación inmediata y responsable es:",
                "options": [
                    "Ignorar el hallazgo si el archivo no se relaciona con su trámite actual.",
                    "Activar el manejo del incidente según procedimiento: limitar acceso/custodia por los canales autorizados, escalar al responsable de seguridad/información y evitar nuevas divulgaciones, preservando trazabilidad.",
                    "Descargar el archivo para analizarlo y reenviarlo por correo a su jefe como evidencia."
                ],
                "correct": 1,
                "explanation": "La opción B contiene el incidente y protege la información mediante canales formales. A omite el deber de protección y C puede ampliar la exposición."
            }
        ]
    },
    {
        "id": "m7",
        "examArea": "comportamental_integridad",
        "title": "Módulo 7: Competencias Res. 065 de 2024",
        "navLabel": "⭐ M.7: Competencias 065",
        "homeLabel": "Módulo 7: Competencias Comportamentales Res. 065 de 2024",
        "theoryId": "modulo-7",
        "cases": [
            {
                "id": "m7_c1",
                "examSubArea": "comportamental",
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
                "examSubArea": "comportamental",
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
                "examSubArea": "comportamental",
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
                "examSubArea": "comportamental",
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
                "examSubArea": "comportamental",
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
                "examSubArea": "integridad",
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
                "examSubArea": "comportamental",
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
                "examSubArea": "comportamental",
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
                "examSubArea": "comportamental",
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
                "examSubArea": "integridad",
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
                "examSubArea": "comportamental",
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
                "examSubArea": "integridad",
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
                "examSubArea": "integridad",
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
                "examSubArea": "integridad",
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
                "examSubArea": "integridad",
                "text": "Caso: Un Gestor I es consultado por un usuario sobre cómo evadir legalmente el pago de una sanción tributaria en firme mediante maniobras de ocultamiento de bienes.\n\nEnunciado: Conforme a la competencia de \"Compromiso Institucional y Ética Pública\" (Res. 065 de 2024), el servidor debe:",
                "options": [
                    "Brindarle la asesoría solicitada a título personal y confidencial fuera del Punto de Contacto, cobrándole honorarios profesionales privados como contador.",
                    "Recordarle enfáticamente que el rol de los servidores de la DIAN es velar por el cumplimiento de la ley y el recaudo ético, rechazando cualquier maniobra de evasión.",
                    "Hacerse el desentendido y derivar al ciudadano a la ventanilla de un compañero recién posesionado para que este asuma el manejo de la conversación irregular."
                ],
                "correct": 1,
                "explanation": "La opción B es la correcta. El compromiso institucional y la ética pública exigen actuar como guardianes de la legalidad y el recaudo público, rechazando cualquier forma de evasión o fraude fiscal. Las opciones A y C son conductas corruptas o evasivas."
            },
            {
                "id": "m7_c16",
                "examSubArea": "comportamental",
                "text": "Caso: La DIAN actualiza el procedimiento para validar documentos en la inscripción del RUT y el Gestor I debe aplicar la nueva guía desde el día siguiente, aunque aún no domina todos los cambios.\n\nEnunciado: De acuerdo con la competencia de Adaptabilidad (Res. 065 de 2024), la conducta más alineada es:",
                "options": [
                    "Solicitar que se suspenda la aplicación del nuevo procedimiento hasta recibir una capacitación completa, manteniendo la práctica anterior durante varias semanas.",
                    "Revisar la guía vigente, consultar las dudas por los canales internos, aplicar los cambios con disposición y ajustar su práctica para asegurar un servicio correcto.",
                    "Aplicar el procedimiento anterior cuando haya fila, porque la adaptación solo es exigible en jornadas de baja demanda de usuarios."
                ],
                "correct": 1,
                "explanation": "La opción B refleja Adaptabilidad: comprender el cambio, integrarlo oportunamente y ajustar la conducta para cumplir objetivos institucionales. A posterga indebidamente y C condiciona el cambio a la conveniencia operativa."
            },
            {
                "id": "m7_c17",
                "examSubArea": "integridad",
                "text": "Caso: Un usuario insiste en que el Gestor I le \"ayude\" omitiendo un requisito documental para agilizar la actualización de su RUT, afirmando que otros funcionarios lo han hecho antes.\n\nEnunciado: Según la competencia de Comportamiento ético (Res. 065 de 2024) y el Código de Integridad DIAN, el Gestor I debe:",
                "options": [
                    "Omitir el requisito en esta ocasión para resolver la necesidad del ciudadano, siempre que el caso no genere un impacto inmediato en el recaudo.",
                    "Actuar con integridad, explicar que no es posible omitir requisitos legales, aplicar el procedimiento correcto y ofrecer orientación clara sobre cómo cumplirlo.",
                    "Trasladar al usuario a otra ventanilla sin explicación, evitando responder directamente a la solicitud de omitir el requisito."
                ],
                "correct": 1,
                "explanation": "La opción B demuestra Comportamiento ético: coherencia entre principios y actuación, respeto por la norma y trato claro al ciudadano. A compromete la integridad y C no gestiona adecuadamente la situación."
            },
            {
                "id": "m7_c18",
                "examSubArea": "comportamental",
                "text": "Caso: Un contribuyente no comprende la explicación técnica sobre una inconsistencia en su RUT y manifiesta frustración porque ha recibido respuestas confusas.\n\nEnunciado: En aplicación de la competencia de Comunicación efectiva (Res. 065 de 2024), el Gestor I debe:",
                "options": [
                    "Repetir la misma explicación técnica con mayor velocidad para concluir la atención, asumiendo que el usuario entenderá si escucha nuevamente.",
                    "Escuchar activamente, reformular la información con lenguaje claro, verificar la comprensión del ciudadano y confirmar los pasos concretos que debe seguir.",
                    "Entregarle un enlace normativo sin contexto y dar por terminada la orientación, ya que la interpretación de las normas corresponde al usuario."
                ],
                "correct": 1,
                "explanation": "La opción B refleja Comunicación efectiva: escucha, claridad, adaptación del mensaje y verificación de comprensión. A y C no aseguran que el mensaje sea entendido."
            },
            {
                "id": "m7_c19",
                "examSubArea": "comportamental",
                "text": "Caso: El Gestor I tiene una meta diaria de orientaciones y, además, detecta errores recurrentes en la documentación presentada por los usuarios que retrasan los trámites.\n\nEnunciado: Conforme a la competencia de Orientación al logro (Res. 065 de 2024), la conducta más adecuada es:",
                "options": [
                    "Concentrarse solo en aumentar el número de atenciones, reduciendo las explicaciones para cumplir la meta aunque los usuarios cometan los mismos errores.",
                    "Organizar su trabajo para cumplir las metas con calidad, identificar acciones que prevengan reprocesos y proponer mejoras que favorezcan resultados sostenibles.",
                    "Suspender la atención cuando se presenten errores documentales, argumentando que los reprocesos impiden alcanzar los indicadores asignados."
                ],
                "correct": 1,
                "explanation": "La opción B evidencia Orientación al logro: cumplir objetivos con calidad, uso eficiente de recursos y responsabilidad por resultados. A prioriza cantidad sobre efectividad y C evade el problema."
            },
            {
                "id": "m7_c20",
                "examSubArea": "integridad",
                "text": "Caso: Al final de la jornada, llega una usuaria que ha tenido dificultades para completar un trámite del RUT por falta de claridad en los requisitos y se encuentra preocupada por un vencimiento próximo.\n\nEnunciado: Según la competencia de Orientación al usuario y al ciudadano (Res. 065 de 2024), el Gestor I debe:",
                "options": [
                    "Indicarle que regrese otro día con todos los documentos, sin revisar su caso, porque la explicación detallada puede extender la jornada laboral.",
                    "Atenderla con respeto y empatía, identificar su necesidad específica, brindarle información precisa y orientarla sobre la ruta más efectiva para cumplir el trámite.",
                    "Remitirla a consultar la página web sin explicar los pasos aplicables a su situación, dado que la orientación personalizada no aplica ante vencimientos cercanos."
                ],
                "correct": 1,
                "explanation": "La opción B refleja Orientación al usuario y al ciudadano: escucha, trato respetuoso y solución oportuna dentro de las competencias del cargo. A y C no responden efectivamente a la necesidad."
            },
            {
                "id": "m7_c21",
                "examSubArea": "comportamental",
                "text": "Caso: Un compañero nuevo del Punto de Contacto comete errores al orientar sobre canales digitales y solicita apoyo al Gestor I en medio de una jornada con alta demanda.\n\nEnunciado: De acuerdo con la competencia de Trabajo en equipo (Res. 065 de 2024), la conducta más apropiada es:",
                "options": [
                    "Evitar intervenir para no afectar su propio rendimiento, indicando que cada funcionario debe responder individualmente por sus atenciones.",
                    "Brindar apoyo puntual y coordinado, compartir la información correcta y acordar mecanismos de consulta que ayuden al equipo a mantener la calidad del servicio.",
                    "Corregir al compañero frente a los usuarios con un tono descalificador, para que los ciudadanos adviertan quién tiene mayor experiencia."
                ],
                "correct": 1,
                "explanation": "La opción B demuestra Trabajo en equipo: colaboración, cumplimiento de objetivos comunes y comunicación respetuosa. A fragmenta el servicio y C afecta el clima laboral y la confianza ciudadana."
            },
            {
                "id": "m7_c22",
                "examSubArea": "integridad",
                "text": "Caso: Dos usuarios presentan situaciones similares de actualización del RUT; uno es conocido de un funcionario del área y solicita ser atendido con mayor flexibilidad en la revisión documental.\n\nEnunciado: Alineado con los valores de Justicia y Honestidad del Código de Integridad DIAN, el Gestor I debe:",
                "options": [
                    "Aplicar criterios flexibles al usuario conocido para mantener una buena relación institucional, siempre que la diferencia no se registre formalmente.",
                    "Tratar ambos casos con imparcialidad, aplicar los mismos requisitos y procedimientos, y explicar las decisiones con base en la norma y los soportes.",
                    "Remitir ambos casos a otro día para evitar tomar una decisión, sin informar los criterios aplicables ni verificar la documentación presentada."
                ],
                "correct": 1,
                "explanation": "La opción B refleja Justicia y Honestidad: imparcialidad, igualdad de trato y decisiones basadas en normas. A favorece indebidamente y C omite el deber de servicio."
            },
            {
                "id": "m7_c23",
                "examSubArea": "integridad",
                "text": "Caso: Un Gestor I recibe retroalimentación sobre demoras en el registro de orientaciones y oportunidades de mejora en la calidad de sus respuestas.\n\nEnunciado: Conforme a las competencias de Compromiso con la organización y Orientación al logro, la respuesta más adecuada es:",
                "options": [
                    "Justificar las demoras atribuyéndolas exclusivamente a la alta demanda y continuar con la misma práctica de trabajo.",
                    "Analizar la retroalimentación, ajustar su organización y tiempos de registro, y buscar apoyo o aprendizaje para mejorar la calidad y oportunidad del servicio.",
                    "Solicitar que no se le asignen tareas de registro para concentrarse solo en la atención verbal a los ciudadanos."
                ],
                "correct": 1,
                "explanation": "La opción B evidencia compromiso y mejora continua: acepta retroalimentación, corrige y fortalece resultados. A niega la oportunidad de mejora y C desconoce responsabilidades del rol."
            },
            {
                "id": "m7_c24",
                "examSubArea": "integridad",
                "text": "Caso: En el Punto de Contacto, un conocido le pide al Gestor I consultar en Muisca información tributaria de un tercero para \"verificar un negocio\", sin orden judicial ni autorización del titular.\n\nEnunciado: Conforme al valor de Honestidad y a la reserva legal tributaria, el Gestor I debe:",
                "options": [
                    "Realizar la consulta porque se trata de un conocido y compartir solo la información que considere no sensible.",
                    "Negarse a consultar o divulgar información reservada, explicar los límites legales y proteger la confidencialidad de los datos del contribuyente.",
                    "Consultar la información pero pedir al conocido que no la divulgue, dejando la gestión sin registro formal."
                ],
                "correct": 1,
                "explanation": "La opción B aplica Honestidad y cumplimiento de la reserva: los datos tributarios de terceros no se consultan ni divulgan sin habilitación legal. A y C vulneran la confidencialidad y exponen al servidor a sanciones."
            },
            {
                "id": "m7_c25",
                "examSubArea": "integridad",
                "text": "Caso: Al recibir documentos para un trámite del RUT, el Gestor I detecta que un soporte parece alterado, pero el usuario presiona para que el trámite se acepte \"como está\".\n\nEnunciado: Desde el valor de Diligencia e integridad pública, la actuación correcta es:",
                "options": [
                    "Aceptar el documento para no afectar el tiempo de atención, asumiendo que el usuario responderá si hay alguna verificación posterior.",
                    "Aplicar la verificación con debida diligencia, abstenerse de tramitar con soportes inconsistentes y orientar al ciudadano sobre los documentos válidos requeridos.",
                    "Devolver todos los documentos sin explicación y cerrar la atención para evitar una discusión en ventanilla."
                ],
                "correct": 1,
                "explanation": "La opción B refleja Diligencia e integridad: el servidor verifica soportes, protege la validez del trámite y orienta con claridad. A sacrifica el control y C omite el deber de orientación."
            },
            {
                "id": "m7_c26",
                "examSubArea": "integridad",
                "text": "Caso: Un compañero sugiere registrar como atendidos a usuarios que se retiraron de la fila para mejorar los indicadores del Punto de Contacto.\n\nEnunciado: Conforme al valor de Honestidad y al compromiso con la información pública, el Gestor I debe:",
                "options": [
                    "Aceptar la sugerencia si el impacto es pequeño, porque los indicadores ayudan a mostrar la gestión del equipo.",
                    "Rechazar el registro falso, mantener datos veraces y, si es necesario, reportar la práctica por los canales de integridad o control interno.",
                    "Registrar solo una parte de los casos para no afectar tanto el indicador, compensando con atenciones reales del día siguiente."
                ],
                "correct": 1,
                "explanation": "La opción B protege la veracidad de la información institucional, pilar de la integridad pública. A y C manipulan indicadores y pueden configurar faltas."
            },
            {
                "id": "m7_c27",
                "examSubArea": "integridad",
                "text": "Caso: Durante una orientación, un contribuyente hace un comentario discriminatorio sobre otro usuario en sala. El Gestor I debe continuar la atención.\n\nEnunciado: Alineado con el valor de Respeto, la conducta más adecuada es:",
                "options": [
                    "Ignorar el comentario para evitar retrasos y concentrarse únicamente en el trámite solicitado.",
                    "Mantener un trato respetuoso y digno hacia todas las personas, no convalidar expresiones discriminatorias y asegurar que la atención se preste sin sesgos.",
                    "Responder con un comentario similar para neutralizar la situación y mostrar cercanía con el usuario atendido."
                ],
                "correct": 1,
                "explanation": "La opción B aplica Respeto: reconoce la dignidad de todas las personas y evita conductas discriminatorias en el servicio público. A tolera la falta de respeto y C la reproduce."
            },
            {
                "id": "m7_c28",
                "examSubArea": "integridad",
                "text": "Caso: El Gestor I recibe por error acceso a una carpeta compartida con información que no corresponde a sus funciones. Nadie más ha notado la situación.\n\nEnunciado: Conforme a Honestidad, Diligencia y seguridad de la información, debe:",
                "options": [
                    "Explorar la carpeta para conocer su contenido, ya que el acceso fue habilitado por el sistema.",
                    "Abstenerse de consultar información no autorizada, reportar el acceso indebido por el canal correspondiente y proteger la confidencialidad.",
                    "Descargar la información para tener evidencia personal antes de informar, guardándola en un dispositivo externo."
                ],
                "correct": 1,
                "explanation": "La opción B demuestra integridad y cuidado de la información: no usar accesos indebidos y reportarlos oportunamente. A y C incrementan el riesgo de fuga o uso inapropiado."
            },
            {
                "id": "m7_c29",
                "examSubArea": "integridad",
                "text": "Caso: Un usuario ofrece pagar \"por fuera\" para que su trámite del RUT sea gestionado el mismo día, saltando la validación completa de soportes.\n\nEnunciado: Frente a este ofrecimiento, el valor de Justicia y Honestidad exige que el Gestor I:",
                "options": [
                    "Rechazar el ofrecimiento, mantener el trámite bajo las reglas aplicables a todos los usuarios y actuar conforme al procedimiento y a la ley.",
                    "Aceptar solo si el usuario tiene una urgencia demostrable, aplicando después la validación cuando haya menor demanda.",
                    "Negociar una atención más rápida sin pago, pero omitiendo verificaciones menores para compensar el favor."
                ],
                "correct": 1,
                "explanation": "La opción B aplica Justicia y Honestidad: igualdad de trato, rechazo a beneficios indebidos y respeto del procedimiento. A y C introducen arbitrariedad o favorecimiento."
            },
            {
                "id": "m7_c30",
                "examSubArea": "integridad",
                "text": "Caso: Al finalizar el día, el Gestor I advierte que olvidó registrar una actuación en el sistema, lo que puede afectar la trazabilidad del trámite de un contribuyente.\n\nEnunciado: Conforme al valor de Compromiso y responsabilidad, la conducta íntegra es:",
                "options": [
                    "Omitir el registro para no dejar evidencia del retraso y esperar que el caso no sea revisado.",
                    "Registrar la actuación con veracidad tan pronto sea posible, siguiendo el procedimiento aplicable, e informar si se requiere corrección formal.",
                    "Pedir a un compañero que registre la actuación con una hora diferente para que coincida con el flujo normal de atención."
                ],
                "correct": 1,
                "explanation": "La opción B refleja Compromiso y Honestidad: corrige con transparencia y protege la trazabilidad. A y C encubren el error y afectan la confiabilidad institucional."
            },
            {
                "id": "m7_c31",
                "examSubArea": "integridad",
                "text": "Caso: Un proveedor externo solicita al Gestor I información interna sobre tiempos de atención y debilidades operativas del Punto de Contacto para \"ajustar una propuesta comercial\".\n\nEnunciado: Desde la integridad y el debido uso de la información institucional, el Gestor I debe:",
                "options": [
                    "Compartir la información porque puede ayudar a mejorar el servicio, siempre que sea en una conversación informal.",
                    "Abstenerse de entregar información interna no pública y remitir cualquier solicitud a los canales oficiales autorizados por la entidad.",
                    "Enviar únicamente datos críticos por mensajería personal para evitar dejar rastro en los sistemas institucionales."
                ],
                "correct": 1,
                "explanation": "La opción B protege la información institucional y evita conflictos de interés o uso indebido. A y C exponen datos sin autorización ni controles."
            },
            {
                "id": "m7_c32",
                "examSubArea": "integridad",
                "text": "Caso: En una situación de alta presión, un usuario exige trato preferencial alegando influencia en la entidad. El Gestor I sabe que no existe causal legal de prioridad.\n\nEnunciado: Conforme a Justicia e imparcialidad, debe:",
                "options": [
                    "Ceder parcialmente a la exigencia para evitar una queja formal contra el Punto de Contacto.",
                    "Aplicar las reglas de atención con imparcialidad, explicar con respeto los criterios de prioridad legal y mantener el orden del servicio.",
                    "Trasladar al usuario a otra dependencia sin explicación, esperando que allí reciba el trato preferencial solicitado."
                ],
                "correct": 1,
                "explanation": "La opción B demuestra Justicia: decisiones neutrales, basadas en reglas y sin favoritismos. A cede a presión indebida y C evade la responsabilidad."
            },
            {
                "id": "m7_c33",
                "examSubArea": "integridad",
                "text": "Caso: El Gestor I identifica que un trámite propio de un familiar fue asignado a su ventanilla por distribución automática del turno.\n\nEnunciado: La actuación más íntegra es:",
                "options": [
                    "Atender el trámite con especial cuidado para demostrar que no habrá favoritismo, sin informar la relación familiar.",
                    "Declarar el posible conflicto de interés/impedimento según corresponda y gestionar que el trámite sea atendido por otro funcionario imparcial.",
                    "Acelerar el trámite para finalizarlo rápido y evitar cuestionamientos sobre el parentesco."
                ],
                "correct": 1,
                "explanation": "La opción B previene el conflicto de interés y protege la imparcialidad del servicio. A mantiene la intervención en una situación riesgosa y C puede generar favoritismo o apariencia de irregularidad."
            },
            {
                "id": "m7_c34",
                "examSubArea": "integridad",
                "text": "Caso: Un ciudadano entrega dinero adicional \"para agilizar fotocopias\" en el Punto de Contacto, aunque el servicio no tiene costo.\n\nEnunciado: Conforme a Honestidad y transparencia, el Gestor I debe:",
                "options": [
                    "Recibir el dinero si es un valor bajo y usarlo para materiales de oficina cuando falten insumos.",
                    "Rechazar el pago indebido, informar con claridad que el servicio no tiene costo y orientar por el canal correcto si existe algún trámite legítimo asociado.",
                    "Aceptar el dinero y devolverlo después, sin dejar registro ni informar a ningún responsable."
                ],
                "correct": 1,
                "explanation": "La opción B evita cualquier percepción o práctica de pago indebido y refuerza la transparencia. A y C no son compatibles con la integridad en el servicio público."
            },
            {
                "id": "m7_c35",
                "examSubArea": "comportamental",
                "text": "Caso: A mitad de la mañana cambian las prioridades de atención por una jornada especial de RUT y el Gestor I debe apoyar una tarea distinta a la habitual.\n\nEnunciado: Según Adaptabilidad (Res. 065/2024), la conducta más efectiva es:",
                "options": [
                    "Mantenerse solo en su tarea habitual para evitar errores, aunque el equipo requiera apoyo en la nueva prioridad.",
                    "Comprender la nueva prioridad, ajustar su organización, solicitar las orientaciones necesarias y apoyar con actitud flexible el objetivo de la jornada.",
                    "Cumplir la nueva tarea con desinterés, limitándose al mínimo para que le reasignen rápidamente su función anterior."
                ],
                "correct": 1,
                "explanation": "La opción B refleja Adaptabilidad: respuesta oportuna al cambio y alineación con objetivos institucionales. A y C dificultan la gestión de la jornada."
            },
            {
                "id": "m7_c36",
                "examSubArea": "comportamental",
                "text": "Caso: Un contribuyente entrega información incompleta y el Gestor I debe explicarle varias veces qué soporte falta para formalizar el trámite.\n\nEnunciado: En la competencia de Comunicación efectiva, el Gestor I debe:",
                "options": [
                    "Usar términos técnicos para que el usuario entienda la seriedad del requisito, aunque no verifique si la explicación fue clara.",
                    "Explicar con lenguaje claro, confirmar qué entendió el ciudadano, señalar exactamente el soporte faltante y resumir los próximos pasos.",
                    "Entregar un listado genérico de requisitos sin relacionarlo con el caso concreto del usuario."
                ],
                "correct": 1,
                "explanation": "La opción B evidencia Comunicación efectiva: claridad, verificación de comprensión y orientación concreta. A y C pueden generar confusión y reprocesos."
            },
            {
                "id": "m7_c37",
                "examSubArea": "comportamental",
                "text": "Caso: El equipo del Punto de Contacto debe atender una fila mayor a la habitual y un compañero queda rezagado por un caso complejo.\n\nEnunciado: Según Trabajo en equipo, la mejor actuación del Gestor I es:",
                "options": [
                    "Enfocarse solo en sus propios turnos para mantener su rendimiento individual, sin apoyar al compañero.",
                    "Coordinar apoyo cuando sea posible, compartir criterios claros y contribuir a que el equipo mantenga la calidad y oportunidad del servicio.",
                    "Asumir el caso complejo sin coordinar con nadie, interrumpiendo otros procesos y sin comunicar el estado de la atención."
                ],
                "correct": 1,
                "explanation": "La opción B refleja Trabajo en equipo: cooperación coordinada orientada al resultado común. A prioriza lo individual y C actúa sin articulación."
            },
            {
                "id": "m7_c38",
                "examSubArea": "comportamental",
                "text": "Caso: El Gestor I identifica que muchos usuarios llegan sin el certificado correcto para un trámite recurrente del RUT.\n\nEnunciado: Desde Orientación al logro e Iniciativa, la conducta más valiosa es:",
                "options": [
                    "Continuar atendiendo caso por caso sin proponer cambios, porque la orientación previa no hace parte de sus metas.",
                    "Proponer una mejora simple (mensaje claro, lista de verificación o pauta de orientación) para reducir reprocesos y apoyar el cumplimiento de metas de servicio.",
                    "Suspender la atención de esos casos hasta que la dirección emita una instrucción formal sobre el requisito."
                ],
                "correct": 1,
                "explanation": "La opción B combina iniciativa y orientación al logro: busca mejorar resultados y prevenir errores recurrentes. A y C no aportan solución."
            },
            {
                "id": "m7_c39",
                "examSubArea": "comportamental",
                "text": "Caso: Un usuario llega ansioso por un vencimiento cercano y tiene dificultad para entender el canal digital recomendado.\n\nEnunciado: Conforme a Orientación al usuario y al ciudadano, el Gestor I debe:",
                "options": [
                    "Remitirlo inmediatamente al canal digital sin evaluar su dificultad, para cumplir la política de autogestión.",
                    "Escuchar su necesidad, explicarle con empatía las opciones disponibles y acompañarlo en la ruta más viable según su situación y capacidades.",
                    "Indicarle que los vencimientos son responsabilidad exclusiva del contribuyente y continuar con el siguiente turno."
                ],
                "correct": 1,
                "explanation": "La opción B aplica orientación al usuario: empatía, claridad y solución efectiva. A aplica la autogestión sin apoyo y C carece de trato de servicio."
            },
            {
                "id": "m7_c40",
                "examSubArea": "comportamental",
                "text": "Caso: Dos orientaciones previas de distintos canales generaron confusión en un contribuyente sobre el mismo trámite.\n\nEnunciado: Desde Solución de problemas, el Gestor I debe:",
                "options": [
                    "Elegir una de las versiones al azar para responder rápido y cerrar la atención.",
                    "Analizar el caso, verificar la fuente normativa/procedimental vigente, explicar la respuesta correcta y orientar los pasos concretos para resolver la situación.",
                    "Indicar al usuario que presente quejas contra ambos canales antes de recibir cualquier orientación adicional."
                ],
                "correct": 1,
                "explanation": "La opción B demuestra Solución de problemas: análisis, verificación y respuesta fundamentada. A improvisa y C no resuelve la necesidad."
            },
            {
                "id": "m7_c41",
                "examSubArea": "comportamental",
                "text": "Caso: Durante la atención, un usuario cuestiona con molestia los tiempos de espera, pero el Gestor I necesita obtener información para completar el trámite.\n\nEnunciado: La conducta que mejor integra Comunicación efectiva y control emocional es:",
                "options": [
                    "Responder con firmeza cortante para imponer respeto, evitando explicar los tiempos o el procedimiento.",
                    "Mantener un tono respetuoso, escuchar la inquietud, explicar con claridad lo que se puede hacer y continuar con las preguntas necesarias para el trámite.",
                    "Suspender la atención hasta que el usuario se disculpe, sin brindar alternativas de orientación."
                ],
                "correct": 1,
                "explanation": "La opción B combina asertividad, respeto y enfoque en la solución. A escala la tensión y C interrumpe el servicio sin manejo adecuado."
            },
            {
                "id": "m7_c42",
                "examSubArea": "comportamental",
                "text": "Caso: El Gestor I recibe retroalimentación porque sus explicaciones son correctas pero demasiado largas para usuarios con trámites simples.\n\nEnunciado: Desde Adaptabilidad y Comunicación efectiva, debe:",
                "options": [
                    "Mantener el mismo estilo porque la información técnica no debe simplificarse.",
                    "Ajustar su comunicación al contexto, priorizando claridad y datos relevantes, sin perder precisión ni verificación de comprensión.",
                    "Reducir la explicación al mínimo posible omitiendo pasos importantes para acortar el tiempo."
                ],
                "correct": 1,
                "explanation": "La opción B refleja ajuste comunicativo y flexibilidad con calidad. A no mejora y C sacrifica información esencial."
            },
            {
                "id": "m7_c43",
                "examSubArea": "comportamental",
                "text": "Caso: En una capacitación interna, el Gestor I aprende un atajo válido en el sistema para orientar mejor a los usuarios en un trámite frecuente.\n\nEnunciado: Conforme a Aprendizaje/Innovación aplicada al servicio (Res. 065/2024) y Trabajo en equipo, debe:",
                "options": [
                    "Reservar el conocimiento para mejorar solo su propio desempeño.",
                    "Aplicar el aprendizaje cuando corresponda y compartirlo con el equipo por los canales adecuados para mejorar la consistencia del servicio.",
                    "Usar el atajo sin validar si está autorizado por el procedimiento vigente."
                ],
                "correct": 1,
                "explanation": "La opción B fortalece resultados individuales y colectivos con aprendizaje compartido. A limita el beneficio y C asume riesgo sin validación."
            },
            {
                "id": "m7_c44",
                "examSubArea": "integridad",
                "text": "Caso: Un usuario adulto mayor no recuerda su correo registrado y necesita orientación para avanzar en un trámite digital.\n\nEnunciado: La respuesta más alineada con Orientación al usuario y Respeto es:",
                "options": [
                    "Indicarle que vuelva cuando recuerde la información, ya que no es posible apoyarlo sin esos datos.",
                    "Tratarlo con paciencia, verificar su identidad por los medios previstos y orientarlo paso a paso sobre las alternativas válidas para recuperar o actualizar el acceso.",
                    "Realizar la gestión usando datos supuestos para evitar demoras, sin completar la verificación."
                ],
                "correct": 1,
                "explanation": "La opción B combina trato digno, paciencia y orientación efectiva dentro del procedimiento. A y C afectan el servicio o la seguridad."
            },
            {
                "id": "m7_c45",
                "examSubArea": "comportamental",
                "text": "Caso: El Gestor I debe coordinar con otra dependencia interna para resolver una inconsistencia que afecta a varios usuarios del RUT.\n\nEnunciado: Según Trabajo en equipo y Compromiso, la conducta adecuada es:",
                "options": [
                    "Responder a cada usuario que el problema es de otra área, sin gestionar la articulación interna.",
                    "Elevar la situación con información clara y soportes, coordinar con la dependencia competente y mantener una orientación consistente a los usuarios afectados.",
                    "Esperar a que los usuarios presenten quejas formales para que la coordinación ocurra automáticamente."
                ],
                "correct": 1,
                "explanation": "La opción B muestra articulación, responsabilidad y enfoque en la solución institucional. A fragmenta la respuesta y C es pasivo."
            },
            {
                "id": "m7_c46",
                "examSubArea": "integridad",
                "text": "Caso: El Gestor I comete un error al orientar un plazo y el usuario regresa inconforme con evidencia del plazo correcto.\n\nEnunciado: Desde Comportamiento ético e Integridad del servicio, debe:",
                "options": [
                    "Sostener la orientación inicial para no afectar su credibilidad frente al usuario.",
                    "Reconocer el error, corregir la información con base en la norma vigente, disculparse profesionalmente y orientar la ruta correcta.",
                    "Remitir al usuario a otro funcionario sin explicar la corrección realizada."
                ],
                "correct": 1,
                "explanation": "La opción B refleja responsabilidad, honestidad y orientación efectiva. A y C no reparan adecuadamente el impacto en el ciudadano."
            },
            {
                "id": "m7_c47",
                "examSubArea": "integridad",
                "text": "Caso: En una conversación informal, un colega comenta datos de un caso tributario específico que conoció por su trabajo. Hay otras personas presentes.\n\nEnunciado: Conforme al deber de reserva y al valor de Honestidad/Respeto, el Gestor I debe:",
                "options": [
                    "Participar en la conversación aportando detalles adicionales para comprender mejor el caso.",
                    "Evitar comentar o validar información reservada, recordar discretamente el deber de confidencialidad y promover el manejo adecuado de la información.",
                    "Grabar la conversación para usarla como evidencia, sin informar a los presentes ni seguir los canales institucionales."
                ],
                "correct": 1,
                "explanation": "La opción B protege la reserva y fomenta conducta íntegra. A divulga/normaliza la filtración y C actúa fuera de los canales y fines adecuados."
            },
            {
                "id": "m7_c48",
                "examSubArea": "integridad",
                "text": "Caso: Un usuario agradecido publica en redes sociales una mención elogiosa al Gestor I y ofrece enviarle un regalo personal a su dirección.\n\nEnunciado: La actuación alineada con integridad es:",
                "options": [
                    "Aceptar el regalo si se entrega fuera de la oficina y no se relaciona con un trámite en curso.",
                    "Agradecer el reconocimiento, rechazar el regalo y mantener una conducta transparente acorde con las reglas de integridad.",
                    "Pedir que el regalo se entregue a nombre del equipo para evitar una percepción personal."
                ],
                "correct": 1,
                "explanation": "La opción B evita beneficios personales derivados del servicio y preserva la transparencia. A y C no eliminan el riesgo de conflicto o percepción indebida."
            },
            {
                "id": "m7_c49",
                "examSubArea": "comportamental",
                "text": "Caso: Un cambio de última hora en la distribución de turnos genera inconformidad en el equipo, pero la atención debe continuar.\n\nEnunciado: Desde Adaptabilidad y Trabajo en equipo, el Gestor I debe:",
                "options": [
                    "Negarse a aceptar el cambio y continuar con la asignación anterior para evitar incomodidad.",
                    "Ajustarse a la nueva organización, mantener una actitud colaborativa y enfocar al equipo en garantizar la continuidad del servicio.",
                    "Cumplir el cambio pero criticar abiertamente la decisión frente a los usuarios para justificar demoras."
                ],
                "correct": 1,
                "explanation": "La opción B favorece continuidad del servicio y colaboración ante cambios operativos. A y C afectan la coordinación y la experiencia ciudadana."
            },
            {
                "id": "m7_c50",
                "examSubArea": "comportamental",
                "text": "Caso: El Gestor I atiende a un ciudadano que habla con un dialecto/localismo y no comprende algunas instrucciones estándar del trámite.\n\nEnunciado: Conforme a Comunicación efectiva y Orientación al usuario, debe:",
                "options": [
                    "Repetir las instrucciones con el mismo formato, asumiendo que el ciudadano debe adaptarse al lenguaje institucional.",
                    "Adaptar el mensaje con respeto y claridad, usar ejemplos sencillos, confirmar comprensión y asegurarse de que el ciudadano pueda completar el trámite.",
                    "Finalizar la orientación y remitirlo a consultar la información por escrito sin apoyo adicional."
                ],
                "correct": 1,
                "explanation": "La opción B demuestra comunicación inclusiva y orientación efectiva, sin perder precisión. A y C crean barreras innecesarias."
            },
            {
                "id": "m7_c51",
                "examSubArea": "comportamental",
                "text": "Caso: Un ciudadano llega al Punto de Contacto confundido porque intentó actualizar su RUT en línea, pero no completó el proceso y teme haber generado inconsistencias.\n\nEnunciado: En el rol de Gestor I (Asistencia al Usuario, CC-AU-3008), la conducta que mejor demuestra Orientación al Usuario y al Ciudadano (Res. 065/2024) es:",
                "options": [
                    "Indicarle que la DIAN no se responsabiliza por trámites web inconclusos y que debe esperar un requerimiento para actuar.",
                    "Escuchar su situación con empatía, verificar el estado del trámite en los canales oficiales, explicarle con lenguaje claro qué ocurrió y orientarlo en los pasos concretos para regularizarlo.",
                    "Entregarle un instructivo general del portal sin revisar su caso, para que identifique por sí mismo el error cometido."
                ],
                "correct": 1,
                "explanation": "La opción B refleja Orientación al usuario y al ciudadano: escucha activa, solución oportuna, información clara y acompañamiento dentro de las competencias del Gestor I. A y C no atienden efectivamente la necesidad."
            },
            {
                "id": "m7_c52",
                "examSubArea": "comportamental",
                "text": "Caso: Durante una jornada de asistencia masiva, un usuario con baja alfabetización digital necesita radicar una solicitud y no comprende el formulario.\n\nEnunciado: Conforme a Comunicación Efectiva y Orientación al Usuario (Res. 065/2024), el Gestor I debe:",
                "options": [
                    "Leerle el formulario rápidamente y pedirle que firme, asumiendo que así se agiliza la atención.",
                    "Adaptar la explicación con lenguaje sencillo, verificar comprensión, apoyarlo en el diligenciamiento según el procedimiento y confirmar los datos antes de finalizar.",
                    "Remitirlo a que busque apoyo externo, porque el Punto de Contacto no puede ayudar en el diligenciamiento de solicitudes."
                ],
                "correct": 1,
                "explanation": "La opción B evidencia Comunicación efectiva y servicio: adapta el mensaje, verifica comprensión y brinda apoyo práctico respetuoso. A no garantiza comprensión y C crea una barrera de acceso."
            },
            {
                "id": "m7_c53",
                "examSubArea": "comportamental",
                "text": "Caso: Un contribuyente reporta que recibió respuestas diferentes en dos canales sobre los documentos para inscribir una sucesión ilíquida en el RUT.\n\nEnunciado: Desde Solución de Problemas y Comunicación Efectiva (Res. 065/2024), el Gestor I debe:",
                "options": [
                    "Escoger la respuesta que parezca más conveniente para cerrar rápido el caso, sin validar el procedimiento.",
                    "Analizar el requerimiento, verificar la regla y soportes vigentes aplicables al caso, explicar la respuesta correcta con claridad y orientar la ruta documental adecuada.",
                    "Responder que no puede intervenir porque la contradicción fue generada por otros canales."
                ],
                "correct": 1,
                "explanation": "La opción B demuestra Solución de problemas: identifica el problema, verifica información confiable y da una respuesta fundamentada. A improvisa y C evade la responsabilidad de asistencia."
            },
            {
                "id": "m7_c54",
                "examSubArea": "comportamental",
                "text": "Caso: En el equipo de Asistencia al Usuario se reasignan funciones por ausencia de un compañero y el Gestor I debe cubrir orientación en un trámite que atiende con menor frecuencia.\n\nEnunciado: La conducta alineada con Adaptabilidad y Trabajo en Equipo (Res. 065/2024) es:",
                "options": [
                    "Negarse a cubrir el trámite para evitar equivocaciones, aunque aumente la carga del equipo.",
                    "Aceptar el apoyo con disposición, consultar las guías/procedimientos vigentes, pedir soporte cuando sea necesario y mantener la calidad de la orientación.",
                    "Atender el trámite sin consultar procedimientos, respondiendo con base en suposiciones para no mostrar inseguridad."
                ],
                "correct": 1,
                "explanation": "La opción B refleja Adaptabilidad y Trabajo en equipo: responde al cambio, busca información válida y colabora para sostener el servicio. A y C afectan la operación o la calidad."
            },
            {
                "id": "m7_c55",
                "examSubArea": "comportamental",
                "text": "Caso: Un usuario llega molesto porque su turno tardó más de lo esperado y cuestiona la utilidad del Punto de Contacto.\n\nEnunciado: En el contexto de Asistencia al Usuario, la respuesta que mejor integra Comunicación Efectiva y Orientación al Usuario es:",
                "options": [
                    "Responder que los tiempos de espera no dependen del funcionario y pedirle que se limite a su trámite.",
                    "Escuchar con respeto, reconocer la incomodidad sin escalar el conflicto, explicar de forma clara lo que se puede hacer y enfocar la atención en resolver su necesidad.",
                    "Suspender la atención hasta que el usuario cambie su actitud, sin ofrecer información sobre su trámite."
                ],
                "correct": 1,
                "explanation": "La opción B combina escucha activa, autocontrol comunicativo y enfoque en la solución. A y C deterioran la experiencia ciudadana y no resuelven el caso."
            },
            {
                "id": "m7_c56",
                "examSubArea": "comportamental",
                "text": "Caso: El Gestor I detecta que varios contribuyentes cometen el mismo error al aportar soportes para actualización del RUT, lo que genera devoluciones repetidas.\n\nEnunciado: Conforme a Iniciativa, Orientación al Logro y Compromiso con la Organización (Res. 065/2024), debe:",
                "options": [
                    "Continuar devolviendo solicitudes sin proponer mejoras, porque la corrección depende solo del ciudadano.",
                    "Proponer una acción preventiva (mensaje claro, lista de verificación o pauta de orientación) y compartirla por el canal interno para reducir reprocesos.",
                    "Aceptar soportes incompletos para disminuir devoluciones y mejorar el indicador de atención."
                ],
                "correct": 1,
                "explanation": "La opción B demuestra iniciativa y orientación al logro: previene errores recurrentes y mejora resultados del servicio. A es pasivo y C compromete la calidad del trámite."
            },
            {
                "id": "m7_c57",
                "examSubArea": "comportamental",
                "text": "Caso: Un ciudadano solicita orientación sobre un tema tributario que excede el alcance de la atención del Punto de Contacto y requiere gestión por un área especializada.\n\nEnunciado: La actuación adecuada del Gestor I (Asistencia al Usuario) es:",
                "options": [
                    "Inventar una respuesta aproximada para no remitir al usuario a otra dependencia.",
                    "Explicar con transparencia el alcance del servicio, brindar la orientación general posible y remitirlo al canal o dependencia competente con indicaciones claras.",
                    "Negarse a dar cualquier información y cerrar la atención sin explicar alternativas."
                ],
                "correct": 1,
                "explanation": "La opción B refleja Comunicación efectiva, orientación al ciudadano y trabajo articulado: informa límites, ayuda dentro de su rol y encauza correctamente. A y C generan desinformación o barreras."
            },
            {
                "id": "m7_c58",
                "examSubArea": "comportamental",
                "text": "Caso: Un compañero nuevo atiende un caso de RUT y solicita apoyo porque no está seguro de la validación documental aplicable.\n\nEnunciado: Desde Trabajo en Equipo y Compromiso con la Organización (Res. 065/2024), el Gestor I debe:",
                "options": [
                    "Indicarle que resuelva solo para que aprenda, aunque pueda orientar incorrectamente al ciudadano.",
                    "Apoyarlo con base en el procedimiento vigente, compartir criterios claros y, si el caso lo requiere, validar conjuntamente para asegurar una respuesta correcta.",
                    "Responder por el compañero sin explicarle el criterio, para resolver más rápido el turno."
                ],
                "correct": 1,
                "explanation": "La opción B fortalece el trabajo colaborativo y la calidad del servicio: apoya, transfiere conocimiento y protege al ciudadano. A y C afectan aprendizaje o consistencia."
            },
            {
                "id": "m7_c59",
                "examSubArea": "comportamental",
                "text": "Caso: Un contribuyente presenta documentos físicos y digitales con datos que parecen corresponder a personas diferentes para el mismo trámite.\n\nEnunciado: Conforme a Solución de Problemas y Orientación al Logro, el Gestor I debe:",
                "options": [
                    "Continuar con el trámite usando el documento que se vea más reciente, sin aclarar la inconsistencia.",
                    "Detener la validación, contrastar la información con cuidado, explicar la inconsistencia al usuario y definir los soportes correctos necesarios antes de avanzar.",
                    "Solicitar que el usuario decida cuál dato es válido, registrando lo que él indique sin verificación adicional."
                ],
                "correct": 1,
                "explanation": "La opción B aplica análisis, verificación y enfoque en un resultado correcto. A y C trasladan o ignoran el riesgo de error registral."
            },
            {
                "id": "m7_c60",
                "examSubArea": "comportamental",
                "text": "Caso: La entidad implementa una nueva pauta de lenguaje claro para respuestas en Asistencia al Usuario. El Gestor I está acostumbrado a explicaciones muy técnicas.\n\nEnunciado: De acuerdo con Adaptabilidad y Comunicación Efectiva (Res. 065/2024), debe:",
                "options": [
                    "Mantener su estilo técnico porque considera que es más preciso, aunque los usuarios no comprendan.",
                    "Incorporar la pauta de lenguaje claro, ajustar sus explicaciones al perfil del ciudadano y verificar que el mensaje se entienda sin perder precisión.",
                    "Usar lenguaje claro solo con algunos usuarios y omitir información relevante para simplificar."
                ],
                "correct": 1,
                "explanation": "La opción B refleja adaptación al cambio institucional y comunicación centrada en el ciudadano. A no se ajusta y C sacrifica calidad de la información."
            },
            {
                "id": "m7_c61",
                "examSubArea": "comportamental",
                "text": "Caso: Un usuario necesita orientación, pero llega acompañado por una persona que intenta responder por él e interrumpe constantemente.\n\nEnunciado: En una atención efectiva y respetuosa, el Gestor I debe:",
                "options": [
                    "Dirigirse únicamente al acompañante para terminar más rápido, sin confirmar la voluntad o comprensión del usuario.",
                    "Reconocer al usuario como interlocutor principal, manejar la interrupción con respeto, verificar su comprensión y considerar al acompañante solo cuando sea pertinente y autorizado.",
                    "Pedir que el acompañante se retire en todos los casos, sin evaluar si el usuario requiere apoyo."
                ],
                "correct": 1,
                "explanation": "La opción B demuestra Comunicación efectiva, respeto y orientación al ciudadano: centra la atención en el titular y gestiona la interacción con equilibrio. A y C son inadecuados."
            },
            {
                "id": "m7_c62",
                "examSubArea": "comportamental",
                "text": "Caso: Al final de la semana, el Gestor I identifica que no alcanzó una meta de orientación por dedicar más tiempo a casos complejos de usuarios vulnerables.\n\nEnunciado: Desde Orientación al Logro y Compromiso con la Organización, la conducta más adecuada es:",
                "options": [
                    "Reducir la calidad de la orientación en casos complejos para priorizar únicamente la cantidad de atenciones.",
                    "Analizar el balance entre calidad y oportunidad, documentar las causas objetivas, proponer ajustes operativos y mantener el compromiso con un servicio efectivo.",
                    "Ocultar los casos complejos en el registro para que el indicador refleje el resultado esperado."
                ],
                "correct": 1,
                "explanation": "La opción B equilibra logro y calidad con transparencia y mejora continua. A sacrifica efectividad y C compromete la veracidad de la información."
            },
            {
                "id": "m7_c63",
                "examSubArea": "comportamental",
                "text": "Caso: Un ciudadano pregunta por el estado de su solicitud, pero la información disponible es parcial y requiere validación adicional.\n\nEnunciado: La mejor respuesta del Gestor I, alineada con el puesto de Asistencia al Usuario, es:",
                "options": [
                    "Dar una respuesta definitiva con la información parcial para evitar que el usuario se vaya insatisfecho.",
                    "Informar con claridad lo que puede confirmar, explicar qué falta por validar, indicar el canal/tiempo o ruta de seguimiento aplicable y evitar suposiciones.",
                    "Evitar responder hasta tener certeza total, sin ofrecer ninguna orientación o canal de seguimiento."
                ],
                "correct": 1,
                "explanation": "La opción B combina transparencia, comunicación clara y orientación útil sin inventar información. A genera expectativas falsas y C deja al ciudadano sin guía."
            },
            {
                "id": "m7_c64",
                "examSubArea": "comportamental",
                "text": "Caso: En una capacitación sobre servicios DIAN, el Gestor I recibe preguntas de ciudadanos con escenarios reales diferentes al ejemplo presentado.\n\nEnunciado: Conforme a Adaptabilidad, Comunicación Efectiva y Orientación al Usuario, debe:",
                "options": [
                    "Responder solo con el ejemplo preparado, indicando que los demás casos no hacen parte de la capacitación.",
                    "Adaptar la explicación a los escenarios planteados cuando estén dentro de su competencia, aclarar límites cuando no lo estén y orientar rutas confiables.",
                    "Evitar responder preguntas reales para no asumir responsabilidad por interpretaciones."
                ],
                "correct": 1,
                "explanation": "La opción B muestra flexibilidad, claridad y vocación de servicio con manejo responsable del alcance. A y C limitan innecesariamente la orientación."
            },
            {
                "id": "m7_c65",
                "examSubArea": "comportamental",
                "text": "Caso: Un usuario manifiesta que se siente tratado con desconfianza por una validación rigurosa de sus documentos.\n\nEnunciado: En el marco de Respeto, Comunicación Efectiva y Comportamiento ético del servicio, el Gestor I debe:",
                "options": [
                    "Omitir la validación para mejorar la percepción del usuario y evitar molestias.",
                    "Explicar con respeto que la verificación es un procedimiento estándar para todos, mantener un trato digno y continuar la validación con objetividad.",
                    "Responder que la desconfianza es inevitable en trámites tributarios y continuar sin explicar el procedimiento."
                ],
                "correct": 1,
                "explanation": "La opción B equilibra control y trato digno: comunica el propósito del procedimiento sin discriminar ni relajar verificaciones necesarias. A debilita controles y C es poco empático."
            },
            {
                "id": "m7_c66",
                "examSubArea": "comportamental",
                "text": "Caso: Un ciudadano llega frustrado tras varios intentos fallidos en canales digitales y desconfía de la orientación del Punto de Contacto. Necesita resolver una actualización sensible del RUT.\n\nEnunciado: La respuesta de mayor nivel comportamental (Orientación al Usuario, Comunicación Efectiva y Solución de Problemas) es:",
                "options": [
                    "Indicarle que repita el trámite digital porque es la única forma válida, sin revisar lo ocurrido.",
                    "Reconocer su experiencia, revisar con él la evidencia disponible, explicar con claridad las opciones viables, verificar requisitos críticos y acordar un paso a paso realista dentro del procedimiento.",
                    "Derivar el caso sin explicación, indicando que otro funcionario debe manejar usuarios inconformes."
                ],
                "correct": 1,
                "explanation": "La opción B integra empatía, análisis, claridad y solución efectiva. A ignora el problema y C no gestiona la necesidad."
            },
            {
                "id": "m7_c67",
                "examSubArea": "comportamental",
                "text": "Caso: En una atención compleja, el Gestor I advierte que la normativa aplicable cambió recientemente y su conocimiento puede estar desactualizado, mientras el usuario exige una respuesta inmediata.\n\nEnunciado: Conforme a Adaptabilidad, Aprendizaje/Comportamiento ético del servicio y Orientación al Logro, debe:",
                "options": [
                    "Responder con la regla anterior para no demorar, aclarando que podría haber cambios.",
                    "Ser transparente sobre la necesidad de verificación, consultar la fuente vigente por el canal interno, dar una orientación precisa y gestionar el tiempo sin inventar información.",
                    "Evitar responder y cerrar la atención para no asumir responsabilidad."
                ],
                "correct": 1,
                "explanation": "La opción B privilegia información veraz y actualizada con gestión responsable del tiempo. A arriesga desinformación y C abandona el servicio."
            },
            {
                "id": "m7_c68",
                "examSubArea": "comportamental",
                "text": "Caso: Dos áreas internas se contradicen sobre el trámite aplicable a un ciudadano. El usuario ya fue remitido varias veces y el plazo de su gestión personal es corto.\n\nEnunciado: La conducta más efectiva (Trabajo en Equipo, Solución de Problemas y Orientación al Usuario) es:",
                "options": [
                    "Remitirlo nuevamente a la última área mencionada para que ellos resuelvan la contradicción.",
                    "Articular internamente la validación del procedimiento correcto, documentar el encauzamiento, entregar al usuario una orientación unificada y verificable, y darle seguimiento dentro de su competencia.",
                    "Decirle que presente una queja contra ambas áreas antes de continuar."
                ],
                "correct": 1,
                "explanation": "La opción B asume coordinación y enfoque en solución, evitando rebotar al ciudadano. A perpetúa la remisión y C no resuelve la necesidad urgente."
            },
            {
                "id": "m7_c69",
                "examSubArea": "integridad",
                "text": "Caso: Un usuario influyente insinúa que puede facilitar una evaluación favorable para el Punto de Contacto si el Gestor I omite una inconsistencia documental y acelera su trámite.\n\nEnunciado: Ante esta presión, la respuesta íntegra es:",
                "options": [
                    "Aceptar la insinuación si la inconsistencia parece menor y no afecta recaudo inmediato.",
                    "Rechazar cualquier condicionamiento indebido, mantener el procedimiento y la verificación documental, documentar la situación si corresponde y actuar con imparcialidad.",
                    "Consultar informalmente al supervisor si conviene aceptar para proteger la imagen del equipo."
                ],
                "correct": 1,
                "explanation": "La opción B protege imparcialidad, honestidad y debido procedimiento frente a presión indebida. A y C ceden al condicionamiento."
            },
            {
                "id": "m7_c70",
                "examSubArea": "integridad",
                "text": "Caso: El Gestor I encuentra una forma de consultar masivamente datos para responder más rápido, pero el acceso no fue habilitado formalmente para esa finalidad y el uso masivo no está autorizado.\n\nEnunciado: La decisión alineada con diligencia, reserva y cumplimiento es:",
                "options": [
                    "Usar el acceso mientras nadie lo restrinja, porque mejora la productividad.",
                    "No utilizar accesos no autorizados, limitarse a la finalidad/permiso vigente, solicitar habilitación formal si es necesaria y priorizar la protección de datos.",
                    "Extraer los datos y guardarlos localmente para no consultar el sistema nuevamente."
                ],
                "correct": 1,
                "explanation": "La opción B respeta autorización, finalidad y seguridad de la información. A normaliza un acceso indebido y C crea una copia no controlada."
            },
            {
                "id": "m7_c71",
                "examSubArea": "integridad",
                "text": "Caso: Un compañero comete un error que pudo exponer datos de contribuyentes, pero pide al Gestor I no reportarlo para evitar consecuencias disciplinarias.\n\nEnunciado: La actuación más íntegra y responsable es:",
                "options": [
                    "No reportar el hecho por lealtad al equipo, siempre que el compañero prometa corregirlo.",
                    "Priorizar la protección de la información y el cumplimiento: promover/realizar la gestión de contención y reporte por los canales institucionales definidos, con objetividad y respeto.",
                    "Difundir el error en grupos informales para advertir a otros, sin activar el protocolo."
                ],
                "correct": 1,
                "explanation": "La opción B equilibra respeto con responsabilidad: ante riesgo de datos, prima la contención y el reporte institucional. A encubre el riesgo y C expone más la situación."
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
                    examArea: meta.examArea || baseCase.examArea || 'funcional',
                    examSubArea: baseCase.examSubArea || (meta.examArea === 'funcional' ? 'funcional' : 'comportamental'),
                };
            });
            return {
                ...meta,
                questions,
                caseCount: cases.length,
            };
        });
    }

    const QUESTION_BANK = buildQuestionBank();

    PM.MODULE_DEFINITIONS = MODULE_DEFINITIONS;
    PM.buildQuestionBank = buildQuestionBank;
    PM.QUESTION_BANK = QUESTION_BANK;
})((window.PrepMaster = window.PrepMaster || {}));
