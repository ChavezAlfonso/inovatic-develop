'use strict';

export default class SearchController {
  /*@ngInject*/
  constructor($state, $scope, $previousState, profileService, networkService, modalsService) {
    this.enableGoBack = $previousState.get('searchMaked') ? true : false;
    this.modalsService = modalsService;
    this.networkService = networkService;
    this.state = $state;
    this.profileService = profileService;

    profileService.findById($state.params.profileId).then((profile) => {
      this.profile = profile;
    });
  }

  handleAddUser(id, name) {
    this.networkService.add({id, name});
  }

  handleMessage({id, name}) {
    this.modalsService.message({id, name});
  }
}