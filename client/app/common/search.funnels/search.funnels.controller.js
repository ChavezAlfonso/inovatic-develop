'use strict';

import _ from 'lodash';

const FILTERS = ['incubators', 'calls', 'founding', 'associations', 'training', 'events'];

export default class SearchFunnelsController {
  /*@ngInject*/
  constructor($state, localStorageService) {
    let filters = {};

    this.localStorage = localStorageService;
    this.state = $state;

    if (typeof this.localStorage.get('open-filters') == 'null') {
      localStorageService.set('open-filters', true);
      this.open = true;
    } else {
      this.open = this.localStorage.get('open-filters');
    }

    FILTERS.forEach(filter => filters[filter] = this.isFunnelActive(filter));
    this.filters = filters;
  }

  isFunnelActive(name) {
    if (!this.state.params.filters) return false;

    return _.includes(this.state.params.filters.split('|'), name);
  }

  getFilters() {
    let filters = _.reject(FILTERS, (filter) => {
      return !this.filters[filter];
    });

    return filters.join('|');
  }

  handleFunnel() {
    this.state.go('search', {
      filters: this.getFilters()
    }, {
      notify: false
    });
  }

  openFunnels() {
    this.open = !this.open;
    this.localStorage.set('open-filters', this.open);
  }

  isAtLeastOneActive() {
    let returnValue = false;

    _.forEach(this.filters, (value) => {
      if (value) {
        returnValue = true;
      }
    });

    return returnValue;
  }
}