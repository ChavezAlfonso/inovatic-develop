'use strict';

import angular from 'angular';
import SearchResults from 'components/search.results/search.results.component';

export default angular
  .module('search.results', [])
  .directive('searchResults', SearchResults);