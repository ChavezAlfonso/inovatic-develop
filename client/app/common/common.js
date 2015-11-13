'use strict';

import angular from 'angular';
import SearchHeader from 'common/search.header';
import Collapse from 'common/collapse';
import UserMenu from 'common/user.menu';
import SearchFunnels from 'common/search.funnels';

export default angular
  .module('hemx.common', [
    SearchHeader.name,
    Collapse.name,
    UserMenu.name,
    SearchFunnels.name
  ]);