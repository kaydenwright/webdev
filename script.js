// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- PART 1: Handle the Group Reveals ---
    // Select all containers that should appear at once.
    const groupElements = document.querySelectorAll('.reveal-group');

    groupElements.forEach(element => {
        // Add the 'is-visible' class immediately (or with a tiny delay).
        // This makes all main sections appear together.
        setTimeout(() => {
            element.classList.add('is-visible');
        }, 100); // A small 100ms delay can feel smoother than 0.
    });


    // --- PART 2: Handle the Staggered Button Reveals ---
    // Select ONLY the elements meant to be staggered.
    const staggerElements = document.querySelectorAll('.reveal-stagger');

    staggerElements.forEach((element, index) => {
        // Use the familiar index-based delay to create the domino effect.
        // The delay is LONGER here to be noticeable.
        setTimeout(() => {
            element.classList.add('is-visible');
        }, 300 + (index * 150)); // Start after 300ms, then stagger by 150ms.
    });
});