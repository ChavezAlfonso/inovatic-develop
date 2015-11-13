'use strict';

import template from 'components/profile.network/profile.network';
import controller from 'components/profile.network/profile.network.controller';

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