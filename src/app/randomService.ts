import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user';

@Injectable()
export class RandomService {

  allUsers = [];
  maleUsers = [];
  femaleUsers = [];
  selectedUser: User;

  constructor(private http: HttpClient ) {}

  importUsers() {
    return this.http.get('https://randomuser.me/api/?results=50');
  }


  saveMaleUsers() {
    this.maleUsers = [];
    this.allUsers.forEach(value => {
      if (value.gender === 'male') {
        this.maleUsers.push(value);
      }
    });
  }

  saveFemaleUsers() {
    this.femaleUsers = [];
    this.allUsers.forEach(value => {
      if (value.gender === 'female') {
        this.femaleUsers.push(value);
      }
    });
  }

}
