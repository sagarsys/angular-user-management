import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

import { UserModel } from '../models/user.model';
import { USERS } from '../data/users';

@Injectable()
export class UserService {

  users$: BehaviorSubject<UserModel[]>;
  private users: UserModel[];
  
  constructor(private http: HttpClient) {
    this.users = [];
    this.users$ = new BehaviorSubject(this.users);
    this.fetch();
  }

  public add(user: UserModel) {
    this.users = [...this.users, user];
    this.users$.next(this.users);    
  }

  public remove(user: UserModel) {
    const index = this.find(user);
    if (index < this.users.length - 1 && index !== -1) {
      this.users = [
        ...this.users.slice(0, index), // before the index to update
        ...this.users.slice(index + 1) // after the index to update
      ];
      this.users$.next(this.users);      
    }
  }

  public edit(user: UserModel) {
    const index = this.find(user);
    if (index !== -1) {
      this.users = [
        ...this.users.slice(0, index), // before the index to update
        user, // edited user data
        ...this.users.slice(index + 1) // after the index to update
      ];
      this.users$.next(this.users);      
    }
  } 

  private fetch() {
    // fake http request
    Observable.create((observer: Observer<UserModel[]>) => {
      observer.next(USERS);
      observer.complete();
    }).subscribe(users => {
      this.users = users;
      this.users$.next(this.users);
    });

    // Local file http request not working
    // this.http.get<UserModel[]>('./assets/data/users.json')
    //   .subscribe(users => {
    //     this.users = users;
    //     this.users$.next(this.users);
    //   });
  }

  private find(user: UserModel): number {
    return this.users.findIndex((u) => user.id === u.id);
  }

}

