'use strict';

import template from 'common/collapse/collapse';
import controller from 'common/collapse/collapse.controller';

export default () => {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};