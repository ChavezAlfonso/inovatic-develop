'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from 'components/home/home';
import controller from 'components/home/home.controller';

export default angular
  .module('home', [uiRouter])
  .config( /*@ngInject*/ ($stateProvider) => {
    $stateProvider.state('home', {
      url: '/',
      template,
      controller,
      controllerAs: 'vm',
      bindToController: true
    });
  });