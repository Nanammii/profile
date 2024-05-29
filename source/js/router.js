import Controller from "./controller.js";
import {handleStartTimer} from "./timer.js";

function handleHash() {
  const hash = location.hash ? location.hash.slice(1) : '';

  if (hash) {
    Controller[hash]();
  } else {
    Controller.index();
  }
  setActiveLink();
}

export function setActiveLink() {
  document.querySelectorAll('.navigation__link').forEach(link => {
    if (link.href === window.location.href) {
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
