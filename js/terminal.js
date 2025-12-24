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
        this.input.focus();
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
        this.addOutput('<span class="command-success">[PROFILE]</span>');
        this.addOutput('─────────────────────────────────────────');
        this.addOutput('Name: Mahmoud Elshorbagy');
        this.addOutput('Alias: falcon0x1');
        this.addOutput('Role: Penetration Tester & Security Engineer');
        this.addOutput('');
        this.addOutput('I simulate advanced cyber attacks to help organizations');
        this.addOutput('strengthen their defenses. Specialized in Web, Mobile,');
        this.addOutput('and Active Directory security assessments.');
        this.addOutput('');
        this.addOutput('<span class="command-info">Experience:</span> 50+ Labs Pwned | 4+ Certifications');
        this.addOutput('<span class="command-info">Focus Areas:</span> OWASP Top 10 | Mobile Security | AD Exploitation');
    }

    skillsCommand() {
        this.addOutput('<span class="command-success">[TECHNICAL ARSENAL]</span>');
        this.addOutput('─────────────────────────────────────────');

        const skills = {
            'Web Application Testing': ['Burp Suite Pro', 'OWASP ZAP', 'sqlmap', 'Nikto'],
            'Mobile Security': ['Frida', 'JADX', 'MobSF', 'Objection', 'Apktool', 'ADB'],
            'Network Analysis': ['Nmap', 'Wireshark', 'Masscan', 'tcpdump'],
            'Exploitation': ['Metasploit', 'Empire', 'Covenant', 'Mimikatz'],
            'Programming': ['Bash', 'Python', 'JavaScript', 'SQL'],
            'Infrastructure': ['Active Directory', 'Linux', 'Windows', 'TCP/IP']
        };

        for (const [category, tools] of Object.entries(skills)) {
            this.addOutput(`<span class="command-info">${category}:</span>`);
            this.addOutput(`  ${tools.join(' | ')}`);
            this.addOutput('');
        }
    }

    projectsCommand() {
        this.addOutput('<span class="command-success">[PROJECTS & RESEARCH]</span>');
        this.addOutput('─────────────────────────────────────────');
        this.addOutput('');
        this.addOutput('<span class="command-info">1. FalconRecon</span>');
        this.addOutput('   Advanced Bash automation tool for reconnaissance');
        this.addOutput('   Features: Subdomain enum, port scanning, vuln discovery');
        this.addOutput('   <span class="text-accent">→ github.com/falcon0x1/FalconRecon</span>');
        this.addOutput('');
        this.addOutput('<span class="command-info">2. Security Research</span>');
        this.addOutput('   Technical writeups on Medium');
        this.addOutput('   Topics: IDOR, SQLi, Active Directory exploitation');
        this.addOutput('   <span class="text-accent">→ medium.com/@mahmoudelshorpagy7</span>');
        this.addOutput('');
        this.addOutput('<span class="text-gray-500">Use "blog" command to visit my blog</span>');
    }

    contactCommand() {
        this.addOutput('<span class="command-success">[CONTACT INFORMATION]</span>');
        this.addOutput('─────────────────────────────────────────');
        this.addOutput('📧 Email:    mahmoud.elshorbagy0x1@gmail.com');
        this.addOutput('📱 WhatsApp: +20 155 6688657');
        this.addOutput('💼 LinkedIn: linkedin.com/in/mahmoud-elshorbagy-b77b38234/');
        this.addOutput('🐙 GitHub:   github.com/falcon0x1');
        this.addOutput('📝 Blog:     falcon0x1.github.io');
        this.addOutput('');
        this.addOutput('<span class="command-info">Status:</span> <span class="text-accent">Open to Work</span>');
    }

    certsCommand() {
        this.addOutput('<span class="command-success">[CERTIFICATIONS]</span>');
        this.addOutput('─────────────────────────────────────────');
        this.addOutput('✓ eWAPT - eLearnSecurity Web Application Penetration Tester');
        this.addOutput('✓ Certified Web Pentester - CyberTalents / ITI');
        this.addOutput('✓ Certified Mobile Pentester - CyberTalents / ITI');
        this.addOutput('✓ Various Security Training Completion');
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
