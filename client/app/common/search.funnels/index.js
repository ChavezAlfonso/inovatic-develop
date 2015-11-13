'use strict';

import angular from 'angular';
import SearchFunnels from 'common/search.funnels/search.funnels.component';

export default angular
  .module('search.funnels', [])
  .directive('searchFunnels', SearchFunnels);
