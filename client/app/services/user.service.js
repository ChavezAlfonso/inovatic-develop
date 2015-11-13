'use strict';

import angular from 'angular';
import apiConfig from 'config/api.config';

export default class UserService {
  /*@ngInject*/
  constructor(localStorageService, $http) {
    this.localStorage = localStorageService;
    this.http = $http;
    this.user = null;
    if (this.localStorage.get('token')) {
      this.me();
    }
  }

  login(email, password) {
    return this.http.post(`${apiConfig.endPoint}/auth`, {email: email, password: password})
      .then((response) => {
        if (response.status == 200) {
          this.localStorage.set('token', response.data.token);
          this.me();
        }
        return response;
      });
  }

  claims() {
    let token = this.localStorage.get('token');
    if (token) {
      let output = token.split('.')[1].replace('-', '+').replace('_', '/');
      switch (output.length % 4) {
        case 0:
          break;
        case 2:
          output += '==';
          break;
        case 3:
          output += '=';
          break;
        default:
          throw 'Illegal base64url string!';
      }
      return JSON.parse(window.atob(output));
    }
    return null;
  }

  me() {
    return this.http.get(`${apiConfig.endPoint}/me`)
      .success((data) => {
        this.user = data;
      })
      .error(() => {
        this.user = null;
      });
  }

  logout() {
    this.localStorage.remove('token');
    this.user = null;
  }

  isLoggedIn() {
    return this.user ? true : false;
  }
}

export default angular
  .module('hemx.services.user', [])
  .service('userService', UserService);