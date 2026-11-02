const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const languageToggle = document.getElementById('langToggle');
const portfolioTranslations = {
    en: {
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_projects: 'Projects',
        nav_portfolio: 'Portfolio',
        nav_experience: 'Experience',
        nav_contact: 'Contact',
        portfolio_eyebrow: 'SELECTED WORKS / 2026',
        portfolio_title: 'Portfolio',
        portfolio_subtitle: 'Selected Projects',
        portfolio_intro: 'A collection of projects I have contributed to, from analysis and design through development, testing, and real-world deployment.',
        portfolio_browse: 'Browse projects',
        portfolio_count: 'PROJECTS / 01—09',
        project01_summary: 'An integrated service and repair management system connecting appointments, assessments, repair tracking, parts, and reporting in one platform.',
        project_details: 'View project details',
        detail_back: '← Back to portfolio',
        detail_overview: 'Project overview',
        detail_responsibilities: 'Responsibilities',
        detail_stack: 'Technology stack',
        detail_features: 'Key features',
        detail_workflow: 'Workflow',
        detail_outcome: 'Project outcomes',
        detail_highlight: 'Project highlight',
        detail_return: '← Explore more projects',
        footer_home: 'Back to home ↑',
        navigation_label: 'Main navigation',
        language_label: 'Toggle language',
        menu_label: 'Toggle menu',
        project_not_found: 'Project not found',
        project_missing: 'This project may no longer be available or the link may have changed.'
    },
    th: {
        nav_about: 'เกี่ยวกับ',
        nav_skills: 'ทักษะ',
        nav_projects: 'ผลงาน',
        nav_portfolio: 'พอร์ตโฟลิโอ',
        nav_experience: 'ประสบการณ์',
        nav_contact: 'ติดต่อ',
        portfolio_eyebrow: 'ผลงานคัดสรร / 2026',
        portfolio_title: 'พอร์ตโฟลิโอ',
        portfolio_subtitle: 'ผลงานและโปรเจกต์',
        portfolio_intro: 'รวบรวมโปรเจกต์ที่ได้มีส่วนร่วมตั้งแต่การวิเคราะห์ ออกแบบ พัฒนา ทดสอบ ไปจนถึงการนำระบบไปใช้งานจริง',
        portfolio_browse: 'ดูโปรเจกต์',
        portfolio_count: 'โปรเจกต์ / 01—09',
        project01_summary: 'ระบบบริหารงานบริการและงานซ่อม เชื่อมโยงการนัดหมาย การประเมินงาน การติดตามสถานะ การจัดการอะไหล่ และรายงานไว้ในระบบเดียว',
        project_details: 'ดูรายละเอียดโปรเจกต์',
        detail_back: '← กลับไปหน้า Portfolio',
        detail_overview: 'ภาพรวมโปรเจกต์',
        detail_responsibilities: 'บทบาทและความรับผิดชอบ',
        detail_stack: 'เทคโนโลยีที่ใช้',
        detail_features: 'ความสามารถหลักของระบบ',
        detail_workflow: 'ลำดับการทำงาน',
        detail_outcome: 'ผลลัพธ์ของโปรเจกต์',
        detail_highlight: 'จุดเด่นของโปรเจกต์',
        detail_return: '← กลับไปดูโปรเจกต์อื่น',
        footer_home: 'กลับหน้าหลัก ↑',
        navigation_label: 'เมนูหลัก',
        language_label: 'เปลี่ยนภาษา',
        menu_label: 'เปิดหรือปิดเมนู',
        project_not_found: 'ไม่พบโปรเจกต์นี้',
        project_missing: 'โปรเจกต์ที่ต้องการอาจไม่มีอยู่หรือมีการเปลี่ยนแปลงลิงก์'
    }
};

const project01English = {
    hero: 'An internal service management system that connects customer appointments, job assessment, repair tracking, parts, documentation, and reporting. It gives teams a shared view of work and makes status checks easier.',
    headings: ['Project overview', 'Responsibilities', 'Technology stack', 'Key system features', 'Workflow', 'Business benefits', 'Project highlights', 'Project outcomes'],
    overview: [
        'The system brings service and repair tasks together, from appointment booking and information review through cost assessment, approval, repair, quality control, and job closure.',
        'It is designed to reduce manual coordination and scattered tracking, while giving stakeholders a clearer view of work progress.'
    ],
    responsibilityIntro: 'As the Full-Stack Developer, my responsibilities included:',
    responsibilities: [
        'Analyzed requirements with actual users.',
        'Designed workflows to support teams across departments.',
        'Designed the PostgreSQL database and managed data with SQL.',
        'Developed both the front end and back end.',
        'Built REST APIs for exchanging data between systems.',
        'Automated status updates and repetitive tasks.',
        'Tested the system, fixed defects, and optimized performance.',
        'Maintained and improved the system after deployment.'
    ],
    features: [
        ['Appointment management', 'Manage customer appointments.', 'Review details and track appointment status.'],
        ['Repair workflow tracking', 'Track jobs from intake through processing.', 'Cover repair, quality checks, and job closure.'],
        ['Assessment and quotations', 'Record cost assessments.', 'Create quotations and track approval status.'],
        ['Parts management', 'Manage parts requests and returns.', 'Review usage history and request status.'],
        ['Dashboard and reporting', 'Show an overview of work and status.', 'Summarize operations for management.'],
        ['Automation', 'Update status and identify pending work.', 'Automate selected steps to reduce manual effort.']
    ],
    workflow: ['Appointment', 'Information review', 'Assessment', 'Quotation', 'Repair', 'Quality control (QC)', 'Parts management', 'Documentation', 'Job closure', 'Reporting'],
    benefits: [
        'Reduces coordination steps across departments.',
        'Cuts repetitive manual status checks.',
        'Speeds up status updates and reviews.',
        'Helps prevent operational errors.',
        'Supports audits through work history.',
        'Improves data accuracy for decision-making.',
        'Gives management a clearer operational overview.'
    ],
    highlights: [
        'Delivered full-stack development from front end to back end.',
        'Designed workflows for multiple departments.',
        'Designed a PostgreSQL database and managed data with SQL.',
        'Built REST APIs to connect system data.',
        'Used automation to reduce manual tasks.',
        'Supported responsive use across devices.',
        'Analyzed and resolved issues to improve performance.',
        'Contributed from design and development through testing and deployment.'
    ],
    outcomes: [
        'Unified service-management processes in one platform.',
        'Reduced time spent tracking work and coordinating between teams.',
        'Improved efficiency with automation and status updates.',
        'Supported decisions with dashboards and summary reports.',
        'Created a foundation for future system extensions.'
    ],
    backToProjects: '← Explore more projects'
};

const project01OriginalText = new WeakMap();

function localizeProject01(language) {
    if (!document.body.classList.contains('project01-page')) return;
    const sections = Array.from(document.querySelectorAll('.detail-section'));
    const setText = (element, text) => {
        if (!element) return;
        if (!project01OriginalText.has(element)) project01OriginalText.set(element, element.textContent);
        element.textContent = language === 'en' ? text : project01OriginalText.get(element);
    };

    setText(document.querySelector('.detail-hero .detail-lead'), project01English.hero);
    sections.forEach((section, index) => setText(section.querySelector('h2'), project01English.headings[index]));
    sections[0].querySelectorAll('.detail-panel p').forEach((el, index) => setText(el, project01English.overview[index]));
    setText(sections[1].querySelector('.detail-panel > p'), project01English.responsibilityIntro);
    sections[1].querySelectorAll('li').forEach((el, index) => setText(el, project01English.responsibilities[index]));
    sections[3].querySelectorAll('.detail-card').forEach((card, index) => {
        const [title, ...items] = project01English.features[index];
        setText(card.querySelector('h3'), title);
        card.querySelectorAll('li').forEach((el, itemIndex) => setText(el, items[itemIndex]));
    });
    sections[4].querySelectorAll('.workflow-step').forEach((el, index) => setText(el, project01English.workflow[index]));
    sections[5].querySelectorAll('li').forEach((el, index) => setText(el, project01English.benefits[index]));
    sections[6].querySelectorAll('li').forEach((el, index) => setText(el, project01English.highlights[index]));
    sections[7].querySelectorAll('li').forEach((el, index) => setText(el, project01English.outcomes[index]));
    setText(sections[7].querySelector('.btn'), project01English.backToProjects);
}

function setPortfolioLanguage(lang, persist = true) {
    const language = portfolioTranslations[lang] ? lang : 'en';
    document.documentElement.lang = language;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = portfolioTranslations[language][key];
        if (value !== undefined) element.textContent = value;
    });

    const enLabel = document.querySelector('.lang-toggle-en');
    const thLabel = document.querySelector('.lang-toggle-th');
    if (enLabel && thLabel) {
        enLabel.classList.toggle('active', language === 'en');
        thLabel.classList.toggle('active', language === 'th');
    }
    const navigation = document.querySelector('.portfolio-page nav');
    const languageButton = document.getElementById('langToggle');
    if (navigation) navigation.setAttribute('aria-label', portfolioTranslations[language].navigation_label);
    if (languageButton) languageButton.setAttribute('aria-label', portfolioTranslations[language].language_label);
    if (navToggle) navToggle.setAttribute('aria-label', portfolioTranslations[language].menu_label);
    localizeProject01(language);

    if (persist) localStorage.setItem('lang', language);
    document.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: { language } }));
}

const initialPortfolioLanguage = localStorage.getItem('lang') || 'en';
setPortfolioLanguage(initialPortfolioLanguage, false);

if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        const nextLanguage = document.documentElement.lang === 'en' ? 'th' : 'en';
        setPortfolioLanguage(nextLanguage);
    });
}

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navToggle.classList.toggle('active');
        navLinks.classList.toggle('active', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', event => {
        const url = new URL(link.href, window.location.href);
        const isSamePageAnchor = url.pathname === window.location.pathname && url.hash;
        const isExternal = url.origin !== window.location.origin;
        const hasSpecialTarget = link.target && link.target !== '_self';
        if (isSamePageAnchor || isExternal || url.protocol !== window.location.protocol || hasSpecialTarget || event.defaultPrevented) return;

        document.body.classList.add('page-leaving');
        event.preventDefault();
        window.setTimeout(() => window.location.assign(url.href), 180);
    });
});
