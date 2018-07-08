import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from '../../shared/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent {

  @Input() user: UserModel;
  @Output() edit: EventEmitter<UserModel> = new EventEmitter();
  @Output() delete: EventEmitter<UserModel> = new EventEmitter();


  onEditClick(user: UserModel) {
    this.edit.emit(user);
  }

  onDeleteClick(user: UserModel) {
    this.delete.emit(user);
  }

}