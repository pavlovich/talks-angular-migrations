
import './item.css';

import $ from 'jquery';
import { TasksModule } from './tasks.module';

TasksModule
  .directive('taskItem', [function () {
    return {
      restrict: 'E',
      scope: {},
      controllerAs: 'itemCtrl',
      bindToController: {task: '='},
      template: require('./item.html'),
      controller: ['$scope', 'UserService', 'TaskService',
        function ($scope, UserService, TaskService) {
          let itemCtrl = this;

          itemCtrl.UserService = UserService;
          itemCtrl.TaskService = TaskService;

          Object.assign(itemCtrl, {

            isSelected: function () {
              let selected = itemCtrl.TaskService.getSelectedTask();
              return selected ? selected._id == itemCtrl.task._id : false;
            },

            isOwner: function() {
              return itemCtrl.UserService.getCurrentUserEmail() == itemCtrl.task.owner;
            },

            canDelete: function () {
              return this.isOwner();
            },

            canUpdate: function () {
              return this.isOwner();
            },

            canComplete: function () {
              return !itemCtrl.task.personal || this.isOwner();
            },

            toggleChecked: function ($event) {
              $event.stopPropagation();
              itemCtrl.TaskService.updateChecked(itemCtrl.task._id, itemCtrl.task.checked);
              itemCtrl.TaskService.setSelectedTask(null);
            },

            togglePersonal: function ($event) {
              $event.stopPropagation();
              itemCtrl.TaskService.updatePersonal(itemCtrl.task._id, !itemCtrl.task.personal);
              itemCtrl.TaskService.setSelectedTask(null);
            },

            selectTask: function () {
              let taskIsSelected = itemCtrl.canUpdate() && !itemCtrl.isSelected();
              if(taskIsSelected){
                itemCtrl.TaskService.setSelectedTask(angular.copy(itemCtrl.task));
              }else{
                itemCtrl.TaskService.setSelectedTask(null);
              }
              if (taskIsSelected) {
                $('.new-task>input').focus();
              }
            },

            deleteTask: function () {
              let toDelete = itemCtrl.task;
              if(TaskService.delete(toDelete)){
                if (this.isSelected(toDelete)) {
                  itemCtrl.TaskService.setSelectedTask(null);
                }
              }else{
                throw new Error('Unable to delete task!')
              }
            }

          });

        }
      ]
    };
  }]);

export const TaskItemCmp = 'TaskItemCmp';
