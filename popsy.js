const Popsy = {};

// Count up to a number
// Usage: Popsy.counter('#el', 1000)
Popsy.counter = function (selector, target, options = {}) {
    const el = document.querySelector(selector);
    if (!el) return;
    const duration = options.duration || 1500;
    const start = Date.now();
    function tick() {
        const progress = Math.min((Date.now() - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
};

// Fade an element in
// Usage: Popsy.fadeIn('#el')
Popsy.fadeIn = function (selector, options = {}) {
    const el = document.querySelector(selector);
    if (!el) return;
    const duration = options.duration || 600;
    el.style.opacity = 0;
    el.style.transition = `opacity ${duration}ms ease`;
    setTimeout(() => { el.style.opacity = 1; }, 20);
};

// Typing effect
// Usage: Popsy.typewriter('#el', 'Hello!')
Popsy.typewriter = function (selector, text, options = {}) {
    const el = document.querySelector(selector);
    if (!el) return;
    const speed = options.speed || 60;
    el.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) { el.textContent += text[i++]; setTimeout(type, speed); }
    }
    type();
};

// Shake an element (great for errors)
// Usage: Popsy.shake('#el')
Popsy.shake = function (selector) {
    const el = document.querySelector(selector);
    if (!el) return;
    const moves = [10, -10, 8, -8, 4, -4, 0];
    let i = 0;
    el.style.transition = 'transform 0.07s ease';
    function step() {
        if (i < moves.length) {
            el.style.transform = `translateX(${moves[i++]}px)`;
            setTimeout(step, 60);
        }
    }
    step();
};

// Confetti burst
// Usage: Popsy.confetti()
Popsy.confetti = function () {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    for (let i = 0; i < 80; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `
      position: fixed; top: 50%; left: 50%;
      width: 8px; height: 8px; border-radius: 50%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      pointer-events: none; z-index: 9999;
    `;
        document.body.appendChild(dot);
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 300 + 100;
        dot.animate([
            { transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
            { transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px)) scale(0)`, opacity: 0 }
        ], { duration: 1000 + Math.random() * 500, easing: 'ease-out' }).onfinish = () => dot.remove();
    }
};

// Toast notification
// Usage: Popsy.toast('Saved!') or Popsy.toast('Error!', { type: 'error' })
Popsy.toast = function (message, options = {}) {
    const type = options.type || 'success';
    const duration = options.duration || 3000;
    const colors = { success: '#22c55e', error: '#ef4444', info: '#3b82f6' };

    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
    position: fixed; bottom: 30px; right: 30px;
    background: ${colors[type] || colors.success};
    color: #fff; padding: 12px 22px;
    border-radius: 8px; font-size: 15px;
    font-family: sans-serif;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    opacity: 0; transition: opacity 0.3s ease;
    z-index: 9999;
  `;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = 1; }, 20);
    setTimeout(() => {
        toast.style.opacity = 0;
        setTimeout(() => toast.remove(), 300);
    }, duration);
};