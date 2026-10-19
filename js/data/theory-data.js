(function (PM) {
    'use strict';

    /**
     * COMPENDIO TEÓRICO DE ALTO RENDIMIENTO — CONCURSO DIAN (CNSC)
     * Empleo: Gestor I (Código 301, Grado 01) | OPEC: 198476
     * Ficha CC-AU-3008: Proceso Cercanía con el Ciudadano · Subproceso Asistencia al Usuario
     *
     * Diseño pedagógico anti-saturación:
     * - 💡 Idea Clave (Resumen ejecutivo en 2 líneas)
     * - 📌 Puntos Críticos (Listas concisas de conceptos y normas)
     * - 📊 Tablas de Retención Rápida (Comparaciones directas)
     * - 🎯 Clave de Examen CNSC (Trampa típica del distractor y regla de juicio situacional)
     */
    const THEORY = {
        title: 'Guía Maestra de Estudio: Gestor I — DIAN (OPEC 198476)',
        meta: [
            'Proceso de Selección Oficial DIAN · CNSC | Nivel Profesional (Grado 01)',
            'Ficha CC-AU-3008: Asistencia al Usuario y Cercanía con el Ciudadano',
            'Enfoque de Alto Rendimiento: Conceptos clave, normas aplicadas y tips de juicio situacional',
            'Basado en la Guía de Aprendizaje Oficial OPEC 198476, Estatuto Tributario, DURT 1625/2016 y CPACA',
        ],
        sections: [
            /* -------------------------------------------------------------------------
               SECCIÓN 0: ESTRATEGIA DE ÉXITO Y METODOLOGÍA DE JUICIO SITUACIONAL CNSC
               ------------------------------------------------------------------------- */
            {
                id: 'introduccion',
                label: 'Guía del Examen',
                title: 'Estrategia de Éxito y Metodología de Juicio Situacional CNSC',
                topics: [
                    {
                        heading: 'Estructura de la Prueba y Fórmula para Ganar',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: La prueba escrita de la CNSC evalúa competencias a través de Casos (Contexto laboral real de la DIAN) con un dilema y 4 opciones. La prueba Funcional es eliminatoria (debes sacar mínimo 65-70 puntos), y la Comportamental es clasificatoria.',
                            },
                            {
                                type: 'table',
                                headers: ['Componente', 'Carácter', 'Ponderación Habitual', 'Objetivo'],
                                rows: [
                                    ['Competencias Funcionales', 'ELIMINATORIA', '60%', 'Superar el puntaje mínimo aprobatorio para no quedar excluido.'],
                                    ['Competencias Comportamentales', 'CLASIFICATORIA', '20% - 25%', 'Sumar puntos para quedar en los primeros lugares de la lista de elegibles.'],
                                    ['Valoración de Antecedentes', 'CLASIFICATORIA', '15% - 20%', 'Puntúa educación y experiencia adicional acreditada.'],
                                ],
                            },
                            {
                                type: 'callout',
                                variant: 'warning',
                                title: '🎯 La Regla de Oro del Juicio Situacional',
                                text: 'Para la CNSC, la opción correcta NUNCA es pasiva ("esperar que el sistema se arregle"), NUNCA es informal ("acordar de palabra o por WhatsApp"), NUNCA es arbitraria ("negar por capricho"), y NUNCA vulnera la reserva tributaria. La opción ganadora siempre aplica el procedimiento formal escrito, salvaguarda el debido proceso del ciudadano y protege el interés público.',
                            },
                        ],
                    },
                    {
                        heading: 'Técnica de Descarte Rápido de Opciones',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    { term: '1. Descartar el Distractor Pasivo', text: 'Opciones que dicen "abstenerse de actuar", "esperar a que el superior decida sin dejar constancia" o "remitir al usuario a otra sede sin validar".' },
                                    { term: '2. Descartar el Distractor Autoritario', text: 'Opciones que proponen "sancionar inmediatamente sin escuchar", "insultar al contribuyente" o "pedirle que se retire con la fuerza pública sin justa causa".' },
                                    { term: '3. Descartar el Distractor de Vía de Hecho', text: 'Opciones que proponen "modificar datos en el sistema por compasión" o "recibir documentos con enmiendas sin poder formal".' },
                                    { term: '4. Elegir la Opción Institucional', text: 'La opción que fundamenta la respuesta en la norma, deja constancia documental en el expediente, brinda orientación con lenguaje claro y garantiza el debido proceso.' },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 1: FUNCIÓN PÚBLICA Y ESTRUCTURA DIAN
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-1',
                label: 'M.1: Función Pública',
                title: 'Módulo 1: Régimen Constitucional de la Función Pública y Estructura DIAN',
                topics: [
                    {
                        heading: '1.1 Principios Constitucionales y Sistema Tributario (Art. 209 y 363 C.P.)',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: Todo servidor público responde por infringir la ley y por omisión o extralimitación (Art. 6 C.P.). La función administrativa está al servicio del interés general (Art. 209) y el sistema tributario se basa en Equidad, Eficiencia y Progresividad (Art. 363).',
                            },
                            {
                                type: 'list',
                                items: [
                                    { term: 'Equidad Tributaria', text: 'Cargas fiscales justas; a igual capacidad económica, igual tributación (horizontal), y a distinta capacidad, trato diferenciado (vertical).' },
                                    { term: 'Progresividad', text: 'A mayor capacidad económica del contribuyente, mayor proporción de su ingreso aporta al Estado.' },
                                    { term: 'Irretroactividad', text: 'Las leyes tributarias rigen a partir de su vigencia; nunca se aplican a períodos fiscales ya consolidados en el pasado.' },
                                    { term: 'Debido Proceso (Art. 29 C.P.)', text: 'Derecho fundamental a ser notificado, presentar pruebas, ser escuchado y controvertir decisiones administrativas.' },
                                ],
                            },
                            {
                                type: 'callout',
                                variant: 'tip',
                                title: '🎯 Clave CNSC sobre Principios',
                                text: 'Si una pregunta menciona que una ley nueva pretende cobrar un impuesto sobre un hecho ocurrido el año pasado, la opción correcta es que vulnera el principio de No Retroactividad (Art. 363 C.P.).',
                            },
                        ],
                    },
                    {
                        heading: '1.2 Estructura DIAN (Decreto 1742 de 2020) y Carrera (Decreto Ley 071 de 2020)',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: La DIAN es una UAE del orden nacional adscrita a Minhacienda, con personería jurídica, autonomía administrativa y presupuestal. Su régimen de carrera es específico y administrado por la CNSC.',
                            },
                            {
                                type: 'list',
                                items: [
                                    { term: 'Dirección de Gestión del Servicio', text: 'Nivel central rector de la atención al ciudadano, asistencia y administración del RUT.' },
                                    { term: 'Subdirección de Asistencia al Ciudadano', text: 'Diseña canales de atención, protocolos de servicio y gestiona el sistema PQRSD.' },
                                    { term: 'Subdirección de Identificación y Registro', text: 'Gobernanza técnica y normativa del RUT, procedimientos de inscripción, actualización y cancelación.' },
                                    { term: 'Período de Prueba en Carrera DIAN', text: 'Dura seis (6) meses. Se supera con evaluación satisfactoria o sobresaliente para ser escalafonado.' },
                                    { term: 'Derecho Preferente de Encargo (Art. 19)', text: 'Las vacantes temporales se proveen con el empleado de carrera del grado inferior con perfil, calificación sobresaliente y sin sanción disciplinaria.' },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '1.3 Régimen Disciplinario e Incompatibilidades Post-Empleo',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: El Código General Disciplinario (Ley 1952 de 2019 / Ley 2094 de 2021) sanciona faltas contra los deberes funcionales. La concusión (pedir dinero), violación de reserva y tráfico de influencias son faltas gravísimas.',
                            },
                            {
                                type: 'table',
                                headers: ['Situación Disciplinaria', 'Regla Legal Aplicable', 'Consecuencia'],
                                rows: [
                                    ['Orden superior manifiestamente ilegal', 'Derecho de representación: solicitar orden escrita y motivada (Art. 38).', 'Salva la responsabilidad del funcionario subordinado.'],
                                    ['Ofrecimiento de dinero o regalos de usuarios', 'Rechazo categórico e inmediato recordándole la gratuidad del servicio público.', 'Recibir constituye falta gravísima dolosa (destitución e inhabilidad).'],
                                    ['Trámite de familiar (hasta 4° consanguinidad)', 'Declararse formalmente impedido por escrito (Art. 11 CPACA).', 'Garantiza la imparcialidad del Estado.'],
                                    ['Exservidor que gestiona ante la DIAN', 'Incompatibilidad legal de dos (2) años para gestionar asuntos que conoció en su empleo.', 'Sanción disciplinaria e invalidez de la actuación.'],
                                ],
                            },
                        ],
                    },
                ],
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
                        heading: '2.1 Términos Mágicos del Derecho de Petición (Ley 1755 de 2015)',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: Toda persona puede formular peticiones respetuosas ante la DIAN. Los términos de respuesta son perentorios e improrrogables salvo excepciones de ley.',
                            },
                            {
                                type: 'table',
                                headers: ['Tipo de Petición', 'Plazo Legal', 'Consecuencia si se Vence'],
                                rows: [
                                    ['Copias y Documentos', '10 días hábiles', 'Aceptación tácita: la DIAN debe entregar las copias gratuitamente dentro de los 3 días siguientes.'],
                                    ['Interés General o Particular / PQRSD', '15 días hábiles', 'Regla general de peticiones, quejas y reclamos.'],
                                    ['Consultas Doctrinales / Técnicas', '30 días hábiles', 'Consultas sobre interpretación de la normativa tributaria y aduanera.'],
                                    ['Entre Autoridades Públicas', '10 días hábiles', 'Informes solicitados por otras entidades u órganos de control.'],
                                ],
                            },
                            {
                                type: 'callout',
                                variant: 'tip',
                                title: '🎯 Clave CNSC sobre Peticiones Incompletas (Art. 17 CPACA)',
                                text: 'Si el peticionario no adjunta los documentos obligatorios: 1) La DIAN tiene 10 días para requerirlo por una sola vez; 2) El ciudadano tiene 1 mes para subsanar (prorrogable por 1 mes más); 3) Si no subsana, opera el DESISTIMIENTO TÁCITO mediante acto administrativo motivado (contra el que solo procede recurso de reposición).',
                            },
                        ],
                    },
                    {
                        heading: '2.2 Peticiones Anónimas y Silencio Administrativo',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    { term: 'Peticiones y Denuncias Anónimas', text: 'Son plenamente procedentes. La entidad debe admitirlas y tramitarlas si contienen hechos concretos, precisos y verificables de interés público o infracciones fiscales.' },
                                    { term: 'Silencio Administrativo Negativo', text: 'Regla general: transcurridos 3 meses sin respuesta, se entiende denegada la solicitud para permitir acudir a la vía judicial.' },
                                    { term: 'Silencio Administrativo Positivo', text: 'Solo opera cuando la ley especial lo consagra taxativamente (ej. en ciertas solicitudes tributarias de devoluciones o recursos aduaneros específicos).' },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '2.3 Actos Administrativos, Recursos y Notificación Electrónica',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    { term: 'Corrección de Errores Formales (Art. 45 CPACA)', text: 'Errores simplemente mecanográficos o de digitación (ej. un dígito del NIT o nombre) se corrigen en cualquier tiempo sin revocar el fondo del acto.' },
                                    { term: 'Recursos en Vía Administrativa', text: 'Reposición (ante el mismo funcionario) y Apelación (ante el superior jerárquico). Plazo para interponerlos: 10 días hábiles siguientes a la notificación.' },
                                    { term: 'Notificación Electrónica DIAN (Art. 566-1 E.T.)', text: 'Se envía al correo registrado en la casilla 44 del RUT. Los términos para el contribuyente corren a partir del quinto (5) día hábil siguiente a la entrega del correo.' },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 3: REGISTRO ÚNICO TRIBUTARIO (RUT)
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-3',
                label: 'M.3: Administración del RUT',
                title: 'Módulo 3: Registro Único Tributario (RUT) — Núcleo Misional Gestor I',
                topics: [
                    {
                        heading: '3.1 Qué es el RUT y Quiénes Están Obligados (Art. 555-2 E.T. / DURT 1625)',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: El RUT es el mecanismo único para Identificar, Ubicar y Clasificar a los sujetos con obligaciones tributarias, aduaneras y cambiarias. Administrado exclusivamente por la DIAN.',
                            },
                            {
                                type: 'list',
                                items: [
                                    { term: 'Obligados a Inscribirse', text: 'Personas naturales y jurídicas comerciantes o declarantes, sucesiones ilíquidas, consorcios, inversionistas extranjeros, responsables y no responsables de IVA/Impoconsumo, exportadores/importadores.' },
                                    { term: 'Plazo de Actualización (Art. 658-3 E.T.)', text: 'Dentro del mes siguiente al hecho generador del cambio (ej. cambio de dirección o actividad). Sanción por no actualizar: 2 UVT por cada día de mora.' },
                                    { term: 'Sanción por no Exhibir el RUT (Art. 658-3 E.T.)', text: 'Los establecimientos comerciales deben exhibir copia del RUT en lugar visible. No hacerlo genera sanción de clausura de 3 días o multa de 10 UVT.' },
                                ],
                            },
                        ],
                    },
                    {
                        heading: '3.2 Casillas Críticas del Formulario 001 (Hoja 1)',
                        blocks: [
                            {
                                type: 'table',
                                headers: ['Casilla(s)', 'Nombre del Campo', 'Dato Clave para el Examen'],
                                rows: [
                                    ['Casilla 4 y 5', 'NIT y Dígito de Verificación (DV)', 'Algoritmo módulo 11 generado automáticamente por el sistema.'],
                                    ['Casilla 38 a 43', 'Ubicación Geográfica', 'País (169 Colombia), Departamento, Municipio y Dirección procesal estandarizada.'],
                                    ['Casilla 44', 'Correo Electrónico de Notificación', 'Dirección obligatoria donde surten efecto vinculante las notificaciones electrónicas de la DIAN.'],
                                    ['Casillas 46 a 50', 'Actividades Económicas (CIIU)', 'Código numérico de 4 dígitos según la Clasificación Industrial Internacional Uniforme (CIIU Rev. 4 A.C., Resolución DIAN 000139 de 2020) y fecha de inicio.'],
                                    ['Casilla 53', 'Responsabilidades y Atributos', '05 Renta Ordinaria, 07 Retención en la fuente, 14 Aduanero, 47 Régimen Simple (RST), 48 Responsable del IVA, 49 No responsable del IVA, 52 Facturador Electrónico.'],
                                ],
                            },
                        ],
                    },
                    {
                        heading: '3.3 Validación Documental en Casos Especiales',
                        blocks: [
                            {
                                type: 'table',
                                headers: ['Tipo de Sujeto', 'Documentos Indispensables para Validar', 'Rol del Gestor I'],
                                rows: [
                                    ['Menor de Edad', 'Tarjeta de identidad / Registro civil + Cédula del padre, madre o tutor legal que actúa como representante.', 'Valida parentesco y firma del representante en casilla 98.'],
                                    ['Sucesión Ilíquida', 'Registro civil de defunción del causante + Documento de apertura de sucesión (notarial o judicial) o acreditación de herederos.', 'Inscribe la sucesión identificando al causante con la sigla "Sucesión Ilíquida".'],
                                    ['Consorcios / U.T.', 'Documento privado de constitución con designación de representante legal y duración.', 'Asigna NIT temporal con vigencia sujeta a la duración del contrato.'],
                                    ['Apoderado', 'Poder especial con nota de presentación personal (o poder general por escritura pública vigente).', 'Verifica facultades expresas para actuar ante la DIAN.'],
                                ],
                            },
                        ],
                    },
                    {
                        heading: '3.4 Actualizaciones Sujetas a Verificación Previa, Suspensión y Cancelación',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    { term: 'Retiro de Responsabilidad de IVA (Código 48 a 49)', text: 'Exige que durante los tres (3) años fiscales anteriores consecutivos haya cumplido todos los topes del parágrafo 3 del Art. 437 E.T. (ingresos < 3.500 UVT anuales). Si en uno de los 3 años los superó, se NIEGA.' },
                                    { term: 'Suspensión del RUT (Art. 1.6.1.2.16 DURT)', text: 'Medida cautelar por: no ubicación (correo devuelto), inconsistencias graves de identidad o fallecimiento no formalizado. El NIT queda inhabilitado para facturar y comerciar.' },
                                    { term: 'Cancelación del RUT (Art. 1.6.1.2.18 DURT)', text: 'Pone fin definitivo por liquidación formal de personas jurídicas inscrita en Cámara de Comercio, liquidación de masa sucesoral, duplicidad de NIT u orden judicial.' },
                                ],
                            },
                            {
                                type: 'callout',
                                variant: 'warning',
                                title: '🎯 Clave CNSC: La Trampa de los 3 Años en el IVA',
                                text: 'En el examen suelen plantear un caso donde el contribuyente vendió 3.000 UVT el año pasado y pide retirar el IVA, pero hace dos años vendió 4.000 UVT. La respuesta correcta siempre es RECHAZAR la solicitud porque la norma exige cumplir los topes en los 3 años anteriores consecutivos.',
                            },
                        ],
                    },
                ],
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
                        heading: '4.1 Canales de Atención DIAN y Protocolo con Enfoque Diferencial',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: La DIAN opera con un modelo omnicanal (Presencial, Virtual, Telefónico y Móvil). La atención al ciudadano es prioritaria, gratuita y con lenguaje claro.',
                            },
                            {
                                type: 'list',
                                items: [
                                    { term: 'Atención Prioritaria sin Cita (Ley 1757 de 2015)', text: 'Obligatoria para adultos mayores, mujeres gestantes, personas en condición de discapacidad y personas con niños en brazos. Nunca se les puede rechazar por no tener cita virtual.' },
                                    { term: 'Política de Lenguaje Claro', text: 'Explicar los trámites y decisiones en palabras sencillas y directas, sin jerga incomprensible, indicando exactamente qué debe hacer el ciudadano y en qué plazos.' },
                                    { term: 'Kioscos de Autogestión Guiada', text: 'Espacios en puntos de contacto donde el servidor acompaña al usuario en el uso del portal web para fomentar la autonomía tecnológica.' },
                                ],
                            },
                            {
                                type: 'callout',
                                variant: 'tip',
                                title: '🎯 Clave CNSC: Manejo de Usuarios en Situación de Vulnerabilidad',
                                text: 'Ante un ciudadano analfabeta digital o de zona rural que necesita el RUT con urgencia y llega sin cita, la opción correcta NUNCA es decirle que pida cita por internet. La opción correcta es brindarle atención prioritaria y guiarlo personalmente en el punto de contacto.',
                            },
                        ],
                    },
                    {
                        heading: '4.2 Instrumento de Firma Electrónica (IFE / e-Firma)',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    { term: 'Equivalencia Jurídica (Ley 527 de 1999)', text: 'El IFE tiene el mismo valor y fuerza probatoria que la firma manuscrita para declaraciones y actos tributarios.' },
                                    { term: 'Generación y Renovación Autónoma', text: 'Se realiza 100% en línea mediante clave dinámica (código OTP) enviada al correo o celular registrado en el RUT.' },
                                    { term: 'Vigencia Legal', text: 'Tiene una vigencia de tres (3) años, renovable antes de su expiración.' },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 5: CULTURA DE LA CONTRIBUCIÓN, FACTURACIÓN Y OBLIGACIONES
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-5',
                label: 'M.5: Cultura y Deberes',
                title: 'Módulo 5: Fomento de la Cultura de la Contribución y Obligaciones TACI',
                topics: [
                    {
                        heading: '5.1 Cultura Tributaria (Ley 223/1995): Evasión vs Elusión vs Economía de Opción',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: La cultura de contribución fomenta el cumplimiento voluntario. El Estado promueve la pedagogía fiscal mediante los Núcleos de Apoyo Contable y Fiscal (NAF) en convenio con universidades.',
                            },
                            {
                                type: 'table',
                                headers: ['Concepto', 'Definición', 'Legalidad'],
                                rows: [
                                    ['Economía de Opción', 'Elegir lícitamente el régimen fiscal más favorable que la ley permite (ej. acogerse voluntariamente al Régimen Simple).', 'TOTALMENTE LEGAL'],
                                    ['Elusión Fiscal', 'Uso de vacíos o artificios normativos para evitar el pago del impuesto sin violar expresamente el texto literal de la ley.', 'ABUSO TRIBUTARIO (Sancionable)'],
                                    ['Evasión Fiscal', 'Ocultamiento deliberado de ingresos, compras falsas o no facturación para no pagar tributos.', 'ILEGAL / DELITO PENAL'],
                                ],
                            },
                        ],
                    },
                    {
                        heading: '5.2 Facturación Electrónica y Sanción de Clausura (Art. 616-1 y 657 E.T.)',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    { term: 'Validación Previa en Tiempo Real', text: 'La factura electrónica debe transmitirse y ser validada por la DIAN en milisegundos antes de ser entregada al cliente.' },
                                    { term: 'Sanción de Clausura del Establecimiento (Art. 657 E.T.)', text: 'No expedir factura de venta estando obligado, o expedirla sin los requisitos legales, da lugar al cierre del establecimiento comercial por tres (3) días con sellos oficiales.' },
                                    { term: 'Factura de Talonario por Contingencia', text: 'Cuando el sistema informático de la DIAN o del contribuyente presente fallas técnicas, se expiden facturas de talonario impreso, las cuales deben transmitirse electrónicamente a la DIAN dentro de las 48 horas siguientes a la superación de la falla.' },
                                    { term: 'Deducción del 1% para Personas Naturales (Ley 2277/2022)', text: 'Deducción en renta del 1% de compras pagadas con medios electrónicos y soportadas con factura electrónica validada.' },
                                    { term: 'Régimen Simple de Tributación (RST - Art. 903 E.T.)', text: 'Modelo unificado opcional para ingresos < 100.000 UVT que integra Renta, Impoconsumo e ICA municipal sin retención en la fuente a título de renta.' },
                                ],
                            },
                        ],
                    },
                ],
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
                        heading: '6.1 Reserva Legal Tributaria (Art. 583 y 584 E.T.)',
                        blocks: [
                            {
                                type: 'p',
                                text: '💡 Idea Clave: Las declaraciones privadas y bases gravables son CONFIDENCIALES. Violar la reserva tributaria genera DESTITUCIÓN inmediata del servidor e inhabilidad general.',
                            },
                            {
                                type: 'table',
                                headers: ['¿Quién Solicita Información?', '¿Se Puede Entregar?', 'Fundamento Legal'],
                                rows: [
                                    ['Juez Penal con orden dentro de un proceso', 'SÍ SE ENTREGA', 'Art. 583 E.T. Excepción legal judicial penal.'],
                                    ['Contraloría o Procuraduría en investigaciones', 'SÍ SE ENTREGA', 'Art. 585 y 586 E.T. Control fiscal y disciplinario.'],
                                    ['Juez de Familia en procesos de alimentos', 'SÍ SE ENTREGA', 'Excepción legal expresa para alimentos.'],
                                    ['Cónyuge, parientes, socios o periodistas', 'NUNCA / NEGATIVA ROTUNDA', 'Art. 583 E.T. Amparado por reserva absoluta.'],
                                ],
                            },
                        ],
                    },
                    {
                        heading: '6.2 MIPG (Decreto 1499 de 2017) y Tres Líneas de Defensa',
                        blocks: [
                            {
                                type: 'list',
                                items: [
                                    { term: 'Dimensión Corazón del MIPG', text: 'Talento Humano (gestión ética y competente de las personas).' },
                                    { term: 'Primera Línea de Defensa (El Gestor I)', text: 'Operativa: aplica los controles preventivos diarios al verificar documentos y validar el RUT para evitar fraudes.' },
                                    { term: 'Segunda Línea de Defensa', text: 'Planeación y Gestión de Riesgos: monitorea y asegura el cumplimiento de controles.' },
                                    { term: 'Tercera Línea de Defensa', text: 'Oficina de Control Interno: evaluación independiente y objetiva mediante auditorías.' },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* -------------------------------------------------------------------------
               MÓDULO 7: COMPETENCIAS COMPORTAMENTALES GESTOR I
               ------------------------------------------------------------------------- */
            {
                id: 'modulo-7',
                label: 'M.7: Comportamentales',
                title: 'Módulo 7: Competencias Comportamentales del Gestor I (Decreto 815 de 2018)',
                topics: [
                    {
                        heading: 'Conductas de Éxito en el Nivel Profesional',
                        blocks: [
                            {
                                type: 'table',
                                headers: ['Competencia Evaluada', 'Conducta Incorrecta (Distractor)', 'Conducta de Éxito CNSC'],
                                rows: [
                                    ['Orientación al Usuario', 'Atender de mala gana o rechazar por formalismos menores.', 'Atención cálida, oportuna y pedagógica con enfoque diferencial.'],
                                    ['Orientación a Resultados', 'Aprobar trámites sin revisar con tal de cumplir la meta rápida.', 'Evacuar trámites con celeridad pero con rigor técnico sin reprocesos.'],
                                    ['Integridad y Honestidad', 'Aceptar obsequios o ignorar documentos falsos aportados.', 'Rechazo total a dádivas y denuncia formal de delitos o fraudes.'],
                                    ['Trabajo en Equipo', 'Burlarse o aislar a compañeros nuevos con dificultades.', 'Acompañamiento pedagógico y apoyo solidario en horas pico.'],
                                    ['Comunicación Asertiva', 'Gritar al usuario enojado o usar tecnicismos oscuros.', 'Explicar con serenidad, empatía y lenguaje claro.'],
                                    ['Adaptabilidad al Cambio', 'Negarse a usar nuevas herramientas digitales.', 'Apropiar tecnologías de autogestión y biometría proactivamente.'],
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
