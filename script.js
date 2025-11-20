document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Countdown timer to the wedding
    function initCountdown() {
    // Use India local time (IST). ISO string with +05:30 ensures the target is the correct instant.
    const target = new Date('2025-12-28T10:30:00+05:30');

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        const noteEl = document.getElementById('countdown-note');

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        function pad(n){ return n < 10 ? '0'+n : n; }

        function update() {
            const now = new Date();
            let diff = Math.max(0, target - now);

            if (diff <= 0) {
                // Event has started
                daysEl.textContent = '0';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';

                // Replace countdown with a celebratory message
                const countdownContainer = document.getElementById('countdown');
                if (countdownContainer) {
                    countdownContainer.innerHTML = '<div class="celebration">\n                    <h3 class="celebration-title">The wedding has begun!</h3>\n                    <p class="celebration-sub">Join the celebrations — blessings and joy to all.</p>\n                  </div>';
                }

                if (noteEl) noteEl.textContent = "The wedding has begun — join the celebrations!";

                // Launch confetti animation for a short burst
                launchConfetti({ duration: 5000, particleCount: 160 });

                clearInterval(timer);
                return;
            }

            const secs = Math.floor(diff / 1000);
            const d = Math.floor(secs / (3600*24));
            const h = Math.floor((secs % (3600*24)) / 3600);
            const m = Math.floor((secs % 3600) / 60);
            const s = secs % 60;

            daysEl.textContent = d;
            hoursEl.textContent = pad(h);
            minutesEl.textContent = pad(m);
            secondsEl.textContent = pad(s);
        }

        update();
        const timer = setInterval(update, 1000);
    }

    initCountdown();
});

/* --- Confetti ---
   Minimal, dependency-free confetti implemented with canvas. Options:
   { duration: ms, particleCount: n }
*/
function launchConfetti(opts) {
    const duration = (opts && opts.duration) || 4000;
    const particleCount = (opts && opts.particleCount) || 100;

    const colors = ["#e74c3c", "#ff6b6b", "#f39c12", "#f6e58d", "#ffffff"];

    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = 10000;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth * devicePixelRatio;
        canvas.height = window.innerHeight * devicePixelRatio;
        ctx.scale(devicePixelRatio, devicePixelRatio);
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * -20,
            r: (Math.random() * 6) + 4,
            d: Math.random() * 30 + 10,
            tilt: Math.random() * 10 - 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            tiltAngleIncrement: Math.random() * 0.07 + 0.05,
            velocityY: Math.random() * 2 + 2,
            velocityX: (Math.random() - 0.5) * 2
        });
    }

    let animationFrame;
    const start = performance.now();

    function draw(now) {
        const elapsed = now - start;
        ctx.clearRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.tilt += p.tiltAngleIncrement;
            p.x += p.velocityX;
            p.y += p.velocityY;

            ctx.beginPath();
            ctx.fillStyle = p.color;
            // draw as tiny rotated rectangle
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.tilt * 0.1);
            ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.6);
            ctx.restore();
            ctx.closePath();

            // reset if out of bounds
            if (p.y > window.innerHeight + 20) {
                p.x = Math.random() * window.innerWidth;
                p.y = Math.random() * -40;
            }
        }

        if (elapsed < duration) {
            animationFrame = requestAnimationFrame(draw);
        } else {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('resize', resize);
            if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
        }
    }

    animationFrame = requestAnimationFrame(draw);
}
