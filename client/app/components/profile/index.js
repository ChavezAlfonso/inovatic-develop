'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Profile from 'components/profile/profile.component';

export default angular
  .module('profile', [uiRouter])
  .config( /*@ngInject*/ ($stateProvider) => {
    $stateProvider.state('profile', {
      url: '/profile/:profileId',
      template: '<profile></profile>',
      parent: 'search'
    });
  })
  .directive('profile', Profile);