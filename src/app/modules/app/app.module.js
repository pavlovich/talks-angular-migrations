
import * as angular from 'angular';
import 'angular-route';

import { TaskMasterModule } from '../task-master';

export const AppModule = angular.module('AppModule', ['ngRoute', TaskMasterModule.name]);

AppModule
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
    $locationProvider.html5Mode(true);

    $routeProvider.otherwise({template: '<div class="container about" ><p>Nothing from Angular 1!</p></div>'});
  }]);
