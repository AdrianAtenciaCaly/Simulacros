(function (PM) {
    'use strict';

    /**
     * COMPENDIO TEÓRICO MAESTRO Y EXHAUSTIVO PARA EL ESTUDIO OFICIAL: CONCURSO DIAN
     * Proceso de Selección CNSC – Empleo: Gestor I (Código 301, Grado 01)
     * Ficha de Empleo: IT-TO-3008 | Nivel Jerárquico: Profesional
     * Proceso: Información, Innovación y Tecnología | Subproceso: Infraestructura y Operaciones
     *
     * Estructura pedagógica: Bloques { type: 'p' }, { type: 'list' }, { type: 'callout' }
     */
    const THEORY = {
        title: 'Compendio Teórico Maestro: Concurso de Méritos DIAN (Gestor I - IT-TO-3008)',
        meta: [
            'Proceso de Selección CNSC – Convocatoria Oficial DIAN | Nivel Profesional',
            'Ficha IT-TO-3008: Infraestructura Tecnológica, Centros de Cómputo, Cloud y Operaciones TIC',
            'Basado en las Guías Oficiales de Orientación de Pruebas Escritas de la CNSC y la Universidad Libre / Nacional',
        ],
        sections: [
            /* -------------------------------------------------------------------------
               SECCIÓN 0: INTRODUCCIÓN Y GUÍA ESTRATÉGICA PARA GANAR EL EXAMEN CNSC
               ------------------------------------------------------------------------- */
            {
                id: 'introduccion',
                label: 'Guía del Examen',
                title: 'Estrategia de Éxito y Metodología de Juicio Situacional CNSC',
                topics: [
                    {
                        heading: 'Estructura Oficial de las Pruebas Escritas de la CNSC',
                        blocks: [
                            {
                                type: 'p',
                                text: 'En los concursos de mérito para la DIAN, las pruebas escritas se dividen en dos grandes componentes evaluados en la misma jornada: la Prueba de Competencias Funcionales (de carácter eliminatorio, con un puntaje mínimo aprobatorio que oscila entre 65 y 70 puntos sobre 100) y la Prueba de Competencias Comportamentales (de carácter clasificatorio, que suma al ponderado final para la lista de elegibles).',
                            },
                            {
                                type: 'callout',
                                variant: 'warning',
                                title: '¡Regla de Oro Eliminatoria!',
                                text: 'Si no alcanzas el puntaje mínimo en la prueba funcional, quedas automáticamente excluido del concurso, sin importar tu puntaje en comportamentales o en la valoración de antecedentes.',
                            },
                        ],
                    },
                    {
                        heading: '¿Cómo Responde un Experto un Caso de Juicio Situacional?',
                        blocks: [
                            {
                                type: 'p',
                                text: 'Las preguntas no evalúan memoria literal de artículos, sino la capacidad del profesional para resolver dilemas organizacionales complejos. Cada pregunta presenta un Caso (Contexto institucional), un Conflicto técnico/jurídico, y cuatro opciones estructuradas.',
                            },
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: '1. Identificar el Rol Evaluado',
                                        text: 'Usted actúa siempre como Gestor I (Nivel Profesional en Infraestructura TI). No debe asumir funciones de juez, director general ni operador de primer nivel básico.',
                                    },
                                    {
                                        term: '2. Descartar Opciones Pasivas o Informales',
                                        text: 'En el sector público nunca son válidas las respuestas que proponen "acatar órdenes verbales sin soporte", "esperar a que el sistema se arregle solo", "solucionar por canales informales de chat" o "culpar a terceros".',
                                    },
                                    {
                                        term: '3. Seguir el Conducto Regular y el Procedimiento Escrito',
                                        text: 'Toda actuación de un servidor de la DIAN debe quedar registrada en actas, tickets oficiales, bitácoras (logs) o memorandos radicados formalmente.',
                                    },
                                    {
                                        term: '4. Privilegiar la Continuidad del Servicio y el Interés General',
                                        text: 'Entre dos opciones técnicamente válidas, la opción correcta es siempre la que restablece el servicio tributario/aduanero protegiendo el debido proceso del ciudadano y salvaguardando la evidencia digital.',
                                    },
                                ],
                            },
                            {
                                type: 'callout',
                                variant: 'tip',
                                title: 'Técnica de Descarte Rápido en el Examen',
                                text: 'Descarte de inmediato las opciones que contengan absolutismos ("siempre", "nunca", "en ningún caso") a menos que se trate de prohibiciones expresas de la ley disciplinaria (como recibir dádivas o alterar bases de datos).',
                            },
                        ],
                    },
                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 1: RÉGIMEN CONSTITUCIONAL, FUNCIÓN PÚBLICA Y ESTRUCTURA DIAN
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-1',
                label: 'Módulo 1: Función Pública',
                title: 'Módulo 1: Régimen Constitucional de la Función Pública y Estructura del Estado',
                topics: [
                    {
                        heading: '1.1 Estado Social de Derecho y Fines Esenciales (Art. 1 y 2 C.P.)',
                        blocks: [
                            {
                                type: 'p',
                                text: 'Colombia está fundada en el respeto de la dignidad humana, el trabajo, la solidaridad y la prevalencia del interés general. Las autoridades existen para proteger a los ciudadanos y asegurar el cumplimiento de los deberes sociales del Estado.',
                            },
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Traducción para el Gestor I de TI',
                                        text: 'La infraestructura de servidores, enlaces y centros de datos de la DIAN no persigue fines comerciales lucrativos, sino asegurar la recaudación continua de los tributos que financian la salud, educación e inversión social del país.',
                                    },
                                    {
                                        term: 'Prevalencia del Interés General (Art. 1 C.P.)',
                                        text: 'Ante contingencias de la plataforma tecnológica en días límites de declaración, prima la garantía del derecho del ciudadano a cumplir sus obligaciones sin sanciones indebidas sobre la rigidez técnica.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '1.2 Principio de Legalidad y Responsabilidad Pública (Art. 6, 121 y 122 C.P.)',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Legalidad Taxativa de los Servidores Públicos',
                                        text: 'A diferencia de los particulares (que pueden hacer todo lo que la ley no prohíba), los servidores públicos solo pueden hacer aquello para lo cual están facultados de manera expresa por la Constitución, la ley y el manual de funciones.',
                                    },
                                    {
                                        term: 'Cláusula de Responsabilidad (Art. 6 C.P.)',
                                        text: 'Los servidores responden ante las autoridades por infringir la Constitución y la ley, pero también por omisión o extralimitación en el ejercicio de sus funciones técnicas.',
                                    },
                                    {
                                        term: 'Trámite de Órdenes Ilegítimas o de Insistencia (Ley 1952 de 2019, Art. 38)',
                                        text: 'El servidor tiene el deber de obedecer a sus superiores jerárquicos, pero si una instrucción técnica vulnera la ley, genera riesgo informático o implica delito, debe representar la orden por escrito. Si el superior insiste formalmente por escrito, se ejecuta salvando la responsabilidad del servidor técnico.',
                                    },
                                ],
                            },
                            {
                                type: 'callout',
                                variant: 'warning',
                                title: '¡Trampa Típica de Examen!',
                                text: 'Nunca ejecute una orden verbal riesgosa basada en la simple "subordinación jerárquica". La orden debe ser formalizada por escrito y motivada por el superior jerárquico.',
                            },
                        ],
                    },
                    {
                        heading: '1.3 Principios de la Función Administrativa (Art. 209 C.P. y Ley 489 de 1998)',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    { term: 'Igualdad e Imparcialidad', text: 'Mismo nivel de servicio técnico a todos los usuarios, sin favoritismos ni sesgos en colas de procesamiento.' },
                                    { term: 'Moralidad', text: 'Actuación exenta de conflicto de interés, sobornos o uso de recursos públicos para fines personales.' },
                                    { term: 'Eficacia y Economía', text: 'Logro oportuno de metas optimizando el gasto público en licenciamiento y hardware.' },
                                    { term: 'Celeridad', text: 'Impulso expedito de requerimientos evitando dilaciones burocráticas injustificadas.' },
                                    { term: 'Publicidad y Trazabilidad', text: 'Transparencia de las decisiones técnicas garantizada mediante bitácoras y registros inalterables.' },
                                    { term: 'Coordinación Interinstitucional', text: 'Colaboración obligatoria entre entidades del Estado (DIAN, POLFA, INVIMA, MinTIC) para resolver contingencias conjuntas.' },
                                    { term: 'Desconcentración y Delegación', text: 'La DIAN desconcentra funciones operativas en Direcciones Seccionales, pero centraliza la política técnica de TI en el nivel central.' },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '1.4 Régimen Específico de Carrera de la DIAN (Decreto Ley 071 de 2020)',
                        blocks: [
                            {
                                type: 'p',
                                text: 'La DIAN cuenta con un régimen específico de carrera administrativa de origen legal (Decreto Ley 071 de 2020), vigilado por la Comisión Nacional del Servicio Civil (CNSC).',
                            },
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'El Mérito como Eje Estructural',
                                        text: 'El ingreso, permanencia y ascenso en la DIAN se fundamenta exclusivamente en la demostración de mérito mediante concurso público abierto.',
                                    },
                                    {
                                        term: 'Derecho Preferente de Encargo (Art. 19)',
                                        text: 'Las vacantes temporales o definitivas en empleos de carrera deben proveerse prioritariamente mediante encargo con servidores de carrera del empleo inmediatamente inferior que cumplan el perfil, posean evaluación de desempeño sobresaliente y no registren sanción disciplinaria, antes de acudir a nombramientos provisionales.',
                                    },
                                    {
                                        term: 'Evaluación del Desempeño Laboral (EDL)',
                                        text: 'Se realiza anualmente con base en compromisos funcionales y comportamentales. La calificación definitiva "No Satisfactoria" genera automáticamente el retiro del servicio y la declaratoria de insubsistencia del nombramiento en carrera.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '1.5 Estructura Orgánica de la DIAN (Decreto 1742 de 2020)',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Naturaleza Jurídica',
                                        text: 'Unidad Administrativa Especial (UAE) del orden nacional, con personería jurídica, autonomía administrativa y presupuestal, adscrita al Ministerio de Hacienda y Crédito Público.',
                                    },
                                    {
                                        term: 'Dirección de Gestión de Innovación y Tecnología',
                                        text: 'Dependencia del nivel central rectora de la política, arquitectura y seguridad tecnológica de la entidad a nivel nacional.',
                                    },
                                    {
                                        term: 'Subdirección de Infraestructura y Operaciones Tecnológicas',
                                        text: 'Unidad donde se ubica la Ficha IT-TO-3008 (Gestor I), responsable directa de operar los datacenters, redes, servidores físicos y en la nube.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '1.6 Responsabilidad Fiscal, Penal, Disciplinaria y Acción de Repetición',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Responsabilidad Disciplinaria (Ley 1952 de 2019 / Ley 2094 de 2021)',
                                        text: 'Investiga faltas contra los deberes funcionales. Constituye falta gravísima dolosa el uso de bienes de la entidad para fines comerciales propios (ej. minar criptomonedas o alojar software privado).',
                                    },
                                    {
                                        term: 'Responsabilidad Fiscal (Ley 610 de 2000)',
                                        text: 'Vigilada por la Contraloría General de la República ante daño o pérdida patrimonial del Estado por conducta dolosa o gravemente culposa en contratos o activos TI.',
                                    },
                                    {
                                        term: 'Acción de Repetición (Art. 90 C.P. y Ley 678 de 2001)',
                                        text: 'Mecanismo legal obligatorio mediante el cual el Estado demanda civilmente al servidor público para recuperar las sumas que la entidad tuvo que pagar por condenas judiciales derivadas de su dolo o culpa grave.',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 2: PROCEDIMIENTO ADMINISTRATIVO Y CPACA (LEY 1437 / 1755 / 2080)
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-2',
                label: 'Módulo 2: Procedimiento CPACA',
                title: 'Módulo 2: Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA)',
                topics: [
                    {
                        heading: '2.1 Ámbito y Garantías del Debido Proceso (Art. 29 C.P. y CPACA)',
                        blocks: [
                            {
                                type: 'p',
                                text: 'El CPACA regula la relación entre los ciudadanos y las autoridades administrativas. En toda actuación se garantiza el debido proceso: derecho a la defensa, a presentar pruebas, a ser notificado formalmente y a controvertir decisiones.',
                            },
                        ],
                    },
                    {
                        heading: '2.2 Régimen Integral del Derecho de Petición (Ley 1755 de 2015)',
                        blocks: [
                            {
                                type: 'p',
                                text: 'Términos legales perentorios para resolver peticiones ciudadanas ante la DIAN:',
                            },
                            {
                                type: 'list',
                                items: [
                                    { term: 'Peticiones de Copias y Documentos', text: '10 días hábiles. Si no se responde en este plazo, la ley ordena que se entregarán las copias gratuitamente dentro de los 3 días siguientes.' },
                                    { term: 'Peticiones de Interés General o Particular', text: '15 días hábiles como regla general.' },
                                    { term: 'Peticiones de Consultas Conceptuales o Técnicas', text: '30 días hábiles dada su complejidad analítica.' },
                                    { term: 'Peticiones Incompletas (Art. 17 CPACA)', text: 'La entidad debe requerir al peticionario por una sola vez dentro de los 10 días siguientes para que subsane en el plazo de 1 mes, término en el cual se suspenden los plazos de respuesta.' },
                                    { term: 'Desistimiento Tácito (Art. 17 CPACA)', text: 'Vencido el mes del requerimiento sin que el solicitante aporte lo requerido, se declara el desistimiento tácito y el archivo del expediente mediante resolución motivada.' },
                                ],
                            },
                            {
                                type: 'callout',
                                variant: 'tip',
                                title: '¡Pregunta Típica CNSC sobre Términos!',
                                text: 'Memorice los 3 números mágicos de las peticiones: 10 días (documentos/copias), 15 días (regla general), 30 días (consultas doctrinales).',
                            },
                        ],
                    },
                    {
                        heading: '2.3 Actos Administrativos, Firmeza y Decaimiento (Art. 87 a 91 CPACA)',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Presunción de Legalidad',
                                        text: 'Los actos administrativos se presumen legales y obligatorios mientras no sean suspendidos o anulados por la Jurisdicción de lo Contencioso Administrativo.',
                                    },
                                    {
                                        term: 'Pérdida de Fuerza Ejecutoria / Decaimiento (Art. 91 CPACA)',
                                        text: 'Ocurre cuando: 1) Se suspenden provisionalmente sus efectos por orden judicial; 2) Desaparecen sus fundamentos de hecho o de derecho; 3) Transcurren cinco (5) años sin que la administración haya realizado los actos de cobro o ejecución forzosa.',
                                    },
                                    {
                                        term: 'Corrección de Errores Formales (Art. 45 CPACA)',
                                        text: 'Los errores puramente aritméticos o mecanográficos en nombres, NITs o cifras pueden corregirse en cualquier tiempo sin necesidad de revocar el fondo del acto.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '2.4 Recursos en la Vía Administrativa (Art. 74 a 76 CPACA)',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Recurso de Reposición',
                                        text: 'Se interpone ante el mismo funcionario que profirió la decisión para que la aclare, modifique, adicione o revoque.',
                                    },
                                    {
                                        term: 'Recurso de Apelación',
                                        text: 'Se interpone ante el superior jerárquico o funcional directo con el mismo propósito. Es obligatorio para agotar la vía administrativa cuando la ley lo contemple.',
                                    },
                                    {
                                        term: 'Recurso de Queja',
                                        text: 'Procede directamente ante el superior jerárquico cuando el funcionario de primera instancia rechaza indebidamente el recurso de apelación.',
                                    },
                                    {
                                        term: 'Plazo Legal de Interposición',
                                        text: 'Diez (10) días hábiles siguientes a la notificación formal del acto administrativo.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '2.5 Notificaciones Electrónicas en la DIAN (Art. 566-1 Estatuto Tributario)',
                        blocks: [
                            {
                                type: 'p',
                                text: 'En materia tributaria, aduanera y cambiaria, la notificación por medios electrónicos al correo registrado en el RUT es el mecanismo preferente.',
                            },
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Cómputo Procesal de Términos',
                                        text: 'La notificación electrónica se entenderá surtida para el administrado a partir del día en que acceda al documento o transcurridos cinco (5) días hábiles siguientes al envío del aviso de notificación por parte de la DIAN.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '2.6 Revocatoria Directa y Silencio Administrativo',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Revocatoria Directa (Art. 93 CPACA)',
                                        text: 'Procede de oficio o a solicitud de parte cuando: 1) Sea manifiesta su oposición a la Constitución o la ley; 2) No estén conformes con el interés público; 3) Causen agravio injustificado a una persona.',
                                    },
                                    {
                                        term: 'Silencio Administrativo Negativo (Art. 83 CPACA)',
                                        text: 'Regla general: transcurridos tres (3) meses sin respuesta, se entiende denegada la solicitud para permitir acudir a la vía judicial.',
                                    },
                                    {
                                        term: 'Silencio Administrativo Positivo (Art. 84 CPACA)',
                                        text: 'Solo opera en los casos expresamente consagrados por la ley especial, requiriendo protocolización en notaría para exigir su cumplimiento.',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 3: INFRAESTRUCTURA TECNOLÓGICA Y OPERACIONES TIC (GESTOR I)
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-3',
                label: 'Módulo 3: Infraestructura TI',
                title: 'Módulo 3: Infraestructura Tecnológica, Centros de Cómputo, Cloud y Operaciones TIC',
                topics: [
                    {
                        heading: '3.1 Data Centers y Estándar ANSI/TIA-942',
                        blocks: [
                            {
                                type: 'p',
                                text: 'La norma TIA-942 clasifica la infraestructura física de los centros de cómputo en 4 niveles (Tiers) según su nivel de redundancia y disponibilidad:',
                            },
                            {
                                type: 'list',
                                items: [
                                    { term: 'Tier I (Básico)', text: 'Una sola vía de distribución eléctrica y enfriamiento, sin componentes redundantes. Disponibilidad: 99.67%.' },
                                    { term: 'Tier II (Componentes Redundantes)', text: 'Una sola vía con equipos redundantes (N+1 en bombas, UPS). Disponibilidad: 99.74%.' },
                                    { term: 'Tier III (Mantenibilidad Concurrente - Estándar DIAN)', text: 'Múltiples vías de distribución eléctrica y enfriamiento, donde cualquiera puede ser intervenida o reparada en caliente sin apagar los servidores. Disponibilidad: 99.982%.' },
                                    { term: 'Tier IV (Tolerante a Fallos)', text: 'Múltiples vías activas independientes y redundancia 2(N+1). Tolera cualquier falla catastrófica sin afectación. Disponibilidad: 99.995%.' },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '3.2 Redes, Conectividad y Seguridad Perimetral',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Modelo OSI y TCP/IP',
                                        text: 'Capas: Física (1), Enlace (2 - MAC/Switch), Red (3 - IP/Router), Transporte (4 - TCP/UDP), Sesión (5), Presentación (6), Aplicación (7 - HTTP, DNS, SSH).',
                                    },
                                    {
                                        term: 'Zona Desmilitarizada (DMZ)',
                                        text: 'Subred aislada entre dos cortafuegos que alberga los servidores web públicos expuestos a Internet, protegiendo las bases de datos de la red LAN corporativa de accesos directos.',
                                    },
                                    {
                                        term: 'VLANs y Enrutamiento Inter-VLAN',
                                        text: 'Segmentación lógica de tráfico para aislar áreas críticas (ej. VLAN de servidores tributarios separada de VLAN de usuarios administrativos).',
                                    },
                                    {
                                        term: 'Protocolos de Red Esenciales',
                                        text: 'DNS (puerto 53), DHCP (puertos 67/68), HTTP (80), HTTPS (443 con TLS 1.3), SSH (22), RDP (3389), BGP (enrutamiento de enlaces redundantes entre proveedores).',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '3.3 Virtualización, Servidores y Contenedores',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Hipervisores Tipo 1 (Bare-Metal)',
                                        text: 'Instalados directamente sobre el hardware físico (ej. VMware ESXi, KVM, Microsoft Hyper-V), garantizando máximo rendimiento y aislamiento para servidores productivos.',
                                    },
                                    {
                                        term: 'Clústeres de Alta Disponibilidad (HA y DRS)',
                                        text: 'Permiten migración de máquinas virtuales sin interrupción del servicio (vMotion / Live Migration) y balanceo automático de recursos de CPU/RAM.',
                                    },
                                    {
                                        term: 'Contenedores vs Máquinas Virtuales',
                                        text: 'Los contenedores (Docker/Kubernetes) comparten el kernel del sistema operativo anfitrión, siendo mucho más ligeros y rápidos de desplegar que las VMs tradicionales.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '3.4 Almacenamiento, Arreglos RAID y Estrategia de Respaldo 3-2-1',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    { term: 'RAID 0 (Stripping)', text: 'Distribuye datos sin redundancia. No tolera fallas de disco (cero tolerancia a fallos).' },
                                    { term: 'RAID 1 (Mirroring)', text: 'Copia idéntica en 2 discos. Tolera la falla de 1 disco. Capacidad útil: 50%.' },
                                    { term: 'RAID 5 (Paridad Distribuida)', text: 'Mínimo 3 discos. Tolera la falla de 1 disco. Excelente balance entre costo y seguridad.' },
                                    { term: 'RAID 6 (Doble Paridad)', text: 'Mínimo 4 discos. Tolera la pérdida simultánea de 2 discos duros sin perder datos.' },
                                    { term: 'RAID 10 (1+0)', text: 'Espejo de discos distribuidos. Mínimo 4 discos. Máxima velocidad y alta tolerancia a fallos para motores transaccionales (Oracle/SQL).' },
                                    { term: 'Estrategia de Respaldo 3-2-1 Inmutable', text: '3 copias de los datos, en al menos 2 soportes diferentes, con 1 copia fuera del datacenter (off-site/cloud) o protegida con tecnología inmutable WORM contra ransomware.' },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '3.5 Continuidad de Negocio (BCP / DRP) y Métricas RTO/RPO',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'RTO (Recovery Time Objective)',
                                        text: 'Tiempo máximo tolerable que un servicio crítico puede estar inactivo tras una falla antes de causar un daño grave a la DIAN.',
                                    },
                                    {
                                        term: 'RPO (Recovery Point Objective)',
                                        text: 'Cantidad máxima de datos que la entidad tolera perder tras un desastre, expresada en tiempo transcurrido desde el último respaldo.',
                                    },
                                    {
                                        term: 'MTTR (Mean Time to Repair) y MTBF (Mean Time Between Failures)',
                                        text: 'MTTR mide el tiempo promedio para reparar un equipo; MTBF mide el tiempo medio que transcurre entre fallas consecutivas.',
                                    },
                                    {
                                        term: 'Sitios Alternos de Contingencia',
                                        text: 'Hot Site (sitio espejo activo-activo sincronizado en tiempo real), Warm Site (hardware disponible que requiere restaurar backups), Cold Site (espacio físico con energía pero sin servidores listos).',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '3.6 Buenas Prácticas de ITIL v4 en la Operación de TI',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Gestión de Incidentes',
                                        text: 'Objetivo: Restablecer la operación normal del servicio de TI lo antes posible, minimizando el impacto en los contribuyentes.',
                                    },
                                    {
                                        term: 'Gestión de Problemas',
                                        text: 'Objetivo: Identificar la causa raíz de uno o varios incidentes recurrentes para evitar que vuelvan a ocurrir, documentando la solución temporal (Workaround) y registrando el "Error Conocido".',
                                    },
                                    {
                                        term: 'Gestión de Cambios y el Comité CAB',
                                        text: 'Todo cambio en producción (parche, nueva regla de red, actualización de base de datos) debe ser evaluado por el Change Advisory Board (CAB) con su respectivo plan de Rollback (reversión).',
                                    },
                                    {
                                        term: 'SLA (Service Level Agreement) y OLA (Operational Level Agreement)',
                                        text: 'SLA es el acuerdo formal de servicio con los usuarios/clientes; OLA es el acuerdo de soporte interno entre áreas de la DIAN.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '3.7 Ciberseguridad, Modelo Zero Trust y Gestión de Incidentes CSIRT',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Principio Zero Trust ("Nunca confiar, siempre verificar")',
                                        text: 'Ningún usuario, dispositivo o red (incluso interna) es confiable por defecto. Todo acceso requiere autenticación estricta (MFA) y autorización continua.',
                                    },
                                    {
                                        term: 'Directorio Activo y Control RBAC',
                                        text: 'Administración de identidades corporativas, Políticas de Grupo (GPO) y Control de Acceso Basado en Roles (RBAC) con privilegios mínimos.',
                                    },
                                    {
                                        term: 'Protocolo ante Incidentes y Cadena de Custodia Forense',
                                        text: 'Ante un servidor comprometido, la primera acción es aislarlo de la red lógica sin apagarlo, con el fin de volcar y preservar la memoria volátil (RAM) imprescindible para el análisis forense.',
                                    },
                                    {
                                        term: 'Modelo MSPI (MinTIC) e ISO/IEC 27001',
                                        text: 'Marco gubernamental de Seguridad y Privacidad de la Información que asegura confidencialidad, integridad y disponibilidad de la información pública.',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 4: COMPETENCIAS COMPORTAMENTALES OFICIALES (NIVEL PROFESIONAL)
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-4',
                label: 'Módulo 4: Comportamentales',
                title: 'Módulo 4: Diccionario de Competencias Comportamentales (Decreto 815 de 2018 / DIAN)',
                topics: [
                    {
                        heading: 'Competencias Comportamentales Evaluadas para el Nivel Profesional',
                        blocks: [
                            {
                                type: 'p',
                                text: 'En las pruebas de la CNSC, las preguntas comportamentales presentan situaciones laborales simuladas donde se evalúa el nivel de desarrollo de las conductas descritas en el Decreto 815 de 2018:',
                            },
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: '1. Comportamiento Ético (Nivel 4)',
                                        text: 'Actúa con rectitud, imparcialidad y transparencia. Rechaza y denuncia cualquier intento de soborno, favoritismo o manipulación indebida de sistemas o bitácoras.',
                                    },
                                    {
                                        term: '2. Trabajo en Equipo (Nivel 3)',
                                        text: 'Aporta activamente al logro de metas colectivas, fomenta la comunicación abierta y coopera constructivamente en salas de crisis sin eludir responsabilidades.',
                                    },
                                    {
                                        term: '3. Orientación a Resultados (Nivel 4)',
                                        text: 'Enfoca su labor en el impacto misional del Estado, priorizando la solución definitiva de problemas críticos de infraestructura y optimizando tiempos de respuesta.',
                                    },
                                    {
                                        term: '4. Adaptabilidad al Cambio (Nivel 3)',
                                        text: 'Muestra apertura proactiva y flexibilidad ante la modernización tecnológica (nube, automatización), aprendiendo de forma continua y facilitando la transición técnica del equipo.',
                                    },
                                    {
                                        term: '5. Comunicación Efectiva (Nivel 4)',
                                        text: 'Transmite información técnica compleja en un lenguaje claro, sintético y asertivo, traduciendo riesgos informáticos en impactos comprensibles para los directivos.',
                                    },
                                    {
                                        term: '6. Liderazgo Técnico (Nivel 3)',
                                        text: 'Orienta y acompaña a otros servidores con pedagogía y respeto, convirtiendo los errores en oportunidades de aprendizaje y promoviendo buenas prácticas.',
                                    },
                                    {
                                        term: '7. Toma de Decisiones Bajo Presión (Nivel 4)',
                                        text: 'Elige con criterio técnico y oportunidad la mejor alternativa ante contingencias, ejecutando responsablemente los planes de contingencia aprobados.',
                                    },
                                    {
                                        term: '8. Vocación de Servicio y Orientación al Ciudadano (Nivel 4)',
                                        text: 'Concibe la infraestructura tecnológica no como cables y servidores aislados, sino como el soporte vital para que los ciudadanos ejerzan sus derechos tributarios con dignidad.',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 5: MARCO ESTRATÉGICO DIAN, MIPG Y LEY DE TRANSPARENCIA
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-5',
                label: 'Módulo 5: Estrategia y MIPG',
                title: 'Módulo 5: Marco Estratégico de la DIAN, Modelo MIPG y Ley de Transparencia',
                topics: [
                    {
                        heading: '5.1 Modelo Integrado de Planeación y Gestión (MIPG - Decreto 1499 de 2017)',
                        blocks: [
                            {
                                type: 'p',
                                text: 'El MIPG es el marco de referencia del Estado colombiano para dirigir, planear, ejecutar y controlar la gestión pública hacia la generación de valor público.',
                            },
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Las 7 Dimensiones del MIPG',
                                        text: '1) Talento Humano (el corazón del modelo); 2) Direccionamiento Estratégico; 3) Gestión con Valores para el Resultado; 4) Evaluación de Resultados; 5) Información y Comunicación; 6) Gestión del Conocimiento y la Innovación; 7) Control Interno.',
                                    },
                                    {
                                        term: 'Esquema de las Tres Líneas de Defensa',
                                        text: '',
                                        children: [
                                            { term: 'Línea Estratégica', text: 'Alta Dirección y Comité Institucional de Coordinación de Control Interno.' },
                                            { term: '1ª Línea (Operativa)', text: 'Líderes de proceso y servidores de TI en su labor cotidiana (responsables directos de diseñar y ejecutar los controles de riesgos tecnológicos).' },
                                            { term: '2ª Línea (Riesgos y Cumplimiento)', text: 'Oficinas de Planeación y Seguridad de la Información (monitorean y aseguran que los controles se cumplan).' },
                                            { term: '3ª Línea (Evaluación Independiente)', text: 'Oficina de Control Interno / Auditoría Interna (evalúa objetivamente la eficacia de las dos primeras líneas).' },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '5.2 Transparencia (Ley 1712 de 2014) vs Reserva Legal Tributaria (Art. 583 E.T.)',
                        blocks: [
                            {
                                type: 'p',
                                text: 'El principio de máxima publicidad y apertura informativa tiene límites constitucionales estrictos y taxativos:',
                            },
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Reserva Legal Tributaria (Art. 583 del Estatuto Tributario)',
                                        text: 'La información tributaria respecto de las bases gravables y la determinación privada de los impuestos tiene carácter estrictamente reservado. Solo puede suministrarse a autoridades judiciales, fiscales o disciplinarias en el ejercicio de sus funciones.',
                                    },
                                    {
                                        term: 'Información Reservada e Información Clasificada (Ley 1712 de 2014)',
                                        text: 'La información clasificada protege derechos de particulares (intimidad, datos personales Ley 1581/2012, secretos comerciales). La información reservada protege intereses públicos superiores (seguridad nacional, infraestructura crítica del Estado, defensa).',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '5.3 Gestión Documental y Archivo en Entidades Públicas (Ley 594 de 2000)',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Ley General de Archivos (Ley 594 de 2000)',
                                        text: 'Regula los principios archivísticos en Colombia, obligando a conservar el patrimonio documental del Estado.',
                                    },
                                    {
                                        term: 'Tablas de Retención Documental (TRD)',
                                        text: 'Instrumento archivístico que define el ciclo de vida de los documentos (gestión, central, histórico) y su tiempo de retención o disposición final.',
                                    },
                                    {
                                        term: 'Expediente Electrónico y Foliado Digital',
                                        text: 'Conjunto de documentos electrónicos correspondientes a un mismo trámite, enlazados mediante un índice electrónico firmado digitalmente y metadatos del Archivo General de la Nación (AGN).',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    };

    PM.THEORY = THEORY;
})((window.PrepMaster = window.PrepMaster || {}));
