//Header reacting to scroll
//Wait for the DOM to fully be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

   //Listen for the scroll event on the entire window
    window.addEventListener('scroll', () => {
        //window.scrollY gives the number of pixels scrolled vertically
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

//Fade-in effect for sections on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
});
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
}); 