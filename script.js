document.addEventListener('DOMContentLoaded', () => {
    // 1. Update Copyright Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Navbar background on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-links a, .hero-cta a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 4. Scroll Reveal Animation using Intersection Observer
    const fadeSections = document.querySelectorAll('.section-fade');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 5. Typing effect functionality for highlight text
    // A subtle effect since the main text uses CSS fade in, we can make the highlight glow dynamically.
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        setInterval(() => {
            highlight.style.textShadow = `0 0 ${Math.random() * 10 + 5}px var(--accent-color)`;
        }, 100);
    }
});
