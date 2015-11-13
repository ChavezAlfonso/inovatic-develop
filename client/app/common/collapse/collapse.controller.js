'use strict';

import Velocity from 'velocity-animate';

export default class SearchHeaderController {
  /*@ngInject*/
  constructor() {
    this.isCollapsed = false;
  }

  handleClick() {
    let elements = $('.collapsable');
    let left = 20;

    if (!this.isCollapsed) {
      left = elements.width() * -1;
    }

    this.isCollapsed = !this.isCollapsed;

    Velocity(elements, {
      left: left
    }, {
      duration: 300
    });
  }
}