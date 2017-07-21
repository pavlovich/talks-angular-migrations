
import {Component} from '@angular/core';

@Component({
  selector: 'root-cmp',
  template: `    
    <router-outlet></router-outlet>
  `,
  styles: [".angular2-hello {color: white; text-align: center;}"]
})
export class RootCmp {}
