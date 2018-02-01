import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RandomService {

  allUsers = [];
  maleUsers = [];
  femaleUsers = [];

  constructor(private http: HttpClient ) {}

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=50');
  }

  saveAllUsers(users: any[]) {
    this.allUsers = users;
  }

  saveMaleUsers() {
    this.allUsers.forEach(value => {
      if (value.gender === 'male') {
        this.maleUsers.push(value);
      }
    });
    console.log(this.maleUsers);
  }

  saveFemaleUsers() {
    this.allUsers.forEach(value => {
      if (value.gender === 'female') {
        this.femaleUsers.push(value);
      }
    });
    console.log(this.femaleUsers);
  }

  getMaleUsers() {
    return this.maleUsers;
  }

  getFemaleUsers() {
    return this.femaleUsers;
  }

}
