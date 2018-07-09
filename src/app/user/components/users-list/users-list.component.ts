import {Component} from '@angular/core';

import {UserModel} from '../../../shared/models/user.model';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html'
})

export class UsersListComponent {

  users: UserModel[];

  constructor(
    public userService: UserService,
  ) {}

}
