/**
 * Created by pavlovich on 5/9/17.
 */

import * as angular from 'angular';

export const AboutModule = angular.module('AboutModule', ['ngRoute']);

AboutModule
  .config(['$routeProvider', function AboutCmpImpl($routeProvider) {
    $routeProvider.when('/about', {
      template: '<about></about>',
    })
  }]);
