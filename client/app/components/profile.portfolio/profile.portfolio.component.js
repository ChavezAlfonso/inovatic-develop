'use strict';

import template from 'components/profile.portfolio/profile.portfolio';
import controller from 'components/profile.portfolio/profile.portfolio.controller';

export default () => {
  return {
    restrict: 'E',
    scope: {
      portfolio: '='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};