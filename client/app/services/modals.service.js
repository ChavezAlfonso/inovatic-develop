'use strict';

import angular from 'angular';
import messageTemplate from 'modals/message/message';
import messageController from 'modals/message/message.controller';
import loginTemplate from 'modals/login/login.html';
import loginController from 'modals/login/login.controller';
import signupTemplate from 'modals/signup/signup.html';
import signupController from 'modals/signup/signup.controller';

class ModalsService {
  /*@ngInject*/
  constructor($uibModal, userService, ngNotify) {
    this.ngNotify = ngNotify;
    this.userService = userService;
    this.uibModal = $uibModal;
  }

  login() {
    this.uibModal.open({
      animation: true,
      template: loginTemplate,
      controller: loginController,
      controllerAs: 'vm',
      bindToController: true,
      size: 'medium'
    });
  }

  signup() {
    this.uibModal.open({
      animation: true,
      template: signupTemplate,
      controller: signupController,
      controllerAs: 'vm',
      bindToController: true,
      size: 'medium'
    });
  }

  message(user) {
    if (this.userService.isLoggedIn) {
      this.uibModal.open({
        animation: true,
        template: messageTemplate,
        controller: messageController,
        controllerAs: 'vm',
        bindToController: true,
        resolve: {
          user: () => user
        }
      });
    } else {
      this.ngNotify.set('Necesitas iniciar sesión o registrarte.', 'warn');
    }
  }
}

export default angular
  .module('hemx.services.modals', [])
  .service('modalsService', ModalsService);