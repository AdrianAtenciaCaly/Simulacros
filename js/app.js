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
        startBlock: (moduleIndex, blockIndex) => viewManager.show('quiz', { moduleIndex, blockIndex, mode: 'block' }),
        startPending: (moduleIndex) => viewManager.show('quiz', { moduleIndex, mode: 'pending' }),
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
        navigator.goHome();

    const sidebar = new SidebarView(document.getElementById('nav-menu'), [
    { id: 'home', label: '🏠 Tablero Principal', onSelect: () => navigator.goHome() },
    { id: 'theory', label: '📚 Teoría', onSelect: () => navigator.openTheory() },
    ...repository.getModules().map((mod, index) => ({
        id: `module-${index}`,
        label: mod.navLabel,
        onSelect: () => navigator.openModule(index),
    })),
]);
    const topbarTitle = document.getElementById('topbar-title');
    viewManager.onChange(({ title, navId }) => {
        topbarTitle.textContent = title;
        sidebar.setActive(navId);
    });

    document.getElementById('sidebar-footer').textContent =
        `${repository.getModules().length} Módulos • ${repository.getTotalQuestions()} Preguntas`;

    // Alternar visibilidad del menú lateral (mostrar / ocultar)
    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

    const toggleSidebar = () => {
        const isCollapsed = document.body.classList.toggle('sidebar-collapsed');
        sidebarToggleBtn?.setAttribute('aria-expanded', String(!isCollapsed));
        try {
            localStorage.setItem('pm_sidebar_collapsed', String(isCollapsed));
        } catch (e) {
            // Ignorar errores de acceso a almacenamiento
        }
    };

    try {
        if (localStorage.getItem('pm_sidebar_collapsed') === 'true') {
            document.body.classList.add('sidebar-collapsed');
            sidebarToggleBtn?.setAttribute('aria-expanded', 'false');
        } else {
            sidebarToggleBtn?.setAttribute('aria-expanded', 'true');
        }
    } catch (e) {}

    sidebarToggleBtn?.addEventListener('click', toggleSidebar);
    // Dark mode toggle button handling
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    const updateThemeIcon = () => {
        if (!darkModeBtn) return;
        const isDark = document.body.classList.contains('dark-mode');
        darkModeBtn.textContent = isDark ? '☀️' : '🌙';
        darkModeBtn.title = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
        darkModeBtn.setAttribute('aria-label', darkModeBtn.title);
    };

    // Apply persisted theme on load
    try {
        if (localStorage.getItem('pm_dark_mode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    } catch (e) {}
    updateThemeIcon();

    darkModeBtn?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        try { localStorage.setItem('pm_dark_mode', String(isDark)); } catch (e) {}
        updateThemeIcon();
    });

})((window.PrepMaster = window.PrepMaster || {}));
