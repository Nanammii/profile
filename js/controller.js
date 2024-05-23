import IndexView from "./views/indexView.js";
import MapView from "./views/mapView.js";
import TimeView from "./views/timeView.js";
import ProfileView from "./views/profileView.js";

const mainContainer = document.getElementById('main-container');

export default {
  indexRoute() {
    mainContainer.innerHTML = IndexView.render();
  },
  mapRoute() {
    mainContainer.innerHTML = MapView.render();
    MapView.afterRender();
  },
  timeRoute() {
    mainContainer.innerHTML = TimeView.render();
    TimeView.afterRender();
  },
  profileRoute() {
    mainContainer.innerHTML = ProfileView.render();
  }
}
