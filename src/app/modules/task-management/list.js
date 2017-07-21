
import './list.css';

import { TasksModule } from './tasks.module';

TasksModule
  .directive('taskList', ['TaskService', function (TaskService) {
    return {
      restrict: 'E',
      template: require('./list.html'),
      controllerAs: 'listCtrl',
      controller: ['TaskService',
        function (TaskService) {
          let listCtrl = this;

          listCtrl.TaskService = TaskService;

          Object.assign(listCtrl, {

            getTasks: function(){
              return listCtrl.TaskService ? listCtrl.TaskService.find() : [];
            }

          });

        }
      ]
    };
  }]);

export const TaskListCmp = 'TaskListCmp';
