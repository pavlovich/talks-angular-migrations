// import polyfills
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'

import * as angular from 'angular'
import 'angular-route'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setUpLocationSync } from '@angular/router/upgrade';

// import Angular dependencies
import { RootModule } from './modules2/root/root.module';

// import AngularJS modules
import { AppModule } from './modules/app';

/**
 * We bootstrap the Angular 2 module first, and then, once it's done,
 * bootstrap the Angular 1 module.
 */
platformBrowserDynamic()
  .bootstrapModule(RootModule)
  .then(ref => {
    const upgrade = (ref.instance).upgrade;
    // bootstrap angular1
    upgrade.bootstrap(document.body, [AppModule.name]);
    setUpLocationSync(upgrade);
  });
