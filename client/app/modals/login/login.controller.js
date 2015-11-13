'use strict';

export default class LoginController {
  /*@ngInject*/
  constructor($scope, $state, $uibModalInstance, userService, modalsService) {
    this.modalsService = modalsService;
    this.modal = $uibModalInstance;
    this.state = $state;
    this.email = '';
    this.password = '';
    this.userService = userService;
  }

  login() {
    this.userService.login(this.email, this.password).then((response) => {
      if (response.status !== 200) return;
      this.modal.close();
      this.state.go('search', {}, {
        reload: true
      });
    });
  }

  register() {
    this.modal.close();
    this.modalsService.signup();
  }
}