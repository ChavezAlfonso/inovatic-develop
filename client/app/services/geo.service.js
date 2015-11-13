'use strict';

class GeoService {
  /*@ngInject*/
  constructor(localStorageService, $rootScope) {
    this.rootScope = $rootScope;
    this.localStorage = localStorageService;

    if (navigator.geolocation && !localStorageService.get('latitude') && !localStorageService.get('longitude')) {
      navigator.geolocation.getCurrentPosition(this.onPosition.bind(this));
    }
  }

  onPosition(position) {
    let {coords: {latitude, longitude}} = position;

    this.localStorage.set('latitude', latitude);
    this.localStorage.set('longitude', longitude);
    this.rootScope.$broadcast('geoPositionSuccess');
  }

  setZoom(zoom) {
    this.localStorage.set('zoom', zoom);
  }

  setLatLng({lat:latitude, lng:longitude}) {
    this.localStorage.set('latitude', latitude);
    this.localStorage.set('longitude', longitude);
  }

  get latLng() {
    let latitude = this.localStorage.get('latitude') || 5.4007;
    let longitude = this.localStorage.get('longitude') || -9.1573;

    return [latitude, longitude];
  }

  get zoom() {
    return this.localStorage.get('zoom') || 9;
  }
}

export default angular
  .module('hemx.services.geo', [])
  .service('geoService', GeoService);