'use strict';

export default class MessageController {
  /*@ngInject*/
  constructor(user, $uibModalInstance, ngNotify) {
    this.modal = $uibModalInstance;
    this.name = '';
    this.message = '';
    this.user = user;
    this.ngNotify = ngNotify;
  }

  handleMessageSubmit() {
    this.modal.close();
    this.ngNotify.set('Mensaje enviado correctamente.', 'success');
  }
}