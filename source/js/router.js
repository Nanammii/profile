import Controller from "./controller.js";
import {handleStartTimer} from "./timer.js";

function handleHash() {
  const hash = location.hash ? location.hash.slice(1) : '';

  if (hash) {
    const routeName = `${hash}Route`;
    Controller[routeName]();
  } else {
    Controller.indexRoute();
  }
  setActiveLink();
}

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

export default {
  init() {
    handleStartTimer();

    window.addEventListener('hashchange', handleHash);
    handleHash();
  }
}
