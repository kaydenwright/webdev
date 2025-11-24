document.addEventListener('DOMContentLoaded', () => {
    // --- Header scroll effect ---
    const header = document.querySelector('header');
    if (header) { // Check if header exists
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Hamburger menu toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Reveal elements on scroll effect ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                // Optional: stop observing the element once it's visible
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const hiddenElements = document.querySelectorAll('main > section');
    if (hiddenElements.length > 0) {
        hiddenElements.forEach((el) => {
            el.classList.add('hidden'); // Add hidden class initially
            observer.observe(el);
        });
    }
});
