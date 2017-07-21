
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteTestCmp }    from './route-test.component';

const testRoutes: Routes = [
  { path: 'test',  component: RouteTestCmp }
];

@NgModule({
  imports: [
    RouterModule.forChild(testRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestRoutingModule { }
