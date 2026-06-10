/**
 * Premium Interactive Portfolio Script
 * Tamila Khamraeva — IT Specialist (QA & Python Dev)
 */

// Global State
const state = {
    lang: localStorage.getItem('portfolio-lang') || 'EN',
    theme: localStorage.getItem('portfolio-theme') || 'dark',
    currentRoleIndex: 0,
    isTyping: false
};

// Bilingual Translation Dictionary
const i18n = {
    EN: {
        // Navigation
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-qa": "QA Lab",
        "nav-experience": "Experience",
        "nav-contact": "Contact",

        // Hero
        "hero-ready-badge": "Open to Opportunities",
        "hero-intro": "A precise, detail-oriented QA specialist and Python backend developer. Dedicated to finding system edge cases, crafting structured automations, and engineering highly reliable software architectures.",
        "hero-btn-projects": "View Projects",
        "hero-btn-qa": "Explore QA Lab",

        // About
        "about-section-badge": "01 . Discovery",
        "about-section-title": "About Me",
        "about-bio-title": "Hello, I'm Tamila",
        "about-bio-text-1": "I am a 20-year-old software generalist from <b class='text-white'>Almaty, Kazakhstan</b>, merging the meticulous discipline of Quality Assurance with the builder mindset of Python Backend Development. I solve logical puzzles, detect digital anomalies, and construct backend services that run cleanly.",
        "about-bio-text-2": "My experience bridges manual testing, API inspections, and backend engineering using Python and Django. This makes me a dual-threat IT specialist: when I build, I build with edge cases and coverage in mind; and when I test, I know exactly what's failing under the hood inside the stack.",
        "about-spec-label": "Specialization",
        "about-hq-label": "HQ Location",
        "about-teaching-title": "IT Leadership & Soft Skills",
        "about-teaching-p1": "Spent <b class='text-white'>2+ years teaching IT</b> to young enthusiastic minds at Fastrackids.",
        "about-teaching-p2": "Explaining complex syntax, loops, and coding structures honed my clarity of speech and deep communication abilities.",
        "about-years-label": "Teaching Span",
        "about-val-qc-title": "Attention to Detail",
        "about-val-qc-text": "I believe that any software is only as robust as its ignored edge case. Every test case is designed to audit user journeys completely and surface latent failures before release.",
        "about-val-anal-title": "Analytical Mindset",
        "about-val-anal-text": "Whether parsing dynamic HTML pages, designing multi-user Discord/Telegram bots, or structuring Django migrations, I apply algorithmic thinking, choosing SQLite and structured payloads over messy hacks.",
        "about-val-certs-title": "Certified Explorer",
        "about-val-certs-text": "Through continuous learning paths on SoloLearn and rigorous hands-on projects, I keep my theoretical knowledge and practical frameworks sharp and ready for tech industry challenges.",

        // Skills
        "skills-section-badge": "02 . Core Capabilities",
        "skills-section-title": "Technical Matrix",
        "skills-cat-backend": "Backend Engineering",
        "skills-status-prof": "Advanced & Fluid",
        "skills-cat-qa": "Quality Assurance",
        "skills-status-detail": "Rigorous & Holistic",
        "skills-cat-utilities": "Core Systems",
        "skills-status-flow": "Support Stack",
        "skill-man": "Manual Testing",
        "skill-regr": "Regression & Sanity",
        "skill-ui": "UI/UX Layout Testing",
        "skill-cases": "Test Cases / Blueprints",
        "skill-bug": "Bug Reports & Cycles",

        // Projects
        "projects-section-badge": "03 . Engineering",
        "projects-section-title": "Case Studies",
        "proj1-tag": "AUTOMATION BOT",
        "proj1-title": "Telegram Automated Agents",
        "proj1-desc": "Custom Telegram bot solutions designed for content ingestion, API callbacks, and content processing. Includes task queues, modular handler structures, and automated user notification states.",
        "proj2-tag": "DATA MINING",
        "proj2-title": "Modular Python Parsing System",
        "proj2-desc": "An efficient, data parsing crawler engineered to map external documents, process messy structures, and return clean JSON arrays. Built-in network error retries, rate limits, and custom headers.",
        "proj3-tag": "TEST DESIGN",
        "proj3-title": "Defect Traceability & Case Sheets",
        "proj3-desc": "An advanced repository of quality audits, test scenario plans, layout comparison matrices, and functional testing spreadsheets. Highlights proper validation loops for custom user flows.",
        "proj4-tag": "BACKEND STACK",
        "proj4-title": "Django Database Mini Applications",
        "proj4-desc": "Miniature applications built on full Django templates and the MVC pattern. Configured with model constraints, relational lookups, dynamic form validations, and native authentication states.",
        "lbl-details": "Inspect Architecture",
        "lbl-click-expand": "Click to expand details",

        // QA
        "qa-section-badge": "04 . Quality Lab",
        "qa-section-title": "QA Capabilities & Inspector Console",
        "qa-metrics-title": "SLA Validation Metrics",
        "qa-m1": "Functional Verification & Scenarios",
        "qa-m2": "Regression Automation coverage",
        "qa-m3": "Defect Isolation Rate",
        "qa-m4": "Figma Layout Pixel Compliance",
        "qa-stat-def": "Defects Trapped",
        "qa-stat-tc": "Test Designs Run",
        "qa-btn-run": "Run Integration Test Suite",
        "qa-btn-clear": "Clear Log",

        // Experience
        "exp-section-badge": "05 . Milestones",
        "exp-section-title": "Timeline & Milestones",
        "exp1-role": "Python Developer / Automation Specialist",
        "exp1-company": "Self-Employed / Engineering Projects",
        "exp1-date": "2024 — Present",
        "exp1-summary": "Engineering custom-made asynchronous web crawlers, RESTful API hooks, and automation frameworks using Python. Constructing secure, structured relational databases and scraping systems.",
        "exp1-d1": "Architected parsing routines that resolve HTML scrapers, structuring unformatted arrays into standardized datasets.",
        "exp1-d2": "Configured SQLite model relations inside clean Python Django projects ensuring full referential integrity.",
        "exp1-d3": "Engineered automated Telegram APIs and cron scripts for automatic event triggers, logging, and callbacks.",
        "exp2-role": "Computer Science & Programming Instructor",
        "exp2-summary": "Led interactive software science lessons, introducing algorithms, looping structures, data variables, and logic to children. Engineered curriculum pathways and coached IT problem solving skills.",
        "exp2-d1": "Mentored over 50+ students in developing fundamental mental workflows for resolving syntax issues and structural software bugs.",
        "exp2-d2": "Communicated sophisticated programming concepts (recursion, boolean trees) using simplified, high-impact verbal frameworks.",
        "exp2-d3": "Sharpened secondary skills like presentation delivery, leadership, and technical adaptability in fast environment settings.",
        "exp3-role": "Education & Certification Path",
        "exp3-company": "IT Academy, SoloLearn & In-Depth Self-directed Learning",
        "exp3-date": "2021 — Continuous",
        "exp3-summary": "Committed to a thorough learning program covering programming algorithms, Django core configurations, test architectures, SQLite data integrity, and web protocols. Let's inspect certifications below!",
        "exp3-d1": "<b>Python Core Certification:</b> Handled file inputs, modular functions, exception trapping, and data structures.",
        "exp3-d2": "<b>Web Dev & Integration:</b> Mastered semantic layout trees, CSS style cascades, grid templates, and responsive vanilla JS triggers.",
        "exp3-d3": "<b>SQL database querying:</b> Understood SELECT structures, INNER JOIN operations, and primary data constraints.",

        // Education
        "edu-section-badge": "06 . Academic",
        "edu-section-title": "Academic & Self-Education",
        "edu1-title": "Python Learning Course",
        "edu1-desc": "Comprehensive study of Python syntax core foundations, handling exception states, dictionary models, functional loops, and algorithmic structures.",
        "edu1-auth": "SoloLearn Certificate / Academic studies",
        "edu2-title": "Django MVC & SQLite",
        "edu2-desc": "Training focused on relational database schemas, model integrations, view routing, HTML template renderings, dynamic form CSRF, and static asset mapping.",
        "edu2-auth": "Self-directed Mastery / Practical Pet Projects",
        "edu3-title": "Manual Quality Assurance",
        "edu3-desc": "Hands-on discipline covering validation plan designs, functional audits, layout boundary checks, bug containment processes, and precise logs reporting.",
        "edu3-auth": "Independent Practice / Standard Testing Protocols",

        // Contact
        "contact-section-badge": "07 . Connection",
        "contact-section-title": "Let's Connect",
        "contact-section-subtitle": "I am always open to new professional collaborations, QA operations, Python backend contracts, or simple technical exchanges!",
        "contact-panel-title": "Let's build reliable software together",
        "contact-panel-desc": "Drop me a direct line via Telegram, email, or explore my system repositories on GitHub. I respond quickly.",
        "contact-chat-btn": "Chat on Telegram",
        "contact-git-btn": "GitHub Profile",
        "contact-cv-btn": "Download Resume PDF",
        "footer-rights": "All Rights Reserved."
    },
    RU: {
        // Navigation
        "nav-about": "Обо мне",
        "nav-skills": "Навыки",
        "nav-projects": "Проекты",
        "nav-qa": "QA Лаборатория",
        "nav-experience": "Опыт",
        "nav-contact": "Контакты",

        // Hero
        "hero-ready-badge": "Открыта к предложениям",
        "hero-intro": "Скрупулезный, ориентированный на детали QA специалист и разработчик бэкенда на Python. Специализируюсь на поиске системных уязвимостей, создании структурированной автоматизации и разработке надежного бэкенда.",
        "hero-btn-projects": "Посмотреть проекты",
        "hero-btn-qa": "Запустить Тест-Лаб",

        // About
        "about-section-badge": "01 . Открытие",
        "about-section-title": "Обо мне",
        "about-bio-title": "Привет, я Тамила",
        "about-bio-text-1": "Мне 20 лет, я из города <b class='text-white'>Алматы, Казахстан</b>. Объединяю строгую дисциплину контроля качества (QA) с архитектурным подходом бэкенд-разработчика на Python. Я решаю логические задачи, выявляю системные аномалии и строю стабильный бэкенд.",
        "about-bio-text-2": "Мой опыт охватывает ручное тестирование, аудит API и серверную разработку на Python / Django. Это делает меня универсальным специалистом: когда я пишу код, я делаю это с учетом возможных ошибок; а когда тестирую — точно знаю, как логика ломается изнутри.",
        "about-spec-label": "Специализация",
        "about-hq-label": "Город локации",
        "about-teaching-title": "Преподавание и лидерские навыки",
        "about-teaching-p1": "Более <b class='text-white'>2 лет преподавала IT</b> для молодых и амбициозных учеников в Fastrackids.",
        "about-teaching-p2": "Объяснение сложного синтаксиса, циклов и структур данных развило во мне умение излагать мысли емко и понятно.",
        "about-years-label": "Период обучения",
        "about-val-qc-title": "Внимание к деталям",
        "about-val-qc-text": "Уверена, что любой софт надежен ровно настолько, насколько надежен его самый незаметный крайний случай (edge case). Каждый тест-кейс разрабатывается для полного покрытия сценариев использования.",
        "about-val-anal-title": "Аналитический склад",
        "about-val-anal-text": "Будь то парсинг динамических страниц, проектирование Telegram-ботов или планирование миграций в Django, я всегда использую строгий алгоритмический подход.",
        "about-val-certs-title": "В поисках знаний",
        "about-val-certs-text": "Благодаря постоянному обучению на SoloLearn и реализации практических проектов, я всегда держу свои знания и навыки в тонусе.",

        // Skills
        "skills-section-badge": "02 . Возможности",
        "skills-section-title": "Техническая матрица",
        "skills-cat-backend": "Бэкенд разработка",
        "skills-status-prof": "Продвинутый уровень",
        "skills-cat-qa": "Обеспечение качества",
        "skills-status-detail": "Глубокий анализ",
        "skills-cat-utilities": "Инфраструктура",
        "skills-status-flow": "Вспомогательный стек",
        "skill-man": "Ручное тестирование",
        "skill-regr": "Регрессионный аудит",
        "skill-ui": "Тестирование UI/UX",
        "skill-cases": "Тест-кейсы и планы",
        "skill-bug": "Трекинг и баг-репорты",

        // Projects
        "projects-section-badge": "03 . Проекты",
        "projects-section-title": "Кейсы разработки",
        "proj1-tag": "АВТОМАТИЗАЦИЯ",
        "proj1-title": "Telegram Боты и Агенты",
        "proj1-desc": "Индивидуальные решения для обработки контента, работы с API и систем автоматических очередей задач. Включает гибкие структуры обработчиков и базы SQLite.",
        "proj2-tag": "СБОР ДАННЫХ",
        "proj2-title": "Модульный Парсер на Python",
        "proj2-desc": "Эффективный парсер-краулер для сбора данных с внешних ресурсов, обработки сложных структур и выдачи чистого JSON. Настроен обход лимитов сети.",
        "proj3-tag": "ПРОЕКТЫ ТЕСТИРОВАНИЯ",
        "proj3-title": "Матрица дефектов и Тест-планы",
        "proj3-desc": "Комплексный архив ручных проверок, сценариев тестирования, шаблонов баг-репортов и сравнительных таблиц верстки по макетам Figma.",
        "proj4-tag": "РАЗРАБОТКА",
        "proj4-title": "Базовые Приложения на Django",
        "proj4-desc": "Микро-приложения на Django с использованием паттерна MVC. Настроены связи в SQLite, валидация форм, защита CSRF и шаблонизатор.",
        "lbl-details": "Посмотреть архитектуру",
        "lbl-click-expand": "Нажмите, чтобы развернуть детали",

        // QA
        "qa-section-badge": "04 . QA Лаборатория",
        "qa-section-title": "Возможности QA и Консоль Инспектора",
        "qa-metrics-title": "Метрики валидации SLA",
        "qa-m1": "Функциональные проверки и ТЗ",
        "qa-m2": "Покрытие авторегрессии",
        "qa-m3": "Коэффициент выявления багов",
        "qa-m4": "Точность верстки по Figma",
        "qa-stat-def": "Выявлено багов",
        "qa-stat-tc": "Запущено тестов",
        "qa-btn-run": "Запустить автотесты интеграции",
        "qa-btn-clear": "Очистить консоль",

        // Experience
        "exp-section-badge": "05 . Вехи",
        "exp-section-title": "История пути",
        "exp1-role": "Python Бэкенд Разработчик / Специалист Автоматизации",
        "exp1-company": "Индивидуальные проекты и Архитектура",
        "exp1-date": "2024 — Наст. время",
        "exp1-summary": "Разработка асинхронных краулеров, интеграций REST API и систем автоматизации на Python. Проектирование структурированных баз данных SQLite.",
        "exp1-d1": "Проектировала логику для разбора HTML структуры сайтов, преобразуя неформатированные данные в аккуратный JSON.",
        "exp1-d2": "Реализовывала связи моделей в Django проектах с обеспечением целостности данных SQLite.",
        "exp1-d3": "Создавала автоматизированных Telegram ботов для обработки медиафайлов и мгновенной отправки уведомлений.",
        "exp2-role": "Преподаватель IT и Программирования",
        "exp2-summary": "Проводила интерактивные занятия по компьютерным наукам, объясняла основы алгоритмов, циклов, переменных и логических ветвлений молодым умам. Координировала учебные планы.",
        "exp2-d1": "Помогла более чем 50+ ученикам построить базовое понимание нахождения и устранения багов в коде.",
        "exp2-d2": "Объясняла сложные для детей концепты (рекурсия, булева логика) на простых и увлекательных примерах.",
        "exp2-d3": "Усовершенствовала навыки публичных выступлений, лидерства и быстрой адаптации к учебным процессам.",
        "exp3-role": "Путь Обучения и Сертификации",
        "exp3-company": "IT Академия, SoloLearn и Глубокое Самообразование",
        "exp3-date": "2021 — Постоянно",
        "exp3-summary": "Прошла ряд учебных циклов по алгоритмам программирования, веб-протоколам, Django-структурам, SQLite и основам качественного QA-контроля.",
        "exp3-d1": "<b>Сертификат Python Core:</b> Углубленные знания структур (списки, словари), работы с файлами и обработки исключений.",
        "exp3-d2": "<b>Интеграция веб-технологий:</b> Освоила семантическую HTML-верстку, CSS-таблицы (Grid, Flexbox) и интерактивные триггеры на Vanilla JS.",
        "exp3-d3": "<b>Запросы СУБД:</b> Изучила структуру SQL запросов, операции слияния таблиц (JOIN) и базовые ограничения СУБД.",

        // Education
        "edu-section-badge": "06 . Образование",
        "edu-section-title": "Академический путь",
        "edu1-title": "Полный курс Python Core",
        "edu1-desc": "Глубокое изучение синтаксиса Python, обработки исключений, работы со словарями, функциональных циклов и алгоритмов решений.",
        "edu1-auth": "Сертификат SoloLearn / Практическое обучение",
        "edu2-title": "Основы Django MVC и SQLite",
        "edu2-desc": "Фокус на проектировании реляционных баз данных, роутинге путей URL, рендеринге шаблонов и работе со статическими файлами.",
        "edu2-auth": "Самостоятельное изучение / Практические пет-проекты",
        "edu3-title": "Практика ручного тестирования",
        "edu3-desc": "Изучение методов создания сценариев, функционального аудита, проверки граничных полей макетов и оформления прозрачных баг-репортов.",
        "edu3-auth": "Практическое применение стандартов QA",

        // Contact
        "contact-section-badge": "07 . Связь",
        "contact-section-title": "Связаться со мной",
        "contact-section-subtitle": "Я всегда рада конструктивным предложениям, QA-аудитам бэк-офиса, контрактам по Python-разработке или просто обмену опытом!",
        "contact-panel-title": "Создадим качественный софт вместе",
        "contact-panel-desc": "Напишите мне в Telegram, на почту или посмотрите мои открытые репозитории кода в профиле GitHub.",
        "contact-chat-btn": "Написать в Telegram",
        "contact-git-btn": "Профиль на GitHub",
        "contact-cv-btn": "Скачать резюме PDF",
        "footer-rights": "Все права защищены."
    }
};

// Animated Typewritten Roles depending on the active locale
const roleData = {
    EN: [
        "QA Engineer",
        "Python Developer",
        "Backend-minded Problem Solver"
    ],
    RU: [
        "QA Инженер",
        "Бэкенд Разработчик",
        "Специалист Автоматизации"
    ]
};

// 1. Initial Translator Setup
function applyTranslations() {
    const activeDict = i18n[state.lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (activeDict[key]) {
            el.innerHTML = activeDict[key];
        }
    });

    // Update language button label
    const label = document.getElementById('lang-label-current');
    if (label) {
        label.textContent = state.lang;
    }
}

// 2. Bilingual Typewriter Animation Loop
let typingTimer = null;
function startTypewriter() {
    if (typingTimer) clearTimeout(typingTimer);
    
    const targetSpan = document.getElementById('typing-role');
    if (!targetSpan) return;

    const currentRoles = roleData[state.lang];
    let roleIdx = state.currentRoleIndex;
    let charIdx = 0;
    let isDeleting = false;

    function tick() {
        const fullTxt = currentRoles[roleIdx];
        let currentText = isDeleting 
            ? fullTxt.substring(0, charIdx - 1) 
            : fullTxt.substring(0, charIdx + 1);

        targetSpan.textContent = currentText;
        charIdx = isDeleting ? charIdx - 1 : charIdx + 1;

        let delta = isDeleting ? 40 : 80;

        if (!isDeleting && currentText === fullTxt) {
            delta = 2000; // Pause at end of text
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % currentRoles.length;
            state.currentRoleIndex = roleIdx;
            delta = 500; // Small delay before next role
        }

        typingTimer = setTimeout(tick, delta);
    }

    tick();
}

// 3. Ambient Particles Canvas System
function initParticles() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const count = Math.min(Math.floor(width / 16), 50); // density scale
    
    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2 + 1;
        }

        draw() {
            const dotColor = state.theme === 'dark' ? 'rgba(249, 115, 22, 0.4)' : 'rgba(236, 72, 153, 0.2)';
            ctx.fillStyle = dotColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // bounce limits
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // mouse gravity interactions
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.hypot(dx, dy);

                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    // subtle attraction or repelling depending on theme
                    const factor = 4;
                    this.x -= (dx / dist) * force * factor * 0.1;
                    this.y -= (dy / dist) * force * factor * 0.1;
                }
            }
        }
    }

    // Spawn loop
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // draw connections inside proximity
        for (let i = 0; i < particles.length; i++) {
            particles[i].draw();
            particles[i].update();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);

                if (dist < 120) {
                    const alpha = (120 - dist) / 120 * 0.15;
                    const strokeColor = state.theme === 'dark' 
                        ? `rgba(139, 92, 246, ${alpha})` 
                        : `rgba(236, 72, 153, ${alpha})`;
                    ctx.strokeStyle = strokeColor;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// 4. Interactive Theme Engine
function applyTheme() {
    const htmlEl = document.documentElement;
    if (state.theme === 'dark') {
        htmlEl.classList.add('dark');
        htmlEl.classList.remove('light');
    } else {
        htmlEl.classList.add('light');
        htmlEl.classList.remove('dark');
    }
}

// 5. Expandable Timeline Milestone Cards
function initTimelineCards() {
    document.querySelectorAll('.timeline-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const extra = card.querySelector('.timeline-extra');
            const icon = card.querySelector('.timeline-toggle-icon');
            const toggleText = card.querySelector('.timeline-toggle-lbl');

            const isCollapsed = extra.style.maxHeight === '0px' || !extra.style.maxHeight;

            // close other timeline boxes first
            document.querySelectorAll('.timeline-card').forEach(otherCard => {
                if (otherCard !== card) {
                    const oExtra = otherCard.querySelector('.timeline-extra');
                    const oIcon = otherCard.querySelector('.timeline-toggle-icon');
                    const oText = otherCard.querySelector('.timeline-toggle-lbl');
                    oExtra.style.maxHeight = '0px';
                    oExtra.style.opacity = '0';
                    oExtra.style.pointerEvents = 'none';
                    oExtra.style.marginTop = '0px';
                    if (oIcon) oIcon.style.transform = 'rotate(0deg)';
                    if (oText) oText.textContent = state.lang === 'EN' ? 'Click to expand details' : 'Нажмите, чтобы развернуть детали';
                }
            });

            if (isCollapsed) {
                // Determine heights dynamically
                extra.style.maxHeight = '300px'; 
                extra.style.opacity = '1';
                extra.style.pointerEvents = 'auto';
                extra.style.marginTop = '16px';
                if (icon) icon.style.transform = 'rotate(180deg)';
                if (toggleText) toggleText.textContent = state.lang === 'EN' ? 'Click to collapse' : 'Нажмите, чтобы скрыть';
            } else {
                extra.style.maxHeight = '0px';
                extra.style.opacity = '0';
                extra.style.pointerEvents = 'none';
                extra.style.marginTop = '0px';
                if (icon) icon.style.transform = 'rotate(0deg)';
                if (toggleText) toggleText.textContent = state.lang === 'EN' ? 'Click to expand details' : 'Нажмите, чтобы развернуть детали';
            }
        });
    });
}

// 6. Interactive QA IDE Console Simulator
const qaConsoleClaims = [
    { type: 'info', msg_en: '▸ Initializing Selenium/Playwright virtual integration drivers...', msg_ru: '▸ Инициализация драйверов интеграционного тестирования...' },
    { type: 'pass', msg_en: '✓ LOAD_BASE_DB: Successfully connected sqlite3 Relational Engine.', msg_ru: '✓ LOAD_BASE_DB: Успешно подключен реляционный диск sqlite3.' },
    { type: 'pass', msg_en: '✓ DOM-STRUCTURE: base.html loads semantic tree structure correctly.', msg_ru: '✓ DOM-STRUCTURE: base.html успешно загрузил семантическое дерево.' },
    { type: 'pass', msg_en: '✓ FIGMA-CHECK: Container layouts have perfect exact 8px grid borders.', msg_ru: '✓ FIGMA-CHECK: Проверка макета Figma показала сетку кратную 8px.' },
    { type: 'pass', msg_en: '✓ LOCALE-ENGINE: Context locales map dynamically on runtime triggers.', msg_ru: '✓ LOCALE-ENGINE: Локали переключаются без перезапуска DOM.' },
    { type: 'fail', msg_en: '✗ SECURE-TOKEN: Form input allows unsalted POST requests without CSRF middleware!', msg_ru: '✗ SECURE-TOKEN: Форма ввода позволяет POST-запросы без CSRF middleware!' },
    { type: 'info', msg_en: '▸ Isolating exception... Logging automated bug ticket (Priority High)...', msg_ru: '▸ Локализация дефекта... Создание баг-репорта в трекере (Приоритет: Высокий)...' },
    { type: 'ticket', msg_en: '🛡️ AUTO-TICKET: Created issue #783 [CSRF Verification fail on endpoint].', msg_ru: '🛡️ AUTO-TICKET: Создана задача #783 [Сбой CSRF валидации].' },
    { type: 'pass', msg_en: '✓ CRAWL-PARSER: BeautifulSoup modular classes mapped deep layouts in 200ms.', msg_ru: '✓ CRAWL-PARSER: Сущность BeautifulSoup разобрала структуру дерева за 200мс.' },
    { type: 'pass', msg_en: '✓ TELEGRAM-CALLBACK: Response validation matched status code 200.', msg_ru: '✓ TELEGRAM-CALLBACK: Ответ API Telegram вернул код 200 OK.' },
    { type: 'info', msg_en: '▸ 10 integration test chains completed.', msg_ru: '▸ Все 10 сценариев интеграции завершены.' }
];

let consoleInterval = null;
function initQATerminal() {
    const triggerBtn = document.getElementById('terminal-trigger-btn');
    const clearBtn = document.getElementById('terminal-clear-btn');
    const logsContainer = document.getElementById('qa-terminal-log');
    
    const bugsCounter = document.getElementById('counter-bugs');
    const testsCounter = document.getElementById('counter-scenarios');

    if (!triggerBtn || !clearBtn || !logsContainer) return;

    let baselineBugs = 450;
    let baselineTests = 1200;

    triggerBtn.addEventListener('click', () => {
        if (consoleInterval) clearInterval(consoleInterval);
        
        logsContainer.innerHTML = '';
        triggerBtn.disabled = true;
        triggerBtn.classList.add('opacity-50', 'pointer-events-none');

        let claimIndex = 0;

        function runTask() {
            if (claimIndex >= qaConsoleClaims.length) {
                triggerBtn.disabled = false;
                triggerBtn.classList.remove('opacity-50', 'pointer-events-none');
                clearInterval(consoleInterval);
                return;
            }

            const claim = qaConsoleClaims[claimIndex];
            const p = document.createElement('p');
            
            // Choose text based on language
            const text = state.lang === 'EN' ? claim.msg_en : claim.msg_ru;

            if (claim.type === 'pass') {
                p.className = 'text-green-400 font-medium flex items-center space-x-1.5';
                p.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-green-400"></span> <span>${text}</span>`;
                baselineTests += 4;
                if (testsCounter) testsCounter.textContent = `${baselineTests}+`;
            } else if (claim.type === 'fail') {
                p.className = 'text-red-400 font-semibold flex items-center space-x-1.5';
                p.innerHTML = `<span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span> <span>${text}</span>`;
                baselineBugs += 1;
                if (bugsCounter) bugsCounter.textContent = `${baselineBugs}+`;
            } else if (claim.type === 'ticket') {
                p.className = 'text-orange-400 font-bold';
                p.innerHTML = `<span>${text}</span>`;
            } else {
                p.className = 'text-zinc-500 italic';
                p.textContent = text;
            }

            logsContainer.appendChild(p);
            logsContainer.scrollTop = logsContainer.scrollHeight;

            claimIndex++;
        }

        runTask();
        consoleInterval = setInterval(runTask, 1100);
    });

    clearBtn.addEventListener('click', () => {
        if (consoleInterval) clearInterval(consoleInterval);
        logsContainer.innerHTML = `<p class="text-zinc-500">// console cleared.</p>`;
        triggerBtn.disabled = false;
        triggerBtn.classList.remove('opacity-50', 'pointer-events-none');
    });
}

// 7. Interactive Projects Modal Showcase Drawer
const projectsMeta = {
    "telegram-bots": {
        icon: "bot",
        class: "text-brand-purple bg-brand-purple/10",
        tag_en: "AUTOMATION ENGINE",
        tag_ru: "СЛУЖБЫ АВТОМАТИЗАЦИИ",
        title_en: "Telegram Automation Bots",
        title_ru: "Telegram Боты и Скрипты Автоматизации",
        desc_en: `
            <p><b>Target Outcome:</b> Created customizable background communication bots in Python to connect API requests, process incoming binary documents, and automate dynamic alert states.</p>
            <h5 class="font-bold text-white mt-4 mb-2">Key Architectures Implemented:</h5>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-400">
                <li>Non-blocking polling schemas built using Python 3 and asynchio frameworks.</li>
                <li>SQLite databases handling user access states, persistent configurations, and chat histories.</li>
                <li>Clean, modular handler arrays avoiding code duplications across commands.</li>
                <li>Secure integration of system token files using environmental configuration modules.</li>
            </ul>
        `,
        desc_ru: `
            <p><b>Цель проекта:</b> Разработка индивидуальных фоновых ботов на Python для конструирования API-соединений, обработки входящих медиа-запросов и вывода логов.</p>
            <h5 class="font-bold text-white mt-4 mb-2">Реализованная архитектура:</h5>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-400">
                <li>Асинхронные обработчики команд на базе библиотек aiogram и telebot.</li>
                <li>Базы данных SQLite для сохранения состояний и истории сообщений пользователей.</li>
                <li>Разделение логики на модульные обработчики для избежания перегрузки кода.</li>
                <li>Защищенное хранение токенов в конфигурационных средах (dotenv).</li>
            </ul>
        `
    },
    "python-parser": {
        icon: "braces",
        class: "text-brand-teal bg-brand-teal/10",
        tag_en: "BIG DATA HARVESTER",
        tag_ru: "ПАРСИНГ БОЛЬШИХ ДАННЫХ",
        title_en: "Modular HTML Parser Systems",
        title_ru: "Модульные Системы Парсинга (Краулеры)",
        desc_en: `
            <p><b>Target Outcome:</b> Developed systematic document crawlers in Python to sweep unformatted dynamic sites and structured layouts with extreme accuracy.</p>
            <h5 class="font-bold text-white mt-4 mb-2">Key Architectures Implemented:</h5>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-400">
                <li>BeautifulSoup4 & request nodes filtering recursive CSS path definitions.</li>
                <li>Network throttle timers, randomized User-Agent rotations, and system request retries with back-offs to avoid site bans.</li>
                <li>Local CSV & SQLite integration builders writing clean datasets for data analytics pipelines.</li>
                <li>Comprehensive test coverage covering network timeout assertions and invalid DOM schemas.</li>
            </ul>
        `,
        desc_ru: `
            <p><b>Цель проекта:</b> Написание надежных программных парсеров на Python для циклического сканирования внешних каталогов и импорта данных в чистый формат.</p>
            <h5 class="font-bold text-white mt-4 mb-2">Реализованная архитектура:</h5>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-400">
                <li>Использование пакетов BeautifulSoup4 и requests для фильтрации вложенных HTML-сегментов.</li>
                <li>Защита от блокировок: ротация User-Agent заголовков и автоматическая задержка запросов.</li>
                <li>Экспорт результатов в структурированные таблицы CSV и базы SQLite.</li>
                <li>Разработка юнит-тестов для обработки обрывов сети и пустых HTML контейнеров.</li>
            </ul>
        `
    },
    "qa-practice": {
        icon: "file-check-2",
        class: "text-brand-cyan bg-brand-cyan/10",
        tag_en: "TEST SUITE DESIGN",
        tag_ru: "МЕТОДОЛОГИЯ ТЕСТИРОВАНИЯ",
        title_en: "System Traceability & Layout Audits",
        title_ru: "Инспекции Верстки и Базы Дефектов QA",
        desc_en: `
            <p><b>Target Outcome:</b> Engineered an exhaustive collection of testing blueprints, manual test-case sheets, and visual responsive layout reviews.</p>
            <h5 class="font-bold text-white mt-4 mb-2">Key Architectures Implemented:</h5>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-400">
                <li>Structured traceability matrix spreadsheets connecting system specifications to validation plans.</li>
                <li>Bug-hunting audit records incorporating clean step-by-step reproductions, log capture instructions, and severity metrics.</li>
                <li>Functional boundary checks comparing responsive breakpoints to master Figma blueprints.</li>
                <li>Full integration review using Chrome DevTools network throttles to test latency behaviors.</li>
            </ul>
        `,
        desc_ru: `
            <p><b>Цель проекта:</b> Проектирование комплексного тестового покрытия, ручных тест-планов и детальной инспекции макетов интерфейса.</p>
            <h5 class="font-bold text-white mt-4 mb-2">Реализованные шаги:</h5>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-400">
                <li>Создание матриц отслеживания требований (Traceability Matrix) для сопоставления ТЗ с тест-кейсами.</li>
                <li>Организация баг-репортов с пошаговыми сценариями воспроизведения, скриншотами и метриками критичности.</li>
                <li>Кроссбраузерное и адаптивное тестирование сеток на соответствие исходным файлам Figma.</li>
                <li>Анализ сетевого трафика и заголовков запросов через Chrome DevTools.</li>
            </ul>
        `
    },
    "django-apps": {
        icon: "library",
        class: "text-brand-purple bg-brand-purple/10",
        tag_en: "SECURE BACKEND APP",
        tag_ru: "БЭКЕНД ПРИЛОЖЕНИЕ",
        title_en: "Django Dynamic MVC Foundations",
        title_ru: "MVC Проектирование на Django шаблонах",
        desc_en: `
            <p><b>Target Outcome:</b> Crafted miniature multi-screen backend platforms on modern Django patterns to master core server-side flows.</p>
            <h5 class="font-bold text-white mt-4 mb-2">Key Architectures Implemented:</h5>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-400">
                <li>Django template inheritance blocks producing lightweight layouts without heavy client bundlers.</li>
                <li>Form validations backed by native CSRF tokens, preventing standard cross-site scripting vulnerabilities.</li>
                <li>SQLite connection drivers managing relational lookups and structured dataset migrations.</li>
                <li>Strict code guidelines separating logic inside clean models.py view rules and templates.</li>
            </ul>
        `,
        desc_ru: `
            <p><b>Цель проекта:</b> Разработка учебных многостраничных платформ на Django для закрепления навыков серверной разработки.</p>
            <h5 class="font-bold text-white mt-4 mb-2">Реализованная архитектура:</h5>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-400">
                <li>Использование наследования Django-шаблонов для сборки страниц без клиентских фреймворков.</li>
                <li>Защищенные формы ввода данных с валидацией полей и встроенными CSRF-токенами.</li>
                <li>Настройка миграций и работа с реляционными запросами к базе данных SQLite.</li>
                <li>Соблюдение архитектурного деления MVC для разделения бизнес-логики и представления.</li>
            </ul>
        `
    }
};

function initProjectsModal() {
    const modal = document.getElementById('project-modal');
    const modalCard = document.getElementById('modal-card');
    const closeBtn = document.getElementById('modal-close-btn');
    const actionBtn = document.getElementById('modal-action-btn');
    
    const mIconContainer = document.getElementById('modal-icon-container');
    const mTag = document.getElementById('modal-tag');
    const mTitle = document.getElementById('modal-title');
    const mBodyContent = document.getElementById('modal-body-content');

    if (!modal || !modalCard || !closeBtn || !actionBtn) return;

    function openModal(projId) {
        const meta = projectsMeta[projId];
        if (!meta) return;

        // Reset details based on language
        mTag.textContent = state.lang === 'EN' ? meta.tag_en : meta.tag_ru;
        mTitle.textContent = state.lang === 'EN' ? meta.title_en : meta.title_ru;
        mBodyContent.innerHTML = state.lang === 'EN' ? meta.desc_en : meta.desc_ru;

        // Apply style colors dynamically
        mIconContainer.className = `w-10 h-10 rounded-xl flex items-center justify-center ${meta.class}`;
        
        // Show modal overlays smoothly
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalCard.classList.remove('scale-95', 'opacity-0');
        }, 10);
    }

    function closeModal() {
        modal.classList.add('opacity-0');
        modalCard.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    document.querySelectorAll('.project-detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projId = btn.getAttribute('data-project-id');
            openModal(projId);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    actionBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// 8. Copy Contact Elements to Clipboard Helper
function initClipboard() {
    const toast = document.getElementById('toast-message');
    const toastText = document.getElementById('toast-text');
    if (!toast) return;

    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const dataVal = btn.getAttribute('data-copy-val');
            navigator.clipboard.writeText(dataVal).then(() => {
                // Show nice floating toast feedback
                toastText.textContent = state.lang === 'EN' 
                    ? `Copied "${dataVal}" to clipboard!` 
                    : `Скопировано: "${dataVal}" в буфер!`;
                
                toast.classList.remove('opacity-0', 'translate-y-20');
                toast.classList.add('opacity-100', 'translate-y-0');
                
                setTimeout(() => {
                    toast.classList.remove('opacity-100', 'translate-y-0');
                    toast.classList.add('opacity-0', 'translate-y-20');
                }, 3000);
            });
        });
    });
}

// 9. Sticky Header & Menu Adjustments
function initNavigationHandlers() {
    const header = document.getElementById('main-header');
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-gray-950/90', 'h-16', 'shadow-lg');
                header.classList.remove('h-20');
            } else {
                header.classList.remove('bg-gray-950/90', 'h-16', 'shadow-lg');
                header.classList.add('h-20');
            }
        });
    }

    if (mobileBtn && drawer) {
        mobileBtn.addEventListener('click', () => {
            drawer.classList.toggle('hidden');
            drawer.classList.toggle('flex');
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                drawer.classList.add('hidden');
                drawer.classList.remove('flex');
            });
        });
    }
}

// 10. Scroll entrance reveals
function initScrollReveals() {
    const elements = document.querySelectorAll('section, .reveal-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });
}

// Document Ready Bootstrap listener
document.addEventListener('DOMContentLoaded', () => {
    // Theme setup
    applyTheme();
    
    // Language setup
    applyTranslations();
    
    // Typewriter
    startTypewriter();
    
    // Canvas Backdrop particles
    initParticles();

    // Timeline collapsing
    initTimelineCards();

    // Inspector terminal simulator
    initQATerminal();

    // Details modals
    initProjectsModal();

    // Contact clipboards
    initClipboard();

    // Header behaviors
    initNavigationHandlers();

    // entrance triggers
    initScrollReveals();

    // Language switch wire button
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            // Swap state
            state.lang = state.lang === 'EN' ? 'RU' : 'EN';
            localStorage.setItem('portfolio-lang', state.lang);
            
            // Apply DOM
            applyTranslations();
            
            // Re-trigger typing starting over
            startTypewriter();

            // Re-render lucide icons inside modals or translations
            lucide.createIcons();
        });
    }

    // Theme toggle switcher wire button
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('portfolio-theme', state.theme);
            applyTheme();
        });
    }

    // Simulated PDF download popup trigger
    const downloadBtn = document.getElementById('cv-download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const alertText = state.lang === 'EN' 
                ? "Tamila Khamraeva's official IT portfolio PDF resume download started successfully!" 
                : "Официальное PDF резюме Тамилы Хамраевой запущено в скачивание!";
            alert(alertText);
        });
    }
});
