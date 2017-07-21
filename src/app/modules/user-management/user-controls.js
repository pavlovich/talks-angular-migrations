
import './user-controls.css';

import $ from 'jquery';

import { UsersModule } from './users.module';

export class UserControlsCmp {
  constructor($scope, UserService){
    this.UserService = UserService;
    this.resetForms();
  }

  resetForms(){
    this.email = null;
    this.password = null;
    this.newPassword = null;
    this.showDropDown = false;
    this.showForgottenPasswordForm = false;
    this.showCreateAccountForm = false;
    this.showLoginPasswordForm = false;
    this.showChangePasswordForm = false;
    this.showLoggedInButtons = false;
    if(this.isLoggedIn()){
      this.showLoggedInButtons = true;
    }else{
      this.showLoginPasswordForm = true;
    }
  };

  getCurrentUser(){
    return this.UserService.getCurrentUser();
  };

  isLoggedIn(){
    return this.getCurrentUser() !== null;
  };

  openDropDown(){
    this.showDropDown = true;
  };

  showForgottenPassword(){
    this.showLoginPasswordForm = false;
    this.showForgottenPasswordForm = true;
  };

  showLoginPassword(){
    this.showForgottenPasswordForm = false;
    this.showCreateAccountForm = false;
    this.showLoginPasswordForm = true;
  };

  showCreateAccount(){
    this.showLoginPasswordForm = false;
    this.showCreateAccountForm = true;
  };

  showChangePassword(){
    this.showLoggedInButtons = false;
    this.showChangePasswordForm = true;
  };

  changePassword(){
    let res = this.UserService.changePassword(this.email, this.password, this.newPassword);
    if(res){
      this.resetForms();
    }else{
      alert('Error changing password!');
    }
  };

  resetPassword(){
    if(this.userService.resetPassword(this.email)){
      this.resetForms();
    }else{
      alert('Error resetting password!');
    }
  };

  createAccount(){
    if(this.userService.createAccount(this.email, this.password)){
      this.resetForms();
    }else{
      alert('Error creating account!');
    }
  };

  login(){
    let res = this.UserService.login(this.email, this.password);
    if(res){
      this.resetForms();
    }else{
      alert('Error logging in!');
    }
  };

  logout(){
    let res = this.UserService.logout();
    if(res){
      this.resetForms();
    }
  }

}

UserControlsCmp.$inject = ['$scope', 'UserService'];

UsersModule
  .component('userControls', {
      controllerAs: 'userCtrl',
      template: require('./user-controls.html'),
      controller: UserControlsCmp
    }
  );
