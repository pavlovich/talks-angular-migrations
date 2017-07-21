
import './user-controls.css';

import $ from 'jquery';

import { UsersModule } from './users.module';

UsersModule
  .directive('userControls', [function () {
    return {
      restrict: 'E',
      controllerAs: 'userCtrl',
      template: require('./user-controls.html'),
      controller: ['$scope', 'UserService',
        function UserControlsCmpImpl ($scope, UserService){
          let userCtrl = this;

          userCtrl.UserService = UserService;

          Object.assign(userCtrl, {

            resetForms: function(){
              userCtrl.email = null;
              userCtrl.password = null;
              userCtrl.newPassword = null;
              userCtrl.showDropDown = false;
              userCtrl.showForgottenPasswordForm = false;
              userCtrl.showCreateAccountForm = false;
              userCtrl.showLoginPasswordForm = false;
              userCtrl.showChangePasswordForm = false;
              userCtrl.showLoggedInButtons = false;
              if(userCtrl.isLoggedIn()){
                userCtrl.showLoggedInButtons = true;
              }else{
                userCtrl.showLoginPasswordForm = true;
              }
            },

            getCurrentUser: function(){
              return userCtrl.UserService.getCurrentUser();
            },

            isLoggedIn: function(){
              return userCtrl.getCurrentUser() !== null;
            },

            openDropDown: function(){
              userCtrl.showDropDown = true;
            },

            showForgottenPassword: function(){
              userCtrl.showLoginPasswordForm = false;
              userCtrl.showForgottenPasswordForm = true;
            },

            showLoginPassword: function(){
              userCtrl.showForgottenPasswordForm = false;
              userCtrl.showCreateAccountForm = false;
              userCtrl.showLoginPasswordForm = true;
            },

            showCreateAccount: function(){
              userCtrl.showLoginPasswordForm = false;
              userCtrl.showCreateAccountForm = true;
            },

            showChangePassword: function(){
              userCtrl.showLoggedInButtons = false;
              userCtrl.showChangePasswordForm = true;
            },

            changePassword: function(){
              let res = userCtrl.UserService.changePassword(userCtrl.email, userCtrl.password, userCtrl.newPassword);
              if(res){
                userCtrl.resetForms();
              }else{
                alert('Error changing password!');
              }
            },

            resetPassword: function(){
              if(userCtrl.userService.resetPassword(userCtrl.email)){
                userCtrl.resetForms();
              }else{
                alert('Error resetting password!');
              };
            },

            createAccount: function(){
              if(userCtrl.userService.createAccount(userCtrl.email, userCtrl.password)){
                userCtrl.resetForms();
              }else{
                alert('Error creating account!');
              }
            },

            login: function(){
              let res = userCtrl.UserService.login(userCtrl.email, userCtrl.password);
              if(res){
                userCtrl.resetForms();
              }else{
                alert('Error logging in!');
              }
            },

            logout: function(){
              let res = userCtrl.UserService.logout();
              if(res){
                userCtrl.resetForms();
              }
            }

          });

          userCtrl.resetForms();

        }
      ]
    };
  }]);

export const UserControlsCmp = 'UserControlsCmp';
