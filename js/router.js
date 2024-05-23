import Controller from "./controller.js";
import {setActiveLink} from "./main.js";

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

export default {
  init() {
    window.addEventListener('hashchange', handleHash);
    handleHash();
  }
}
