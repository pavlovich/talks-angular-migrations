
import { TasksModule } from './tasks.module';

TasksModule
  .factory('TaskService', ['UserService', function(UserService){
    return new TaskServiceImpl(UserService);
  }]);

function Task(properties) {
  this._id = properties._id;
  this.personal = properties.personal;
  this.checked = properties.checked;
  this.owner = properties.owner;
  this.name = properties.name;
  this.createdAt = properties.createdAt;
}

function TaskServiceImpl(UserService){
  let svc = this;

  svc.UserService = UserService;
  svc.selectedTask = {};
  svc.includeCompleted = false;
  svc.Tasks = [];
  svc.counter = 0;

  Object.assign(svc, {
  
    initializeTasks: function(){
      svc.Tasks = [];
  
      let newTasks = [
        {
          _id: 1,
          personal: true,
          checked: false,
          owner: 'p@p.com',
          name: 'Test number 1',
          createdAt: Date.now()
        },
        {
          _id: 2,
          personal: false,
          checked: false,
          owner: 'r@r.com',
          name: 'Test number 2',
          createdAt: Date.now()
        },
        {
          _id: 3,
          personal: false,
          checked: false,
          owner: 'p@p.com',
          name: 'Test number 3',
          createdAt: Date.now()
        },
        {
          _id: 4,
          personal: false,
          checked: false,
          owner: 'p@p.com',
          name: 'Test number 4',
          createdAt: Date.now()
        },
      ];
  
      newTasks.forEach((taskItem) => {svc.Tasks.push(new Task(taskItem))});
  
      svc.counter = 4;
    },
  
    setIncludeCompleted: function(shouldIncludeCompletedTasks){
      svc.includeCompleted = shouldIncludeCompletedTasks;
    },
  
    findOne: function(taskId, includeCompleted){
      return svc.find(includeCompleted).find((task) => {
        return task._id == taskId;
      })
    },
  
    find: function(includeCompleted) {
      return svc.Tasks.filter((task) => {
          return (task.personal !== true || task.owner == svc.getCurrentUserEmail()) && (includeCompleted || svc.includeCompleted || !task.checked);
        })
    },
  
    isLoggedInUser: function(email){
      if (email && typeof email == 'string') {
        return true;
      }
      throw new Error("Try logging in first!");
    },
  
    isGoodString: function(aString){
      return typeof aString == 'string' && aString.trim().length > 0
    },
  
    hasGoodName: function(task){
      return task && task.name && svc.isGoodString(task.name);
    },
  
    validateInsert: function(email, task){
      if (svc.isLoggedInUser(email) && svc.hasGoodName(task)) {
        return true;
      }
      throw new Error("You can't add an empty task!");
    },
  
    validateUpdate: function(modifier){
      let email = svc.getCurrentUserEmail();
      if (svc.isLoggedInUser(email)) {
        var task = null;
        if(modifier && modifier._id) {
          task = svc.findOne(modifier._id, true);
        }else{
          task = null;
        }
        if (modifier) {
          if (task) {
            if (!task.owner || (task.owner == email)) {
              if (svc.isGoodString(modifier.name)) {
  
                return true;
              } else {
                throw new Error("Tasks can't be blank!");
              }
            } else {
              if (task.personal) {
                throw new Meteor.Error("You can't update personal tasks you don't own.");
              }else{
                const {_id, checked} = modifier;
                Object.keys(modifier).forEach((key) => {
                  delete modifier[key];
                });
                Object.assign(modifier, {_id, checked});
              }
              return true;
            }
          }else {
            throw new Meteor.Error("You must provide a valid Task Identifier!");
          }
        }else{
          return true;
        }
      }
      return false;
    },
  
    validateDelete: function(task){
      if(task && task._id){
        let email = svc.getCurrentUserEmail();
        return (svc.isLoggedInUser(email)) && (task.owner == email);
      }else{
        throw new Error('Unable to delete null or non-persistent task.')
      }
    },
  
    getCurrentUser: function(){
      return svc.UserService.currentUser;
    },
  
    getCurrentUserEmail: function(){
      let user = svc.getCurrentUser();
      return user ? user.email : null;
    },
  
    update: function(modifier){
      if(svc.validateUpdate(modifier)){
        let task = svc.findOne(modifier._id, true);
        if(task){
          Object.assign(task, {name: modifier.name, checked: modifier.checked, personal: modifier.personal});
        }else{
          throw new Error('Unable to find task to update.')
        }
      }
    },
  
    delete: function(taskToDelete){
      if(svc.validateDelete(taskToDelete)) {
        if (taskToDelete && taskToDelete._id) {
          let task = svc.find(true).find((task) => {
            return task._id == taskToDelete._id
          });
          let index = task ? svc.Tasks.indexOf(task) : -1;
          if(index > -1) {
            svc.Tasks.splice(index, 1);
            return true
          }else{
            throw new Error('Unable to find task to delete!')
          }
        }
      }
    },
  
    insert: function(task){
      if(svc.validateInsert(svc.UserService.getCurrentUserEmail(), task)){
        task._id = ++svc.counter;
        task.createdAt = Date.now();
        task.owner = svc.getCurrentUserEmail();
        task.checked = false;
        task.personal = false;
        svc.Tasks.push(task);
      }
    },
  
    getSelectedTask: function(){
      return svc.selectedTask;
    },
  
    setSelectedTask: function(task){
      svc.selectedTask = task || {};
    },
  
    updateChecked: function(taskId, checkedStatus){
      let task = svc.findOne(taskId, true);
      if(task){
        task.checked = checkedStatus;
      }else{
        throw new Error('Unable to find task to update!')
      }
    },
  
    updatePersonal: function(taskId, personalStatus){
      let task = svc.findOne(taskId, true);
      if(task){
        task.personal = personalStatus;
      }else{
        throw new Error('Unable to find task to update!')
      }
    },

  });

  svc.initializeTasks();

}

export const TaskService = 'TaskService';
