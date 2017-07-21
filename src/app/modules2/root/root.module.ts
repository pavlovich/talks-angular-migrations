/**
 * This file defines the root module of the Angular 2+ side of the application.
 */

// import angular framework components
import { NgModule } from '@angular/core';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';

// Import Angular modules/components from there respective files here ...
import { BlankCmp } from './blank.component';
import { RootCmp } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { RouteTestModule } from '../route-test-module';

// We can use this custom URL handling strategy to tell the Angular 2 router to handle only URL starting with 'v2'.
/*
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { return url.toString().startsWith("/v2"); }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}
*/

// Declare our Angular 2 root module.
@NgModule({
  imports: [
    // import standard modules here
    BrowserModule,
    UpgradeModule,

    // import Angular 2 modules/Directives here ...
    RouteTestModule,

    // import the root routing module.
    RootRoutingModule
  ],
  entryComponents: [RootCmp],
  providers: [
    //  Uncomment the line below if you decide to use a prefix-based URL filtering strategy to limit the scope of URLs that the angular 2 router 'sees'.
    // { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],
  bootstrap: [RootCmp],
  declarations: [RootCmp, BlankCmp],
  exports: [RootCmp, BlankCmp]
})
export class RootModule {
  constructor(public upgrade: UpgradeModule){}
}
