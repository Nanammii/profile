import Router from "./router.js";

document.addEventListener('DOMContentLoaded', () => {
  Router.init();
})


export function setActiveLink() {
  const location = window.location.href;
  const navLinks = document.querySelectorAll('.navigation__link')
  navLinks.forEach(link => {
    if (link.href === location) {
      link.classList.add('navigation__link--active');
    } else {
      link.classList.remove('navigation__link--active');
    }
  })
}
