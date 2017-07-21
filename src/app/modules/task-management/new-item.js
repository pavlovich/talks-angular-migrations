
import './new-item.css';

import { TasksModule } from './tasks.module';

angular.module('TasksModule')
  .directive('newTask', ['TaskService', 'UserService', function (TaskService, UserService) {
    return {
      restrict: 'E',
      template: require('./new-item.html'),
      scope: {},
      controllerAs: 'newItemCtrl',
      controller: ['$scope', 'UserService', 'TaskService',
        function ($scope, UserService, TaskService) {
          let newItemCtrl = this;

          newItemCtrl.TaskService = TaskService;
          newItemCtrl.UserService = UserService;

          Object.assign(newItemCtrl, {

            getSelectedTask: function(){
              return newItemCtrl.TaskService.getSelectedTask();
            },

            loggedIn: function () {
              return newItemCtrl.UserService.isLoggedIn();
            },

            submitTask: function (event) {
              let text = event.target.text.value;

              let task = newItemCtrl.TaskService.getSelectedTask() || {};
              task.name = text;

              newItemCtrl.TaskService.setSelectedTask(null);

              if (task._id) {
                newItemCtrl.TaskService.update(task);
              } else {
                newItemCtrl.TaskService.insert(task);
              }

              event.target.text.value = "";

              return false;
            },

            placeholderText: function () {
              let selectedTask = newItemCtrl.TaskService.getSelectedTask();
              return selectedTask && selectedTask._id ? "Enter some text for this Task description" : "Type here to add new tasks";
            }

          })
        }
      ]
    };
  }]);

export const NewTaskCmp = 'NewTaskCmp';
