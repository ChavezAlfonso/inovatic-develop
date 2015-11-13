'use strict';

import angular from 'angular';
import UserMenu from 'common/user.menu/user.menu.component';

export default angular
  .module('user.menu', [])
  .directive('userMenu', UserMenu);
