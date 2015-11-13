'use strict';

import template from 'components/profile/profile';
import controller from 'components/profile/profile.controller';

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