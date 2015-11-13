'use strict';

export default class HomeController {
  /*@ngInject*/
  constructor($state, onboardingService) {
    this.step = 1;
    this.query = '';
    this.state = $state;
    this.onboardingService = onboardingService;

    if (onboardingService.isBoarded) {
      this.state.go('search');
    }
  }

  handleProfileChoice(value) {
    this.onboardingService.setProfile(value);
    this.step = 2;
  }

  handleInterestedInChoice(choice) {
    this.onboardingService.setInterestedIn(choice);
    this.step = 3;
  }

  handleQuerySearch() {
    this.onboardingService.setQuery(this.query);
    this.onboardingService.setBoarded();

    this.state.go('search', {
      query: this.query,
      filters: this.onboardingService.interestedIn,
      sort: 'closest'
    }, {
      location: 'replace'
    });
  }
}