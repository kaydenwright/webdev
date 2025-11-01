document.addEventListener('DOMContentLoaded', () => {

  const elementsToReveal = document.querySelectorAll('.revealable');

  elementsToReveal.forEach((element, index) => {

    setTimeout(() => {
      element.classList.add('is-visible');
    }, index * 250);

  });
});