import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

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