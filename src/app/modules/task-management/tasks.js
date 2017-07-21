
import './tasks.css';

import { TasksModule } from './tasks.module';

TasksModule
  .directive('tasks', [function(){
    return {
      template: require('./tasks.html')
    };
  }]);

export const TasksCmp = 'TasksCmp';
