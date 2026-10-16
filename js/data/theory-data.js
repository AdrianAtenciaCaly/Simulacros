(function (PM) {
    'use strict';

    /**
     * Texto de la teoría (extraído del PDF "Compendio Teórico Maestro", ya como datos).
     * No se carga ningún PDF en tiempo de ejecución.
     *
     * Bloques soportados:
     *   { type: 'p',    text }
     *   { type: 'list', ordered?: boolean, items: [{ term?, text, children?: items[] }] }
     */
    const THEORY = {
        title: 'Compendio Teórico Maestro y Exhaustivo para el Estudio Oficial: Concurso DIAN',
        meta: [
            'Proceso de Selección CNSC – Empleo: Gestor I (Código 301, Grado 01)',
            'Ficha de Empleo: IT-TO-3008 | Nivel Jerárquico: Profesional | Proceso: Información, Innovación y Tecnología | Subproceso: Innovación y Tecnología (Área: Infraestructura Tecnológica y de Operaciones)',
        ],
        sections: [
            {
                id: 'introduccion',
            label: 'Introducción',
                title: 'Introducción y orientación de lectura',
                topics: [
                    {
                        blocks: [
                            {
                                type: 'p',
                                text: 'Este compendio ha sido diseñado de manera exhaustiva para proporcionarte todo el marco conceptual, jurídico, administrativo y técnico necesario para superar con éxito las pruebas escritas del concurso de méritos. La lectura detallada de cada uno de los siguientes módulos te preparará no solo para responder preguntas conceptuales, sino para analizar y resolver casos situacionales complejos bajo los estándares de la Comisión Nacional del Servicio Civil (CNSC) y de la Dirección de Impuestos y Aduanas Nacionales (DIAN).',
                            },
                        ],
                    },
                ],
            },

            /* ---------------------------- MÓDULO 1 ---------------------------- */
            {
                id: 'modulo-1',
            label: 'Módulo 1',
                title: 'Módulo 1: Régimen constitucional de la función pública y estructura del Estado',
                topics: [
                    {
                        heading: '1.1 El Estado Social de Derecho y los fines esenciales',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Fundamento Constitucional',
                                        text: 'Colombia se organiza como un Estado social de derecho, unitario, descentralizado, fundado en el respeto de la dignidad humana, el trabajo, la solidaridad y la prevalencia del interés general (Artículos 1 y 2 de la Constitución Política).',
                                    },
                                    {
                                        term: 'Traducción Práctica para el Gestor I',
                                        text: 'En una entidad recaudadora e impulsora del control fiscal como la DIAN, la prevalencia del interés general determina que la gestión de los centros de cómputo, servidores, redes de comunicaciones y bases de datos institucionales no persigue fines comerciales o particulares, sino garantizar de forma continua, segura y eficiente los recursos fiscales que financian la inversión social del Estado.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '1.2 El principio de legalidad y la responsabilidad del servidor público',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'El Principio de Legalidad (Art. 6 C.P.)',
                                        text: 'Mientras que los particulares se rigen por la autonomía de la voluntad y pueden hacer todo aquello que la ley no les prohíbe, los servidores públicos están sometidos estrictamente al principio de legalidad taxativa. Esto significa que un empleado de la DIAN solo tiene permitido ejecutar aquello para lo cual está facultado de manera expresa por la Constitución, la ley y los reglamentos.',
                                    },
                                    {
                                        term: 'Impacto Operativo',
                                        text: 'Otorgar accesos privilegiados a bases de datos, modificar configuraciones críticas de redes de comunicaciones o alterar políticas de seguridad sin un soporte normativo o institucional formal constituye una extralimitación de funciones, acarreando responsabilidad disciplinaria ante la Procuraduría General de la Nación, fiscal y penal.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '1.3 Los principios de la función administrativa (Art. 209 C.P.)',
                        blocks: [
                            {
                                type: 'p',
                                text: 'La función administrativa está al servicio de los intereses generales y se desarrolla bajo los siguientes principios rectores:',
                            },
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Igualdad',
                                        text: 'Trato imparcial y objetivo a todas las dependencias usuarias de la plataforma tecnológica y a los ciudadanos que interactúan con los servicios informáticos.',
                                    },
                                    {
                                        term: 'Moralidad',
                                        text: 'Toda actuación técnica y administrativa debe estar exenta de conflictos de interés, corrupción o aprovechamiento indebido de privilegios informáticos.',
                                    },
                                    {
                                        term: 'Eficacia',
                                        text: 'Logro oportuno de los objetivos del subproceso de Innovación y Tecnología optimizando los recursos públicos físicos y virtuales.',
                                    },
                                    {
                                        term: 'Celeridad',
                                        text: 'Impulso oficioso de los procesos de soporte y mitigación de incidentes tecnológicos, evitando dilaciones injustificadas.',
                                    },
                                    {
                                        term: 'Publicidad',
                                        text: 'Transparencia en los actos de la administración tecnológica, garantizando la trazabilidad mediante bitácoras (logs) auditables, sin comprometer la seguridad de la información.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '1.4 Régimen de carrera administrativa en la DIAN',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Naturaleza del Empleo',
                                        text: 'El cargo de Gestor I (Código 301, Grado 01) pertenece al nivel profesional bajo la modalidad de Carrera Administrativa, adscrito al proceso de Información, Innovación y Tecnología. El ingreso y permanencia en este empleo se rigen estrictamente por el mérito a través de los concursos públicos de la CNSC.',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* ---------------------------- MÓDULO 2 ---------------------------- */
            {
                id: 'modulo-2',
            label: 'Módulo 2',
                title: 'Módulo 2: Procedimiento administrativo y de lo contencioso administrativo (CPACA - Ley 1437 de 2011)',
                topics: [
                    {
                        heading: '2.1 Ámbito de aplicación y garantías procesales',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Finalidad',
                                        text: 'Regular las actuaciones de todas las autoridades administrativas para proteger los derechos fundamentales de los ciudadanos, asegurar el respeto por el debido proceso y garantizar la efectividad de los principios constitucionales.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '2.2 Régimen integral del derecho de petición (Ley 1755 de 2015 / CPACA)',
                        blocks: [
                            {
                                type: 'p',
                                text: 'El derecho de petición es un derecho fundamental de aplicación inmediata. En el contexto de las funciones de la DIAN, se clasifica y rige por los siguientes términos perentorios:',
                            },
                            {
                                type: 'list',
                                ordered: true,
                                items: [
                                    {
                                        term: 'Peticiones de información general o particular',
                                        text: 'Deben resolverse dentro de los 15 días hábiles siguientes a su recepción.',
                                    },
                                    {
                                        term: 'Peticiones de copias y documentos',
                                        text: 'Deben resolverse en un término máximo de 10 días hábiles.',
                                    },
                                    {
                                        term: 'Peticiones de consultas jurídicas o técnicas',
                                        text: 'Dada su complejidad analítica, la ley otorga un plazo máximo de 30 días hábiles para emitir respuesta de fondo.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '2.3 Actuaciones administrativas y trámite de requerimientos',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Gestión de Peticiones Incompletas (Artículo 17 del CPACA)',
                                        text: 'Si la autoridad administrativa advierte que una petición presentada por un ciudadano o dependencia carece de los elementos o información indispensables para emitir un pronunciamiento de fondo, lo requerirá al peticionario por una sola vez dentro de los diez (10) días hábiles siguientes.',
                                    },
                                    {
                                        term: 'Efecto de la Interrupción de Términos',
                                        text: 'El requerimiento formal por incompleta interrumpe los términos legales que tiene la entidad para responder. Los plazos legales se reanudan a partir del día hábil siguiente en que el peticionario aporte lo requerido.',
                                    },
                                    {
                                        term: 'Desistimiento Tácito',
                                        text: 'Si transcurren dos (2) meses desde el requerimiento sin que el peticionario presente la información solicitada, la administración interpretará que ha desistido de su solicitud y declarará el archivo del expediente mediante acto administrativo motivado.',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* ---------------------------- MÓDULO 3 ---------------------------- */
            {
                id: 'modulo-3',
            label: 'Módulo 3',
                title: 'Módulo 3: Infraestructura tecnológica, centros de cómputo y operaciones (Gestor I)',
                topics: [
                    {
                        heading: '3.1 Análisis del propósito principal del empleo (Ficha IT-TO-3008)',
                        blocks: [
                            {
                                type: 'p',
                                text: 'El propósito principal del Gestor I (Ficha IT-TO-3008) es: "Registrar y atender las acciones necesarias de la plataforma tecnológica de la DIAN On Premise como Cloud, plataforma de productividad con tecnología de nube y demás componentes de la infraestructura tecnológica, de acuerdo con las políticas, normas y estándares institucionales". Esto exige dominar tanto la infraestructura física tradicional (On-Premise) como los despliegues elásticos y modernos basados en nube (Cloud).',
                            },
                        ],
                    },
                    {
                        heading: '3.2 Desglose técnico de las funciones esenciales',
                        blocks: [],
                    },
                    {
                        heading: 'A. Gestión de centros de cómputo, servidores y redes de comunicaciones',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Infraestructura de Centros de Datos (Datacenters)',
                                        text: 'Operación de racks, gabinetes, sistemas de alimentación ininterrumpida (UPS), plantas eléctricas de respaldo, sistemas de climatización de precisión y control físico de acceso a los servidores físicos que soportan los sistemas de recaudación tributaria.',
                                    },
                                    {
                                        term: 'Sistemas Operativos Corporativos',
                                        text: 'Administración avanzada, configuración, parchado y auditoría de servidores basados en distribuciones empresariales de Linux y entornos Windows Server, gestionando servicios de dominio, permisos de archivos, control de demonios/servicios y análisis de registros (syslog y visores de eventos).',
                                    },
                                    {
                                        term: 'Redes y Conectividad (Modelo TCP/IP y OSI)',
                                        text: '',
                                        children: [
                                            {
                                                term: 'Direccionamiento IP',
                                                text: 'Planificación, asignación y control de subredes IPv4 e IPv6, uso de máscaras de subred y cálculo de puertas de enlace.',
                                            },
                                            {
                                                term: 'Enrutamiento y Protocolos',
                                                text: 'Diagnóstico y soporte de conectividad en redes LAN y WAN, resolución de nombres mediante DNS, asignación dinámica de configuraciones con DHCP, y análisis de tráfico web a través de los protocolos seguros HTTP y HTTPS.',
                                            },
                                            {
                                                term: 'Seguridad Perimetral',
                                                text: 'Implementación de políticas de control de puertos, segmentación de redes corporativas mediante VLANs y verificación de conectividad mediante herramientas de diagnóstico.',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: 'B. Sistemas gestores de bases de datos (SGBD) y Directorio Activo',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Motores de Bases de Datos Relacionales',
                                        text: 'Operación, monitoreo y soporte de SGBD institucionales, garantizando en todo momento las propiedades ACID:',
                                        children: [
                                            {
                                                term: 'Atomicidad',
                                                text: 'Las transacciones se ejecutan completamente o no se ejecutan (todo o nada).',
                                            },
                                            {
                                                term: 'Consistencia',
                                                text: 'Toda transacción lleva a la base de datos de un estado válido a otro válido, respetando restricciones de integridad.',
                                            },
                                            {
                                                term: 'Aislamiento',
                                                text: 'Las transacciones concurrentes se ejecutan de forma independiente sin interferir entre sí.',
                                            },
                                            {
                                                term: 'Durabilidad',
                                                text: 'Una vez confirmada una transacción (commit), los cambios persisten incluso ante fallos catastróficos de energía o hardware.',
                                            },
                                        ],
                                    },
                                    {
                                        term: 'Directorio Activo e Identidades',
                                        text: 'Administración de servicios de directorio centralizado, gestión de objetos (usuarios, equipos, unidades organizacionales), aplicación de Políticas de Grupo (GPO), control de accesos basados en roles (RBAC) y supervisión del licenciamiento de software adquirido por la entidad.',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: 'C. Operación en entornos híbridos On-Premise y Cloud',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Arquitecturas Híbridas y Modelos de Despliegue en Nube',
                                        text: 'Gestión coordinada de plataformas tecnológicas locales y en la nube bajo los modelos de servicio:',
                                        children: [
                                            {
                                                term: 'IaaS (Infraestructura como Servicio)',
                                                text: 'Provisión de servidores virtuales, almacenamiento y redes bajo demanda.',
                                            },
                                            {
                                                term: 'PaaS (Plataforma como Servicio)',
                                                text: 'Entornos preconfigurados para el desarrollo, prueba y despliegue de aplicaciones institucionales.',
                                            },
                                            {
                                                term: 'SaaS (Software como Servicio)',
                                                text: 'Aplicaciones de productividad y colaboración alojadas en la nube.',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: 'D. Continuidad del negocio, monitoreo y recuperación ante desastres',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Monitoreo Proactivo',
                                        text: 'Vigilancia continua del estado de salud de la CPU, memoria RAM, almacenamiento, uso de ancho de banda y servicios críticos mediante herramientas de supervisión centralizada de registros y alertas tempranas.',
                                    },
                                    {
                                        term: 'Métricas Clave de Continuidad (RTO y RPO)',
                                        text: '',
                                        children: [
                                            {
                                                term: 'RTO (Recovery Time Objective / Objetivo de Tiempo de Recuperación)',
                                                text: 'Mide el tiempo máximo tolerable durante el cual un servicio de tecnología puede permanecer inactivo tras una interrupción o desastre antes de causar un daño crítico a la misión de la DIAN.',
                                            },
                                            {
                                                term: 'RPO (Recovery Point Objective / Objetivo de Punto de Recuperación)',
                                                text: 'Mide la tolerancia máxima de pérdida de datos medida en el tiempo, lo que determina directamente la frecuencia y estrategia de los respaldos institucionales.',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        heading: 'E. Seguridad de la información, cumplimiento y almacenamiento',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    {
                                        term: 'Principio de Menor Privilegio (Least Privilege Principle)',
                                        text: 'Política de seguridad fundamental que establece que cualquier usuario, cuenta de servicio o proceso de software debe poseer únicamente los permisos y privilegios mínimos indispensables para realizar sus funciones asignadas, reduciendo la superficie de ataque.',
                                    },
                                    {
                                        term: 'Sistemas de Almacenamiento Tolerantes a Fallos (Arreglos RAID)',
                                        text: '',
                                        children: [
                                            {
                                                term: 'RAID 1 (Mirroring / Espejo)',
                                                text: 'Duplica de forma idéntica los datos en dos o más discos duros. Si un disco falla, el sistema sigue operando sin pérdida de información, ofreciendo máxima seguridad a costa de utilizar el 50% de la capacidad neta de almacenamiento.',
                                            },
                                            {
                                                term: 'RAID 5 (Paridad Distribuida)',
                                                text: 'Requiere un mínimo de 3 discos. Distribuye los bloques de datos y la información de paridad entre todos los discos del arreglo. Tolera la falla física de un disco duro sin perder información, optimizando la capacidad de almacenamiento disponible.',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* ---------------------------- MÓDULO 4 ---------------------------- */
            {
                id: 'modulo-4',
            label: 'Módulo 4',
                title: 'Módulo 4: Competencias comportamentales institucionales',
                topics: [
                    {
                        blocks: [
                            {
                                type: 'list',
                                ordered: true,
                                items: [
                                    {
                                        term: 'Comportamiento Ético (Nivel 4)',
                                        text: 'Actuar con absoluta rectitud, honestidad y apego irrestricto a los deberes del servicio público, protegiendo los recursos informáticos y salvaguardando la estricta confidencialidad de la información tributaria y fiscal del Estado.',
                                    },
                                    {
                                        term: 'Innovación (Nivel 3)',
                                        text: 'Proponer, diseñar e implementar mejoras técnicas, automatizaciones y soluciones creativas para optimizar la operación de los centros de cómputo y la transformación tecnológica de la entidad.',
                                    },
                                    {
                                        term: 'Trabajo en Equipo (Nivel 3)',
                                        text: 'Colaborar de forma armónica y articulada con equipos técnicos multidisciplinarios, compartiendo conocimientos y alineando esfuerzos para dar solución a incidentes complejos de infraestructura.',
                                    },
                                    {
                                        term: 'Comunicación Efectiva (Nivel 3)',
                                        text: 'Transmitir información técnica compleja de manera clara, asertiva y oportuna tanto a los usuarios internos como a los superiores jerárquicos, elaborando reportes de incidentes y bitácoras con rigor profesional.',
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
