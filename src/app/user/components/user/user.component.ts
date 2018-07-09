import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../../shared/models/user.model';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent {

  @Input() user: UserModel;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  onEditClick(user: UserModel) {
    // open profile component with user data
    this.router.navigateByUrl(`users/${ user.id }`);
  }

  onDeleteClick(user: UserModel) {
    this.userService.remove(user);
  }

}
