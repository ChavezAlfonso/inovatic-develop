'use strict';

import _ from 'lodash';
import angular from 'angular';

let RESULTS = [{
  'id': '1',
  'type': 'organization',
  'category': 'incubator',
  'name': 'Wayra México',
  'latLng': ['19.389109', '-99.155045'],
  'description': 'Somos la aceleradora de empresas más importante de Latinoamérica.',
  'picture_url': 'https://pbs.twimg.com/profile_images/555515905401040896/FdTBA3iG.png'
}, {
  'id': '2',
  'type': 'organization',
  'category': 'gov',
  'name': 'Retos Públicos',
  'latLng': ['19.401739', '-99.119167'],
  'description': 'Retos Públicos es una estrategia de la CEDN que invitar a los emprendedores del país a proponer y desarrollar soluciones para problemas del Gobierno Federal.',
  'picture_url': 'http://amiti.org.mx/wp-content/uploads/2014/08/retos_publicos.png'
}, {
  'id': '3',
  'type': 'organization',
  'category': 'vcfund',
  'name': 'Fondo Prosoft 3.0',
  'latLng': ['19.423434', '-99.169121'],
  'description': 'El PROSOFT es el Programa para el Desarrollo de la Industria del Software.',
  'picture_url': 'http://www.canieti.org/Libraries/XXXV_Convencion_Nacional_Anual/AgendaProsoft30.sflb.ashx'
}, {
  'id': '4',
  'type': 'organization',
  'category': 'foundation',
  'name': 'BBVA Open Talent',
  'latLng': ['19.373887', '-99.128094'],
  'description': 'El PROSOFT es el Programa para el Desarrollo de la Industria del Software.',
  'picture_url': 'http://loogic.com/files/2013/03/opentalent.png'
}, {
  'id': '5',
  'type': 'organization',
  'category': 'academy',
  'name': 'Wayra México',
  'latLng': ['19.446471', '-99.124317'],
  'description': 'Somos la aceleradora de empresas más importante de Latinoamérica.',
  'picture_url': 'https://pbs.twimg.com/profile_images/555515905401040896/FdTBA3iG.png'
}, {
  'id': '6',
  'type': 'organization',
  'category': 'academy',
  'name': 'Retos Públicos',
  'latLng': ['19.500698', '-99.141998'],
  'description': 'Retos Públicos es una estrategia de la CEDN que invitar a los emprendedores del país a proponer y desarrollar soluciones para problemas del Gobierno Federal.',
  'picture_url': 'http://amiti.org.mx/wp-content/uploads/2014/08/retos_publicos.png'
}, {
  'id': '7',
  'type': 'organization',
  'category': 'foundation',
  'name': 'Wayra México',
  'latLng': ['19.433046', '-99.227486'],
  'description': 'Somos la aceleradora de empresas más importante de Latinoamérica.',
  'picture_url': 'https://pbs.twimg.com/profile_images/555515905401040896/FdTBA3iG.png'
}, {
  'id': '8',
  'type': 'organization',
  'category': 'vcfund',
  'name': 'Retos Públicos',
  'latLng': ['19.448909', '-99.191780'],
  'description': 'Retos Públicos es una estrategia de la CEDN que invitar a los emprendedores del país a proponer y desarrollar soluciones para problemas del Gobierno Federal.',
  'picture_url': 'http://amiti.org.mx/wp-content/uploads/2014/08/retos_publicos.png'
}];

class SearchService {
  /*@ngInject*/
  constructor($http, $q, $timeout) {
    this.q = $q;
    this.timeout = $timeout;
    this.http = $http;
  }

  fetchResults() {
    let deferred = this.q.defer();

    this.timeout(() => {
      deferred.resolve(_.shuffle(RESULTS));
    }, 1500);

    return deferred.promise;
  }
}

export default angular
  .module('hemx.services.search', [])
  .service('searchService', SearchService);