/**
 * Created by pavlovich on 5/9/17.
 */

import './about.css';

import { AboutModule } from './about.module';

AboutModule
  .directive('about', function(){
    return {
      template: require('./about.html')
    }
  });

export const AboutCmp = 'AboutCmp';
