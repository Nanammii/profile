import IndexView from "./views/indexView.js";
import MapView from "./views/mapView.js";
import TimeView from "./views/timeView.js";
import ProfileView from "./views/profileView.js";

const mainContainer = document.getElementById('main-container');

export default {
  index() {
    mainContainer.innerHTML = IndexView.render();
  },
  map() {
    mainContainer.innerHTML = MapView.render();
    MapView.afterRender();
  },
  time() {
    mainContainer.innerHTML = TimeView.render();
    TimeView.afterRender();
  },
  profile() {
    mainContainer.innerHTML = ProfileView.render();
  }
}
