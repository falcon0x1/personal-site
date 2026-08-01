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
        exp_org: "معهد تكنولوجيا المعلومات (ITI)، مدينة نصر، القاهرة — 07/2024 – 11/2024",
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
        exp_org: "Information Technology Institute (ITI), Nasr City, Cairo — 07/2024 – 11/2024",
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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.innerText = originalText;
        return;
    }
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
    const currentSpeed = isDeleting ? 60 : 130;

    if (isDeleting) {
        textEl.textContent = phrase.substring(0, cIndex - 1);
        cIndex--;
    } else {
        textEl.textContent = phrase.substring(0, cIndex + 1);
        cIndex++;
    }

    if (!isDeleting && cIndex === phrase.length) {
        isDeleting = true;
        setTimeout(() => type(textEl), 2200);
    } else if (isDeleting && cIndex === 0) {
        isDeleting = false;
        pIndex++;
        setTimeout(() => type(textEl), 600);
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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Theme Switcher - Red Team (Offensive) / Blue Team (Defensive)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
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

            if (mobileTeamLabel) {
                mobileTeamLabel.textContent = isBlue ? 'BLUE' : 'RED';
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

    // Init Scroll Reveal
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Initialize hero role typing animation
    const heroRoleEl = document.getElementById('typing-text');
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
    if (tiltElements.length > 0 && typeof VanillaTilt !== 'undefined' && !prefersReducedMotion && !isTouchDevice) {
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
        const mobileTeamLabel = document.getElementById('mobile-team-label');
        const navLogo = document.getElementById('nav-logo');

        // Sync mobile toggle state on load
        if (body.classList.contains('blue-team')) {
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
            if (mobileTeamLabel) {
                mobileTeamLabel.textContent = isBlueTeam ? 'BLUE' : 'RED';
            }

            // Sync desktop toggle UI
            const desktopTeamLabel = document.getElementById('team-label');
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

    // Modal Opening Logic
    document.querySelectorAll('[data-modal-target]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.getElementById(btn.dataset.modalTarget);
            if (modal) modal.showModal();
        });
    });

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
        // Global Terminal State
        let commandHistory = [];
        let historyIndex = -1;
        let isTyping = false;
        let matrixActive = false;
        let matrixTimeout = null;

        // ASCII Art
        const ASCII_FALCON = `
   ╔══════════════════════════════════════════╗
   ║     ██╗  ██╗ ██████╗ ██╗  ██╗ ██╗       ║
   ║     ██║  ██║██╔═══██╗╚██╗██╔╝███║       ║
   ║     ██║  ██║██║   ██║ ╚███╔╝ ╚██║       ║
   ║     ██║  ██║██║   ██║ ██╔██╗  ██║       ║
   ║     ╚██████╔╝╚██████╔╝██╔╝ ██╗██║       ║
   ║      ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝       ║
   ║     Mahmoud Elshorbagy | 0x1             ║
   ╚══════════════════════════════════════════╝`;

        const NEOFETCH = `
  mahmoud@arch
  ─────────────
  OS: Arch Linux x86_64
  Host: CyberSec Workstation
  Kernel: 6.x-arch1-1
  Uptime: 24/7 hunting
  Shell: zsh 5.9
  DE: Hyprland
  Terminal: kitty
  CPU: Intel i7 @ 4.2GHz
  Memory: 32GB DDR5
  GPU: RTX 4060
  Disk: 1TB NVMe
  Tools: Burp Suite, Frida, Nmap
  Focus: Web/API/Mobile Security`;

        const WELCOME_MESSAGE = [
            { text: '╔═════════════════════════════════════════════╗', type: 'blood' },
            { text: '║  FALCON TERMINAL v3.1.4 — M. Elshorbagy    ║', type: 'blood' },
            { text: '║  Cyber Security Engineer | eWPT Certified   ║', type: 'blood' },
            { text: '╚═════════════════════════════════════════════╝', type: 'blood' },
            { text: '', type: 'output' },
            { text: '  System initialized. Type "help" for commands.', type: 'success' },
            { text: '  Type "hack" for a surprise 😈', type: 'info' },
            { text: '', type: 'output' },
        ];

        const AVAILABLE_COMMANDS = [
            'help', 'whoami', 'skills', 'projects', 'certs', 'contact', 'social',
            'neofetch', 'clear', 'ls', 'cat', 'nmap', 'hack', 'matrix',
            'history', 'uname', 'pwd', 'date', 'echo', 'sudo',
            'ping', 'whois', 'fortune', 'cowsay', 'exit', 'recon', 'scan',
            'id', 'hostname', 'uptime', 'ifconfig', 'ip', 'update', 'banner'
        ];

        const MAX_OUTPUT_LINES = 500;

        // Color mapping based on terminal theme
        const getLineColor = (type) => {
            switch (type) {
                case 'input': return 'text-green-400';
                case 'error': return 'text-red-400';
                case 'success': return 'text-green-400';
                case 'info': return 'text-blue-400';
                case 'warning': return 'text-yellow-400';
                case 'blood': return 'text-accent';
                case 'forensic': return 'text-blue-500';
                case 'ascii': return 'text-accent';
                case 'system': return 'text-purple-400';
                default: return 'text-gray-300';
            }
        };

        // Helper: Add output lines immediately
        const addOutput = (lines) => {
            lines.forEach(line => {
                const div = document.createElement('div');
                div.className = `terminal-line mb-1 ${getLineColor(line.type)}`;
                div.textContent = line.text || '\u00A0';
                terminalBody.insertBefore(div, terminalInput.parentElement);
            });
            terminalBody.scrollTop = terminalBody.scrollHeight;
        };

        // Helper: Type output with delay (async)
        const typeOutput = async (lines, speed = 20) => {
            isTyping = true;
            terminalInput.disabled = true;
            for (const line of lines) {
                await new Promise(resolve => setTimeout(resolve, speed));
                const div = document.createElement('div');
                div.className = `terminal-line mb-1 ${getLineColor(line.type)}`;
                div.textContent = line.text || '\u00A0';
                terminalBody.insertBefore(div, terminalInput.parentElement);
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
            isTyping = false;
            terminalInput.disabled = false;
            terminalInput.focus();
        };

        // Helper: Trim output to prevent unbounded growth
        const trimOutput = () => {
            const lines = terminalBody.querySelectorAll('.terminal-line');
            if (lines.length > MAX_OUTPUT_LINES) {
                for (let i = 0; i < lines.length - MAX_OUTPUT_LINES; i++) {
                    lines[i].remove();
                }
            }
        };

        // Helper: Print command input line
        const printInput = (cmd) => {
            const div = document.createElement('div');
            div.className = 'terminal-line mb-1';
            div.innerHTML = `<span class="text-green-400">┌──(mahmoud㉿arch)-[~/portfolio]</span>`;
            terminalBody.insertBefore(div, terminalInput.parentElement);
            
            const div2 = document.createElement('div');
            div2.className = 'terminal-line mb-1';
            div2.innerHTML = `<span class="text-green-400">└─$</span> ${cmd}`;
            terminalBody.insertBefore(div2, terminalInput.parentElement);
            terminalBody.scrollTop = terminalBody.scrollHeight;
        };

        // Matrix Rain Effect
        const startMatrix = () => {
            if (matrixActive) return;
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            matrixActive = true;
            
            const canvas = document.createElement('canvas');
            canvas.className = 'matrix-canvas';
            canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;z-index:10;pointer-events:none;opacity:0.4;';
            
            const terminalContainer = terminalBody.parentElement;
            terminalContainer.style.position = 'relative';
            terminalContainer.appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            
            const updateSize = () => {
                canvas.width = terminalContainer.offsetWidth;
                canvas.height = terminalContainer.offsetHeight;
            };
            updateSize();

            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
            const fontSize = 14;
            const columns = Math.floor(canvas.width / fontSize) || 1;
            const drops = new Array(columns).fill(1);

            let lastTime = 0;

            const draw = (time) => {
                if (!matrixActive) {
                    canvas.remove();
                    return;
                }
                if (time - lastTime < 50) {
                    requestAnimationFrame(draw);
                    return;
                }
                lastTime = time;

                ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.font = `${fontSize}px monospace`;

                for (let i = 0; i < drops.length; i++) {
                    const char = chars[Math.floor(Math.random() * chars.length)];
                    const rand = Math.random();
                    ctx.fillStyle = rand > 0.95 ? '#ffffff' : rand > 0.5 ? '#B91C1C' : '#1E3A8A';
                    ctx.fillText(char, i * fontSize, drops[i] * fontSize);
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                    drops[i]++;
                }
                requestAnimationFrame(draw);
            };

            requestAnimationFrame(draw);

            addOutput([
                { text: '  🟢 Entering the Matrix...', type: 'success' },
                { text: '  Click terminal or press Esc to exit.', type: 'info' },
                { text: '', type: 'output' },
            ]);

            // Auto-stop after 10s
            if (matrixTimeout) clearTimeout(matrixTimeout);
            matrixTimeout = setTimeout(() => {
                matrixActive = false;
                canvas.remove();
            }, 10000);
        };

        const stopMatrix = () => {
            matrixActive = false;
            if (matrixTimeout) clearTimeout(matrixTimeout);
            const canvas = terminalBody.parentElement.querySelector('.matrix-canvas');
            if (canvas) canvas.remove();
        };

        // Fortune quotes
        const fortunes = [
            '"The quieter you become, the more you can hear." — Kali Linux',
            '"There are only two types of companies: those that have been hacked, and those that will be." — Robert Mueller',
            '"The only truly secure system is one that is powered off." — Gene Spafford',
            '"I use Arch btw." — Every Arch User Ever',
            '"Hack the planet!" — Hackers (1995)',
            '"Security is a process, not a product." — Bruce Schneier',
        ];

        // Command Processor
        const processCommand = async (cmd) => {
            const trimmed = cmd.trim().toLowerCase();
            const parts = trimmed.split(/\s+/);
            const command = parts[0];
            const args = parts.slice(1);

            if (!command) return;

            // Add to history
            commandHistory.push(cmd);
            historyIndex = -1;
            trimOutput();
            printInput(cmd);

            switch (command) {
                case 'help': {
                    await typeOutput([
                        { text: '', type: 'output' },
                        { text: '  ╔═══════════════════════════════════╗', type: 'forensic' },
                        { text: '  ║      AVAILABLE COMMANDS           ║', type: 'forensic' },
                        { text: '  ╠═══════════════════════════════════╣', type: 'forensic' },
                        { text: '  ║  📋 INFO                          ║', type: 'forensic' },
                        { text: '  ║  whoami    → Identity              ║', type: 'output' },
                        { text: '  ║  skills    → Technical arsenal     ║', type: 'output' },
                        { text: '  ║  projects  → Security tools        ║', type: 'output' },
                        { text: '  ║  certs     → Certifications        ║', type: 'output' },
                        { text: '  ║  contact   → Get in touch          ║', type: 'output' },
                        { text: '  ║  social    → Social links          ║', type: 'output' },
                        { text: '  ║  neofetch  → System info           ║', type: 'output' },
                        { text: '  ║                                   ║', type: 'forensic' },
                        { text: '  ║  🛠️  SYSTEM                        ║', type: 'forensic' },
                        { text: '  ║  ls        → List files            ║', type: 'output' },
                        { text: '  ║  cat <f>   → Read file             ║', type: 'output' },
                        { text: '  ║  pwd/uname → System info           ║', type: 'output' },
                        { text: '  ║  clear     → Clear terminal        ║', type: 'output' },
                        { text: '  ║                                   ║', type: 'forensic' },
                        { text: '  ║  🔥 FUN & HACKING                 ║', type: 'forensic' },
                        { text: '  ║  hack      → Attack simulation     ║', type: 'output' },
                        { text: '  ║  matrix    → Enter the Matrix      ║', type: 'output' },
                        { text: '  ║  nmap <h>  → Port scan sim         ║', type: 'output' },
                        { text: '  ║  recon <d> → Recon simulation      ║', type: 'output' },
                        { text: '  ║  scan      → Vuln scan sim         ║', type: 'output' },
                        { text: '  ║  fortune   → Hacker quote          ║', type: 'output' },
                        { text: '  ║  cowsay    → ASCII cow             ║', type: 'output' },
                        { text: '  ║  sudo      → Try it ;)             ║', type: 'output' },
                        { text: '  ╚═══════════════════════════════════╝', type: 'forensic' },
                        { text: '', type: 'output' },
                        { text: '  💡 ↑/↓ for history, Tab to complete', type: 'info' },
                        { text: '', type: 'output' },
                    ], 12);
                    break;
                }

                case 'whoami': {
                    await typeOutput([
                        { text: '', type: 'output' },
                        ...ASCII_FALCON.split('\n').map(line => ({ text: line, type: 'blood' })),
                        { text: '', type: 'output' },
                        { text: '  ┌─ IDENTITY ──────────────────────────', type: 'success' },
                        { text: '  │', type: 'success' },
                        { text: '  │  Name      : Mahmoud M. Elshorbagy', type: 'output' },
                        { text: '  │  Codename  : 0x1', type: 'output' },
                        { text: '  │  Title     : Cyber Security Engineer', type: 'output' },
                        { text: '  │  Cert      : eWPT Certified', type: 'blood' },
                        { text: '  │  Education : B.Sc. CS & Systems Eng', type: 'output' },
                        { text: '  │  University: Al-Azhar University', type: 'output' },
                        { text: '  │  Grade     : Very Good', type: 'success' },
                        { text: '  │  Grad Proj : IoT/ICS (Excellent)', type: 'success' },
                        { text: '  │  Location  : Cairo, Egypt 🇪🇬', type: 'output' },
                        { text: '  │  Military  : ✅ Completed', type: 'success' },
                        { text: '  │  OS        : Arch Linux (btw)', type: 'forensic' },
                        { text: '  │  Focus     : Web | API | Mobile', type: 'blood' },
                        { text: '  │  Training  : ITI Offensive Security', type: 'output' },
                        { text: '  │', type: 'success' },
                        { text: '  └────────────────────────────────────', type: 'success' },
                        { text: '', type: 'output' },
                    ], 25);
                    break;
                }

                case 'skills': {
                    await typeOutput([
                        { text: '', type: 'output' },
                        { text: '  🌐 WEB & API SECURITY', type: 'success' },
                        { text: '  ├── Burp Suite Pro ████████████████░ 95%', type: 'output' },
                        { text: '  ├── OWASP ZAP     ██████████████░░░ 85%', type: 'output' },
                        { text: '  ├── sqlmap        █████████████████ 90%', type: 'output' },
                        { text: '  ├── Postman       ██████████████░░░ 88%', type: 'output' },
                        { text: '  ├── GraphQL       ████████████░░░░░ 80%', type: 'output' },
                        { text: '  └── JWT Analysis  ██████████████░░░ 85%', type: 'output' },
                        { text: '', type: 'output' },
                        { text: '  📱 MOBILE & NETWORK', type: 'success' },
                        { text: '  ├── Frida         ██████████████░░░ 85%', type: 'output' },
                        { text: '  ├── JADX          █████████████░░░░ 82%', type: 'output' },
                        { text: '  ├── Nmap          █████████████████ 90%', type: 'output' },
                        { text: '  ├── Metasploit    █████████████░░░░ 82%', type: 'output' },
                        { text: '  └── Wireshark     ██████████████░░░ 85%', type: 'output' },
                        { text: '', type: 'output' },
                        { text: '  💻 PROGRAMMING & OS', type: 'success' },
                        { text: '  ├── Python        █████████████████ 90%', type: 'output' },
                        { text: '  ├── Bash          ██████████████░░░ 88%', type: 'output' },
                        { text: '  ├── JavaScript    ████████████░░░░░ 72%', type: 'output' },
                        { text: '  └── Arch Linux    █████████████████ 92%', type: 'forensic' },
                        { text: '', type: 'output' },
                    ], 15);
                    break;
                }

                case 'projects': {
                    await typeOutput([
                        { text: '', type: 'output' },
                        { text: '  ┌─ CASE #001 ──────────────────────', type: 'success' },
                        { text: '  │ 📁 FalconRecon — Recon Framework', type: 'blood' },
                        { text: '  │ Status: ACTIVE | Lang: Bash', type: 'warning' },
                        { text: '  │ Automated recon pipeline', type: 'output' },
                        { text: '  └──────────────────────────────────', type: 'success' },
                        { text: '', type: 'output' },
                        { text: '  ┌─ CASE #002 ──────────────────────', type: 'success' },
                        { text: '  │ 📁 FalconDelta — APK Diffing', type: 'blood' },
                        { text: '  │ Status: ACTIVE | Lang: Python', type: 'warning' },
                        { text: '  │ Compare APK versions', type: 'output' },
                        { text: '  └──────────────────────────────────', type: 'success' },
                        { text: '', type: 'output' },
                        { text: '  ┌─ CASE #003 ──────────────────────', type: 'success' },
                        { text: '  │ 📁 FalconServiceAnalyzer', type: 'blood' },
                        { text: '  │ Status: ACTIVE | Lang: Python', type: 'warning' },
                        { text: '  │ Android attack surface tool', type: 'output' },
                        { text: '  └──────────────────────────────────', type: 'success' },
                        { text: '', type: 'output' },
                        { text: '  ┌─ CASE #004 ──────────────────────', type: 'success' },
                        { text: '  │ 📁 ZeroTrust — Privacy Dashboard', type: 'blood' },
                        { text: '  │ Status: DONE | Lang: Flutter', type: 'success' },
                        { text: '  │ Breach check via k-anonymity', type: 'output' },
                        { text: '  └──────────────────────────────────', type: 'success' },
                        { text: '', type: 'output' },
                    ], 15);
                    break;
                }

                case 'certs': {
                    await typeOutput([
                        { text: '', type: 'output' },
                        { text: '  🏆 CERTIFICATIONS', type: 'blood' },
                        { text: '  ═══════════════════════════════════', type: 'blood' },
                        { text: '', type: 'output' },
                        { text: '  ★ eWPT — Web App PT  ✅ VERIFIED', type: 'warning' },
                        { text: '  ★ CyberTalents Web PT ✅', type: 'forensic' },
                        { text: '  ★ CyberTalents Mobile PT ✅', type: 'forensic' },
                        { text: '  ★ CyberTalents AD PT ✅', type: 'forensic' },
                        { text: '  ★ Hextree Android PT ✅', type: 'forensic' },
                        { text: '  ★ APIsec API PT ✅', type: 'forensic' },
                        { text: '', type: 'output' },
                    ], 25);
                    break;
                }

                case 'contact': {
                    await typeOutput([
                        { text: '', type: 'output' },
                        { text: '  📡 CONTACT', type: 'blood' },
                        { text: '  ═══════════════════════════════════', type: 'blood' },
                        { text: '  📧 mahmoud.elshorbagy0x1@gmail.com', type: 'output' },
                        { text: '  📱 +20 155 668 8657', type: 'output' },
                        { text: '  📍 Cairo, Egypt', type: 'output' },
                        { text: '  🟢 Available for engagement', type: 'success' },
                        { text: '', type: 'output' },
                    ], 30);
                    break;
                }

                case 'social': {
                    await typeOutput([
                        { text: '', type: 'output' },
                        { text: '  🌐 SOCIAL PROFILES', type: 'blood' },
                        { text: '  [1] 💼 LinkedIn', type: 'forensic' },
                        { text: '  [2] 🐙 GitHub', type: 'info' },
                        { text: '  [3] 📝 Medium — Writeups', type: 'success' },
                        { text: '      └── SSL Pinning bypass', type: 'output' },
                        { text: '      └── Advanced SQLi', type: 'output' },
                        { text: '', type: 'output' },
                    ], 30);
                    break;
                }

                case 'neofetch': {
                    await typeOutput(
                        NEOFETCH.split('\n').map(line => ({ text: line, type: 'output' })),
                        20
                    );
                    addOutput([{ text: '', type: 'output' }]);
                    break;
                }

                case 'clear': {
                    terminalBody.innerHTML = '';
                    break;
                }

                case 'ls': {
                    const isLong = args[0] === '-la' || args[0] === '-l' || args[0] === '-al';
                    if (isLong) {
                        await typeOutput([
                            { text: '  drwxr-xr-x  mahmoud  4096  resume.txt', type: 'success' },
                            { text: '  -rw-r--r--  mahmoud  1024  skills.json', type: 'success' },
                            { text: '  -rwx------  mahmoud  4096  exploits/', type: 'blood' },
                            { text: '  drwxr-xr-x  mahmoud  4096  projects/', type: 'forensic' },
                            { text: '  -rw-r--r--  mahmoud   512  .bashrc', type: 'info' },
                            { text: '  -rwx------  mahmoud  8192  falcon_recon.sh', type: 'blood' },
                            { text: '  -rw-r--r--  mahmoud   512  README.md', type: 'output' },
                            { text: '', type: 'output' },
                        ], 20);
                    } else {
                        await typeOutput([
                            { text: '  resume.txt  skills.json  exploits/', type: 'success' },
                            { text: '  projects/   .bashrc      README.md', type: 'output' },
                            { text: '  falcon_recon.sh  falcon_delta.py', type: 'blood' },
                            { text: '', type: 'output' },
                        ], 20);
                    }
                    break;
                }

                case 'cat': {
                    const file = args[0];
                    if (!file) {
                        addOutput([{ text: '  cat: missing file. Try: cat resume.txt', type: 'error' }]);
                    } else if (file === 'resume.txt') {
                        await typeOutput([
                            { text: '', type: 'output' },
                            { text: '  MAHMOUD ELSHORBAGY — RESUME', type: 'blood' },
                            { text: '  ═══════════════════════════════════', type: 'blood' },
                            { text: '  eWPT-Certified | B.Sc. Systems Eng', type: 'output' },
                            { text: '  Focus: Web, API, Mobile security', type: 'output' },
                            { text: '', type: 'output' },
                            { text: '  EXPERIENCE', type: 'success' },
                            { text: '  ITI — Offensive Security Track', type: 'output' },
                            { text: '  Jul 2025 – Nov 2025', type: 'info' },
                            { text: '', type: 'output' },
                            { text: '  EDUCATION', type: 'success' },
                            { text: '  Al-Azhar University | Very Good', type: 'output' },
                            { text: '  Grad: IoT/ICS (Excellent)', type: 'output' },
                            { text: '', type: 'output' },
                        ], 18);
                    } else if (file === '.bashrc') {
                        await typeOutput([
                            { text: '  # ~/.bashrc', type: 'info' },
                            { text: '  export EDITOR="nvim"', type: 'output' },
                            { text: '  alias recon="~/scripts/falcon_recon.sh"', type: 'blood' },
                            { text: '  alias delta="python3 ~/tools/falcon_delta.py"', type: 'blood' },
                            { text: '  # I use Arch btw', type: 'info' },
                            { text: '', type: 'output' },
                        ], 25);
                    } else if (file === 'skills.json') {
                        await typeOutput([
                            { text: '  {', type: 'output' },
                            { text: '    "web": ["Burp Suite", "ZAP", "sqlmap"],', type: 'forensic' },
                            { text: '    "mobile": ["Frida", "JADX", "MobSF"],', type: 'blood' },
                            { text: '    "lang": ["Python", "Bash", "JS"],', type: 'info' },
                            { text: '    "os": ["Arch Linux", "Kali", "RHEL"]', type: 'warning' },
                            { text: '  }', type: 'output' },
                            { text: '', type: 'output' },
                        ], 25);
                    } else if (file === 'readme.md' || file === 'README.md') {
                        await typeOutput([
                            { text: '', type: 'output' },
                            { text: '  # Mahmoud Elshorbagy — Portfolio', type: 'blood' },
                            { text: '  Cyber Security Engineer | eWPT', type: 'output' },
                            { text: '  Focused on Web, API, Mobile PT', type: 'output' },
                            { text: '  Tools: FalconRecon, FalconDelta', type: 'forensic' },
                            { text: '', type: 'output' },
                        ], 25);
                    } else {
                        addOutput([{ text: `  cat: ${file}: No such file or directory`, type: 'error' }]);
                    }
                    break;
                }

                case 'nmap': {
                    const target = args[0] || '10.10.10.1';
                    addOutput([
                        { text: `  Starting Nmap 7.94 ( https://nmap.org )`, type: 'info' },
                        { text: `  Nmap scan report for ${target}`, type: 'output' },
                        { text: '  HOST IS UP (0.042s latency)', type: 'success' },
                        { text: '', type: 'output' },
                        { text: '  PORT     STATE    SERVICE', type: 'output' },
                    ]);

                    const ports = [
                        { text: '  22/tcp   open     ssh', type: 'success' },
                        { text: '  80/tcp   open     http', type: 'success' },
                        { text: '  443/tcp  open     https', type: 'success' },
                        { text: '  3306/tcp filtered mysql', type: 'warning' },
                        { text: '  8080/tcp open     http-proxy', type: 'blood' },
                    ];
                    for (const port of ports) {
                        await new Promise(resolve => setTimeout(resolve, 200 + Math.random() * 300));
                        addOutput([port]);
                    }
                    addOutput([
                        { text: '', type: 'output' },
                        { text: `  Nmap done: 1 IP address (1 host up) scanned`, type: 'info' },
                        { text: '  ⚠️  Simulation only — no real scan performed.', type: 'warning' },
                        { text: '', type: 'output' },
                    ]);
                    break;
                }

                case 'hack': {
                    await typeOutput([
                        { text: '', type: 'output' },
                        { text: '  ⚡ INITIATING ATTACK SEQUENCE...', type: 'blood' },
                        { text: '', type: 'output' },
                    ], 30);
                    const steps = [
                        { text: '  [▓░░░░░░░░░] 10%  Scanning target...', type: 'warning' },
                        { text: '  [▓▓▓░░░░░░░] 25%  Enumerating services...', type: 'warning' },
                        { text: '  [▓▓▓▓▓░░░░░] 45%  Exploiting SQLi...', type: 'blood' },
                        { text: '  [▓▓▓▓▓▓▓░░░] 65%  Dumping database...', type: 'blood' },
                        { text: '  [▓▓▓▓▓▓▓▓▓░] 85%  Privilege escalation...', type: 'error' },
                        { text: '  [▓▓▓▓▓▓▓▓▓▓] 100% ROOT ACCESS OBTAINED', type: 'success' },
                    ];
                    for (const step of steps) {
                        await new Promise(resolve => setTimeout(resolve, 400));
                        addOutput([step]);
                    }
                    await typeOutput([
                        { text: '', type: 'output' },
                        { text: '  🎯 TARGET COMPROMISED', type: 'success' },
                        { text: '  Findings: 2 Critical, 3 High, 2 Medium', type: 'error' },
                        { text: '  ⚠️  Relax — just a simulation! 😄', type: 'info' },
                        { text: '', type: 'output' },
                    ], 30);
                    break;
                }

                case 'matrix': {
                    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                        await typeOutput([
                            { text: '  Matrix effect skipped (reduced motion preferred)', type: 'info' }
                        ], 20);
                    } else {
                        startMatrix();
                    }
                    break;
                }

                case 'recon': {
                    const domain = args[0] || 'target.com';
                    const reconSteps = [
                        { text: `  [*] Running subfinder on ${domain}...`, type: 'info' },
                        { text: `  [+] api.${domain}`, type: 'success' },
                        { text: `  [+] staging.${domain}`, type: 'success' },
                        { text: `  [+] admin.${domain}`, type: 'blood' },
                        { text: `  [*] Running httpx on discovered subs...`, type: 'info' },
                        { text: `  [+] https://api.${domain} [200]`, type: 'success' },
                        { text: `  [+] https://admin.${domain} [403]`, type: 'warning' },
                        { text: `  [*] Running nuclei scanner...`, type: 'info' },
                        { text: `  [!] CRITICAL: Default admin credentials`, type: 'error' },
                        { text: `  [!] HIGH: Broken authentication on /api/v1`, type: 'blood' },
                        { text: '', type: 'output' },
                        { text: `  ✅ Recon complete. 3 subdomains, 2 vulnerabilities.`, type: 'success' },
                        { text: '', type: 'output' },
                    ];
                    for (const step of reconSteps) {
                        await new Promise(resolve => setTimeout(resolve, 300));
                        addOutput([step]);
                    }
                    break;
                }

                case 'scan': {
                    const vulns = [
                        { text: '  [SCAN] Testing for SQL Injection...', type: 'info' },
                        { text: '  [VULN] SQLi found in /search?q= (UNION-based)', type: 'error' },
                        { text: '  [SCAN] Testing for XSS...', type: 'info' },
                        { text: '  [VULN] Reflected XSS in search parameter', type: 'blood' },
                        { text: '  [SCAN] Testing for IDOR...', type: 'info' },
                        { text: '  [VULN] IDOR at /api/users/{id} — data leakage', type: 'blood' },
                        { text: '  [SCAN] Testing JWT implementation...', type: 'info' },
                        { text: '  [VULN] JWT accepts "none" algorithm!', type: 'error' },
                        { text: '', type: 'output' },
                        { text: '  ══════════════════════════════════', type: 'blood' },
                        { text: '  SCAN RESULT: 4 Critical Vulnerabilities', type: 'error' },
                        { text: '  ⚠️  This is a simulated scan.', type: 'warning' },
                        { text: '', type: 'output' },
                    ];
                    for (const v of vulns) {
                        await new Promise(resolve => setTimeout(resolve, 300));
                        addOutput([v]);
                    }
                    break;
                }

                case 'ping': {
                    const host = args[0] || '8.8.8.8';
                    addOutput([{ text: `  PING ${host} (${host}) 56(84) bytes of data.`, type: 'output' }]);
                    for (let i = 1; i <= 4; i++) {
                        const time = (Math.random() * 30 + 10).toFixed(1);
                        await new Promise(resolve => setTimeout(resolve, 500));
                        addOutput([{ text: `  64 bytes from ${host}: icmp_seq=${i} ttl=64 time=${time}ms`, type: 'success' }]);
                    }
                    addOutput([
                        { text: '', type: 'output' },
                        { text: `  --- ${host} ping statistics ---`, type: 'info' },
                        { text: '  4 packets transmitted, 4 received, 0% packet loss', type: 'success' },
                        { text: '', type: 'output' },
                    ]);
                    break;
                }

                case 'whois': {
                    await typeOutput([
                        { text: '  Domain: mahmoud-elshorbagy.sec', type: 'blood' },
                        { text: '  Status: ACTIVE', type: 'success' },
                        { text: '  Registrant: Mahmoud M. Elshorbagy', type: 'output' },
                        { text: '  Country: EG (Egypt)', type: 'output' },
                        { text: '  Specialty: Web / API / Mobile PT', type: 'blood' },
                        { text: '  Cert: eWPT Verified', type: 'success' },
                        { text: '', type: 'output' },
                    ], 30);
                    break;
                }

                case 'fortune': {
                    const quote = fortunes[Math.floor(Math.random() * fortunes.length)];
                    addOutput([
                        { text: '', type: 'output' },
                        { text: `  🎯 ${quote}`, type: 'info' },
                        { text: '', type: 'output' },
                    ]);
                    break;
                }

                case 'cowsay': {
                    const msg = args.join(' ') || 'I use Arch btw';
                    const display = msg.slice(0, 36);
                    const b = '─'.repeat(display.length + 2);
                    addOutput([
                        { text: '', type: 'output' },
                        { text: `   ┌${b}┐`, type: 'output' },
                        { text: `   │ ${display} │`, type: 'success' },
                        { text: `   └${b}┘`, type: 'output' },
                        { text: '        \\   ^__^', type: 'output' },
                        { text: '         \\  (oo)\\_______', type: 'output' },
                        { text: '            (__)\\       )\\/\\', type: 'output' },
                        { text: '                ||----w |', type: 'output' },
                        { text: '                ||     ||', type: 'output' },
                        { text: '', type: 'output' },
                    ]);
                    break;
                }

                case 'sudo': {
                    const sudoCmd = args.join(' ');
                    if (sudoCmd === 'rm -rf /') {
                        await typeOutput([
                            { text: '', type: 'output' },
                            { text: '  🚨 NICE TRY! System protected. 😏', type: 'error' },
                            { text: '  This incident has been reported.', type: 'warning' },
                            { text: '', type: 'output' },
                        ], 30);
                    } else if (sudoCmd === 'hire mahmoud') {
                        await typeOutput([
                            { text: '', type: 'output' },
                            { text: '  ✅ EXCELLENT DECISION! 🎉', type: 'success' },
                            { text: '  📧 Sending employment contract to HR...', type: 'info' },
                            { text: '  💰 Negotiating competitive salary...', type: 'warning' },
                            { text: '  🚀 Onboarding Mahmoud Elshorbagy...', type: 'info' },
                            { text: '  ✅ Welcome aboard! Smart choice.', type: 'success' },
                            { text: '', type: 'output' },
                        ], 40);
                    } else {
                        await typeOutput([
                            { text: `  [sudo] password for visitor: `, type: 'output' },
                            { text: '  visitor is not in the sudoers file.', type: 'error' },
                            { text: '  This incident will be reported. 👀', type: 'warning' },
                            { text: '  💡 Try: sudo hire mahmoud', type: 'info' },
                            { text: '', type: 'output' },
                        ], 30);
                    }
                    break;
                }

                case 'pwd': {
                    addOutput([{ text: '  /home/mahmoud/portfolio', type: 'output' }, { text: '', type: 'output' }]);
                    break;
                }
                case 'uname': {
                    addOutput([{ text: '  Linux arch 6.7.4-arch1-1 x86_64 GNU/Linux', type: 'output' }, { text: '', type: 'output' }]);
                    break;
                }
                case 'date': {
                    addOutput([{ text: `  ${new Date().toString()}`, type: 'output' }, { text: '', type: 'output' }]);
                    break;
                }
                case 'id': {
                    addOutput([{ text: '  uid=1337(mahmoud) gid=1337(security) groups=1337(security),27(sudo)', type: 'output' }, { text: '', type: 'output' }]);
                    break;
                }
                case 'hostname': {
                    addOutput([{ text: '  falcon-workstation', type: 'output' }, { text: '', type: 'output' }]);
                    break;
                }
                case 'uptime': {
                    addOutput([{ text: `  up 365 days, ${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, '0')}, 1 user, load average: 0.42, 0.38, 0.35`, type: 'output' }, { text: '', type: 'output' }]);
                    break;
                }
                case 'ifconfig':
                case 'ip': {
                    addOutput([
                        { text: '  eth0: flags=4163<UP,BROADCAST,RUNNING>  mtu 1500', type: 'output' },
                        { text: '        inet 10.10.14.37  netmask 255.255.255.0', type: 'success' },
                        { text: '  tun0: flags=4305<UP,POINTOPOINT,RUNNING>  mtu 1500', type: 'output' },
                        { text: '        inet 10.10.14.2  [HTB VPN]', type: 'blood' },
                        { text: '', type: 'output' },
                    ]);
                    break;
                }

                case 'history': {
                    if (commandHistory.length === 0) {
                        addOutput([{ text: '  No commands in history.', type: 'info' }, { text: '', type: 'output' }]);
                    } else {
                        const hist = commandHistory.slice(-20);
                        const lines = hist.map((c, i) => ({ text: `  ${String(i + 1).padStart(4, ' ')}  ${c}`, type: 'output' }));
                        lines.push({ text: '', type: 'output' });
                        addOutput(lines);
                    }
                    break;
                }

                case 'echo': {
                    addOutput([{ text: `  ${args.join(' ')}`, type: 'output' }, { text: '', type: 'output' }]);
                    break;
                }

                case 'exit': {
                    await typeOutput([
                        { text: '  logout', type: 'output' },
                        { text: '  Connection to portfolio closed.', type: 'info' },
                        { text: '  ...just kidding, you can\'t leave that easily! 😄', type: 'warning' },
                        { text: '', type: 'output' },
                    ], 40);
                    break;
                }

                case 'update': {
                    const date = new Date().toLocaleDateString();
                    const isAr = document.documentElement.lang === 'ar';
                    if (isAr) {
                        addOutput([
                            { text: '  جاري البحث عن تحديثات...', type: 'info' },
                            { text: '  النظام محدث.', type: 'success' },
                            { text: `  آخر تحديث: ${date}`, type: 'output' },
                            { text: '', type: 'output' },
                        ]);
                    } else {
                        addOutput([
                            { text: '  Fetching latest intel...', type: 'info' },
                            { text: '  System up to date.', type: 'success' },
                            { text: `  Last updated: ${date}`, type: 'output' },
                            { text: '', type: 'output' },
                        ]);
                    }
                    break;
                }

                case 'banner': {
                    const isBlue = document.body.classList.contains('blue-team');
                    if (isBlue) {
                        addOutput([{ text: BLUE_BANNER, type: 'output' }]);
                    } else {
                        addOutput([{ text: RED_BANNER, type: 'output' }]);
                    }
                    break;
                }

                default: {
                    addOutput([
                        { text: `  bash: ${command}: command not found`, type: 'error' },
                        { text: '  Type "help" for available commands.', type: 'info' },
                        { text: '', type: 'output' },
                    ]);
                    break;
                }
            }
        };

        // Initialize Welcome Message
        WELCOME_MESSAGE.forEach(line => {
            const div = document.createElement('div');
            div.className = `terminal-line mb-1 ${getLineColor(line.type)}`;
            div.textContent = line.text || '\u00A0';
            terminalBody.insertBefore(div, terminalInput.parentElement);
        });

        // Keyboard Event Handler
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !isTyping) {
                const input = terminalInput.value.trim();
                if (input) {
                    processCommand(input);
                }
                terminalInput.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (commandHistory.length > 0) {
                    const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
                    historyIndex = newIndex;
                    terminalInput.value = commandHistory[commandHistory.length - 1 - newIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex > 0) {
                    const newIndex = historyIndex - 1;
                    historyIndex = newIndex;
                    terminalInput.value = commandHistory[commandHistory.length - 1 - newIndex];
                } else {
                    historyIndex = -1;
                    terminalInput.value = '';
                }
            } else if (e.key === 'Tab') {
                e.preventDefault();
                const input = terminalInput.value.trim().toLowerCase();
                if (input) {
                    const matches = AVAILABLE_COMMANDS.filter(cmd => cmd.startsWith(input));
                    if (matches.length === 1) {
                        terminalInput.value = matches[0];
                    } else if (matches.length > 1) {
                        addOutput([{ text: `  ${matches.join('  ')}`, type: 'info' }]);
                    }
                }
            } else if (e.key === 'l' && e.ctrlKey) {
                e.preventDefault();
                terminalBody.innerHTML = '';
            } else if (e.key === 'Escape') {
                if (matrixActive) stopMatrix();
            }
        });

        // Click to focus and exit matrix
        terminalBody.addEventListener('click', () => {
            terminalInput.focus();
            if (matrixActive) stopMatrix();
        });
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

    // Contact Form AJAX Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        let statusEl = document.getElementById('form-status');
        if (!statusEl) {
            statusEl = document.createElement('div');
            statusEl.id = 'form-status';
            statusEl.className = 'mt-4 hidden p-3 rounded font-mono text-sm';
            contactForm.appendChild(statusEl);
        }

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;

            statusEl.className = 'mt-4 p-3 rounded font-mono text-sm bg-blue-900/40 border border-blue-500 text-blue-300';
            statusEl.textContent = 'Sending message...';
            statusEl.classList.remove('hidden');

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: new FormData(contactForm)
                });

                if (response.ok) {
                    statusEl.className = 'mt-4 p-3 rounded font-mono text-sm bg-green-900/40 border border-green-500 text-green-300';
                    statusEl.textContent = '✓ Message sent successfully! I will get back to you soon.';
                    contactForm.reset();
                } else {
                    const data = await response.json().catch(() => ({}));
                    statusEl.className = 'mt-4 p-3 rounded font-mono text-sm bg-red-900/40 border border-red-500 text-red-300';
                    statusEl.textContent = data.message || '✕ Failed to send message. Please try again.';
                }
            } catch (err) {
                statusEl.className = 'mt-4 p-3 rounded font-mono text-sm bg-red-900/40 border border-red-500 text-red-300';
                statusEl.textContent = '✕ An error occurred. Please try again later.';
            } finally {
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }
};

// Mobile Accordion - Encrypted Logs
function initAccordion() {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    const expHeaders = document.querySelectorAll('.exp-header');
    expHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const card = this.closest('.experience-card');
            
            // Toggle current card - CSS handles the rotation animation
            card.classList.toggle('is-open');
        });
    });
}

function updateTerminalTimestamps() {
    const timestamps = document.querySelectorAll('.hud-timestamp');
    const now = new Date();

    timestamps.forEach((ts, index) => {
        // Stagger each row a few seconds apart so the HUD reads like a
        // sequential scan log instead of every category finishing at once.
        const offsetSeconds = (timestamps.length - 1 - index) * 3;
        const time = new Date(now.getTime() - offsetSeconds * 1000);
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        ts.textContent = `[ ${hours}:${minutes}:${seconds} ]`;
    });
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initApp();
    initAccordion();
    updateTerminalTimestamps();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        initApp();
        initAccordion();
        updateTerminalTimestamps();
    });
}
