import './bootstrap';
import Alpine from 'alpinejs';
import { createIcons, icons } from 'lucide';

window.Alpine = Alpine;
window.createIcons = createIcons;
window.lucideIcons = icons;

// Dark mode state helper
Alpine.store('theme', {
    dark: localStorage.getItem('theme') === 'light' ? false : true,
    init() {
        if (this.dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },
    toggle() {
        this.dark = !this.dark;
        if (this.dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
});

// Typewriter Effect Component
Alpine.data('typewriter', (words = [], typeSpeed = 85, eraseSpeed = 45, waitTime = 2200) => ({
    words: Array.isArray(words) && words.length ? words : ['Full-Stack Developer', 'Laravel Architect', 'Database Engineer'],
    currentIndex: 0,
    displayText: '',
    isTyping: true,
    init() {
        this.type();
    },
    type() {
        const fullText = this.words[this.currentIndex] || '';
        if (this.isTyping) {
            if (this.displayText.length < fullText.length) {
                this.displayText = fullText.slice(0, this.displayText.length + 1);
                setTimeout(() => this.type(), typeSpeed);
            } else {
                this.isTyping = false;
                setTimeout(() => this.type(), waitTime);
            }
        } else {
            if (this.displayText.length > 0) {
                this.displayText = this.displayText.slice(0, -1);
                setTimeout(() => this.type(), eraseSpeed);
            } else {
                this.isTyping = true;
                this.currentIndex = (this.currentIndex + 1) % this.words.length;
                setTimeout(() => this.type(), 350);
            }
        }
    }
}));

// Animated Numeric Counter Component
Alpine.data('counter', (target = 0, duration = 1400) => ({
    count: 0,
    target: Number(target) || 0,
    started: false,
    init() {
        if (typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !this.started) {
                    this.started = true;
                    this.startCount();
                    observer.disconnect();
                }
            }, { threshold: 0.2 });
            observer.observe(this.$el);
        } else {
            this.count = this.target;
        }
    },
    startCount() {
        const end = this.target;
        if (end === 0) {
            this.count = 0;
            return;
        }
        const startTime = performance.now();
        const update = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            this.count = Math.floor(ease * end);
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                this.count = end;
            }
        };
        requestAnimationFrame(update);
    }
}));

// Clipboard Copier Component
Alpine.data('clipboard', () => ({
    copied: false,
    copy(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                this.copied = true;
                setTimeout(() => this.copied = false, 2500);
            });
        }
    }
}));

// Scroll Progress Helper
Alpine.store('scrollProgress', {
    percent: 0,
    visible: false,
    init() {
        window.addEventListener('scroll', () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            this.percent = total > 0 ? Math.round((window.scrollY / total) * 100) : 0;
            this.visible = window.scrollY > 300;
        }, { passive: true });
    },
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

Alpine.start();

// Setup Spotlight Cursor Movement on Cards
function initSpotlight() {
    const cards = document.querySelectorAll('.spotlight-card, .glass-card');
    cards.forEach((card) => {
        card.addEventListener('pointermove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }, { passive: true });
    });
}

// Setup Scroll-triggered Reveal Animations
function initScrollReveal() {
    if (typeof IntersectionObserver === 'undefined') return;
    const elements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach((el) => observer.observe(el));
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    createIcons({ icons });
    initSpotlight();
    initScrollReveal();
});

document.addEventListener('alpine:initialized', () => {
    createIcons({ icons });
    initSpotlight();
    initScrollReveal();
});

window.refreshIcons = () => {
    createIcons({ icons });
    initSpotlight();
    initScrollReveal();
};
