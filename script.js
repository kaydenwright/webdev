// script.js

document.addEventListener('DOMContentLoaded', () => {
    const DELAY_INCREMENT = 150; // Delay between primary blocks
    const CHILD_DELAY_INCREMENT = 100; // Delay between nested items (e.g., buttons)
    const CHILD_GROUP_DELAY = 200; // Extra delay before a nested group starts

    // 1. Get ALL elements that need to be revealed.
    const allRevealItems = document.querySelectorAll('.reveal-item');

    // 2. Intelligently find only the TOP-LEVEL items.
    // An item is top-level if its parent is NOT also a reveal-item.
    const primaryElements = Array.from(allRevealItems).filter(element => {
        return !element.parentElement.closest('.reveal-item');
    });

    let currentDelay = 0;

    // 3. Loop through only the top-level elements.
    primaryElements.forEach(element => {
        // --- Primary Stagger ---
        setTimeout(() => {
            element.classList.add('is-visible');
        }, currentDelay);

        // --- Secondary Stagger ---
        // Find children within this specific top-level element.
        const childElements = element.querySelectorAll('.reveal-item');

        if (childElements.length > 0) {
            let childDelay = 0;
            childElements.forEach(child => {
                let finalChildDelay = currentDelay + CHILD_GROUP_DELAY + childDelay;
                setTimeout(() => {
                    child.classList.add('is-visible');
                }, finalChildDelay);
                childDelay += CHILD_DELAY_INCREMENT;
            });
            // Ensure next primary element waits for this group to finish.
            currentDelay += childDelay + CHILD_GROUP_DELAY;
        } else {
            // No children, so just add the standard delay.
            currentDelay += DELAY_INCREMENT;
        }
    });
});