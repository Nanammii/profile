const MapView = {
  render: () => {
    return (
      `<section class="d-flex flex-column bg-white pb-3">
    <div class="d-flex justify-content-between align-items-center padding-inline py-3 fs-6">
      <span>Basic map</span>
      <div class="d-flex gap-2">
        <button class="btn p-0 border-0">
          <img src="./img/icons/arrow-down.svg" alt="Open map" width="24" height="24"/>
        </button>
        <button class="btn p-0 border-0">
          <img src="./img/icons/update-icon.svg" alt="Update map" width="24" height="24"/>
        </button>
        <button class="btn p-0 border-0">
          <img src="./img/icons/close-icon.svg" alt="Close map" width="24" height="24"/>
        </button>
      </div>
    </div>

    <div class="map__wrapper d-flex justify-content-center align-items-center padding-inline pb-3">
      <div class="map__loader"></div>
      <div class="map__container w-100 d-none" id="map"></div>
    </div>
  </section>`
    )
  },
  afterRender: () => {
    // Display map

      const loaderElement = document.querySelector('.map__loader');
      const mapElement = document.getElementById('map');

      function initMap() {
        const location = [59.931775, 30.293347];

        const map = new ymaps.Map(mapElement, {
            center: location,
            zoom: 16
          }
        );

        map.controls.remove('geolocationControl');
        map.controls.remove('routeButtonControl');
        map.controls.remove('trafficControl');
        map.controls.remove('typeSelector');
        map.controls.remove('fullscreenControl');
        map.controls.remove('rulerControl');
        map.controls.remove('searchControl');
        map.controls.remove('button');

        const placemark = new ymaps.Placemark(map.getCenter(), {
          balloonContent: 'Your location',
        }, {
          preset: 'islands#icon',
          iconColor: '#0095b6',
        });

        map.geoObjects.add(placemark);

        loaderElement.classList.add('d-none');
        mapElement.classList.remove('d-none');
      }

      if (typeof ymaps !== 'undefined') {
        ymaps.ready(initMap);
      } else {
        console.error('Error')
      }

  }
}

export default MapView;
