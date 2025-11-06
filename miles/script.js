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
});