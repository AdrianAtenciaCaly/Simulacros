(function (PM) {
    'use strict';

    /**
     * Constantes de configuración de la aplicación.
     * Un único lugar para cambiar reglas de negocio (tamaño de bloque, nota mínima, etc.).
     */
    const BLOCK_SIZE = 10;
    const PASS_PERCENTAGE = 70;
    const QUESTIONS_PER_MODULE = 100;

    PM.BLOCK_SIZE = BLOCK_SIZE;
    PM.PASS_PERCENTAGE = PASS_PERCENTAGE;
    PM.QUESTIONS_PER_MODULE = QUESTIONS_PER_MODULE;
})((window.PrepMaster = window.PrepMaster || {}));
