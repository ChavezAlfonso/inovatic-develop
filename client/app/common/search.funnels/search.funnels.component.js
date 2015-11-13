'use strict';

import template from 'common/search.funnels/search.funnels';
import controller from 'common/search.funnels/search.funnels.controller';

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