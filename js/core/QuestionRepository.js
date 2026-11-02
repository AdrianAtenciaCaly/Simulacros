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
    }

    PM.QuestionRepository = QuestionRepository;
})((window.PrepMaster = window.PrepMaster || {}));
