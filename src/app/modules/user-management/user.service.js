
import { UsersModule } from './users.module';

UsersModule
  .factory('UserService', [function(){
    return new UserServiceImpl();
  }]);

function User (email, password){
  this.email = email;
  this.password = password;
}

function UserServiceImpl (){
  let svc = this;
  svc.currentUser = null;

  Object.assign(svc, {
    createAccount: function(email, password){
      svc.currentUser = new User(email, password);
      return svc.currentUser;
    },
  
    login: function(email, password){
      svc.currentUser = new User(email, password);
      return svc.currentUser;
    },
  
    logout: function(){
      svc.currentUser = null;
      return true;
    },
  
    changePassword: function(email, pasword, newPassword){
      svc.currentUser.password = newPassword;
      return svc.currentUser;
    },
  
    resetPassword: function(email){
      alert('Reset password here!');
      return true;
    },
  
    getCurrentUser: function(){
      return svc.currentUser;
    },
  
    getCurrentUserEmail: function(){
      let user = svc.getCurrentUser();
      return user ? user.email : null;
    },
  
    isLoggedIn: function(){
      return svc.currentUser !== null;
    }

  });
}

export const UserService = 'UserService';
