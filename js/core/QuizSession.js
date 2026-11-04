(function (PM) {
    'use strict';

    const { PASS_PERCENTAGE } = PM;

    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

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
     * Ajusta dinámicamente las referencias a letras de opciones en la explicación
     * para que coincidan con la posición barajada real.
     */
    function adjustExplanation(text, mapping) {
        if (!text || typeof text !== 'string') return text;
        // Ajusta "opción B", "opciones A y C", etc.
        let res = text.replace(/(\bopci[oó]n(?:es)?\s+)([A-F])(?:\s+(y|e|o)\s+([A-F]))?/gi, (match, prefix, l1, conj, l2) => {
            const newL1 = mapping[l1.toUpperCase()] || l1;
            if (conj && l2) {
                const newL2 = mapping[l2.toUpperCase()] || l2;
                return prefix + newL1 + ' ' + conj + ' ' + newL2;
            }
            return prefix + newL1;
        });
        // Ajusta "la C es un distractor", "la A desconoce...", etc.
        res = res.replace(/(\bla\s+)([A-F])(\s+(?:es|desconoce|incurre|quebranta|no|constituye|omite|vulnera|carece|plantea)\b)/gi, (match, prefix, l, suffix) => {
            const newL = mapping[l.toUpperCase()] || l;
            return prefix + newL + suffix;
        });
        return res;
    }

    /**
     * Baraja las opciones y recalcula el índice correcto, sin mutar la pregunta original.
     * Actualiza la explicación para que la letra mencionada coincida con la posición barajada.
     */
    function prepareQuestion(question, shuffle) {
        const indexed = question.options.map((text, originalIndex) => ({ text, originalIndex }));
        const shuffled = shuffle(indexed);
        const correctIndex = shuffled.findIndex((o) => o.originalIndex === question.correct);

        // Mapear cada letra original a su nueva letra barajada
        const mapping = {};
        shuffled.forEach((item, newIdx) => {
            const origLetter = LETTERS[item.originalIndex] || String(item.originalIndex + 1);
            const newLetter = LETTERS[newIdx] || String(newIdx + 1);
            mapping[origLetter] = newLetter;
        });

        const adjustedExplanation = adjustExplanation(question.explanation, mapping);

        return {
            id: question.id,
            text: question.text,
            explanation: adjustedExplanation,
            options: shuffled.map((o) => o.text),
            correct: correctIndex,
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
            const shuffledQuestions = shuffle(questions);
            this.#questions = shuffledQuestions.map((q) => prepareQuestion(q, shuffle));
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
                id: q.id,
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
