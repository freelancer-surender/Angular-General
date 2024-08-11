import { Injectable } from '@angular/core';
import { of, delay, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users = [
    { id: 111, name: 'Harry' },
    { id: 222, name: 'Ron' },
    { id: 333, name: 'Sirius' },
  ];

  constructor() {}

  getUser() {
    return of({ id: 222 }).pipe(delay(3000));
    // return of({}).pipe(delay(3000));
  }

  getUserDetail(id: any) {
    let userIndex = this.users.findIndex((user: any) => user.id == id);
    if (userIndex > -1) {
      return of(this.users[userIndex]).pipe(delay(3000));
    }
    return throwError(() => 'User not found');
  }
}
