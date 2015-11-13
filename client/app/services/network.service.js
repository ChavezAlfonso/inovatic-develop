'use strict';

import angular from 'angular';

export default class NetworkService {
  /*@ngInject*/
  constructor(userService, ngNotify) {
    this.ngNotify = ngNotify;
    this.userService = userService;
  }

  add({name}) {
    if (this.userService.isLoggedIn) {
      this.ngNotify.set(`${name} agregado correctamente.`, 'success');
    } else {
      this.ngNotify.set('Necesitas iniciar sesión o registrarte.', 'warn');
    }
  }
}

export default angular
  .module('hemx.services.network', [])
  .service('networkService', NetworkService);