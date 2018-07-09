import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { ROUTES } from '../routes';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserService } from '../shared/services/user.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MomentModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false })
  ],
  declarations: [ UsersListComponent, UserComponent, UserProfileComponent ],
  providers:    [ UserService ]
})
export class UserModule { }
