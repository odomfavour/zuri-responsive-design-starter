const navToggle = document.querySelector('.icon');
const linkContainer = document.querySelector('.link-holder');

navToggle.addEventListener('click', () => {
    linkContainer.classList.toggle('show-links')
} )