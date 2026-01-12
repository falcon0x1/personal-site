const initMatrix = () => {
    const canvas = document.getElementById('matrix-bg');
    if (!canvas) {
        return; // Silently fail if canvas not found
    }
    const ctx = canvas.getContext('2d');

    let width, height;
    let columns;
    let drops = [];

    const characters = '0123456789ABCDEF';
    const chars = characters.split('');
    const fontSize = 16;

    function initialize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = document.querySelector('header').offsetHeight;
        columns = Math.floor(width / fontSize);
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * height);
        }
    }

    function draw() {
        // A semi-transparent black background to create the fading trail effect
        const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim();
        ctx.fillStyle = `${bgColor}0A`; // Using hex alpha for opacity
        ctx.fillRect(0, 0, width, height);

        // Get accent color from CSS variables
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim();
        ctx.fillStyle = accentColor;
        ctx.font = `${fontSize}px Fira Code, monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Resetting the drop when it reaches the bottom
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    // Initial setup
    initialize();

    // Set up the animation loop
    let intervalId = setInterval(draw, 50);

    // Recalculate on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            clearInterval(intervalId);
            initialize();
            intervalId = setInterval(draw, 50);
        }, 500); // Debounce resize event
    });

    // Also listen for theme changes to update background color
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // No need to do anything here, the draw function will pick up the new color
        });
    }
};

// Run after the page is fully loaded to ensure all elements are available
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initMatrix();
} else {
    document.addEventListener('DOMContentLoaded', initMatrix);
}
