(function (PM) {
    'use strict';

    const { BLOCK_SIZE, QUESTION_BANK, THEORY, QuestionRepository, ViewManager, SidebarView, HomeView, BlockSelectView, QuizView, ResultView, TheoryView } = PM;

    /**
     * Composition root: aquí (y solo aquí) se construyen y conectan las piezas.
     */
    const repository = new QuestionRepository(QUESTION_BANK, { blockSize: BLOCK_SIZE });
    const viewManager = new ViewManager(document.getElementById('view-root'), {
        scrollContainer: document.getElementById('main'),
    });

    // "Navigator": la única API que las vistas usan para cambiar de pantalla.
    const navigator = {
        goHome: () => viewManager.show('home'),
        openModule: (moduleIndex) => viewManager.show('blocks', { moduleIndex }),
        startBlock: (moduleIndex, blockIndex) => viewManager.show('quiz', { moduleIndex, blockIndex }),
        showResults: (params) => viewManager.show('result', params),
        openTheory: (sectionId) => viewManager.show('theory', { sectionId }),
    };

    const deps = { repository, navigator };
    viewManager
        .register('home', new HomeView(deps))
        .register('blocks', new BlockSelectView(deps))
        .register('quiz', new QuizView(deps))
        .register('result', new ResultView(deps))
        .register('theory', new TheoryView({ theory: THEORY, navigator }));

    const sidebar = new SidebarView(document.getElementById('nav-menu'), [
        { id: 'home', label: '🏠 Tablero Principal', onSelect: () => navigator.goHome() },
        ...repository.getModules().map((mod, index) => ({
            id: `module-${index}`,
            label: mod.navLabel,
            onSelect: () => navigator.openModule(index),
        })),
        { id: 'theory', label: '📚 Teoría', onSelect: () => navigator.openTheory() },
    ]);

    const topbarTitle = document.getElementById('topbar-title');
    viewManager.onChange(({ title, navId }) => {
        topbarTitle.textContent = title;
        sidebar.setActive(navId);
    });

    document.getElementById('sidebar-footer').textContent =
        `${repository.getModules().length} Módulos • ${repository.getTotalQuestions()} Preguntas`;

    navigator.goHome();

})((window.PrepMaster = window.PrepMaster || {}));
