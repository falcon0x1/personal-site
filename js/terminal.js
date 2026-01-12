// Terminal Implementation
class PortfolioTerminal {
    constructor() {
        this.input = document.getElementById('terminal-input');
        this.body = document.getElementById('terminal-body');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.currentCommand = '';

        this.commands = {
            help: this.helpCommand.bind(this),
            about: this.aboutCommand.bind(this),
            skills: this.skillsCommand.bind(this),
            projects: this.projectsCommand.bind(this),
            contact: this.contactCommand.bind(this),
            clear: this.clearCommand.bind(this),
            whoami: this.whoamiCommand.bind(this),
            ls: this.lsCommand.bind(this),
            cat: this.catCommand.bind(this),
            sudo: this.sudoCommand.bind(this),
            hack: this.hackCommand.bind(this),
            matrix: this.matrixCommand.bind(this),
            banner: this.bannerCommand.bind(this),
            social: this.socialCommand.bind(this),
            certs: this.certsCommand.bind(this),
            cv: this.cvCommand.bind(this),
            blog: this.blogCommand.bind(this)
        };

        this.init();
    }

    // [SECURITY FIX] Sanitization Helper
    escapeHtml(text) {
        if (!text) return text;
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    init() {
        this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));
        //this.input.focus();
        this.body.addEventListener('click', () => this.input.focus());
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.executeCommand(this.input.value.trim());
            this.input.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateHistory('up');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateHistory('down');
        } else if (e.key === 'Tab') {
            e.preventDefault();
            this.autoComplete();
        }
    }

    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;

        if (direction === 'up') {
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
                this.input.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
            }
        } else {
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.input.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
            } else if (this.historyIndex === 0) {
                this.historyIndex = -1;
                this.input.value = '';
            }
        }
    }

    autoComplete() {
        const partial = this.input.value.toLowerCase();
        if (!partial) return;

        const matches = Object.keys(this.commands).filter(cmd => cmd.startsWith(partial));
        if (matches.length === 1) {
            this.input.value = matches[0];
        } else if (matches.length > 1) {
            // Safe: matches are hardcoded keys from this.commands, so they are trusted
            this.addOutput(`Available: ${matches.join(', ')}`, 'command-info');
            this.addPrompt();
        }
    }

    executeCommand(cmd) {
        if (!cmd) {
            this.addPrompt();
            return;
        }

        // [SECURITY FIX] Escape user input before rendering
        // Show command in output
        this.removeCursor();
        this.addOutput(`falcon0x1@portfolio:~$ ${this.escapeHtml(cmd)}`, 'terminal-prompt');

        // Add to history
        this.commandHistory.push(cmd);
        this.historyIndex = -1;

        // Parse command and arguments
        const [command, ...args] = cmd.toLowerCase().split(' ');

        // Execute command
        if (this.commands[command]) {
            this.commands[command](args);
        } else {
            // [SECURITY FIX] Escape input in error message
            this.addOutput(`Command not found: ${this.escapeHtml(command)}. Type 'help' for available commands.`, 'command-error');
        }

        this.addPrompt();
        this.scrollToBottom();
    }

    addOutput(text, className = 'terminal-output') {
        const line = document.createElement('div');
        line.className = `terminal-line ${className}`;
        line.innerHTML = text; // Now safe because dangerous inputs are escaped before reaching here

        const lastLine = this.body.lastElementChild;
        this.body.insertBefore(line, lastLine);
    }

    addPrompt() {
        const lastLine = this.body.querySelector('.terminal-line:last-child');
        lastLine.innerHTML = `
        <span class="terminal-prompt">falcon0x1@portfolio:~$</span>
        <input type="text" id="terminal-input" class="terminal-input" autofocus autocomplete="off">
        <span class="terminal-cursor"></span>
        `;
        this.input = document.getElementById('terminal-input');
        this.init(); // Re-attach listeners
        this.input.focus();

    }

    removeCursor() {
        const cursor = this.body.querySelector('.terminal-cursor');
        if (cursor) cursor.remove();
    }

    scrollToBottom() {
        this.body.scrollTop = this.body.scrollHeight;
    }

    // ========== COMMAND IMPLEMENTATIONS ==========

    helpCommand() {
        const commands = [
            { cmd: 'help', desc: 'Display available commands' },
            { cmd: 'about', desc: 'Learn more about me' },
            { cmd: 'skills', desc: 'View technical skills' },
            { cmd: 'projects', desc: 'See my projects' },
            { cmd: 'contact', desc: 'Get contact information' },
            { cmd: 'certs', desc: 'View certifications' },
            { cmd: 'social', desc: 'Social media links' },
            { cmd: 'cv', desc: 'Download CV' },
            { cmd: 'blog', desc: 'Visit my blog' },
            { cmd: 'whoami', desc: 'Who am I?' },
            { cmd: 'ls', desc: 'List directory contents' },
            { cmd: 'banner', desc: 'Show ASCII banner' },
            { cmd: 'clear', desc: 'Clear terminal screen' }
        ];

        this.addOutput('<span class="command-success">Available Commands:</span>');
        this.addOutput('─────────────────────────────────────────');
        commands.forEach(({ cmd, desc }) => {
            this.addOutput(`  <span class="command-info">${cmd.padEnd(12)}</span> - ${desc}`);
        });
        this.addOutput('─────────────────────────────────────────');
        this.addOutput('<span class="text-gray-500">Tip: Use Tab for autocomplete, ↑/↓ for history</span>');
    }

    aboutCommand() {
        this.addOutput('\u003cspan class=\"command-success\"\u003e╔══════════════════════════════════════════════╗\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-success\"\u003e║          SECURITY PROFILE - FALCON0X1        ║\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-success\"\u003e╚══════════════════════════════════════════════╝\u003c/span\u003e');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"text-accent\"\u003e► IDENTITY\u003c/span\u003e');
        this.addOutput('  Name:     Mahmoud Elshorbagy');
        this.addOutput('  Alias:    falcon0x1');
        this.addOutput('  Role:     Penetration Tester \u0026 Security Engineer');
        this.addOutput('  Location: Egypt');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"text-accent\"\u003e► MISSION\u003c/span\u003e');
        this.addOutput('  Simulating advanced cyber attacks to help organizations');
        this.addOutput('  strengthen their defenses. Specialized in finding and');
        this.addOutput('  exploiting vulnerabilities before malicious actors do.');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"text-accent\"\u003e► EXPERTISE\u003c/span\u003e');
        this.addOutput('  • Web Application Security (OWASP Top 10)');
        this.addOutput('  • Mobile Penetration Testing (Android/iOS)');
        this.addOutput('  • Active Directory Exploitation');
        this.addOutput('  • Network Security Assessment');
        this.addOutput('  • Security Automation \u0026 Scripting');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"text-accent\"\u003e► ACHIEVEMENTS\u003c/span\u003e');
        this.addOutput('  ✓ 50+ Vulnerable Labs Pwned');
        this.addOutput('  ✓ 4+ Professional Certifications');
        this.addOutput('  ✓ 15+ Security Research Publications');
        this.addOutput('  ✓ 120+ GitHub Contributions');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"command-info\"\u003eType "skills" for technical arsenal\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-info\"\u003eType "experience" for work history\u003c/span\u003e');
    }

    skillsCommand() {
        this.addOutput('\u003cspan class=\"command-success\"\u003e╔══════════════════════════════════════════════╗\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-success\"\u003e║           TECHNICAL ARSENAL                  ║\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-success\"\u003e╚══════════════════════════════════════════════╝\u003c/span\u003e');
        this.addOutput('');

        const skills = {
            '🌐 Web Application Testing': ['Burp Suite Pro', 'OWASP ZAP', 'sqlmap', 'Nikto', 'Nuclei'],
            '📱 Mobile Security': ['Frida', 'JADX', 'MobSF', 'Objection', 'Apktool', 'ADB'],
            '🔍 Network Analysis': ['Nmap', 'Wireshark', 'Masscan', 'tcpdump', 'Netcat'],
            '💥 Exploitation': ['Metasploit', 'Empire', 'Covenant', 'Mimikatz', 'BloodHound'],
            '💻 Programming': ['Bash', 'Python', 'JavaScript', 'SQL', 'PowerShell'],
            '🏗️ Infrastructure': ['Active Directory', 'Linux', 'Windows', 'Docker', 'AWS']
        };

        for (const [category, tools] of Object.entries(skills)) {
            this.addOutput(`\u003cspan class=\"text-accent\"\u003e${category}\u003c/span\u003e`);
            this.addOutput(`  ${tools.join(' • ')}`);
            this.addOutput('');
        }

        this.addOutput('\u003cspan class=\"command-info\"\u003e💡 Proficiency: Advanced to Expert Level\u003c/span\u003e');
    }

    projectsCommand() {
        this.addOutput('\u003cspan class=\"command-success\"\u003e╔══════════════════════════════════════════════╗\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-success\"\u003e║         PROJECTS \u0026 RESEARCH                 ║\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-success\"\u003e╚══════════════════════════════════════════════╝\u003c/span\u003e');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"text-accent\"\u003e1. FalconRecon\u003c/span\u003e - Advanced Reconnaissance Tool');
        this.addOutput('   Bash automation framework for security assessments');
        this.addOutput('   Features: Subdomain enum, port scanning, vuln discovery');
        this.addOutput('   \u003cspan class=\"command-info\"\u003e→ github.com/falcon0x1/FalconRecon\u003c/span\u003e');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"text-accent\"\u003e2. Security Research Blog\u003c/span\u003e - Technical Writeups');
        this.addOutput('   In-depth articles on Android \u0026 Web security');
        this.addOutput('   Topics: IDOR, SQLi, Android exploitation, AD attacks');
        this.addOutput('   \u003cspan class=\"command-info\"\u003e→ falcon0x1.github.io\u003c/span\u003e');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"text-gray-500\"\u003eUse "blog" command to visit my blog\u003c/span\u003e');
    }

    contactCommand() {
        this.addOutput('\u003cspan class=\"command-success\"\u003e╔══════════════════════════════════════════════╗\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-success\"\u003e║         CONTACT INFORMATION                  ║\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-success\"\u003e╚══════════════════════════════════════════════╝\u003c/span\u003e');
        this.addOutput('');
        this.addOutput('📧 Email:    mahmoud.elshorbagy0x1@gmail.com');
        this.addOutput('📱 WhatsApp: +20 155 6688657');
        this.addOutput('💼 LinkedIn: linkedin.com/in/mahmoud-elshorbagy-b77b38234/');
        this.addOutput('🐙 GitHub:   github.com/falcon0x1');
        this.addOutput('📝 Blog:     falcon0x1.github.io');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"text-accent\"\u003e► STATUS: OPEN TO WORK\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-info\"\u003e  Available for: Pentesting | Security Consulting | Red Team\u003c/span\u003e');
    }

    certsCommand() {
        this.addOutput('\u003cspan class=\"command-success\"\u003e╔══════════════════════════════════════════════╗\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-success\"\u003e║           CERTIFICATIONS                     ║\u003c/span\u003e');
        this.addOutput('\u003cspan class=\"command-success\"\u003e╚══════════════════════════════════════════════╝\u003c/span\u003e');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"text-accent\"\u003e✓ eWPT\u003c/span\u003e - eLearnSecurity Web Application Penetration Tester');
        this.addOutput('  Issued by: INE Security');
        this.addOutput('  Focus: Advanced web app security testing');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"text-accent\"\u003e✓ Certified Web Pentester\u003c/span\u003e - CyberTalents / ITI');
        this.addOutput('  Focus: OWASP Top 10, API security');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"text-accent\"\u003e✓ Certified Mobile Pentester\u003c/span\u003e - CyberTalents / ITI');
        this.addOutput('  Focus: Android/iOS security assessment');
        this.addOutput('');
        this.addOutput('\u003cspan class=\"command-info\"\u003e📜 Total: 4+ Professional Certifications\u003c/span\u003e');
    }

    socialCommand() {
        this.addOutput('<span class="command-success">[SOCIAL LINKS]</span>');
        this.addOutput('─────────────────────────────────────────');
        this.addOutput('LinkedIn: <span class="text-accent">linkedin.com/in/mahmoud-elshorbagy-b77b38234/</span>');
        this.addOutput('GitHub:   <span class="text-accent">github.com/falcon0x1</span>');
        this.addOutput('Medium:   <span class="text-accent">medium.com/@mahmoudelshorpagy7</span>');
        this.addOutput('Blog:     <span class="text-accent">falcon0x1.github.io</span>');
    }

    cvCommand() {
        this.addOutput('<span class="command-success">Downloading CV...</span>');
        this.addOutput('<span class="command-info">→ Mahmoud-Elshorbagy-CV.pdf</span>');
        setTimeout(() => {
            window.location.href = 'cv.pdf';
        }, 500);
    }

    blogCommand() {
        this.addOutput('<span class="command-success">Opening blog...</span>');
        this.addOutput('<span class="command-info">→ https://falcon0x1.github.io</span>');
        setTimeout(() => {
            window.open('https://falcon0x1.github.io', '_blank');
        }, 500);
    }

    clearCommand() {
        // Remove all output except the welcome message
        const lines = this.body.querySelectorAll('.terminal-line');
        lines.forEach((line, index) => {
            if (index < lines.length - 1) line.remove();
        });

        // Add welcome back
        this.addOutput('<span class="command-success">Terminal cleared</span>');
    }

    whoamiCommand() {
        this.addOutput('<span class="text-accent">falcon0x1</span>');
        this.addOutput('');
        this.addOutput('A penetration tester who speaks fluent TCP/IP,');
        this.addOutput('thinks in hexadecimal, and dreams in CVEs.');
        this.addOutput('');
        this.addOutput('<span class="command-info">Clearance Level:</span> Root');
        this.addOutput('<span class="command-info">Threat Level:</span> Authorized');
        this.addOutput('<span class="command-info">Coffee Level:</span> Critical ☕');
    }

    lsCommand() {
        this.addOutput('<span class="command-info">drwxr-xr-x</span>  skills/');
        this.addOutput('<span class="command-info">drwxr-xr-x</span>  projects/');
        this.addOutput('<span class="command-info">drwxr-xr-x</span>  certifications/');
        this.addOutput('<span class="command-info">-rw-r--r--</span>  README.md');
        this.addOutput('<span class="command-info">-rw-r--r--</span>  cv.pdf');
    }

    catCommand(args) {
        if (!args.length) {
            this.addOutput('<span class="command-error">Usage: cat [file]</span>');
            this.addOutput('<span class="text-gray-500">Try: cat README.md</span>');
            return;
        }

        const fileName = args[0].toLowerCase();

        if (fileName === 'readme.md') {
            this.addOutput('# falcon0x1 Portfolio');
            this.addOutput('');
            this.addOutput('Penetration Tester & Security Engineer');
            this.addOutput('');
            this.addOutput('## Skills');
            this.addOutput('- Web Application Security');
            this.addOutput('- Mobile Penetration Testing');
            this.addOutput('- Active Directory Exploitation');
            this.addOutput('');
            this.addOutput('Type "help" for available commands');
        } else {
            // [SECURITY FIX] Escape file name in error output
            this.addOutput(`<span class="command-error">cat: ${this.escapeHtml(args[0])}: No such file or directory</span>`);
        }
    }

    sudoCommand() {
        this.addOutput('<span class="command-warning">⚠️  Nice try! But you already have root access here 😉</span>');
    }

    hackCommand() {
        this.addOutput('<span class="command-success">[INITIALIZING HACK...]</span>');
        this.addOutput('');
        this.addOutput('> Scanning for vulnerabilities...');
        this.addOutput('> Exploiting buffer overflow...');
        this.addOutput('> Bypassing authentication...');
        this.addOutput('> Escalating privileges...');
        this.addOutput('');
        this.addOutput('<span class="command-error">ERROR: Target is too secure!</span>');
        this.addOutput('<span class="text-gray-500">(Just kidding - hire me to test YOUR security!)</span>');
    }

    matrixCommand() {
        this.addOutput('<span class="text-accent">Wake up, Neo...</span>');
        this.addOutput('The Matrix has you.');
        this.addOutput('Follow the white rabbit. 🐰');
        this.addOutput('');
        this.addOutput('Knock, knock.');
    }

    bannerCommand() {
        this.addOutput('<pre class="ascii-art">');
        this.addOutput('  ___       _                 ___      _ ');
        this.addOutput(' / __)     | |               / _ \\    / |');
        this.addOutput('| |__ ____ | | ____ ___  ___| | | |_  | |');
        this.addOutput('|  __/ _  || |/ ___)/ _ \\| . | | | \\ \\_| |');
        this.addOutput('| | | ( | || ( (___|  __/| | | \\_| |\\ ___|');
        this.addOutput('|_|  \\_||_||_|\____|\\___)| | \\___/  \\|___|');
        this.addOutput('                         |_|               ');
        this.addOutput('</pre>');
        this.addOutput('<span class="command-info">Penetration Tester | Red Teamer | Security Researcher</span>');
    }
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    new PortfolioTerminal();
} else {
    document.addEventListener('DOMContentLoaded', () => new PortfolioTerminal());
}
