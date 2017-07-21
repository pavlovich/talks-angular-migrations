/**
 * Created by pavlovich on 5/9/17.
 */

import './nav-bar.css';

import { NavigationModule } from './navigation.module';

NavigationModule
  .directive('navBar', function NavBarCmpImpl() {
      return {
        template: require('./nav-bar.html'),
        controllerAs: 'navCtrl',
        controller: ['$location',
          function ($location) {
            let navCtrl = this;

            navCtrl.locationService = $location;

            Object.assign(navCtrl, {

              isActive: function (testLocation) {
                return testLocation === navCtrl.locationService.path();
              }

            });

          }
        ]
      }
    });

export const NavBarCmp = 'NavBarCmp';
