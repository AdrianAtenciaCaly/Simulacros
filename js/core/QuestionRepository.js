(function (PM) {
    'use strict';

    /**
     * Acceso de solo lectura al banco de preguntas.
     * Recibe los datos por constructor (inversión de dependencias): las vistas
     * no conocen de dónde vienen las preguntas (archivo, API, localStorage...).
     */
    class QuestionRepository {
        #modules;
        #blockSize;

        constructor(modules, { blockSize }) {
            this.#modules = modules;
            this.#blockSize = blockSize;
        }

        get blockSize() {
            return this.#blockSize;
        }

        getModules() {
            return this.#modules;
        }

        getModule(moduleIndex) {
            const mod = this.#modules[moduleIndex];
            if (!mod) throw new RangeError(`Módulo inexistente: ${moduleIndex}`);
            return mod;
        }

        getBlockCount(moduleIndex) {
            return Math.ceil(this.getModule(moduleIndex).questions.length / this.#blockSize);
        }

        /**
         * Randomiza el orden de las preguntas del módulo indicado.
         * Utiliza Fisher‑Yates para una distribución uniforme.
         */
        shuffleModule(moduleIndex) {
            const mod = this.getModule(moduleIndex);
            const arr = mod.questions;
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
            }
        }

        getBlock(moduleIndex, blockIndex) {
            const start = blockIndex * this.#blockSize;
            const questions = this.getModule(moduleIndex).questions.slice(start, start + this.#blockSize);
            if (questions.length === 0) throw new RangeError(`Bloque inexistente: ${blockIndex}`);
            return questions;
        }

        getTotalQuestions() {
            return this.#modules.reduce((sum, m) => sum + m.questions.length, 0);
        }

        /**
         * Obtiene estadísticas de avance del módulo (preguntas respondidas, correctas, pendientes).
         */
        getModuleStats(moduleIndex) {
            const mod = this.getModule(moduleIndex);
            return PM.progressTracker.getModuleStats(mod.id, mod.questions);
        }

        /**
         * Obtiene las siguientes preguntas no respondidas aún en el módulo.
         */
        getPendingQuestions(moduleIndex, limit = this.#blockSize) {
            const mod = this.getModule(moduleIndex);
            return PM.progressTracker.getPendingQuestions(mod.id, mod.questions, limit);
        }

        /**
         * Reinicia el progreso guardado para este módulo.
         */
        resetModuleProgress(moduleIndex) {
            const mod = this.getModule(moduleIndex);
            PM.progressTracker.resetModule(mod.id);
        }

        /**
         * Registra el resultado de una pregunta en el tracker.
         */
        recordAnswer(moduleIndex, questionId, isCorrect, selectedIndex) {
            if (moduleIndex == null || moduleIndex < 0) {
                // Examen final: ubicar módulo por prefijo de id o omitir tracking granular por módulo
                const mod = this.#modules.find(m => questionId && questionId.startsWith(m.id + '_'));
                if (mod) PM.progressTracker.recordAnswer(mod.id, questionId, isCorrect, selectedIndex);
                return;
            }
            const mod = this.getModule(moduleIndex);
            PM.progressTracker.recordAnswer(mod.id, questionId, isCorrect, selectedIndex);
        }

        getAreaStats(area) {
            const mods = this.#modules.filter(m => (m.examArea || 'funcional') === area);
            return mods.reduce((acc, m, i) => {
                const idx = this.#modules.indexOf(m);
                const st = PM.progressTracker.getModuleStats(m.id, m.questions);
                acc.total += st.total; acc.answered += st.answered; acc.correct += st.correct;
                acc.incorrect += st.incorrect; acc.pending += st.pending;
                return acc;
            }, { total: 0, answered: 0, correct: 0, incorrect: 0, pending: 0 });
        }

        /**
         * Examen final simulado: 150 funcionales + 25 comportamentales + 25 integridad (200 total),
         * separados en bloques identificados por área.
         */
        getFinalExam() {
            const shuffle = PM.shuffleArray || ((a) => a);
            const all = this.#modules.flatMap(m => (m.questions || []).map(q => ({ ...q, _moduleId: m.id, _moduleTitle: m.title })));
            const functional = shuffle(all.filter(q => (q.examArea || 'funcional') === 'funcional')).slice(0, 150);
            const m7 = all.filter(q => q._moduleId === 'm7');
            const comportamental = shuffle(m7.filter(q => q.examSubArea === 'comportamental')).slice(0, 25);
            const integridad = shuffle(m7.filter(q => q.examSubArea === 'integridad' || (q._moduleId === 'm7' && q.examSubArea !== 'comportamental'))).slice(0, 25);
            const sections = [
                { key: 'funcional', label: 'Competencias Funcionales (70% eliminatorio)', questions: functional },
                { key: 'comportamental', label: 'Competencias Comportamentales', questions: comportamental },
                { key: 'integridad', label: 'Prueba de Integridad (Código DIAN)', questions: integridad },
            ];
            const blocks = [];
            const bs = this.#blockSize;
            sections.forEach(sec => {
                const totalB = Math.ceil(sec.questions.length / bs) || 1;
                for (let b = 0; b < totalB; b++) {
                    const qs = sec.questions.slice(b * bs, (b + 1) * bs);
                    blocks.push({
                        id: `${sec.key}-${b + 1}`,
                        label: `${sec.label} — Bloque ${b + 1}/${totalB}`,
                        area: sec.key,
                        areaLabel: sec.label,
                        questions: qs,
                        from: b * bs + 1,
                        to: b * bs + qs.length,
                    });
                }
            });
            return {
                title: 'Examen Final Simulado DIAN 2676 — Gestor I',
                composition: { funcional: functional.length, comportamental: comportamental.length, integridad: integridad.length, total: functional.length + comportamental.length + integridad.length },
                sections,
                blocks,
                questions: [...functional, ...comportamental, ...integridad],
            };
        }
    }

    PM.QuestionRepository = QuestionRepository;
})((window.PrepMaster = window.PrepMaster || {}));
