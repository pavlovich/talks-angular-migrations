/**
 * Created by pavlovich on 5/9/17.
 */

import './nav-bar.css';

import { NavigationModule } from './navigation.module';

export class NavBarCmp {
  constructor($location) {
    this.locationService = $location;
  }

  isActive(testLocation) {
    return testLocation === this.locationService.path();
  }
}

NavBarCmp.$inject = ['$location'];

NavigationModule
  .component('navBar',  {
      template: require('./nav-bar.html'),
      controllerAs: 'navCtrl',
      controller: NavBarCmp
    }
  );
