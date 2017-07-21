

import {Injectable} from "@angular/core";

export class User {
  constructor(public email: string, public password: string) {}
}

@Injectable()
export class UserService {
  currentUser: User;

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
