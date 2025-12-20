const translations = {
    ar: {
       nav_about: "من أنا", 
        nav_skills: "المهارات", 
        nav_work: "المشاريع",
        nav_blog: "المدونة", 
        
        status_text: "النظام متصل // متاح للعمل",
        hero_greeting: "أهلاً، أنا",
        hero_name: "محمود الشوربجي",
        hero_desc: "مهندس أمن سيبراني ومختبر اختراق (Penetration Tester). أعمل على محاكاة الهجمات السيبرانية المتقدمة لمساعدة الشركات على اكتشاف الثغرات وتأمين أنظمتها (Web, Mobile, AD).",
        btn_contact: "تواصل معي", 
        btn_cv: "تحميل السيرة الذاتية", 
        btn_blog: "المقالات",
        
        stat_certs: "شهادة معتمدة", stat_labs: "معمل تدريبي", stat_tools: "أداة مطورة", stat_passion: "التزام وشغف",
        skills_title: "الترسانة التقنية",
        cert_header: ">> الشهادات", skills_header: ">> المهارات والأدوات",
        work_title: "أبرز الأعمال",
        proj_1_desc: "أداة متقدمة مبنية بلغة Bash لأتمتة عملية جمع المعلومات (Reconnaissance)، تشمل فحص النطاقات الفرعية والمنافذ.",
        proj_2_desc: "مقالات بحثية مفصلة تشرح ثغرات أمنية معقدة وطرق استغلال Active Directory.",
        contact_title: "بدء الاتصال"
    },
    en: {
      nav_about: "About", 
        nav_skills: "Skills", 
        nav_work: "Projects",
        nav_blog: "Blog", 
        
        status_text: "System Online // Open to Work",
        hero_greeting: "Hello, I'm",
        hero_name: "Mahmoud Elshorbagy",
        hero_desc: "Penetration Tester & Security Engineer (falcon0x1). I simulate advanced cyber attacks to help organizations strengthen their defenses. Specialized in Web, Mobile, and Active Directory security.",
        btn_contact: "Contact Me", 
        btn_cv: "Download CV", 
        btn_blog: "Articles",

        stat_certs: "Certifications", stat_labs: "Labs Pwned", stat_tools: "Tools Built", stat_passion: "Commitment",
        skills_title: "Technical Arsenal",
        cert_header: ">> CERTIFICATIONS", skills_header: ">> SKILLS & TOOLS",
        work_title: "Projects",
        proj_1_desc: "Advanced Bash-based automation tool for reconnaissance. Streamlines subdomain enumeration, port scanning, and vulnerability discovery.",
        proj_2_desc: "Detailed security research articles covering IDOR, SQL Injection, and Active Directory exploitation techniques.",
        contact_title: "Initialize Connection"
    }
};

let currentLang = 'en';

// Typing Effect
const typingPhrases = ['Penetration Tester', 'Red Teamer', 'Bash Scripter', 'Security Researcher'];
let pIndex = 0, cIndex = 0, isDeleting = false;

function type(textEl) {
    if(!textEl) return;
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

// Scroll Reveal Animation Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
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

    const loader = document.getElementById('preloader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 500);
        }, 1200);
    }

    document.querySelectorAll('.skill-tag').forEach(tag => {
        if(!tag.className.includes('bg-')) {
            tag.className += ' px-3 py-1 bg-dark-bg border border-gray-700 rounded text-xs text-gray-300 hover:border-gray-500 hover:text-white hover:bg-gray-800 transition transform hover:scale-105 cursor-default';
        } else {
            tag.className += ' px-3 py-1 rounded text-xs transition transform hover:scale-105 cursor-default';
        }
    });

    // Init Scroll Reveal
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const textEl = document.getElementById('typing-text');
    if(textEl) type(textEl);

    const langBtn = document.getElementById('lang-btn');
    const nameEl = document.getElementById('hero-name');
    const glitchWrapper = document.querySelector('.glitch-wrapper');

    if(langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            const html = document.documentElement;
            html.setAttribute('lang', currentLang);
            html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            langBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';

            if(translations[currentLang]['hero_name'] && nameEl) {
                nameEl.textContent = translations[currentLang]['hero_name'];
                nameEl.setAttribute('data-text', translations[currentLang]['hero_name']);

                if(currentLang === 'ar' && glitchWrapper) {
                    glitchWrapper.style.fontFamily = "'Cairo', sans-serif";
                } else if (glitchWrapper) {
                    glitchWrapper.style.fontFamily = "inherit";
                }
            }

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.textContent = translations[currentLang][key];
                }
            });
        });
    }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initApp();
} else {
    document.addEventListener('DOMContentLoaded', initApp);
}
