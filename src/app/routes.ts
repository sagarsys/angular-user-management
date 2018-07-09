import { Routes } from '@angular/router';
import { UsersListComponent } from './user/components/users-list/users-list.component';
import { UserProfileComponent } from './user/components/user-profile/user-profile.component';

export const ROUTES: Routes = [
  {
    path: 'users/new',
    component: UserProfileComponent
  },
  {
    path: 'users/:id',
    component: UserProfileComponent
  },
    {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];
