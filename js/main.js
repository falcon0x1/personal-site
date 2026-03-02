// Global error handler to prevent clipboard and other API errors from breaking the site
window.addEventListener('error', function(e) {
    if (e.message && (e.message.includes('clipboard') || e.message.includes('navigator'))) {
        console.warn('Ignored non-critical error:', e.message);
        e.preventDefault();
    }
}, true);

// Clipboard API safety wrapper
if (navigator && navigator.clipboard) {
    const originalClipboard = { ...navigator.clipboard };
    navigator.clipboard = new Proxy(navigator.clipboard, {
        get: function(target, prop) {
            try {
                return function(...args) {
                    try {
                        return target[prop].apply(target, args);
                    } catch (e) {
                        console.warn('Clipboard operation failed:', e.message);
                        return Promise.reject(e);
                    }
                };
            } catch (e) {
                return undefined;
            }
        }
    });
}

const translations = {
    ar: {
        nav_about: "من أنا",
        nav_skills: "المهارات",
        nav_work: "المشاريع",
        nav_blog: "المدونة",

        slogan_skills: '"كل أداة هي سلاح عندما تعرف كيف تستخدمها."',
        slogan_projects: '"بناء أدوات تكسر الأنظمة، لتجعلها أقوى."',
        slogan_experience: '"فكر كمهاجم، ودافع كحارس."',

        status_text: "النظام متصل // متاح للعمل",
        hero_headline: 'مهندس أمن سيبراني',
        hero_greeting: "أهلاً، أنا",
        hero_name: "محمود الشوربجي",
        hero_desc: "مهندس أمن سيبراني ومختبر اختراق. أعمل على محاكاة الهجمات السيبرانية المتقدمة لمساعدة الشركات على اكتشاف الثغرات وتأمين أنظمتها (Web, Mobile, AD).",
        btn_contact: "تواصل معي",
        btn_cv: "تحميل السيرة الذاتية",
        btn_blog: "المقالات",

        btn_blog: "المقالات",
        btn_verify: "تحقق من الشهادة",
        btn_personal_blog: "مدونتي الشخصية",
        btn_medium: "مقالات Medium",

        stat_certs: "شهادة معتمدة", stat_labs: "معمل تدريبي", stat_tools: "أداة مطورة", stat_passion: "التزام وشغف",
        stat_projects: "مشروع", stat_contribs: "مساهمة",

        mission_target: "الهدف:", mission_mission: "المهمة:", mission_rank: "الرتبة:",
        mission_t_val: "الويب، الجوال، واجهات برمجة التطبيقات",
        mission_m_val: "اختبار الاختراق (Penetration Testing)",
        mission_r_val: "مهندس أمن سيبراني",
        skills_title: "الترسانة التقنية",
        cert_header: ">> الشهادات", skills_header: ">> المهارات والأدوات",
        prof_header: "ملخص مهني",
        prof_summary: "مهندس أمن سيبراني حاصل على بكالوريوس في نظم وهندسة الحاسوب. متخصص في اختبار اختراق تطبيقات الويب وواجهات البرمجة وتطبيقات أندرويد، مع خبرة قوية في أتمتة Bash وتصميم واجهات برمجة تطبيقات آمنة. يركز على اكتشاف الثغرات يدوياً، واستغلالها، وإعداد تقارير فنية واضحة.",
        cap_header: "القدرات الأساسية",
        cap_1: "اختبار اختراق تطبيقات الويب (OWASP Top 10)",
        cap_2: "اختبار أمن واجهات البرمجة (REST، المصادقة، منطق الأعمال)",
        cap_3: "أمن تطبيقات الجوال (أندرويد)",
        cap_4: "أساسيات شبكات وأمن المصادقة",
        cap_5: "الاستغلال اليدوي وسلاسل الهجمات",
        cap_6: "تقييم الثغرات وإعداد التقارير الفنية",
        cap_7: "أتمتة لينكس وBash",
        cap_8: "البحث الأمني والتوثيق الفني",
        tools_header: "الأدوات والمنصات",
        experience_header: "الخبرة العملية ذات الصلة",
        exp_role: "متدرب — مسار الأمن الهجومي واختبار الاختراق",
        exp_org: "معهد تكنولوجيا المعلومات (ITI)، مدينة نصر، القاهرة — 07/2025 – 11/2025",
        exp_b1: "أجريت اختبارات اختراق Black-Box وGrey-Box على أكثر من 15 هدفًا معمليًا تحاكي تطبيقات بنكية وتجارية حقيقية.",
        exp_b2: "نفذت اختبارات يدوية وآلية ضد ثغرات OWASP Top 10.",
        exp_b3: "نفذت هجمات على الويب وواجهات البرمجة وActive Directory في بيئات مختبرية محكومة.",
        exp_b4: "طبقت منهجيات مثل PTES وOSSTMM أثناء التقييمات.",
        edu_header: "التعليم",
        edu_deg: "بكالوريوس نظم وهندسة الحاسوب — كلية الهندسة، جامعة الأزهر، القاهرة (سبتمبر 2019 – يوليو 2024)",
        edu_grade: "التقدير التراكمي: جيد جدًا",
        edu_project: "مشروع التخرج: نظام أتمتة IoT/ICS — نظام مزرعة دواجن ذكي — التقييم: ممتاز",
        train_header: "الدورات والتدريب",
        tr_1: "اختبار اختراق تطبيقات أندроид (Hextree)",
        tr_2: "إدارة لينكس Red Hat I & II",
        tr_3: "برمجة نصية بـ Bash",
        tr_4: "MCSA",
        tr_5: "CCNA",
        lang_header: "اللغات",
        lang_1: "العربية — اللغة الأم",
        lang_2: "الإنجليزية — مهارة مهنية عملية",
        military: "الخدمة العسكرية: منتهية",
        labs: "المنصات: PortSwigger Web Academy, TryHackMe, Hack The Box, CyberTalents",
        work_title: "أبرز الأعمال",
        proj_1_desc: "أداة متقدمة مبنية بلغة Bash لأتمتة عملية جمع المعلومات (Reconnaissance)، تشمل فحص النطاقات الفرعية والمنافذ.",
        proj_2_desc: "مقالات بحثية مفصلة تشرح ثغرات أمنية معقدة وطرق استغلال Active Directory.",
        proj_3_title: "Secure IoT/ICS System",
        proj_3_desc: "نظام أتمتة IoT/ICS آمن. تصميم نظام تحكم محلي مع اتصالات API آمنة لمنع الوصول غير المصرح به وضمان سلامة النظام.",
        contact_title: "بدء الاتصال"
    },
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_work: "Projects",
        nav_blog: "Blog",

        slogan_skills: '"Every tool is a weapon when you know how to wield it."',
        slogan_projects: '"Building tools that break systems, to make them stronger."',
        slogan_experience: '"Think like an attacker, defend like a guardian."',

        status_text: "System Online // Open to Work",
        hero_headline: 'SECURITY ENGINEER',
        hero_greeting: "Hello, I'm",
        hero_name: "Mahmoud Elshorbagy",
        hero_desc: "Penetration Tester & Security Engineer (falcon0x1). I simulate advanced cyber attacks to help organizations strengthen their defenses. Specialized in Web, Mobile, and Active Directory security.",
        btn_contact: "Contact Me",
        btn_cv: "Download CV",
        btn_blog: "Blog",

        btn_blog: "Blog",
        btn_verify: "Verify Certificate",
        btn_personal_blog: "Personal Blog",
        btn_medium: "Medium Articles",

        stat_certs: "Certifications", stat_labs: "Labs Pwned", stat_tools: "Tools Built", stat_passion: "Commitment",
        stat_projects: "Projects", stat_contribs: "Contribs",
        proj_3_title: "Secure IoT/ICS System",
        proj_3_desc: "Secure IoT/ICS Automation. Designed localized control system with secure API constraints to prevent unauthorized access.",

        mission_target: "TARGET:", mission_mission: "MISSION:", mission_rank: "RANK:",
        mission_t_val: "Web, Mobile, API",
        mission_m_val: "Penetration Testing",
        mission_r_val: "Security Engineer",
        skills_title: "Technical Arsenal",
        cert_header: ">> CERTIFICATIONS", skills_header: ">> SKILLS & TOOLS",
        prof_header: "Professional Summary",
        prof_summary: "Security Engineer with a B.Sc. in Systems & Computer Engineering. Specialized in Web, API and Android penetration testing, with strong Bash automation and secure API architecture experience. Focused on manual vulnerability discovery, exploitation, and clear technical reporting.",
        cap_header: "Core Capabilities",
        cap_1: "Web Application Penetration Testing (OWASP Top 10)",
        cap_2: "API Security Testing (REST, Authentication, Authorization, Business Logic)",
        cap_3: "Mobile Application Security (Android)",
        cap_4: "Network & Authentication Security Fundamentals",
        cap_5: "Manual Exploitation & Attack Chaining",
        cap_6: "Vulnerability Assessment & Technical Reporting",
        cap_7: "Linux & Bash Automation",
        cap_8: "Security Research & Technical Documentation",
        tools_header: "Tools & Platforms",
        experience_header: "Relevant Experience",
        exp_role: "Trainee — Offensive Security & Penetration Testing Track",
        exp_org: "Information Technology Institute (ITI), Nasr City, Cairo — 07/2025 – 11/2025",
        exp_b1: "Conducted Black-Box and Grey-Box penetration testing on 15+ lab targets mimicking real-world banking and e-commerce applications.",
        exp_b2: "Performed manual and automated testing against OWASP Top 10 vulnerabilities.",
        exp_b3: "Executed web, API, and Active Directory attacks in controlled lab environments.",
        exp_b4: "Applied PTES and OSSTMM methodologies during assessments.",
        edu_header: "Education",
        edu_deg: "Bachelor of Systems & Computer Engineering — Faculty of Engineering, Al-Azhar University, Cairo (Sep 2019 – Jul 2024)",
        edu_grade: "Cumulative Grade: Very Good",
        edu_project: "Graduation Project: IoT/ICS Automation System — Smart Poultry Farm Automation System — Grade: Excellent",
        train_header: "Training & Courses",
        tr_1: "Android Application Penetration Testing (Hextree)",
        tr_2: "Red Hat Linux Administration I & II",
        tr_3: "Bash Scripting",
        tr_4: "MCSA",
        tr_5: "CCNA",
        lang_header: "Languages",
        lang_1: "Arabic — Native",
        lang_2: "English — Professional Working Proficiency",
        military: "Military Service: Completed",
        labs: "Labs & Platforms: PortSwigger Web Academy, TryHackMe, Hack The Box, CyberTalents",
        work_title: "Projects",
        proj_1_desc: "Advanced Bash-based automation tool for reconnaissance. Streamlines subdomain enumeration, port scanning, and vulnerability discovery.",
        proj_2_desc: "Detailed security research articles covering IDOR, SQL Injection, and Active Directory exploitation techniques.",
        contact_title: "Initialize Connection"
    }
};

let currentLang = 'en';

// Typing Effect for Hero Section
// Typing Effect for Hero Section
const phrases = {
    en: [
        'Security Engineer',
        'Mobile Pentester',
        'eWPT Certified',
        'ITI Graduate',
        'Red Team Operator'
    ],
    ar: [
        'مهندس أمن سيبراني',
        'مختبر اختراق تطبيقات جوال',
        'معتمد eWPT',
        'خريج ITI',
        'مشغل فريق أحمر'
    ]
};

let typingPhrases = phrases.en;
let pIndex = 0, cIndex = 0, isDeleting = false;

// Hacker Decode Animation
const hackerDecode = (el) => {
    if (!el) return;
    const originalText = el.getAttribute('data-text') || el.innerText;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
    let iterations = 0;

    const interval = setInterval(() => {
        el.innerText = originalText
            .split("")
            .map((letter, index) => {
                if (index < iterations) return originalText[index];
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

        if (iterations >= originalText.length) {
            clearInterval(interval);
            el.innerHTML = originalText;
        }

        iterations += 1 / 3;
    }, 30);
}

function type(textEl) {
    if (!textEl) return;
    const phrase = typingPhrases[pIndex % typingPhrases.length];
    const currentSpeed = isDeleting ? 50 : 100;

    if (isDeleting) {
        textEl.textContent = phrase.substring(0, cIndex - 1);
        cIndex--;
    } else {
        textEl.textContent = phrase.substring(0, cIndex + 1);
        cIndex++;
    }

    if (!isDeleting && cIndex === phrase.length) {
        isDeleting = true;
        setTimeout(() => type(textEl), 2000);
    } else if (isDeleting && cIndex === 0) {
        isDeleting = false;
        pIndex++;
        setTimeout(() => type(textEl), 500);
    } else {
        setTimeout(() => type(textEl), currentSpeed);
    }
}

const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + (obj.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Scroll Reveal Animation Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // Check if target is a stat number itself
            if (entry.target.classList.contains('stat-number')) {
                const endValue = parseInt(entry.target.dataset.value, 10);
                animateValue(entry.target, 0, endValue, 1500);
                revealObserver.unobserve(entry.target);
            }
            // Check for nested stat numbers
            else {
                const nestedStats = entry.target.querySelectorAll('.stat-number');
                nestedStats.forEach(stat => {
                    const endValue = parseInt(stat.dataset.value, 10);
                    animateValue(stat, 0, endValue, 1500);
                });
            }
        }
    });
}, { threshold: 0.1 });

const initApp = () => {
    // Prevent Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Theme Switcher - Red Team (Offensive) / Blue Team (Defensive)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        const teamLabel = document.getElementById('team-label');
        const navLogo = document.getElementById('nav-logo');

        const applyTheme = (team) => {
            const isBlue = team === 'blue';
            if (isBlue) {
                body.classList.add('light-theme');
                body.classList.add('blue-team');
            } else {
                body.classList.remove('light-theme');
                body.classList.remove('blue-team');
            }

            // Update desktop toggle UI
            if (teamLabel) {
                teamLabel.textContent = isBlue ? 'BLUE' : 'RED';
            }
            // Update icon using SVG sprite
            const themeIconUse = themeToggle.querySelector('use');
            if (themeIconUse) {
                themeIconUse.setAttribute('href', isBlue ? '#icon-shield' : '#icon-skull');
            }

            // Update logo
            if (navLogo) {
                navLogo.src = isBlue ? 'img/logo-blue.webp' : 'img/logo-black.webp';
            }

            // Sync mobile toggle UI (if it exists)
            const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
            const mobileTeamLabel = document.getElementById('mobile-team-label');
            const mobileThemeIcon = mobileThemeToggle?.querySelector('i');

            if (mobileTeamLabel) {
                mobileTeamLabel.textContent = isBlue ? 'BLUE' : 'RED';
            }
            if (mobileThemeIcon) {
                if (isBlue) {
                    mobileThemeIcon.classList.remove('fa-skull-crossbones');
                    mobileThemeIcon.classList.add('fa-shield-alt');
                } else {
                    mobileThemeIcon.classList.remove('fa-shield-alt');
                    mobileThemeIcon.classList.add('fa-skull-crossbones');
                }
            }
        };

        // Check for saved theme
        const savedTheme = localStorage.getItem('team');
        applyTheme(savedTheme || 'red');

        themeToggle.addEventListener('click', () => {
            const isBlueTeam = body.classList.toggle('blue-team');
            body.classList.toggle('light-theme');
            const newTeam = isBlueTeam ? 'blue' : 'red';
            applyTheme(newTeam);
            localStorage.setItem('team', newTeam);
        });
    }

    const loader = document.getElementById('preloader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 500);
        }, 1200);
    }

    document.querySelectorAll('.skill-tag').forEach(tag => {
        if (!tag.className.includes('bg-')) {
            tag.className += ' px-3 py-1 bg-dark-bg border border-gray-700 rounded text-xs text-gray-300 hover:border-gray-500 hover:text-white hover:bg-gray-800 transition transform hover:scale-105 cursor-default';
        } else {
            tag.className += ' px-3 py-1 rounded text-xs transition transform hover:scale-105 cursor-default';
        }
    });

    // Init Scroll Reveal
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Initialize hero role typing animation
    const heroRoleEl = document.getElementById('hero-role');
    if (heroRoleEl) type(heroRoleEl);

    // Initial hacker decode effect on static hero text
    setTimeout(() => {
        document.querySelectorAll('.hero-headline, .hero-intro span, .hero-handle, .min-badge span').forEach(el => {
            if (el.children.length === 0 && el.textContent.trim().length > 0) {
                hackerDecode(el);
            }
        });
    }, 500);

    const textEl = document.getElementById('typing-text');
    if (textEl) type(textEl);

    const langBtn = document.getElementById('lang-btn');
    const nameEl = document.getElementById('hero-name');
    const glitchWrapper = document.querySelector('.glitch-wrapper');

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            const html = document.documentElement;
            html.setAttribute('lang', currentLang);
            html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            langBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';

            // Switch typing phrases
            typingPhrases = phrases[currentLang];
            pIndex = 0;
            cIndex = 0;
            isDeleting = false;

            if (translations[currentLang]['hero_name'] && nameEl) {
                nameEl.textContent = translations[currentLang]['hero_name'];
                nameEl.setAttribute('data-text', translations[currentLang]['hero_name']);

                if (currentLang === 'ar' && glitchWrapper) {
                    glitchWrapper.style.fontFamily = "'Cairo', sans-serif";
                } else if (glitchWrapper) {
                    glitchWrapper.style.fontFamily = "inherit";
                }
            }

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.innerHTML = translations[currentLang][key];
                    if (key === 'hero_headline') {
                        el.setAttribute('data-text', translations[currentLang][key]);
                        if (typeof hackerDecode === 'function') hackerDecode(el);
                    }
                }
            });
        });
    }

    // Dropdown Menu
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        if (dropdownContent) {
            dropdown.addEventListener('mouseenter', () => {
                dropdownContent.classList.remove('hidden');
            });
            dropdown.addEventListener('mouseleave', () => {
                dropdownContent.classList.add('hidden');
            });
        }
    });

    // Initialize Vanilla Tilt
    const tiltElements = document.querySelectorAll('.tilt');
    if (tiltElements.length > 0 && typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(tiltElements, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    }

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('matrix-open');
            // Toggle hamburger icon to X
            const useTag = mobileMenuBtn.querySelector('use');
            if (useTag) {
                useTag.setAttribute('href', isOpen ? '#icon-times' : '#icon-bars');
            }
        });

        // Close mobile menu when clicking on a link
        mobileMenu.querySelectorAll('a.menu-item').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('matrix-open');
                const useTag = mobileMenuBtn.querySelector('use');
                if (useTag) {
                    useTag.setAttribute('href', '#icon-bars');
                }
            });
        });
    }

    // Mobile Theme Toggle
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    if (mobileThemeToggle) {
        const mobileThemeIcon = mobileThemeToggle.querySelector('i');
        const mobileTeamLabel = document.getElementById('mobile-team-label');
        const navLogo = document.getElementById('nav-logo');

        // Sync mobile toggle state on load
        if (body.classList.contains('blue-team')) {
            if (mobileThemeIcon) {
                mobileThemeIcon.classList.remove('fa-skull-crossbones');
                mobileThemeIcon.classList.add('fa-shield-alt');
            }
            if (mobileTeamLabel) {
                mobileTeamLabel.textContent = 'BLUE';
            }
        }

        mobileThemeToggle.addEventListener('click', () => {
            const isBlueTeam = body.classList.toggle('blue-team');
            body.classList.toggle('light-theme');
            const newTeam = isBlueTeam ? 'blue' : 'red';
            localStorage.setItem('team', newTeam);

            // Update mobile toggle UI
            if (mobileThemeIcon) {
                if (isBlueTeam) {
                    mobileThemeIcon.classList.remove('fa-skull-crossbones');
                    mobileThemeIcon.classList.add('fa-shield-alt');
                } else {
                    mobileThemeIcon.classList.remove('fa-shield-alt');
                    mobileThemeIcon.classList.add('fa-skull-crossbones');
                }
            }
            if (mobileTeamLabel) {
                mobileTeamLabel.textContent = isBlueTeam ? 'BLUE' : 'RED';
            }

            // Sync desktop toggle UI
            const desktopThemeIcon = themeToggle?.querySelector('i');
            const desktopTeamLabel = document.getElementById('team-label');
            if (desktopThemeIcon) {
                if (isBlueTeam) {
                    desktopThemeIcon.classList.remove('fa-skull-crossbones');
                    desktopThemeIcon.classList.add('fa-shield-alt');
                } else {
                    desktopThemeIcon.classList.remove('fa-shield-alt');
                    desktopThemeIcon.classList.add('fa-skull-crossbones');
                }
            }
            if (desktopTeamLabel) {
                desktopTeamLabel.textContent = isBlueTeam ? 'BLUE' : 'RED';
            }

            // Update logo
            if (navLogo) {
                navLogo.src = isBlueTeam ? 'img/logo-blue.webp' : 'img/logo-black.webp';
            }
        });
    }

    // Mobile Language Toggle
    const mobileLangBtn = document.getElementById('mobile-lang-btn');
    if (mobileLangBtn) {
        // Sync mobile lang button state on load
        mobileLangBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';

        mobileLangBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            const html = document.documentElement;
            html.setAttribute('lang', currentLang);
            html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

            // Update both mobile and desktop buttons
            mobileLangBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';
            if (langBtn) {
                langBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';
            }

            // Switch typing phrases
            typingPhrases = phrases[currentLang];
            pIndex = 0;
            cIndex = 0;
            isDeleting = false;

            if (translations[currentLang]['hero_name'] && nameEl) {
                nameEl.textContent = translations[currentLang]['hero_name'];
                nameEl.setAttribute('data-text', translations[currentLang]['hero_name']);

                if (currentLang === 'ar' && glitchWrapper) {
                    glitchWrapper.style.fontFamily = "'Cairo', sans-serif";
                } else if (glitchWrapper) {
                    glitchWrapper.style.fontFamily = "inherit";
                }
            }

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.innerHTML = translations[currentLang][key];
                    if (key === 'hero_headline') {
                        el.setAttribute('data-text', translations[currentLang][key]);
                        if (typeof hackerDecode === 'function') hackerDecode(el);
                    }
                }
            });
        });
    }

    // Project Category Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterBtns.length > 0 && projectItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active from all
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active to clicked
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectItems.forEach(item => {
                    // Reset animation safely
                    item.style.animation = 'none';
                    item.offsetHeight; // trigger reflow

                    if (filterValue === 'all') {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.5s ease forwards';
                    } else {
                        const categories = item.getAttribute('data-category');
                        if (categories && categories.includes(filterValue)) {
                            item.style.display = 'block';
                            item.style.animation = 'fadeInUp 0.5s ease forwards';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });
    }

    // Strict Modal Closing Logic to Fix Freezing
    const modals = document.querySelectorAll('.cyber-modal');
    modals.forEach(modal => {
        // When clicking the close button explicitly
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.close();
            });
        }

        // When clicking outside the modal content (on the backdrop)
        modal.addEventListener('click', (e) => {
            const rect = modal.getBoundingClientRect();
            const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                modal.close();
            }
        });
    });

    // Ambient Mouse Spotlight
    const spotlight = document.querySelector('.ambient-spotlight');
    const heroSection = document.getElementById('about');

    if (spotlight && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            spotlight.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
            spotlight.classList.add('active');
        });

        heroSection.addEventListener('mouseleave', () => {
            spotlight.classList.remove('active');
        });
    }

    // Phase 3 Enhancements: Smart Scroll, Scroll-Spy, Micro-Scrollbar
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    const sections = document.querySelectorAll('section, header');
    const navLinksList = document.querySelectorAll('.nav-link');

    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

                // 1. Micro-Scrollbar update
                if (scrollProgress && scrollHeight > 0) {
                    const scrollPercent = currentScrollY / scrollHeight;
                    scrollProgress.style.transform = `scaleX(${scrollPercent})`;
                }

                // 2. Persistent Glass Navbar (Removed Headroom logic per request)
                // The navbar will remain visible while scrolling.

                // 3. Scroll-Spy
                let currentSectionId = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (currentScrollY >= (sectionTop - sectionHeight / 3)) {
                        currentSectionId = section.getAttribute('id');
                    }
                });

                if (currentSectionId) {
                    navLinksList.forEach(link => {
                        link.classList.remove('active-link');
                        if (link.getAttribute('href') === `#${currentSectionId}`) {
                            link.classList.add('active-link');
                        }
                    });
                } else if (currentScrollY < 200) {
                    // Clear active if at extreme top
                    navLinksList.forEach(link => link.classList.remove('active-link'));
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Animate skill progress bars on scroll
    const skillContainers = document.querySelectorAll('.cyber-badge-wrapper');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                if (progressBar) {
                    const width = progressBar.getAttribute('data-width');
                    progressBar.style.width = width;
                }
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillContainers.forEach(container => progressObserver.observe(container));

    // Animate skill ring progress on scroll
    const skillCards = document.querySelectorAll('.skill-card');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    // Initialize Terminal Logic
    const terminalInput = document.getElementById('terminal-input');
    const terminalBody = document.getElementById('terminal-body');

    if (terminalInput && terminalBody) {
        const FALCON_ASCII = `
   __      _                  ___      _
                        / _ | __ _ | | __ ___ _ _ / _ \\_  _ / |
 | _ / _' | / _/ _ \\ ' \\    | (_) \\ \\/ / |
 | _ | \\__, _ | _\\__\\___ / _ || _ |    \\___ / /_/ | _ |
                        `;

        const RED_BANNER = `
<div class="mb-2 text-accent font-mono text-[6px] sm:text-[8px] leading-tight whitespace-pre overflow-x-auto">
${FALCON_ASCII}
</div>
<div class="text-red-500 font-bold mb-4">𓅈 AGGRESSIVE MODE 𓅂</div>
`;

        const BLUE_BANNER = `
<div class="mb-2 text-blue-400 font-mono text-[6px] sm:text-[8px] leading-tight whitespace-pre overflow-x-auto">
${FALCON_ASCII}
</div>
<div class="text-blue-300 font-bold mb-4">𖤍 DEFENSIVE MODE 🐦‍🔥</div>
`;

        const COMMANDS = {
            help: () => {
                const isAr = document.documentElement.lang === 'ar';
                return isAr ? "الأوامر المتاحة: <span class='text-accent'>whoami, skills, projects, contact, update, clear, banner</span>"
                    : "Available commands: <span class='text-accent'>whoami, skills, projects, contact, update, clear, banner</span>";
            },
            whoami: () => {
                const isAr = document.documentElement.lang === 'ar';
                return isAr ? "falcon0x1 (محمود الشوربجي) - مهندس أمن سيبراني ومختبر اختراق."
                    : "falcon0x1 (Mahmoud Elshorbagy) - Security Engineer & Penetration Tester.";
            },
            skills: () => {
                return `<div class="text-accent mb-1">[+] Initializing Arsenal Scan...</div>
<div class="text-gray-400 font-mono">
├── <span class="text-white font-bold">Web & API</span> : Burp Suite Pro, GraphQL, Postman, sqlmap<br>
├── <span class="text-white font-bold">Mobile   </span> : Frida, MobSF, Objection, apktool<br>
├── <span class="text-white font-bold">Network  </span> : Nmap, Metasploit, Wireshark, Active Directory<br>
└── <span class="text-white font-bold">Scripting</span> : Python, Bash, C++, Linux OS
</div>`;
            },
            projects: "FalconRecon, Technical Writeups.",
            contact: "LinkedIn, GitHub, Email.",
            update: () => {
                const date = new Date().toLocaleDateString();
                const isAr = document.documentElement.lang === 'ar';
                if (isAr) {
                    return `<div class="text-gray-300">جاري البحث عن تحديثات...</div>
                        <div class="text-green-500">النظام محدث.</div>
                        <div class="text-gray-500">آخر تحديث: ${date} // تمت إضافة أداتين</div>`;
                }
                return `<div>Fetching latest intel...</div>
                        <div class="text-green-500">System up to date.</div>
                        <div class="text-gray-500">Last updated: ${date} // 2 New Tools Added</div>`;
            },
            banner: () => {
                const isBlue = document.body.classList.contains('blue-team');
                return isBlue ? BLUE_BANNER : RED_BANNER;
            },
            clear: () => {
                terminalBody.innerHTML = '';
                return '';
            }
        };

        const print = (text, isCommand = false) => {
            if (!text) return;
            const line = document.createElement('div');
            line.className = 'terminal-line mb-1';
            if (isCommand) {
                line.innerHTML = `<span class="terminal-prompt">falcon0x1@portfolio: ~$</span> ${text}`;
            } else {
                line.innerHTML = text;
            }
            terminalBody.insertBefore(line, terminalInput.parentElement);
            terminalBody.scrollTop = terminalBody.scrollHeight;
        };

        // Initial Banner
        const initBanner = document.createElement('div');
        initBanner.className = 'terminal-banner mb-4';
        initBanner.innerHTML = document.body.classList.contains('blue-team') ? BLUE_BANNER : RED_BANNER;
        terminalBody.insertBefore(initBanner, terminalBody.firstChild);

        // Ensure Logo is synced with Theme on Load (Default: Black)
        const navLogo = document.getElementById('nav-logo');
        if (navLogo) {
            navLogo.src = document.body.classList.contains('blue-team') ? 'img/logo-blue.webp' : 'img/logo-black.webp';
        }

        // Auto-dissolve banner (User Request: "printed once and then disapeer")
        setTimeout(() => {
            if (initBanner && terminalBody.contains(initBanner)) {
                initBanner.style.transition = 'opacity 1s ease';
                initBanner.style.opacity = '0';
                setTimeout(() => {
                    if (initBanner && terminalBody.contains(initBanner)) {
                        initBanner.remove();
                    }
                }, 1000);
            }
        }, 3000);

        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const input = terminalInput.value.trim();
                if (input) {
                    print(input, true);
                    const cmd = input.toLowerCase();
                    if (COMMANDS[cmd]) {
                        const output = typeof COMMANDS[cmd] === 'function' ? COMMANDS[cmd]() : COMMANDS[cmd];
                        if (cmd !== 'clear') print(output);
                    } else if (cmd === 'clear') {
                        COMMANDS.clear();
                    } else {
                        print(`< span class="text-red-500" > Command not found: ${cmd}</span > `);
                    }
                }
                terminalInput.value = '';
            }
        });

        // Update Banner on Theme Toggle
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const isBlue = document.body.classList.contains('blue-team');
                // Clear and show new banner
                // terminalBody.innerHTML = ''; // Optional: keep history or clear
                // print(isBlue ? BLUE_BANNER : RED_BANNER);

                // Better: Update the *existing* banner if it's visible, or print new one
                const existingBanner = terminalBody.querySelector('.terminal-banner');
                if (existingBanner) {
                    existingBanner.innerHTML = isBlue ? BLUE_BANNER : RED_BANNER;
                }

                // Update Logo (Black vs Blue)
                const navLogo = document.getElementById('nav-logo');
                if (navLogo) {
                    navLogo.src = isBlue ? 'img/logo-blue.webp' : 'img/logo-black.webp';
                }
            });
        }
    }

    skillCards.forEach(card => skillObserver.observe(card));

    // Deferred Matrix Loading - Only load when Terminal is visible
    /*
    const loadMatrixOnVisible = () => {
        const terminal = document.getElementById('terminal');
        if (!terminal || window.matrixLoaded) return;
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !window.matrixLoaded) {
                    const script = document.createElement('script');
                    script.src = 'js/matrix.js';
                    script.defer = true;
                    document.head.appendChild(script);
                    window.matrixLoaded = true;
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });
    
        observer.observe(terminal);
    };
    
    // Initialize deferred Matrix loading
    loadMatrixOnVisible();
    */

    // Magnetic Button Effect
    const magneticButtons = document.querySelectorAll('.btn-massive, .btn-primary');
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Limit max offset
            const maxOffset = 15;
            const dx = Math.max(Math.min(x * 0.3, maxOffset), -maxOffset);
            const dy = Math.max(Math.min(y * 0.3, maxOffset), -maxOffset);

            btn.style.transform = `translate(${dx}px, ${dy}px) scale(1.05)`;
            // Remove transition during hover to allow instant tracking
            btn.style.transition = 'transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });

        btn.addEventListener('mouseleave', () => {
            // Restore smooth spring animation
            btn.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            btn.style.transform = 'translate(0px, 0px) scale(1)';

            setTimeout(() => {
                // Clear the style attribute fully to prevent conflicts with other states
                btn.style.transform = '';
                btn.style.transition = '';
            }, 500);
        });
    });

    // Initial Headline Animation
    const headline = document.querySelector('.hero-headline');
    if (headline && typeof hackerDecode === 'function') hackerDecode(headline);
};

// Mobile Accordion - Encrypted Logs
function initAccordion() {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    const expHeaders = document.querySelectorAll('.exp-header');
    expHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const card = this.closest('.experience-card');
            const toggle = this.querySelector('.exp-toggle');
            
            // Toggle current card
            card.classList.toggle('is-open');
            
            // Update toggle text
            if (card.classList.contains('is-open')) {
                toggle.textContent = '[ - ]';
            } else {
                toggle.textContent = '[ + ]';
            }
        });
    });
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initApp();
    initAccordion();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        initApp();
        initAccordion();
    });
}
