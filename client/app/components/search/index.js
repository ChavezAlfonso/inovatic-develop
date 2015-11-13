'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Search from 'components/search/search.component';

export default angular
  .module('search', [uiRouter])
  .config( /*@ngInject*/ ($stateProvider) => {
    $stateProvider.state('search', {
      url: '/search?query&sort&filters',
      template: '<search></search>'
    });
  })
  .directive('search', Search);