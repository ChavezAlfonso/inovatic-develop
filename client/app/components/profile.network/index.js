'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProfileNetwork from 'components/profile.network/profile.network.component';

export default angular
  .module('profile.network', [uiRouter])
  .config( /*@ngInject*/ ($stateProvider) => {
    $stateProvider.state('profile.network', {
      url: '/network',
      template: '<profile-network></profile-network>'
    });
  })
  .directive('profileNetwork', ProfileNetwork);