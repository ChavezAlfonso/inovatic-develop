'use strict';

import template from 'components/profile.about/profile.about';
import controller from 'components/profile.about/profile.about.controller';

export default () => {
  return {
    restrict: 'E',
    scope: {
      profile: '='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};