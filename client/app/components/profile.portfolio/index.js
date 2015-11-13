'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProfilePortfolio from 'components/profile.portfolio/profile.portfolio.component';

export default angular
  .module('profile.portfolio', [uiRouter])
  .config( /*@ngInject*/ ($stateProvider) => {
    $stateProvider.state('profile.portfolio', {
      url: '/portfolio',
      template: '<profile-portfolio></profile-portfolio>'
    });
  })
  .directive('profilePortfolio', ProfilePortfolio);