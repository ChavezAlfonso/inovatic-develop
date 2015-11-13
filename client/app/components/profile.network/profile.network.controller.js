'use strict';

export default class ProfileAboutController {
  /*@ngInject*/
  constructor($state, profileService, networkService, modalsService) {
    this.modalsService = modalsService;
    this.networkService = networkService;
    this.state = $state;
    this.profileService = profileService;
    this.currentTab = 'followers';
    this.countLoading = true;
    this.loading = true;

    profileService.getNetworkCountById(this.state.params.profileId).then(networkCount => {
      this.countLoading = false;
      this.networkCount = networkCount;
    });

    this.fetchFollowers();
  }

  showFollowers() {
    this.currentTab = 'followers';
    this.fetchFollowers();
  }

  showFollowing() {
    this.currentTab = 'following';
    this.fetchFollowing();
  }

  fetchFollowers() {
    this.loading = true;
    this.followers = [];

    this.profileService.getFollowersById(this.state.params.profileId).then(followers => {
      this.loading = false;
      this.followers = followers;
    });
  }

  fetchFollowing() {
    this.loading = true;
    this.following = [];

    this.profileService.getFollowingById(this.state.params.profileId).then(following => {
      this.loading = false;
      this.following = following;
    });
  }

  handleAdd({id, name}) {
    this.networkService.add({id, name});
  }

  handleMessage({id, name}) {
    this.modalsService.message({id, name});
  }
}