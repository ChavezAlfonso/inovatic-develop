'use strict';

import template from 'common/search.header/search.header';
import controller from 'common/search.header/search.header.controller';

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