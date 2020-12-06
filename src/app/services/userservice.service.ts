import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface IUsersEntity {
  id: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private nextId = 1;
  private users: IUsersEntity[] = [];

  constructor() { }

  getAllUsers(): Observable<IUsersEntity[]> {
    return of(this.users);
  }

  createUser(newUsername: string): Observable<IUsersEntity> {
    const newUser: IUsersEntity = {id: this.nextId, username: newUsername};
    if (this.users.find( u => u.username === newUsername)) {
      console.log('user already exists');
    } else {
      this.nextId++;
      this.users.push(newUser);
    }
    return of(newUser);
  }

  getUserById(id: number): Observable<IUsersEntity> {
    return of(this.users.find(u => u.id === id));

  }
}
