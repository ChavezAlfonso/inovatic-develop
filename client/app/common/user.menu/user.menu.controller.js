'use strict';

export default class SearchHeaderController {
  /*@ngInject*/
  constructor(userService, $state, modalsService) {
    this.modalsService = modalsService;
    this.state = $state;
    this.userService = userService;
  }

  openLoginModal() {
    this.modalsService.login();
  }

  openSignupModal() {
    this.modalsService.signup();
  }

  logout() {
    this.userService.logout();
    this.state.go('search', {}, {
      reload: true
    });
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  gravatar() {
    return this.userService.isLoggedIn() ? this.userService.user.gravatar : null;
  }
}