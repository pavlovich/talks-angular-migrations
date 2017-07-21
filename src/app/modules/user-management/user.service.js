
import { UsersModule } from './users.module';
import { downgradeInjectable } from '@angular/upgrade/static';
import { UserService as NG2UserService } from '../../modules2/user-management';

UsersModule
  .factory('UserService', downgradeInjectable(NG2UserService));

export const UserService = NG2UserService;
