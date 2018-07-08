import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html'
})

export class UsersListComponent implements OnInit {
  
  users: UserModel[];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.users$.subscribe(users => this.users = users);
  }

  onEdit(user: UserModel) {
    // open profile component with user data
    this.router.navigateByUrl(`users/${ user.id }`);
  }

  onDelete(user: UserModel) {
    this.userService.remove(user);
  }

}