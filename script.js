// Плавна прокрутка до якорів (залишив на випадок, якщо додаси якірні посилання)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Бургер-меню
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = navMenu.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
    navToggle.textContent = isExpanded ? '✕' : '☰';
});

// Анімація появи елементів
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.speaker-card, .timeline-item, .about, .teaser-card, .partner-card').forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });
} else {
    document.querySelectorAll('.fade-in').forEach(item => {
        item.classList.add('visible');
    });
}