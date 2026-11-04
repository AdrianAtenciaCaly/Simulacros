(function (PM) {
    'use strict';

    const STORAGE_KEY = 'pm_progress_v1';

    /**
     * Gestor persistente del progreso de preguntas en localStorage.
     * Registra cuáles preguntas ya se han contestado (correctas/incorrectas),
     * cuántas faltan y permite filtrar preguntas pendientes para no repetirlas.
     */
    class ProgressTracker {
        #cache = null;

        constructor() {
            this.#load();
        }

        #load() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                this.#cache = raw ? JSON.parse(raw) : {};
            } catch (e) {
                console.warn('No se pudo acceder a localStorage para el progreso:', e);
                this.#cache = {};
            }
        }

        #save() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.#cache));
            } catch (e) {
                console.warn('Error al guardar progreso en localStorage:', e);
            }
        }

        /**
         * Registra la respuesta dada a una pregunta de un módulo.
         */
        recordAnswer(moduleId, questionId, isCorrect, selectedIndex) {
            if (!moduleId || !questionId) return;
            if (!this.#cache[moduleId]) {
                this.#cache[moduleId] = {};
            }
            const existing = this.#cache[moduleId][questionId] || { attempts: 0 };
            this.#cache[moduleId][questionId] = {
                answered: true,
                isCorrect: Boolean(isCorrect),
                lastSelected: selectedIndex,
                attempts: existing.attempts + 1,
                lastAnsweredAt: new Date().toISOString(),
            };
            this.#save();
        }

        /**
         * Indica si una pregunta ya ha sido respondida en este módulo.
         */
        isAnswered(moduleId, questionId) {
            return Boolean(this.#cache?.[moduleId]?.[questionId]?.answered);
        }

        /**
         * Devuelve el estado de una pregunta: 'correct', 'incorrect' o 'pending'.
         */
        getQuestionStatus(moduleId, questionId) {
            const entry = this.#cache?.[moduleId]?.[questionId];
            if (!entry || !entry.answered) return 'pending';
            return entry.isCorrect ? 'correct' : 'incorrect';
        }

        /**
         * Obtiene las estadísticas de progreso de un módulo.
         */
        getModuleStats(moduleId, questions = []) {
            const total = questions.length;
            if (total === 0) {
                return { total: 0, answered: 0, pending: 0, correct: 0, incorrect: 0, percentage: 0, accuracy: 0 };
            }
            const modData = this.#cache[moduleId] || {};
            let correct = 0;
            let incorrect = 0;
            let answered = 0;

            questions.forEach((q) => {
                const entry = modData[q.id];
                if (entry && entry.answered) {
                    answered++;
                    if (entry.isCorrect) correct++;
                    else incorrect++;
                }
            });

            const pending = Math.max(0, total - answered);
            const percentage = Math.round((answered / total) * 100);
            const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

            return {
                total,
                answered,
                pending,
                correct,
                incorrect,
                percentage,
                accuracy,
            };
        }

        /**
         * Retorna la lista de preguntas que aún NO han sido respondidas en el módulo.
         * Si limit > 0, devuelve como máximo esa cantidad.
         */
        getPendingQuestions(moduleId, questions = [], limit = null) {
            const pending = questions.filter((q) => !this.isAnswered(moduleId, q.id));
            if (typeof limit === 'number' && limit > 0) {
                return pending.slice(0, limit);
            }
            return pending;
        }

        /**
         * Reinicia el progreso de un módulo específico.
         */
        resetModule(moduleId) {
            if (this.#cache[moduleId]) {
                delete this.#cache[moduleId];
                this.#save();
            }
        }

        /**
         * Reinicia todo el progreso almacenado.
         */
        resetAll() {
            this.#cache = {};
            this.#save();
        }
    }

    PM.ProgressTracker = ProgressTracker;
    PM.progressTracker = new ProgressTracker();
})((window.PrepMaster = window.PrepMaster || {}));

