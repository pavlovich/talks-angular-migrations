/**
 * This file defines the root module of the Angular 2 of the application.
 */

// import angular framework components
import {NgModule} from '@angular/core';
import {RouterModule, UrlHandlingStrategy} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {RouterUpgradeInitializer} from '@angular/router/upgrade';

// Import Angular modules/components from there respective files here ...
import { RouteTestCmp } from './route-test.component';
import { TestRoutingModule } from './route-test-routing.module';

// Declare our Angular 2 route test module.
@NgModule({
  imports: [
    // import standard modules here
    BrowserModule,
    UpgradeModule,

    // import Angular 2 modules/Directives here ...


    // import the router module. Note that the Angular 2 router will collect all routes from all the registered modules.
    TestRoutingModule
  ],
  providers: [
    //{ provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],

  declarations: [RouteTestCmp],
  exports: [RouteTestCmp]
})
export class RouteTestModule {
  constructor(){}
  //public ngDoBootstrap() {}
}
