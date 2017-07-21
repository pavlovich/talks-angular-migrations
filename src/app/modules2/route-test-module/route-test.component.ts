
import {Component} from '@angular/core';

@Component({
  selector: 'route-test-cmp',
  template: `
    <div class="navbar navbar-default" role="navigation">
      <div class="navbar-collapse collapse">
        <user-controls></user-controls>
      </div>
    </div>
    <div>Hello from the Route Test Component!</div>
  `,
  styles: ['div {text-align: center; padding: 10px; color: white;}']
})
export class RouteTestCmp {}
