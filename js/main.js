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

// Initialize Honeytoken (Obfuscated)
const initSecurity = () => {
    try {
        // Base URL parts to avoid static grep detection
        const p1 = 'https://canary';
        const p2 = 'tokens.com/stuff/';
        const p3 = 'x508pb89yjwpy41fpeiq6z1hn';
        const p4 = '/contact.php';

        // Construct the tracking image
        const img = document.createElement('img');
        img.src = p1 + p2 + p3 + p4;
        img.style.display = 'none';
        img.alt = 'honeytoken';
        img.referrerPolicy = 'no-referrer'; // Don't leak source

        // Inject into footer
        document.querySelector('footer').appendChild(img);
    } catch (e) {
        // Silent fail
    }
};

const initApp = () => {
    // Prevent Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Initialize Security (Honeytoken)
    initSecurity();

    // Theme Switcher - Red Team (Offensive) / Blue Team (Defensive)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        const teamLabel = document.getElementById('team-label');
        const navLogo = document.getElementById('nav-logo');

        const applyTheme = (team) => {
            if (team === 'blue') {
                body.classList.add('light-theme');
                body.classList.add('blue-team');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-skull-crossbones');
                    themeIcon.classList.add('fa-shield-alt');
                }
                if (teamLabel) {
                    teamLabel.textContent = 'BLUE';
                }
                if (navLogo) {
                    navLogo.src = 'img/logo-blue.png';
                }
            } else {
                body.classList.remove('light-theme');
                body.classList.remove('blue-team');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-shield-alt');
                    themeIcon.classList.add('fa-skull-crossbones');
                }
                if (teamLabel) {
                    teamLabel.textContent = 'RED';
                }
                if (navLogo) {
                    navLogo.src = 'img/logo-red.png';
                }
            }
        };

        // Check for saved theme
        const savedTheme = localStorage.getItem('team');
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            // Apply Red Team (dark/offensive) theme by default
            applyTheme('red');
        }

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

    // Initialize LightGallery
    const lightgalleryElement = document.getElementById('lightgallery');
    if (lightgalleryElement && typeof lightGallery !== 'undefined') {
        const dynamicEl = [
            {
                'src': 'https://github.com/falcon0x1/FalconRecon',
                'subHtml': `<h4>FalconRecon</h4><p>Advanced Bash-based automation tool for reconnaissance. Streamlines subdomain enumeration, port scanning, and vulnerability discovery. It is designed to be fast, efficient, and highly customizable. <a href="https://github.com/falcon0x1/FalconRecon" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">View on GitHub</a></p>`
            },
            {
                'src': 'https://medium.com/@mahmoudelshorpagy7',
                'subHtml': `<h4>Technical Writeups</h4><p>A collection of detailed security research articles and CTF writeups. Topics include web application security (IDOR, SQLi, XSS), network security, and Active Directory exploitation. <a href="https://medium.com/@mahmoudelshorpagy7" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Read on Medium</a></p>`
            },
            {
                'src': 'https://github.com/falcon0x1/FalconServiceAnalyzer',
                'subHtml': `<h4>FalconServiceAnalyzer</h4><p>A tool for analyzing and identifying potentially vulnerable services on a system. It helps in penetration testing and security assessments. <a href="https://github.com/falcon0x1/FalconServiceAnalyzer" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">View on GitHub</a></p>`
            }
        ];

        lightgalleryElement.addEventListener('click', (e) => {
            const target = e.target.closest('a');
            if (target) {
                e.preventDefault();
                const index = Array.from(lightgalleryElement.querySelectorAll('a')).indexOf(target);
                const lg = lightGallery(lightgalleryElement, {
                    dynamic: true,
                    dynamicEl: dynamicEl,
                    galleryId: 'projects',
                    index: index,
                    plugins: [],
                    mobileSettings: {
                        controls: true,
                        showCloseIcon: true,
                        download: false,
                    },
                    licenseKey: '0000-0000-000-0000'
                });
                lg.openGallery();
            }
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
            mobileMenu.classList.toggle('hidden');
            // Toggle hamburger icon to X
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });

        // Close mobile menu when clicking on a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
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
                navLogo.src = isBlueTeam ? 'img/logo-blue.png' : 'img/logo-black.png';
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
  / _|__ _| |__ ___ _ _      / _ \\_  _/ |
 |  _/ _' | / _/ _ \\ ' \\    | (_) \\ \\/ / |
 |_| \\__,_|_\\__\\___/_||_|    \\___/ /_/ |_|
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
                const isAr = document.documentElement.lang === 'ar';
                return isAr ? "اختبار اختراق الويب/الجوال/APIs، أتمتة Bash/Python، Active Directory."
                    : "Web/Mobile/API Pentesting, Bash/Python Automation, Active Directory.";
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
                line.innerHTML = `< span class="terminal-prompt" > falcon0x1@portfolio: ~$</span > ${text} `;
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
            navLogo.src = document.body.classList.contains('blue-team') ? 'img/logo-blue.png' : 'img/logo-black.png';
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
                    navLogo.src = isBlue ? 'img/logo-blue.png' : 'img/logo-black.png';
                }
            });
        }
    }

    skillCards.forEach(card => skillObserver.observe(card));

    // Initial Headline Animation
    const headline = document.querySelector('.hero-headline');
    if (headline && typeof hackerDecode === 'function') hackerDecode(headline);
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initApp();
} else {
    document.addEventListener('DOMContentLoaded', initApp);
}
