'use strict';

import angular from 'angular';
import ProfileAbout from 'components/profile.about/profile.about.component';

export default angular
  .module('profile.about', [])
  .directive('profileAbout', ProfileAbout);