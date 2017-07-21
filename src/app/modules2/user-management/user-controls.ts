
import { UserService } from './user.service';
import {Component} from "@angular/core";

@Component({
  selector: 'user-controls',
  template: `
    <style>
      #login-buttons {
        display: inline-block;
        margin-right: 0.2px;
        line-height: 1;
      }
      #login-buttons .login-button {
        position: relative;
      }
      #login-buttons .login-buttons-with-only-one-button {
        display: inline-block;
      }
      #login-buttons .login-buttons-with-only-one-button .login-button {
        display: inline-block;
      }
      #login-buttons .login-buttons-with-only-one-button .login-text-and-button {
        display: inline-block;
      }
      #login-buttons .login-display-name {
        display: inline-block;
        padding-right: 2px;
        line-height: 1.5;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
      #login-buttons .loading {
        line-height: 1;
        width: 16px;
        background-position: center center;
        background-repeat: no-repeat;
      }
      #login-buttons .login-button,
      .accounts-dialog .login-button {
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
        padding: 4px 8px;
        font-size: 80%;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        line-height: 1.5;
        text-align: center;
        color: #fff;
        background: #596595;
        border: 1px solid #464f75;
        border-radius: 4px;
      }
      #login-buttons .login-button:hover,
      .accounts-dialog .login-button:hover {
        background: #7580ac;
      }
      #login-buttons .login-button:active,
      .accounts-dialog .login-button:active {
        background: #7580ac;
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2) inset;
        -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2) inset;
      }
      #login-buttons .login-button.login-button-disabled,
      .accounts-dialog .login-button.login-button-disabled,
      #login-buttons .login-button.login-button-disabled:active,
      .accounts-dialog .login-button.login-button-disabled:active {
        color: #ddd;
        background: #aaa;
        border: 1px solid #c3c3c3;
        box-shadow: none;
        -webkit-box-shadow: none;
      }
      .accounts-dialog * {
        padding: 0;
        margin: 0;
        line-height: inherit;
        color: inherit;
        font: inherit;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
      .accounts-dialog .login-button {
        width: auto;
        margin-bottom: 4px;
      }
      #login-buttons .login-buttons-padding {
        display: inline-block;
        width: 30px;
      }
      #login-buttons .login-display-name {
        margin-right: 4px;
      }
      #login-buttons .configure-button {
        background: #ff2a00;
        border-color: #cc2200;
      }
      #login-buttons .configure-button:active,
      #login-buttons .configure-button:hover {
        background: #ff5533;
        border-color: #ff2a00;
      }
      #login-buttons .login-image {
        display: inline-block;
        position: absolute;
        left: 6px;
        top: 6px;
        width: 16px;
        height: 16px;
      }
      #login-buttons .text-besides-image {
        margin-left: 18px;
      }
      #login-buttons .no-services {
        color: red;
      }
      #login-buttons .login-link-and-dropdown-list {
        position: relative;
      }
      #login-buttons .login-close-text {
        float: left;
        position: relative;
        padding-bottom: 8px;
      }
      #login-buttons .login-text-and-button .loading,
      #login-buttons .login-link-and-dropdown-list .loading {
        display: inline-block;
      }
      #login-buttons.login-buttons-dropdown-align-left #login-dropdown-list .loading {
        float: right;
      }
      #login-buttons.login-buttons-dropdown-align-right #login-dropdown-list .loading {
        float: left;
      }
      #login-buttons .login-close-text-clear {
        clear: both;
      }
      #login-buttons .or {
        text-align: center;
      }
      #login-buttons .hline {
        text-decoration: line-through;
        color: lightgrey;
      }
      #login-buttons .or-text {
        font-weight: bold;
      }
      #login-buttons #signup-link {
        float: right;
      }
      #login-buttons #forgot-password-link {
        float: left;
      }
      #login-buttons #back-to-login-link {
        float: right;
      }
      #login-buttons a,
      .accounts-dialog a {
        cursor: pointer;
        text-decoration: underline;
      }
      #login-buttons.login-buttons-dropdown-align-right .login-close-text {
        float: right;
      }
      .accounts-dialog {
        border: 1px solid #ccc;
        z-index: 1000;
        background: white;
        border-radius: 4px;
        padding: 8px 12px;
        margin: -8px -12px 0 -12px;
        width: 250px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
        font-size: 16px;
        color: #333;
      }
      .accounts-dialog > * {
        line-height: 1.6;
      }
      .accounts-dialog > .login-close-text {
        line-height: inherit;
        font-size: inherit;
        font-family: inherit;
      }
      .accounts-dialog label,
      .accounts-dialog .title {
        font-size: 80%;
        margin-top: 7px;
        margin-bottom: -2px;
      }
      .accounts-dialog label {
        display: inline;
      }
      .accounts-dialog input[type=text],
      .accounts-dialog input[type=email],
      .accounts-dialog input[type=password] {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
      }
      .accounts-dialog input[type=text][type],
      .accounts-dialog input[type=email][type],
      .accounts-dialog input[type=password][type] {
        height: auto;
      }
      .accounts-dialog .login-button-form-submit {
        margin-top: 8px;
      }
      .accounts-dialog .message {
        font-size: 80%;
        margin-top: 8px;
        line-height: 1.3;
      }
      .accounts-dialog .error-message {
        color: red;
      }
      .accounts-dialog .info-message {
        color: green;
      }
      .accounts-dialog .additional-link {
        font-size: 75%;
      }
      .accounts-dialog .accounts-close {
        position: absolute;
        top: 0;
        right: 5px;
        font-size: 20px;
        font-weight: bold;
        line-height: 20px;
        text-decoration: none;
        color: #000;
        opacity: 0.4;
      }
      .accounts-dialog .accounts-close:hover {
        opacity: 0.8;
      }
      .accounts-dialog #login-buttons-cancel-reset-password {
        float: right;
      }
      .accounts-dialog #login-buttons-cancel-enroll-account {
        float: right;
      }
      #login-dropdown-list {
        position: absolute;
        top: -1px;
        left: -1px;
      }
      #login-buttons.login-buttons-dropdown-align-right #login-dropdown-list {
        left: auto;
        right: -1px;
      }
      #login-buttons-message-dialog .message {
        /* we intentionally want it bigger on this dialog since it's the only thing displayed */
        font-size: 100%;
      }
      .accounts-centered-dialog {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        z-index: 1001;
        position: fixed;
        left: 50%;
        margin-left: -129px;
        top: 50%;
        margin-top: -40px;
        /* = approximately -height/2, though height can change */
      }
      #configure-login-service-dialog {
        width: 530px;
        margin-left: -269px;
        margin-top: -300px;
        /* = approximately -height/2, though height can change */
      }
      #configure-login-service-dialog table {
        width: 100%;
      }
      #configure-login-service-dialog input[type=text] {
        width: 100%;
        font-family: "Courier New", Courier, monospace;
      }
      #configure-login-service-dialog ol {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      #configure-login-service-dialog ol li {
        margin-left: 30px;
      }
      #configure-login-service-dialog .configuration_labels {
        width: 30%;
      }
      #configure-login-service-dialog .configuration_inputs {
        width: 70%;
      }
      #configure-login-service-dialog .new-section {
        margin-top: 10px;
      }
      #configure-login-service-dialog .url {
        font-family: "Courier New", Courier, monospace;
      }
      #configure-login-service-dialog-save-configuration {
        float: right;
      }
      .configure-login-service-dismiss-button {
        float: left;
      }
      #just-verified-dismiss-button,
      #messages-dialog-dismiss-button {
        margin-top: 8px;
      }
      .hide-background {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        /* XXX consider replacing with DXImageTransform */
        background-color: #000000;
        /* fallback for IE7-8 */
        background-color: rgba(0, 0, 0, 0.7);
      }
      #login-buttons input[type=text],
      .accounts-dialog input[type=text],
      #login-buttons input[type=email],
      .accounts-dialog input[type=email],
      #login-buttons input[type=password],
      .accounts-dialog input[type=password] {
        padding: 4px;
        border: 1px solid #aaa;
        border-radius: 3px;
        line-height: 1;
      }
      #login-buttons {
        margin-right: 6px;
        color: steelblue;
      }
      #login-buttons a.login-close-text {
        cursor: pointer;
        text-decoration: none;
      }
      .login-close-text {
        line-height: inherit;
        font-size: inherit;
        font-family: inherit;
      }
      .login-buttons a {
        text-decoration: none;
        font-size: 18px;
        color: #36afa5;
      }
      #login-buttons a,
      .accounts-dialog a {
        cursor: pointer;
        text-decoration: none;
      }

    </style>
    <div class="navbar-right navbar-text">

      <div align="right" class="ng-scope">
        <div></div>
        <div id="login-buttons" class="login-buttons-dropdown-align-right">
          <div class="login-link-and-dropdown-list" [class.login-form-forgot-password]="showForgottenPasswordForm" [class.login-form-create-account]="showCreateAccountForm" [class.login-form-sign-in]="showLoginPasswordForm" >
            <span *ngIf="!isLoggedIn()"><a class="login-link-text" id="login-sign-in-link" (click)="openDropDown()">Sign in ▾</a></span>
            <span *ngIf="isLoggedIn()"><a class="login-link-text" id="login-name-link" (click)="openDropDown()">
              {{getCurrentUser().email}} ▾
            </a></span>
            <div id="login-dropdown-list" class="accounts-dialog" style="display: block;" *ngIf="showDropDown">
              <a class="login-close-text" (click)="resetForms()">Close</a>
              <div class="login-close-text-clear"></div>
              <div class="login-form" [class.login-password-form]="showCreateAccountForm" [class.login-password-form]="showLoginPasswordForm">
                <div *ngIf="showForgottenPasswordForm">
                  <div id="forgot-password-email-label-and-input">
                    <label id="forgot-password-email-label" for="forgot-password-email">Email</label>
                    <input id="forgot-password-email" type="email" [(ngModel)]="email">
                  </div>
                  <div class="login-button login-button-form-submit" id="login-buttons-forgot-password" (click)="resetPassword()">
                    Reset password
                  </div>
                </div>
                <div *ngIf="showCreateAccountForm">
                  <div id="login-email-label-and-input">
                    <label id="login-email-label" for="login-email">
                      Email
                    </label>
                    <input id="login-email" type="email" [(ngModel)]="email">
                  </div>
                  <div id="login-password-label-and-input">
                    <label id="login-password-label" for="login-password">
                      Password
                    </label>
                    <input id="login-password" type="password" [(ngModel)]="password" autocomplete="off">
                  </div>
                  <div class="login-button login-button-form-submit" id="login-buttons-password" (click)="createAccount()">
                    Create account
                  </div>
                </div>
                <div *ngIf="showLoginPasswordForm">
                  <div id="login-email-label-and-input">
                    <label id="login-email-label" for="login-email">
                      Email
                    </label>
                    <input id="login-email" type="email" autocomplete="off" [(ngModel)]="email">
                  </div>
                  <div id="login-password-label-and-input">
                    <label id="login-password-label" for="login-password">
                      Password
                    </label>
                    <input id="login-password" type="password" autocomplete="off" [(ngModel)]="password">
                  </div>
                  <div class="login-button login-button-form-submit" id="login-buttons-password" (click)="login()">
                    Sign in
                  </div>
                </div>
                <div *ngIf="showChangePasswordForm">
                  <div id="login-old-password-label-and-input">
                    <label id="login-old-password-label" for="login-old-password">
                      Current Password
                    </label>
                    <input id="login-old-password" type="password" autocomplete="off" [(ngModel)]="password">
                  </div>
                  <div id="login-password-label-and-input">
                    <label id="login-password-label" for="login-password">
                      New Password
                    </label>
                    <input id="login-password" type="password" [(ngModel)]="newPassword">
                  </div>
                  <div class="login-button login-button-form-submit" id="login-buttons-do-change-password" (click)="changePassword()">
                    Change password
                  </div>
                </div>
                <div *ngIf="showLoggedInButtons">
                  <div class="login-button" id="login-buttons-open-change-password" (click)="showChangePassword()">
                    Change password
                  </div>
                  <div class="login-button" id="login-buttons-logout" (click)="logout()">
                    Sign out
                  </div>
                </div>
                <div class="additional-link-container" *ngIf="showForgottenPasswordForm || showCreateAccountForm">
                  <a id="back-to-login-link" class="additional-link" (click)="showLoginPassword()">Sign in</a>
                </div>
                <div class="additional-link-container" *ngIf="showLoginPasswordForm">
                  <a id="signup-link" class="additional-link" (click)="showCreateAccount()">Create account</a>
                </div>
                <div class="additional-link-container" *ngIf="showLoginPasswordForm">
                  <a id="forgot-password-link" class="additional-link" (click)="showForgottenPassword()">Forgot password</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  // templateUrl: './user-controls.html',
  //styles: ['./user-controls.css'],
 // providers: [UserService]
})
export class UserControlsCmp {
  userService: UserService;
  email: string;
  password: string;
  newPassword: string;
  showDropDown: boolean;
  showForgottenPasswordForm: boolean;
  showCreateAccountForm: boolean;
  showLoginPasswordForm: boolean;
  showChangePasswordForm: boolean;
  showLoggedInButtons: boolean;

  constructor(userService: UserService){
    this.userService = userService;
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
    return this.userService.getCurrentUser();
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
    let res = this.userService.changePassword(this.email, this.password, this.newPassword);
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
    let res = this.userService.login(this.email, this.password);
    if(res){
      this.resetForms();
    }else{
      alert('Error logging in!');
    }
  };

  logout(){
    let res = this.userService.logout();
    if(res){
      this.resetForms();
    }
  }

}
