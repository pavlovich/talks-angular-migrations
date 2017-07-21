
import { UsersModule } from './users.module';

UsersModule
  .factory('UserService', [function(){
    return new UserService();
  }]);

export class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

export class UserService {
  constructor() {
    this.currentUser = null;
  }

  createAccount(email, password){
    this.currentUser = new User(email, password);
    return this.currentUser;
  };

  login(email, password){
    this.currentUser = new User(email, password);
    return this.currentUser;
  };

  logout(){
    this.currentUser = null;
    return true;
  };

  changePassword(email, pasword, newPassword){
    this.currentUser.password = newPassword;
    return this.currentUser;
  };

  resetPassword(email){
    alert('Reset password here!');
    return true;
  };

  getCurrentUser(){
    return this.currentUser;
  };

  getCurrentUserEmail(){
    let user = this.getCurrentUser();
    return user ? user.email : null;
  };

  isLoggedIn(){
    return this.currentUser !== null;
  }

}
