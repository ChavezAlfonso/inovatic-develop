'use strict';

export default class SearchResultsController {
  /*@ngInject*/
  constructor($state, $attrs, modalsService, networkService) {
    this.networkService = networkService;
    this.modalsService = modalsService;
    this.state = $state;
  }

  handleMessage({id, name}) {
    this.modalsService.message({id, name});
  }

  handleAddUser(id, name) {
    this.networkService.add({id, name});
  }

  makeSortedSearch(filter) {
    this.state.go('search', {
      sort: filter
    }, {
      notify: false
    });
  }
}