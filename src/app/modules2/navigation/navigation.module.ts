
import {NgModule} from "@angular/core";
import {NavBarCmp} from "./nav-bar.component";
import {UsersModule} from '../user-management';

@NgModule({
  imports: [UsersModule],
  declarations: [NavBarCmp],
  exports: [NavBarCmp]
})
export class NavigationModule {}
