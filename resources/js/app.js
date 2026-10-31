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

Alpine.start();

// Initialize Lucide icons on DOM loaded & Alpine updates
document.addEventListener('DOMContentLoaded', () => {
    createIcons({ icons });
});
document.addEventListener('alpine:initialized', () => {
    createIcons({ icons });
});
window.refreshIcons = () => {
    createIcons({ icons });
};
