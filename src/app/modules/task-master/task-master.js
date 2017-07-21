/**
 * Created by pavlovich on 5/9/17.
 */

import { TaskMasterModule } from './task-master.module';

TaskMasterModule
  .directive('taskMaster', function(){
    return {
      template: require('./taskMaster.html')
    };
  });

export const TaskMasterCmp = 'TaskMasterCmp';
