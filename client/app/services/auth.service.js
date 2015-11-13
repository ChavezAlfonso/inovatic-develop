'use strict';

import angular from 'angular';

/*@ngInject*/ 
function authInterceptor(localStorageService, $q, $location) {
  var factory = {};
  
  factory.request = function (config) {
    var token = localStorageService.get('token') || null;
    config.headers = config.headers || {};
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  };

  factory.responseError = function (response) {
    if (response.status === 401 || response.status === 403) {
      localStorageService.remove('token');
      $location.path('/');
    }
    return $q.reject(response);
  };

  return factory;
}

export default angular
  .module('hemx.services.AuthInterceptor', [])
  .factory('AuthInterceptor', authInterceptor);