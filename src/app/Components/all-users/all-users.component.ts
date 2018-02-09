import { Component, OnInit } from '@angular/core';
import {RandomService} from '../../randomService';
import {User} from '../../models/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allUsers = [];
  maleUsers = [];
  femaleUsers = [];
  select = 'all';
  query = '';
  selectedUser: User;

  constructor(public service: RandomService) { }

  ngOnInit() {
    this.service.importUsers().subscribe(
      (data) => {
          this.allUsers = data['results'];
          this.service.allUsers = this.allUsers;
          this.service.saveMaleUsers();
          this.service.saveFemaleUsers();
          this.maleUsers =  this.service.maleUsers;
          this.femaleUsers =  this.service.femaleUsers;
      }
    );
  }

  onClick(event) {
    this.select = event;
  }

  onClickUser(event) {
    this.selectedUser = event;
    this.service.selectedUser = event;
  }

  loadMore() {
    this.service.importUsers().subscribe(
      (data) => {
        this.allUsers.push(...data['results']);
        this.service.allUsers = this.allUsers;
        this.service.saveMaleUsers();
        this.service.saveFemaleUsers();
        this.maleUsers =  this.service.maleUsers;
        this.femaleUsers =  this.service.femaleUsers;
      }
    );
  }
}
