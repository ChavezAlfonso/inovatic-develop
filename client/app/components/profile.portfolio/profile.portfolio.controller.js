'use strict';

export default class ProfileAboutController {
  /*@ngInject*/
  constructor($state, profileService) {
    let profileId = $state.params.profileId;
    this.loading = true;

    profileService.getPortfolioById(profileId).then(portfolio => {
      this.loading = false;
      this.portfolio = portfolio;
    });
  }
}