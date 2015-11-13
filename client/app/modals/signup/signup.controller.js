'use strict';

export default class SignupController {
  /*@ngInject*/
  constructor($uibModalInstance,  modalsService, ngNotify) {
    this.modalsService = modalsService;
    this.ngNotify = ngNotify;
    this.modal = $uibModalInstance;
  }

  handleSignup() {
    this.ngNotify.set('Instrucciones enviadas correctamente.');
    this.modal.close();
  }

  login() {
    this.modal.close();
    this.modalsService.login();
  }
}