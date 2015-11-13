'use strict';

import angular from 'angular';

class OnboardingService {
  /*@ngInject*/
  constructor(localStorageService) {
    this.profile = '';
    this.interestedIn = '';
    this.query = '';
    this.localStorageService = localStorageService;
  }

  setBoarded() {
    this.localStorageService.set('boarded', true);
  }

  removeBoarded() {
    this.localStorageService.remove('boarded');
  }

  setProfile(profile) {
    this.profile = profile;
  }

  setInterestedIn(interestedIn) {
    this.interestedIn = interestedIn;
  }

  setQuery(query) {
    this.query = query;
  }

  get isBoarded() {
    return this.localStorageService.get('boarded') ? true : false;
  }
}

export default angular
  .module('hemx.services.onboarding', [])
  .service('onboardingService', OnboardingService);