// Display map

window.addEventListener('DOMContentLoaded', () => {
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

  ymaps.ready(initMap);
})
