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
        #finalExamCache = null;
        static FINAL_EXAM_KEY = 'pm_final_exam_v1';

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
        #shuffle(arr) {
            const shuffle = PM.shuffleArray;
            if (typeof shuffle === 'function') return shuffle(arr);
            const a = [...arr];
            for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
            return a;
        }

        #loadFinalState() {
            try { const raw = localStorage.getItem(QuestionRepository.FINAL_EXAM_KEY); return raw ? JSON.parse(raw) : { blocks: {} }; }
            catch (e) { return { blocks: {} }; }
        }
        #saveFinalState(state) {
            try { localStorage.setItem(QuestionRepository.FINAL_EXAM_KEY, JSON.stringify(state)); } catch (e) {}
        }
        getFinalBlockStatus(blockId) {
            return (this.#loadFinalState().blocks || {})[blockId] || null;
        }
        saveFinalBlockResult(blockId, summary) {
            const state = this.#loadFinalState();
            state.blocks = state.blocks || {};
            state.blocks[blockId] = {
                completedAt: new Date().toISOString(),
                correct: summary.correct,
                total: summary.total,
                percentage: summary.percentage,
                passed: summary.passed,
            };
            this.#saveFinalState(state);
        }
        resetFinalBlock(blockId) {
            const state = this.#loadFinalState();
            if (state.blocks && state.blocks[blockId]) delete state.blocks[blockId];
            this.#saveFinalState(state);
            // regenerar bloque: nuevo orden y, cuando sea posible, preguntas diferentes
            if (this.#finalExamCache) {
                const b = this.#finalExamCache.blocks.find(x => x.id === blockId);
                if (b) {
                    const all = this.#modules.flatMap(m => (m.questions || []).map(q => ({ ...q, _moduleId: m.id, _moduleTitle: m.title })));
                    let pool;
                    if (b.area === 'funcional') pool = all.filter(q => (q.examArea || 'funcional') === 'funcional');
                    else if (b.area === 'comportamental') pool = all.filter(q => q._moduleId === 'm7' && q.examSubArea === 'comportamental');
                    else pool = all.filter(q => q._moduleId === 'm7' && (q.examSubArea === 'integridad' || q.examSubArea !== 'comportamental'));
                    const picked = this.#shuffle(pool).slice(0, b.questions.length || this.#blockSize);
                    if (picked.length) b.questions = picked;
                    else b.questions = this.#shuffle(b.questions);
                }
            }
        }
        resetAllFinalExam() {
            try { localStorage.removeItem(QuestionRepository.FINAL_EXAM_KEY); } catch (e) {}
            this.#finalExamCache = null;
        }

        getFinalExam({ forceNew = false } = {}) {
            if (this.#finalExamCache && !forceNew) return this.#attachFinalStatuses(this.#finalExamCache);
            const all = this.#modules.flatMap(m => (m.questions || []).map(q => ({ ...q, _moduleId: m.id, _moduleTitle: m.title })));
            const functional = this.#shuffle(all.filter(q => (q.examArea || 'funcional') === 'funcional')).slice(0, 150);
            const m7 = all.filter(q => q._moduleId === 'm7');
            const comportamental = this.#shuffle(m7.filter(q => q.examSubArea === 'comportamental')).slice(0, 25);
            const integridad = this.#shuffle(m7.filter(q => q.examSubArea === 'integridad' || (q._moduleId === 'm7' && q.examSubArea !== 'comportamental'))).slice(0, 25);
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
            this.#finalExamCache = {
                title: 'Examen Final Simulado DIAN 2676 — Gestor I',
                composition: { funcional: functional.length, comportamental: comportamental.length, integridad: integridad.length, total: functional.length + comportamental.length + integridad.length },
                sections, blocks,
                questions: [...functional, ...comportamental, ...integridad],
            };
            return this.#attachFinalStatuses(this.#finalExamCache);
        }

        #attachFinalStatuses(exam) {
            const state = this.#loadFinalState();
            const statuses = state.blocks || {};
            return { ...exam, blocks: exam.blocks.map(b => ({ ...b, completion: statuses[b.id] || null })) };
        }
    }

    PM.QuestionRepository = QuestionRepository;
})((window.PrepMaster = window.PrepMaster || {}));
