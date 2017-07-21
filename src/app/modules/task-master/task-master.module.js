/**
 * Created by pavlovich on 5/9/17.
 */

import * as angular from 'angular';

import { AboutModule } from '../about';
import { UsersModule } from '../user-management';
import { TasksModule } from '../task-management';

export const TaskMasterModule = angular.module('TaskMasterModule', [UsersModule.name, AboutModule.name, TasksModule.name]);
