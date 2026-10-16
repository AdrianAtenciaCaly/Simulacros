(function (PM) {
    'use strict';

    const { PASS_PERCENTAGE } = PM;

    /** Fisher-Yates sobre una copia. */
    function shuffleArray(items, random = Math.random) {
        const copy = [...items];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    /**
     * Baraja las opciones y recalcula el índice correcto, sin mutar la pregunta original.
     * (Antes la respuesta correcta era siempre la opción B.)
     */
    function prepareQuestion(question, shuffle) {
        const indexed = question.options.map((text, originalIndex) => ({ text, originalIndex }));
        const shuffled = shuffle(indexed);
        return {
            text: question.text,
            explanation: question.explanation,
            options: shuffled.map((o) => o.text),
            correct: shuffled.findIndex((o) => o.originalIndex === question.correct),
        };
    }

    /**
     * Estado y reglas de un bloque de preguntas. No toca el DOM.
     */
    class QuizSession {
        #questions;
        #index = 0;
        #answers = [];
        #passPercentage;

        constructor(questions, { shuffle = shuffleArray, passPercentage = PASS_PERCENTAGE } = {}) {
            this.#questions = questions.map((q) => prepareQuestion(q, shuffle));
            this.#passPercentage = passPercentage;
        }

        get total() {
            return this.#questions.length;
        }

        get currentNumber() {
            return this.#index + 1;
        }

        get currentQuestion() {
            return this.#questions[this.#index];
        }

        get isAnswered() {
            return this.#answers.length > this.#index;
        }

        get isLastQuestion() {
            return this.#index >= this.#questions.length - 1;
        }

        /** Registra la respuesta de la pregunta actual (una sola vez por pregunta). */
        answer(selectedIndex) {
            if (this.isAnswered) throw new Error('La pregunta actual ya fue respondida.');

            const q = this.currentQuestion;
            if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= q.options.length) {
                throw new RangeError(`Opción inválida: ${selectedIndex}`);
            }

            const record = {
                question: q.text,
                selected: q.options[selectedIndex],
                selectedIndex,
                correctOpt: q.options[q.correct],
                correctIndex: q.correct,
                isCorrect: selectedIndex === q.correct,
                explanation: q.explanation,
            };
            this.#answers.push(record);
            return record;
        }

        /** Avanza a la siguiente pregunta. Devuelve false si ya era la última. */
        next() {
            if (!this.isAnswered) throw new Error('Responde la pregunta antes de avanzar.');
            if (this.isLastQuestion) return false;
            this.#index++;
            return true;
        }

        getSummary() {
            const correct = this.#answers.filter((a) => a.isCorrect).length;
            const total = this.total;
            const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);
            return {
                correct,
                total,
                percentage,
                passed: percentage >= this.#passPercentage,
                answers: [...this.#answers],
            };
        }
    }

    PM.shuffleArray = shuffleArray;
    PM.QuizSession = QuizSession;
})((window.PrepMaster = window.PrepMaster || {}));
