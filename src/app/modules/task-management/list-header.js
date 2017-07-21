
import './list-header.css';

import { TasksModule } from './tasks.module';

TasksModule
  .directive('taskListHeader', ['TaskService', function (TaskService) {
    return {
      restrict: 'E',
      template: require('./list-header.html'),
      controllerAs: 'listHeaderCtrl',
      controller: ['TaskService',
        function(TaskService){
          let listHeaderCtrl = this;

          listHeaderCtrl.TaskService = TaskService;
        }
      ]
    };
  }]);

export const TaskListHeaderCmp = 'TaskListHeaderCmp';
