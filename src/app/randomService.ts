import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user';

@Injectable()
export class RandomService {

  constructor(private http: HttpClient ) {}

  importUsers() {
    return this.http.get('https://randomuser.me/api/?results=50');
  }


  getMaleUsers(users: User[]) {
    const maleUsers = [];
    users.forEach(value => {
      if (value.gender === 'male') {
        maleUsers.push(value);
      }
    });
    return maleUsers;
  }

  getFemaleUsers(users: User[]) {
    const femaleUsers = [];
    users.forEach(value => {
      if (value.gender === 'female') {
        femaleUsers.push(value);
      }
    });
    return femaleUsers;
  }

}
