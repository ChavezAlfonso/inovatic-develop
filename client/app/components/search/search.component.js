'use strict';

import template from 'components/search/search';
import controller from 'components/search/search.controller';

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