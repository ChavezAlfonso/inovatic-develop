'use strict';

import angular from 'angular';
import SearchHeader from 'common/search.header/search.header.component';

export default angular
  .module('search.header', [])
  .directive('searchHeader', SearchHeader);
