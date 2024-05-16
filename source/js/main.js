document.addEventListener('DOMContentLoaded', () => {
  const location = window.location.href;
  const navLinks = document.querySelectorAll('.navigation__link')
  navLinks.forEach(link => {
    if (link.href === location) {
      link.classList.add('navigation__link--active');
    }
  })
})
