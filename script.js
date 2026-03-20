/* ================================================== */
/*  DEVELOPER PORTFOLIO - SCRIPT.JS                    */
/*  All interactions, animations, and data             */
/*  Edit project data in the PROJECTS_DATA array below */
/* ================================================== */

// ================================================== //
// ========== PROJECT DATA (EDIT HERE!) ============= //
// ================================================== //
// Each project object: { title, category, description, image, tags[], demo, code }
// category: "web" | "app" | "system"
// Replace image URLs with your own project screenshots

// Each project now has an "images" array for the gallery lightbox.
// The first image is used as the card thumbnail.
// Add as many images as you want per project!

const PROJECTS_DATA = [
    {
        title: "DormSmart System",
        title_th: "ระบบหอพักครบวงจร",
        category: "system",
        description: "Full-cycle dormitory management system with PWA & Push Notification — covering room management, tenants, contracts, billing, payments, maintenance requests, and move-out in one platform.",
        description_th: "ระบบบริหารจัดการหอพักแบบครบวงจร พร้อม PWA และ Push Notification ครอบคลุมตั้งแต่จัดการห้อง ผู้เช่า สัญญา ออกบิล รับชำระเงิน แจ้งซ่อม และย้ายออกในแพลตฟอร์มเดียว",
        images: [
            "p1.png",
            "p2.png",
            "p3.png"
        ],
        tags: ["PHP", "MySQL", "JavaScript", "PWA", "Push Notification"],
        demo: "https://dormsmartsystem.com/login.php",
        code: "#"
    },
    {
        title: "Quantum Ledger",
        title_th: "Quantum Ledger",
        category: "web",
        description: "High-throughput financial dashboard with real-time analytics and data visualization.",
        description_th: "แดชบอร์ดการเงินประสิทธิภาพสูง พร้อมการวิเคราะห์และแสดงผลข้อมูลแบบเรียลไทม์",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=900&h=600&fit=crop"
        ],
        tags: ["React", "Node.js", "AWS", "D3.js"],
        demo: "#",
        code: "#"
    },
    {
        title: "Neural Engine",
        title_th: "Neural Engine",
        category: "system",
        description: "Distributed processing system for machine learning workloads at scale.",
        description_th: "ระบบประมวลผลแบบกระจายสำหรับงาน Machine Learning ขนาดใหญ่",
        images: [
            "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop"
        ],
        tags: ["Python", "Docker", "gRPC", "Kubernetes"],
        demo: "#",
        code: "#"
    },
    {
        title: "CloudSync Pro",
        title_th: "CloudSync Pro",
        category: "app",
        description: "Cross-platform file synchronization app with end-to-end encryption.",
        description_th: "แอปซิงค์ไฟล์ข้ามแพลตฟอร์ม พร้อมการเข้ารหัสแบบ End-to-End",
        images: [
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=600&fit=crop"
        ],
        tags: ["React Native", "Go", "SQLite"],
        demo: "#",
        code: "#"
    },
    {
        title: "DataForge API",
        title_th: "DataForge API",
        category: "system",
        description: "RESTful API gateway with auto-scaling, rate limiting, and real-time monitoring.",
        description_th: "API Gateway แบบ RESTful พร้อม Auto-scaling, Rate Limiting และการมอนิเตอร์แบบเรียลไทม์",
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=900&h=600&fit=crop"
        ],
        tags: ["Node.js", "Redis", "Docker", "Nginx"],
        demo: "#",
        code: "#"
    },
    {
        title: "PixelCraft Studio",
        title_th: "PixelCraft Studio",
        category: "web",
        description: "Browser-based design tool with collaborative editing and asset management.",
        description_th: "เครื่องมือออกแบบบนเว็บเบราว์เซอร์ รองรับการทำงานร่วมกันและจัดการไฟล์งาน",
        images: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=600&fit=crop"
        ],
        tags: ["Vue.js", "Canvas API", "WebSocket"],
        demo: "#",
        code: "#"
    },
    {
        title: "TaskFlow Mobile",
        title_th: "TaskFlow Mobile",
        category: "app",
        description: "Productivity app with Kanban boards, time tracking, and team collaboration.",
        description_th: "แอปเพิ่มประสิทธิภาพการทำงาน พร้อม Kanban Board, จับเวลา และทำงานร่วมกันเป็นทีม",
        images: [
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=600&fit=crop",
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&h=600&fit=crop"
        ],
        tags: ["Flutter", "Firebase", "Dart"],
        demo: "#",
        code: "#"
    }
];

// ================================================== //
// ========== SKILL ICONS DATA (EDIT HERE!) ======== //
// ================================================== //
// category: "frontend" | "backend" | "tools"
// icon: SVG string for the skill icon

const SKILL_ICONS_DATA = [
    // --- Frontend ---
    { name: "HTML", category: "frontend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2l1.67 18.4L12 22l6.33-1.6L20 2H4z"/><path d="M16 8H8l.5 4h7l-.5 5-3 1-3-1-.2-2"/></svg>' },
    { name: "CSS", category: "frontend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2l1.67 18.4L12 22l6.33-1.6L20 2H4z"/><path d="M8 8h8l-.5 4H9l.25 3L12 16l3-.75"/></svg>' },
    { name: "JavaScript", category: "frontend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><text x="8" y="17" font-size="10" font-weight="bold" fill="currentColor" stroke="none">JS</text></svg>' },
    { name: "TypeScript", category: "frontend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><text x="7" y="17" font-size="10" font-weight="bold" fill="currentColor" stroke="none">TS</text></svg>' },
    { name: "Bootstrap", category: "frontend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><text x="8" y="17" font-size="12" font-weight="bold" fill="currentColor" stroke="none">B</text></svg>' },
    { name: "ReactJS", category: "frontend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>' },
    { name: "NextJS", category: "frontend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 8l8.5 11"/><path d="M16 8v8"/></svg>' },
    { name: "Flutter", category: "frontend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2L4 12l4 4"/><path d="M14 2h4l-8 8 4 4 8-8V2h-8z"/><path d="M10 16l4 4h4l-4-4"/></svg>' },
    { name: "C++", category: "frontend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="12" r="8"/><path d="M17 9v6"/><path d="M14 12h6"/><path d="M21 9v6"/><path d="M18.5 12h5"/></svg>' },
    // --- Backend ---
    { name: "PHP", category: "backend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="11" ry="7"/><text x="4" y="15" font-size="8" font-weight="bold" fill="currentColor" stroke="none">php</text></svg>' },
    { name: "Python", category: "backend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 2 8 4 8 4v3h4v1H6s-4 0-4 4 3 4 3 4h2v-3s0-2 2-2h4s2 0 2-2V4s0-2-4-2z"/><path d="M12 22c4 0 4-2 4-2v-3h-4v-1h6s4 0 4-4-3-4-3-4h-2v3s0 2-2 2h-4s-2 0-2 2v4s0 2 4 2z"/><circle cx="10" cy="5" r="0.8" fill="currentColor"/><circle cx="14" cy="19" r="0.8" fill="currentColor"/></svg>' },
    { name: "NodeJS", category: "backend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><text x="7" y="15" font-size="7" font-weight="bold" fill="currentColor" stroke="none">N</text></svg>' },
    { name: "Go", category: "backend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9"/><path d="M12 21c-2 0-4-1-5.5-3"/><text x="6" y="15" font-size="9" font-weight="bold" fill="currentColor" stroke="none">Go</text></svg>' },
    { name: "MySQL", category: "backend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>' },
    { name: "SQL Server", category: "backend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/><path d="M4 9c0 1.66 3.58 3 8 3s8-1.34 8-3"/><path d="M4 15c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>' },
    { name: "Remote Desktop", category: "backend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 10h2"/><path d="M12 10h5"/><path d="M7 13h10"/></svg>' },
    { name: "pgAdmin 4", category: "backend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="7" rx="8" ry="4"/><path d="M4 7v5c0 2.2 3.58 4 8 4s8-1.8 8-4V7"/><path d="M12 16v5"/><path d="M8 21h8"/></svg>' },
    { name: "API", category: "backend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4"/><path d="M16 12h4"/><rect x="8" y="6" width="8" height="12" rx="2"/><path d="M10 10h4"/><path d="M10 14h4"/></svg>' },
    { name: "SQL", category: "backend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><text x="5" y="16" font-size="9" font-weight="bold" fill="currentColor" stroke="none">SQL</text></svg>' },
    { name: "Git", category: "backend", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="12" r="2"/><path d="M12 8v8"/><path d="M12 8c3 0 6 1.79 6 4"/></svg>' },
    // --- Tools ---
    { name: "GitHub", category: "tools", icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>' },
    { name: "Microsoft Office", category: "tools", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="6" y="6" width="5" height="5"/><rect x="13" y="6" width="5" height="5"/><rect x="6" y="13" width="5" height="5"/><rect x="13" y="13" width="5" height="5"/></svg>' },
    { name: "Postman", category: "tools", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg>' },
    { name: "Power Automate", category: "tools", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/><circle cx="18" cy="6" r="3"/></svg>' },
    { name: "Power BI", category: "tools", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="12" width="4" height="8" rx="1"/><rect x="10" y="8" width="4" height="12" rx="1"/><rect x="16" y="4" width="4" height="16" rx="1"/></svg>' },
    { name: "Photoshop", category: "tools", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><text x="5" y="16" font-size="9" font-weight="bold" fill="currentColor" stroke="none">Ps</text></svg>' },
    { name: "Figma", category: "tools", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="6" height="6" rx="3"/><rect x="12" y="2" width="6" height="6" rx="3"/><rect x="6" y="8" width="6" height="6" rx="3"/><circle cx="15" cy="11" r="3"/><rect x="6" y="14" width="6" height="8" rx="3"/></svg>' },
    { name: "VS Code", category: "tools", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3l5 2.5v13L16 21 3 12l5-4"/><path d="M16 3L8 12l8 9"/><path d="M3 12l5 4"/></svg>' },
    { name: "XAMPP", category: "tools", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M8 8l3 3-3 3"/><path d="M14 14h3"/></svg>' }
];

// ================================================== //
// ========== TYPING TEXT DATA (EDIT HERE!) ========= //
// ================================================== //
const TYPING_STRINGS_EN = [
    "Full Stack Developer",
    "Programmer",
    "UX/UI Designer",
    "Graphic Designer"
];

const TYPING_STRINGS_TH = [
    "นักพัฒนา Full Stack",
    "โปรแกรมเมอร์",
    "นักออกแบบ UX/UI",
    "นักออกแบบกราฟิก"
];

let TYPING_STRINGS = TYPING_STRINGS_EN;

// ================================================== //
// ========== TRANSLATIONS (i18n)           ========= //
// ================================================== //
let currentLang = localStorage.getItem('lang') || 'en';

const TRANSLATIONS = {
    en: {
        // Loader
        loader_text: "Initializing...",
        // Nav
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_contact: "Contact",
        // Hero
        hero_badge: "READY_TO_BUILD_2026",
        hero_name: "Wasuphon Thongsopon",
        hero_desc: "A passionate Full Stack Developer &amp; Programmer<br>who loves graphic design, UX/UI, and continuous learning",
        btn_projects: "View Projects",
        btn_contact: "Get in Touch",
        // About
        about_label: "ABOUT_ME",
        about_title: "Who I Am",
        about_bio: "Hello! My name is Wasuphon Thongsopon (Fluk), 22 years old.<br>I graduated from Phra Mahathai Pattaya College of Technology, majoring in Digital Business Technology (Diploma). I have hands-on experience working as a Programmer at E-Hong Moddaeng Motor Lease Co., Ltd., Maha Sarakham. I\u2019m passionate about graphic design, UX/UI, and I\u2019m always eager to learn new things. I work well with colleagues and can handle pressure effectively.",
        // Skills
        skill_label: "SKILL_SET",
        skill_title: "Tech Stack",
        skill_filter_all: "All",
        skill_filter_frontend: "Frontend Development",
        skill_filter_backend: "Backend Development",
        skill_filter_tools: "Development Tools",
        prof_label: "PROFICIENCY",
        prof_title: "Skill Levels",
        skill_cat1_label: "CLIENT_SIDE",
        skill_cat1_title: "Frontend",
        skill_cat2_label: "SERVER_SIDE",
        skill_cat2_title: "Backend & Data",
        skill_cat3_label: "CREATIVE_TOOLS",
        skill_cat3_title: "Tools & Design",
        // Projects
        projects_label: "SELECTED_WORKS",
        projects_title: "Featured Projects",
        // Experience
        exp_label: "CAREER_PATH",
        exp_title: "Experience",
        exp1_year: "2024 - 2025",
        exp1_role: "Programmer (Full-time)",
        exp1_company: "E-Hong Moddaeng Motor Lease Co., Ltd., Maha Sarakham",
        exp1_desc: "After completing the internship, I was hired as a full-time Programmer for 1 year, developing full-stack systems for the organization.",
        exp2_year: "2024",
        exp2_role: "Programmer (Intern)",
        exp2_company: "E-Hong Moddaeng Motor Lease Co., Ltd., Maha Sarakham",
        exp2_desc: "Internship as a Programmer, gaining hands-on experience in real-world system development before being offered a full-time position.",
        exp3_year: "2021 - 2022",
        exp3_role: "IT Support (Intern)",
        exp3_company: "Kasemrad Hospital, Saraburi",
        exp3_desc: "3-month internship in Information Technology, handling IT support systems.",
        exp4_year: "2022",
        exp4_role: "Maintenance Technician (Intern)",
        exp4_company: "Sa-nga Factory",
        exp4_desc: "6-month internship as a Maintenance Technician, maintaining and repairing electrical equipment.",
        exp5_year: "Diploma",
        exp5_role: "Digital Business Technology",
        exp5_company: "Phra Mahathai Pattaya College of Technology",
        exp5_desc: "Graduated with a High Vocational Certificate (Diploma) in Digital Business Technology.",
        exp6_year: "Voc. Cert.",
        exp6_role: "Business Computer",
        exp6_company: "Chuenchom Thai-German College of Technology",
        exp6_desc: "Graduated with a Vocational Certificate in Business Computer.",
        exp7_year: "Secondary",
        exp7_role: "Lower Secondary Education",
        exp7_company: "Wat Nong Ta Bun School",
        exp7_desc: "Completed lower secondary education.",
        // Contact
        contact_label: "GET_IN_TOUCH",
        contact_title: "Let\u2019s Work Together",
        contact_desc: "Have a project in mind or just want to connect? Feel free to reach out.",
        // Footer
        footer_copy: "&copy; 2026 Wasuphon Thongsopon. All rights reserved.",
        footer_tag: "BUILT_WITH_PRECISION"
    },
    th: {
        // Loader
        loader_text: "กำลังโหลด...",
        // Nav
        nav_about: "เกี่ยวกับ",
        nav_skills: "ทักษะ",
        nav_projects: "ผลงาน",
        nav_experience: "ประสบการณ์",
        nav_contact: "ติดต่อ",
        // Hero
        hero_badge: "พร้อมทำงาน_2026",
        hero_name: "วสุพล ทองโสภณ",
        hero_desc: "Full Stack Developer &amp; Programmer ที่รักการเรียนรู้<br>ออกแบบกราฟิก ดีไซน์ และ UX/UI",
        btn_projects: "ดูผลงาน",
        btn_contact: "ติดต่อฉัน",
        // About
        about_label: "เกี่ยวกับ_ฉัน",
        about_title: "ฉันเป็นใคร",
        about_bio: "สวัสดีครับ ผมชื่อ วสุพล ทองโสภณ (ฟลุ้ค) อายุ 22 ปี<br>จบการศึกษาจากวิทยาลัยเทคโนโลยีพระมหาไถ่ พัทยา สาขาเทคโนโลยีธุรกิจดิจิทัล (ปวส.) มีประสบการณ์ทำงานจริงในตำแหน่ง Programmer ที่ อีฮงมดแดงมอเตอร์ ลีส จำกัด มหาสารคาม ผมชอบการออกแบบกราฟิก ดีไซน์ และ UX/UI รวมถึงหาความรู้ใส่ตัวเองอยู่เสมอ เข้ากับเพื่อนร่วมงานได้ดี และรับแรงกดดันจากการทำงานได้",
        // Skills
        skill_label: "ชุดทักษะ",
        skill_title: "เทคโนโลยีที่ใช้",
        skill_filter_all: "ทั้งหมด",
        skill_filter_frontend: "พัฒนา Frontend",
        skill_filter_backend: "พัฒนา Backend",
        skill_filter_tools: "เครื่องมือพัฒนา",
        prof_label: "ระดับความชำนาญ",
        prof_title: "ระดับทักษะ",
        skill_cat1_label: "ฝั่งลูกค้า",
        skill_cat1_title: "ฟรอนต์เอนด์",
        skill_cat2_label: "ฝั่งเซิร์ฟเวอร์",
        skill_cat2_title: "แบ็กเอนด์ & ข้อมูล",
        skill_cat3_label: "เครื่องมือสร้างสรรค์",
        skill_cat3_title: "เครื่องมือ & ดีไซน์",
        // Projects
        projects_label: "ผลงานคัดสรร",
        projects_title: "โปรเจกต์เด่น",
        // Experience
        exp_label: "เส้นทางอาชีพ",
        exp_title: "ประสบการณ์",
        exp1_year: "2024 - 2025",
        exp1_role: "Programmer (ทำงานจริง)",
        exp1_company: "อีฮงมดแดงมอเตอร์ ลีส จำกัด, มหาสารคาม",
        exp1_desc: "หลังจบฝึกงาน ได้รับการบรรจุทำงานจริงในตำแหน่ง Programmer ระยะเวลา 1 ปี พัฒนาระบบ Full Stack ให้กับองค์กร",
        exp2_year: "2024",
        exp2_role: "Programmer (ฝึกงาน)",
        exp2_company: "อีฮงมดแดงมอเตอร์ ลีส จำกัด, มหาสารคาม",
        exp2_desc: "ฝึกงานตำแหน่ง Programmer เรียนรู้การพัฒนาระบบจริงในองค์กร ก่อนได้รับการบรรจุเป็นพนักงานประจำ",
        exp3_year: "2021 - 2022",
        exp3_role: "IT Support (ฝึกงาน)",
        exp3_company: "โรงพยาบาลเกษมราษฎร์ สระบุรี",
        exp3_desc: "ฝึกงาน 3 เดือน ตำแหน่งเทคโนโลยีสารสนเทศ ดูแลระบบ IT Support",
        exp4_year: "2022",
        exp4_role: "ช่างซ่อมบำรุง (ฝึกงาน)",
        exp4_company: "โรงงาน สง่า",
        exp4_desc: "ฝึกงาน 6 เดือน ตำแหน่งช่างซ่อมบำรุง ซ่อมบำรุงรักษาเครื่องใช้ไฟฟ้า",
        exp5_year: "ปวส.",
        exp5_role: "เทคโนโลยีธุรกิจดิจิทัล",
        exp5_company: "วิทยาลัยเทคโนโลยีพระมหาไถ่ พัทยา",
        exp5_desc: "สำเร็จการศึกษาระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาเทคโนโลยีธุรกิจดิจิทัล",
        exp6_year: "ปวช.",
        exp6_role: "คอมพิวเตอร์ธุรกิจ",
        exp6_company: "วิทยาลัยเทคโนโลยีชื่นชมไทย – เยอรมัน",
        exp6_desc: "จบระดับประกาศนียบัตรวิชาชีพ (ปวช.) สาขาคอมพิวเตอร์ธุรกิจ",
        exp7_year: "ม.ต้น",
        exp7_role: "มัธยมศึกษาตอนต้น",
        exp7_company: "โรงเรียนวัดหนองตาบุญ",
        exp7_desc: "จบการศึกษาระดับมัธยมศึกษาตอนต้น",
        // Contact
        contact_label: "ติดต่อเรา",
        contact_title: "มาทำงานด้วยกัน",
        contact_desc: "มีโปรเจกต์ในใจ หรือแค่อยากพูดคุย? ติดต่อผมได้เลยครับ",
        // Footer
        footer_copy: "&copy; 2026 วสุพล ทองโสภณ สงวนลิขสิทธิ์",
        footer_tag: "สร้างด้วยความตั้งใจ"
    }
};

// ================================================== //
// ========== INITIALIZATION                ========= //
// ================================================== //
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initLoader();
    initCustomCursor();
    initScrollProgress();
    initNavbar();
    initParticles();
    initTypingEffect();
    initRevealAnimations();
    initSkillBars();
    initTiltCards();
    initParallax();
    renderProjects();
    initProjectFilters();
    initLightbox();
    initSkillIconGrid();
});

// ================================================== //
// ========== UTILITY: THROTTLE & DEBOUNCE ========== //
// ================================================== //
function throttle(fn, wait) {
    let last = 0;
    return function(...args) {
        const now = performance.now();
        if (now - last >= wait) {
            last = now;
            fn.apply(this, args);
        }
    };
}

function debounce(fn, wait) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), wait);
    };
}

// ================================================== //
// ========== LANGUAGE TOGGLE (i18n)       ========== //
// ================================================== //
function initLanguageToggle() {
    const toggle = document.getElementById('langToggle');
    if (!toggle) return;

    // Apply saved language on load
    setLanguage(currentLang, false);

    toggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'th' : 'en';
        setLanguage(currentLang, true);
    });
}

function setLanguage(lang, restartTyping) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    // Update text content (plain text)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Update HTML content (elements with <br> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang === 'th' ? 'th' : 'en';

    // Update toggle button active state
    const enSpan = document.querySelector('.lang-toggle-en');
    const thSpan = document.querySelector('.lang-toggle-th');
    if (enSpan && thSpan) {
        enSpan.classList.toggle('active', lang === 'en');
        thSpan.classList.toggle('active', lang === 'th');
    }

    // Update typing strings
    TYPING_STRINGS = lang === 'th' ? TYPING_STRINGS_TH : TYPING_STRINGS_EN;

    // Restart typing effect if requested
    if (restartTyping) {
        const el = document.getElementById('typingText');
        if (el) {
            el.textContent = '';
            // Reset typing state via a fresh call
            if (window._typingTimeout) clearTimeout(window._typingTimeout);
            window._typingStringIndex = 0;
            window._typingCharIndex = 0;
            window._typingIsDeleting = false;
            startTyping();
        }
    }

    // Re-render projects with new language
    const activeFilter = document.querySelector('.filter-btn.active');
    const currentFilter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
    renderProjects(currentFilter);

    // Save preference
    localStorage.setItem('lang', lang);
}

// ================================================== //
// ========== LOADING SCREEN               ========== //
// ================================================== //
function initLoader() {
    const loader = document.getElementById('loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = '';
        }, 1800);
    });
    
    // Fallback: hide loader after 3s max
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
    }, 3000);
}

// ================================================== //
// ========== CUSTOM CURSOR                ========== //
// ================================================== //
function initCustomCursor() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    
    if (!dot || !ring) return;
    
    // Check if touch device
    if ('ontouchstart' in window) return;
    
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId = null;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    }, { passive: true });
    
    // Smooth follow for ring using RAF
    function animateRing() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
        rafId = requestAnimationFrame(animateRing);
    }
    animateRing();
    
    // Pause cursor animation when tab not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(rafId);
            rafId = null;
        } else if (!rafId) {
            animateRing();
        }
    });
    
    // Hover states
    const hoverElements = document.querySelectorAll('a, button, .project-card, .filter-btn, .social-badge, .contact-social-icon, [data-tilt]');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

// ================================================== //
// ========== SCROLL PROGRESS BAR          ========== //
// ================================================== //
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const progress = (scrollTop / scrollHeight) * 100;
                bar.style.width = progress + '%';
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ================================================== //
// ========== NAVBAR                       ========== //
// ================================================== //
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Scroll effect - throttled
    let lastScrolled = false;
    const handleNavScroll = throttle(() => {
        const scrolled = window.scrollY > 50;
        if (scrolled !== lastScrolled) {
            navbar.classList.toggle('scrolled', scrolled);
            lastScrolled = scrolled;
        }
    }, 100);
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    
    // Indicator
    const indicator = document.getElementById('navIndicator');
    const pillGroup = document.getElementById('navPillGroup');
    const pillLinks = pillGroup ? Array.from(pillGroup.querySelectorAll('.nav-link')) : [];
    let scrollLock = false;
    let scrollLockTimer = null;

    function updateNavIndicator() {
        if (!indicator || !pillGroup) return;
        const activeLink = pillGroup.querySelector('.nav-link.active');
        if (activeLink) {
            indicator.style.transform = `translateX(${activeLink.offsetLeft}px)`;
            indicator.style.width = activeLink.offsetWidth + 'px';
            indicator.classList.add('visible');
        } else {
            indicator.classList.remove('visible');
        }
    }

    function setActiveLink(href) {
        pillLinks.forEach(l => l.classList.remove('active'));
        const target = pillGroup ? pillGroup.querySelector(`.nav-link[href="${href}"]`) : null;
        if (target) target.classList.add('active');
        updateNavIndicator();
    }

    // Mobile toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Click: lock scroll handler, set active immediately
    pillLinks.forEach(link => {
        link.addEventListener('click', () => {
            setActiveLink(link.getAttribute('href'));
            // Lock scroll from overriding for 900ms (smooth scroll duration)
            scrollLock = true;
            clearTimeout(scrollLockTimer);
            scrollLockTimer = setTimeout(() => { scrollLock = false; }, 900);
            if (navToggle && navLinks) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Contact button — just close mobile menu
    const contactBtn = document.querySelector('.nav-link-btn');
    if (contactBtn && navToggle && navLinks) {
        contactBtn.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    }

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    const handleActiveLink = throttle(() => {
        if (scrollLock) return; // ignore while scroll-locked after click
        const scrollY = window.scrollY + 120;
        let found = false;
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const top = section.offsetTop;
            const id = section.getAttribute('id');
            if (scrollY >= top) {
                const link = pillGroup ? pillGroup.querySelector(`.nav-link[href="#${id}"]`) : null;
                if (link) {
                    setActiveLink(`#${id}`);
                } else {
                    // section exists (like hero/contact) but not in pill group — clear pill active
                    pillLinks.forEach(l => l.classList.remove('active'));
                    indicator.classList.remove('visible');
                }
                found = true;
                break;
            }
        }
        if (!found) {
            pillLinks.forEach(l => l.classList.remove('active'));
            if (indicator) indicator.classList.remove('visible');
        }
    }, 100);
    window.addEventListener('scroll', handleActiveLink, { passive: true });

    // Run once on load + resize
    setTimeout(() => { handleActiveLink(); updateNavIndicator(); }, 400);
    window.addEventListener('resize', debounce(updateNavIndicator, 150), { passive: true });
}

// ================================================== //
// ========== PARTICLE CANVAS              ========== //
// ================================================== //
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    const PARTICLE_COUNT = 45;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resize();
    window.addEventListener('resize', debounce(resize, 200));
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }
    
    function connectParticles() {
        const len = particles.length;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distSq = dx * dx + dy * dy;
                
                if (distSq < 22500) { // 150^2
                    const opacity = (1 - Math.sqrt(distSq) / 150) * 0.15;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        connectParticles();
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Pause when not visible (performance)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!animationId) animate();
            } else {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        });
    });
    observer.observe(canvas);
}

// ================================================== //
// ========== TYPING EFFECT                ========== //
// ================================================== //
function initTypingEffect() {
    const el = document.getElementById('typingText');
    if (!el) return;
    
    window._typingStringIndex = 0;
    window._typingCharIndex = 0;
    window._typingIsDeleting = false;
    window._typingTimeout = null;
    
    startTyping();
}

function startTyping() {
    const el = document.getElementById('typingText');
    if (!el) return;
    
    let typeSpeed = 100;
    const currentString = TYPING_STRINGS[window._typingStringIndex % TYPING_STRINGS.length];
    
    if (window._typingIsDeleting) {
        el.textContent = currentString.substring(0, window._typingCharIndex - 1);
        window._typingCharIndex--;
        typeSpeed = 50;
    } else {
        el.textContent = currentString.substring(0, window._typingCharIndex + 1);
        window._typingCharIndex++;
        typeSpeed = 100;
    }
    
    if (!window._typingIsDeleting && window._typingCharIndex === currentString.length) {
        typeSpeed = 2000;
        window._typingIsDeleting = true;
    } else if (window._typingIsDeleting && window._typingCharIndex === 0) {
        window._typingIsDeleting = false;
        window._typingStringIndex = (window._typingStringIndex + 1) % TYPING_STRINGS.length;
        typeSpeed = 500;
    }
    
    window._typingTimeout = setTimeout(startTyping, typeSpeed);
}

// ================================================== //
// ========== SCROLL REVEAL ANIMATIONS     ========== //
// ================================================== //
function initRevealAnimations() {
    const elements = document.querySelectorAll('[data-reveal]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
}

// ================================================== //
// ========== SKILL BARS ANIMATION         ========== //
// ================================================== //
function initSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    bars.forEach(bar => observer.observe(bar));
}

// ================================================== //
// ========== SKILL ICON GRID              ========== //
// ================================================== //
function initSkillIconGrid() {
    const grid = document.getElementById('skillIconGrid');
    if (!grid) return;
    
    function renderSkillIcons(filter = 'all') {
        grid.innerHTML = '';
        
        const filtered = filter === 'all'
            ? SKILL_ICONS_DATA
            : SKILL_ICONS_DATA.filter(s => s.category === filter);
        
        filtered.forEach((skill, index) => {
            const card = document.createElement('div');
            card.className = 'skill-icon-card show-card';
            card.style.animationDelay = (index * 40) + 'ms';
            card.innerHTML = `
                <div class="skill-icon-card-svg">${skill.icon}</div>
                <span class="skill-icon-card-name">${skill.name}</span>
            `;
            grid.appendChild(card);
        });
    }
    
    // Initial render
    renderSkillIcons('all');
    
    // Filter buttons
    const filterBtns = document.querySelectorAll('.skill-filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-skill-filter');
            renderSkillIcons(filter);
        });
    });
}

// ================================================== //
// ========== 3D TILT CARDS                ========== //
// ================================================== //
function initTiltCards() {
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
        let tiltRaf = null;
        card.addEventListener('mousemove', (e) => {
            if (tiltRaf) return;
            tiltRaf = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -4;
                const rotateY = ((x - centerX) / centerX) * 4;
                
                card.style.setProperty('--tilt-x', rotateX + 'deg');
                card.style.setProperty('--tilt-y', rotateY + 'deg');
                tiltRaf = null;
            });
        }, { passive: true });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');
        });
    });
}

// ================================================== //
// ========== MOUSE PARALLAX               ========== //
// ================================================== //
function initParallax() {
    const elements = document.querySelectorAll('[data-parallax]');
    if (!elements.length) return;
    
    let pRaf = null;
    document.addEventListener('mousemove', (e) => {
        if (pRaf) return;
        pRaf = requestAnimationFrame(() => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            
            elements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-parallax')) || 0.05;
                const moveX = x * speed * 100;
                const moveY = y * speed * 100;
                el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });
            pRaf = null;
        });
    }, { passive: true });
}

// ================================================== //
// ========== RENDER PROJECTS              ========== //
// ================================================== //
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? PROJECTS_DATA 
        : PROJECTS_DATA.filter(p => p.category === filter);
    
    filtered.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card show';
        card.setAttribute('data-category', project.category);
        card.style.animationDelay = (index * 100) + 'ms';
        
        const thumbImage = project.images ? project.images[0] : project.image;
        const isTh = currentLang === 'th';
        const pTitle = isTh && project.title_th ? project.title_th : project.title;
        const pDesc = isTh && project.description_th ? project.description_th : project.description;
        const imgLabel = isTh ? 'รูป' : 'imgs';
        
        card.innerHTML = `
            <div class="project-card-image" data-project-index="${PROJECTS_DATA.indexOf(project)}">
                <img src="${thumbImage}" alt="${pTitle}" loading="lazy">
                <div class="image-overlay">
                    <div class="image-overlay-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                    </div>
                </div>
                ${project.images && project.images.length > 1 ? `<div style="position:absolute;bottom:8px;right:8px;z-index:2;font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:rgba(255,255,255,0.7);background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);padding:3px 8px;border-radius:4px;letter-spacing:0.5px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:3px;"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m9.5 15 3.5-4.5 4 5H7l2.5-3"/></svg>${project.images.length} ${imgLabel}</div>` : ''}
            </div>
            <div class="project-card-body">
                <div class="project-card-category">${project.category.toUpperCase()}</div>
                <h3 class="project-card-title">${pTitle}</h3>
                <p class="project-card-desc">${pDesc}</p>
                <div class="project-card-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-card-links">
                    <a href="${project.demo}" class="project-link" target="_blank">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        DEMO
                    </a>
                    <a href="${project.code}" class="project-link" target="_blank">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        CODE
                    </a>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    // Re-init tilt for new cards
    initTiltForProjectCards();
    // Re-init cursor hover for new elements
    reInitCursorHover();
    // Re-bind lightbox click events for newly rendered cards
    if (window._bindLightboxClicks) window._bindLightboxClicks();
}

function initTiltForProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        let tiltRaf = null;
        card.addEventListener('mousemove', (e) => {
            if (tiltRaf) return;
            tiltRaf = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -3;
                const rotateY = ((x - centerX) / centerX) * 3;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) translateZ(0)`;
                tiltRaf = null;
            });
        }, { passive: true });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) translateZ(0)';
        });
    });
}

function reInitCursorHover() {
    if ('ontouchstart' in window) return;
    
    const hoverElements = document.querySelectorAll('.project-card, .project-link, .project-tag');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

// ================================================== //
// ========== PROJECT FILTER SYSTEM        ========== //
// ================================================== //
function initProjectFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            const filter = btn.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
}

// ================================================== //
// ========== SMOOTH SCROLL FOR ANCHORS    ========== //
// ================================================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // navbar height offset
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ================================================== //
// ========== LIGHTBOX / GALLERY MODAL     ========== //
// ================================================== //
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxCurrent = document.getElementById('lightboxCurrent');
    const lightboxTotal = document.getElementById('lightboxTotal');
    const lightboxThumbnails = document.getElementById('lightboxThumbnails');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxOverlay = lightbox?.querySelector('.lightbox-overlay');
    
    if (!lightbox) return;
    
    let currentProject = null;
    let currentImageIndex = 0;
    
    // Open lightbox when clicking project image
    function bindCardClicks() {
        document.querySelectorAll('.project-card-image[data-project-index]').forEach(img => {
            img.addEventListener('click', (e) => {
                e.preventDefault();
                const index = parseInt(img.getAttribute('data-project-index'));
                openLightbox(index);
            });
        });
    }
    
    // Call once and also re-bind after filter
    bindCardClicks();
    
    // Expose for re-binding after rendering projects
    window._bindLightboxClicks = bindCardClicks;
    
    function openLightbox(projectIndex) {
        currentProject = PROJECTS_DATA[projectIndex];
        if (!currentProject) return;
        
        const images = currentProject.images || [currentProject.image];
        currentImageIndex = 0;
        
        // Update content (language-aware)
        updateLightboxImage();
        const isTh = currentLang === 'th';
        lightboxTitle.textContent = isTh && currentProject.title_th ? currentProject.title_th : currentProject.title;
        lightboxDesc.textContent = isTh && currentProject.description_th ? currentProject.description_th : currentProject.description;
        lightboxTotal.textContent = images.length;
        
        // Build thumbnails
        lightboxThumbnails.innerHTML = '';
        images.forEach((imgSrc, i) => {
            const thumb = document.createElement('div');
            thumb.className = 'lightbox-thumb' + (i === 0 ? ' active' : '');
            thumb.innerHTML = `<img src="${imgSrc}" alt="Thumbnail ${i + 1}">`;
            thumb.addEventListener('click', () => goToImage(i));
            lightboxThumbnails.appendChild(thumb);
        });
        
        // Show/hide arrows
        updateArrows();
        
        // Show lightbox
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        currentProject = null;
    }
    
    function updateLightboxImage() {
        const images = currentProject.images || [currentProject.image];
        lightboxImage.classList.add('loading');
        lightboxImage.src = images[currentImageIndex];
        lightboxImage.onload = () => lightboxImage.classList.remove('loading');
        lightboxCurrent.textContent = currentImageIndex + 1;
        
        // Update thumbnails active state
        lightboxThumbnails.querySelectorAll('.lightbox-thumb').forEach((t, i) => {
            t.classList.toggle('active', i === currentImageIndex);
        });
        
        // Scroll active thumbnail into view
        const activeTh = lightboxThumbnails.querySelector('.lightbox-thumb.active');
        if (activeTh) activeTh.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        
        updateArrows();
    }
    
    function updateArrows() {
        const images = currentProject?.images || [];
        if (lightboxPrev) lightboxPrev.style.opacity = currentImageIndex > 0 ? '1' : '0.3';
        if (lightboxNext) lightboxNext.style.opacity = currentImageIndex < images.length - 1 ? '1' : '0.3';
    }
    
    function goToImage(index) {
        const images = currentProject.images || [currentProject.image];
        if (index < 0 || index >= images.length) return;
        currentImageIndex = index;
        updateLightboxImage();
    }
    
    function nextImage() {
        const images = currentProject?.images || [];
        if (currentImageIndex < images.length - 1) goToImage(currentImageIndex + 1);
    }
    
    function prevImage() {
        if (currentImageIndex > 0) goToImage(currentImageIndex - 1);
    }
    
    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });
    
    // Touch swipe support
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    lightbox.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) prevImage();
            else nextImage();
        }
    }, { passive: true });
}

// ================================================== //
// ========== PERFORMANCE: REDUCE MOTION   ========== //
// ================================================== //
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.querySelectorAll('[data-reveal]').forEach(el => {
        el.classList.add('revealed');
    });
}
