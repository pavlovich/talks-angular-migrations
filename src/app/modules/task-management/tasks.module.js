
import * as angular from 'angular';
import { UsersModule } from '../user-management';

export const TasksModule = angular.module('TasksModule', ['ngRoute', UsersModule.name]);

TasksModule
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when(
        '/tasks', {
          template: '<tasks></tasks>'
        }
      );
  }]);
