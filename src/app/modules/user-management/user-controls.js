
import { UserControlsCmp } from '../../modules2/user-management';
import { downgradeComponent } from '@angular/upgrade/static';

import { UsersModule } from './users.module';

UsersModule
 .directive('userControls', downgradeComponent({component: UserControlsCmp}));
