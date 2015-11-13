'use strict';

import template from 'components/search.map/search.map';
import controller from 'components/search.map/search.map.controller';

export default () => {
  return {
    restrict: 'E',
    scope: {
      results: '@'
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};