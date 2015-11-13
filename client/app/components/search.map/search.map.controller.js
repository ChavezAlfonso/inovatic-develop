/*global L*/
'use strict';

let debug = require('debug')('SearchMapController');
import mapboxConfig from 'config/mapbox.config';

export default class SearchMapController {
  /*@ngInject*/
  constructor($scope, $state, $attrs, geoService, modalsService, networkService) {
    this.results = [];
    this.state = $state;
    this.markers = null;
    this.geoService = geoService;
    this.networkService = networkService;
    this.modalsService = modalsService;

    this.map = L.mapbox.map('search-map', mapboxConfig.mapId, {
      zoomControl: false
    }).setView(geoService.latLng, geoService.zoom);

    $attrs.$observe('results', this.onResultsChange.bind(this));
    $scope.$on('geoPositionSuccess', this.setMapView.bind(this));
    this.map.on('zoomend', this.onZoom.bind(this));
    this.map.on('dragend', this.onDragEnd.bind(this));

    new L.Control.Zoom({
      position: 'bottomright'
    }).addTo(this.map);

    this.renderMarkers();
    this.bindEvents();
  }

  bindEvents() {
    let self = this;
    let getDataFromPin = function() {
      return $(this).closest('.pin-popup').data();
    };

    $('body').on('click', '.pin-popup-profile', function(event) {
      let {id:profileId} = getDataFromPin.call(this);

      self.state.go('profile', {profileId});
      event.preventDefault();
    });

    $('body').on('click', '.pin-popup-add', function(event) {
      let {id, name} = getDataFromPin.call(this);

      self.networkService.add({id, name});
      event.preventDefault();
    });

    $('body').on('click', '.pin-popup-message', function(event) {
      let {id, name} = getDataFromPin.call(this);
      self.modalsService.message({id, name});
      event.preventDefault();
    });
  }

  unbindEvents() {
    $('body').off('click', '.pin-popup-profile');
    $('body').off('click', '.pin-popup-add');
    $('body').off('click', '.pin-popup-message');
  }

  onResultsChange(newResults) {
    this.results = JSON.parse(newResults);
    this.renderMarkers();
  }

  renderMarkers() {
    debug('Rendering markerts #renderMarkers');
    let markers = new L.MarkerClusterGroup();

    if (this.markers) {
      this.map.removeLayer(this.markers);
      this.unbindEvents();
    }

    for (let result of this.results) {
      let marker = this.generateMarker(result);
      let content = this.generateMarkerHTMLContent(result);

      marker.bindPopup(content);
      markers.addLayer(marker);
    }

    this.markers = markers;
    this.map.addLayer(markers);
    this.bindEvents();
  }

  generateMarkerHTMLContent({id, 'picture_url':pictureUrl, name, description}) {
    return `
      <div class="pin-popup" data-id="${id}" data-name="${name}">
        <div class="pin-popup__picture" style="background-image: url('${pictureUrl}')"></div>
        <h1>${name}</h1>
        <p>${description}</p>
        <a href="" class="pin-popup-message">
          <span class="icon-message"></span> Mensaje
        </a>
        <a href="" class="pin-popup-add">
          <span class="icon-plus"></span> Agregar
        </a>
        <a href="" class="pin-popup-profile">
          <span class="icon-info"></span> Perfil
        </a>
      </div>
    `;
  }

  generateIcon(category) {
    return L.divIcon({
      'className': `map-icon map-icon__${category}`,
      'html': `<span class="icon-${category}"></span>`,
      'iconSize': null
    });
  }

  generateMarker(result) {
    let icon = this.generateIcon(result.category);
    return L.marker(result.latLng, {
      icon: icon
    });
  }

  onZoom() {
    let newZoom = this.map.getZoom();
    this.geoService.setZoom(newZoom);
  }

  onDragEnd() {
    let latLng = this.map.getCenter();
    this.geoService.setLatLng(latLng);
  }

  setMapView() {
    this.map.setView(this.geoService.latLng);
  }
}