
import {Component, Directive, ElementRef, Injector, Input, Output, EventEmitter, NgModule} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'navbar',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  template: `
    <style>
      body .navbar {
        background-color: #f1faf6;
      }
    </style>
    
    <div class="navbar navbar-default" role="navigation">
      <div class="navbar-header">
        <a class="navbar-brand" ui-sref="home">Task Master</a>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="nav-item" [class.active]="isActive('/about')"><a href="/about">About</a></li>
        </ul>
        <ul class="nav navbar-nav">
          <li class="nav-item" [class.active]="isActive('/tasks')"><a href="/tasks">Tasks</a></li>
        </ul>
        <ul class="nav navbar-nav">
          <li class="nav-item" [class.active]="isActive('/test')"><a href="/test" ui-sref="tasks">NG2 Test</a></li>
        </ul>
        <user-controls></user-controls>
      </div>
    </div>
  `
})
export class NavBarCmp {
  activeRoute: String;
  constructor(router:Router) {
    router.events
      .subscribe((event: NavigationEnd) => {
        if(event instanceof NavigationEnd){
          this.activeRoute = event.url;
        }
      });
  }

  isActive(testLocation) {
    return testLocation == this.activeRoute;
  };
}
