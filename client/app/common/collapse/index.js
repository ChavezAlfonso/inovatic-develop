'use strict';

import angular from 'angular';
import Collapse from 'common/collapse/collapse.directive';

export default angular
  .module('search.collapse', [])
  .directive('collapseContent', Collapse);
