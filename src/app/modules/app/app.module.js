
import * as angular from 'angular';
import 'angular-route';
import { downgradeComponent } from '@angular/upgrade/static';

import { TaskMasterModule } from '../task-master';
import { RootCmp } from '../../modules2/root';

export const AppModule = angular.module('AppModule', ['ngRoute', TaskMasterModule.name]);

AppModule
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
    $locationProvider.html5Mode(true);

    $routeProvider.otherwise({template: '<div class="container about" ><p>Nothing from Angular 1!</p></div>'});
  }])
  // .directive('rootCmp', downgradeComponent({
  //   component: RootCmp
  // }));
