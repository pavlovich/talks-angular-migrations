
import { UserService } from './user.service';
import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  providers: [UserService]
  imports: [CommonModule, FormsModule],
})
export class UsersModule{}
