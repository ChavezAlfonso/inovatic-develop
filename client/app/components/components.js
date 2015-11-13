'use strict';

import angular from 'angular';
import home from 'components/home';
import search from 'components/search';
import searchMap from 'components/search.map';
import searchResults from 'components/search.results';
import profile from 'components/profile';
import profileAbout from 'components/profile.about';
import profilePortfolio from 'components/profile.portfolio';
import profileNetwork from 'components/profile.network';

export default angular
  .module('hemx.components', [
    home.name,
    search.name,
    searchMap.name,
    searchResults.name,
    profile.name,
    profileAbout.name,
    profilePortfolio.name,
    profileNetwork.name
  ]);
