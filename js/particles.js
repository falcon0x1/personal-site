// Hexagonal Network Animation - falcon0x1 themed
(function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'hex-animation';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.6;';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let hexGrid = [];
    let dataPackets = [];
    let animationId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initHexGrid();
        initDataPackets();
    }

    function getColor() {
        const isLight = document.body.classList.contains('light-theme') || document.body.classList.contains('blue-team');
        return isLight ? { r: 30, g: 58, b: 138 } : { r: 255, g: 51, b: 51 };
    }

    const hexSize = 50;
    const hexHeight = hexSize * Math.sqrt(3);

    function initHexGrid() {
        hexGrid = [];
        const cols = Math.ceil(canvas.width / (hexSize * 1.5)) + 2;
        const rows = Math.ceil(canvas.height / hexHeight) + 2;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * hexSize * 1.5;
                const y = row * hexHeight + (col % 2 ? hexHeight / 2 : 0);
                hexGrid.push({
                    x, y,
                    pulse: Math.random() * Math.PI * 2,
                    active: Math.random() > 0.9
                });
            }
        }
    }

    function initDataPackets() {
        dataPackets = [];
        const count = Math.min(15, Math.floor(canvas.width / 120));
        for (let i = 0; i < count; i++) {
            dataPackets.push(createPacket());
        }
    }

    function createPacket() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            targetX: Math.random() * canvas.width,
            targetY: Math.random() * canvas.height,
            speed: 1.5 + Math.random() * 2,
            size: 5 + Math.random() * 5,
            trail: []
        };
    }

    function drawHexagon(x, y, size, opacity) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i + Math.PI / 6;
            const hx = x + size * Math.cos(angle);
            const hy = y + size * Math.sin(angle);
            if (i === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        const color = getColor();
        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const color = getColor();
        const time = Date.now() / 1000;

        // Draw hex grid
        hexGrid.forEach(hex => {
            const pulse = Math.sin(time * 0.5 + hex.pulse) * 0.5 + 0.5;
            const opacity = hex.active ? 0.2 + pulse * 0.2 : 0.08;
            drawHexagon(hex.x, hex.y, hexSize, opacity);

            // Draw active nodes
            if (hex.active) {
                ctx.beginPath();
                ctx.arc(hex.x, hex.y, 4 + pulse * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${0.4 + pulse * 0.4})`;
                ctx.fill();
            }
        });

        // Draw data packets
        dataPackets.forEach(packet => {
            // Move toward target
            const dx = packet.targetX - packet.x;
            const dy = packet.targetY - packet.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 10) {
                packet.targetX = Math.random() * canvas.width;
                packet.targetY = Math.random() * canvas.height;
            } else {
                packet.x += (dx / dist) * packet.speed;
                packet.y += (dy / dist) * packet.speed;
            }

            // Store trail
            packet.trail.push({ x: packet.x, y: packet.y });
            if (packet.trail.length > 10) packet.trail.shift();

            // Draw trail
            packet.trail.forEach((pos, i) => {
                const trailOpacity = (i / packet.trail.length) * 0.5;
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, packet.size * (i / packet.trail.length), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${trailOpacity})`;
                ctx.fill();
            });

            // Draw packet (hexagonal)
            ctx.save();
            ctx.translate(packet.x, packet.y);
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const hx = packet.size * Math.cos(angle);
                const hy = packet.size * Math.sin(angle);
                if (i === 0) ctx.moveTo(hx, hy);
                else ctx.lineTo(hx, hy);
            }
            ctx.closePath();
            ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.9)`;
            ctx.fill();
            ctx.restore();

            // Glow effect
            const gradient = ctx.createRadialGradient(packet.x, packet.y, 0, packet.x, packet.y, packet.size * 4);
            gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`);
            gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(packet.x, packet.y, packet.size * 4, 0, Math.PI * 2);
            ctx.fill();
        });

        animationId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();

    // Pause when hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            draw();
        }
    });
})();
