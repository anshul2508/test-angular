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

  getMaleUsers() {
    return this.maleUsers;
  }

  getFemaleUsers() {
    return this.femaleUsers;
  }



}
