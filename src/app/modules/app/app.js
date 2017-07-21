
import './app.css';

import * as angular from 'angular'
import { AppModule } from './app.module';

AppModule
  .directive('app',
    function(){
      return {
        template: require('./app.html'),
        controllerAs: 'vm',
        controller: [function(){}],

      }
  });

export const AppCmp = 'AppCmp';
