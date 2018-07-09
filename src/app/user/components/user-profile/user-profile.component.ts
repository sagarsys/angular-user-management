import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserModel } from '../../../shared/models/user.model';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})

export class UserProfileComponent implements OnInit, OnDestroy {

  isEdit: boolean;
  users: UserModel[];
  user: UserModel;

  userForm: FormGroup;
  isSubmit: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.isEdit = !!parseInt(params.get('id'));
        this.userService.getUsers().subscribe(users => {
          this.users = users;
          if (this.isEdit) {
            const index = this.users.findIndex(user => user.id === parseInt(params.get('id')));
            this.user = this.users[index];
          }
        });
        this.setupForm();
      });
  }

  ngOnDestroy() {
    this.isSubmit = false;
  }

  onSave(event: Event, form) {
    event.preventDefault();
    this.isSubmit = true;
    if (form.valid) {
      if (this.isEdit) {
        // edit user
        this.user.name = form.value.name;
        this.user.email = form.value.email;
        // save user
        this.userService.edit(this.user);
      } else {
        // create new user
        this.user = new UserModel();
        this.user.id = (this.users[this.users.length - 1] && this.users[this.users.length - 1].id + 1) || 1;
        this.user.name = form.value.name;
        this.user.email = form.value.email;
        // add user
        this.userService.add(this.user);
      }
      // navigate to users list
      setTimeout(() => this.router.navigateByUrl('/users'), 2000);
    }
    else {
      // hide error message
      setTimeout(() => this.isSubmit = false, 2000);
    }
  }

  private setupForm() {
    this.userForm = this.fb.group({
      name: [
        this.isEdit ? this.user.name : '',
        Validators.required
      ],
      email: [
        this.isEdit ? this.user.email : '',
        [
          Validators.required,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
      ]
    });
  }

}
