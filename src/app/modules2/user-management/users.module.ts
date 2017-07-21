
import { UserService } from './user.service';
import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserControlsCmp } from './user-controls';

@NgModule({
  providers: [],
  imports: [CommonModule, FormsModule],
  declarations: [UserControlsCmp],
  exports: [UserControlsCmp],
  entryComponents: [UserControlsCmp]
})
export class UsersModule{}
