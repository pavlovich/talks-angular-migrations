
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankCmp } from './blank.component';

const rootRoutes: Routes = [
  { path: '**',  component: BlankCmp }
];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RootRoutingModule { }
