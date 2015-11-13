'use strict';

import angular from 'angular';
import SearchMap from 'components/search.map/search.map.component';

export default angular
  .module('search.map', [])
  .directive('searchMap', SearchMap);