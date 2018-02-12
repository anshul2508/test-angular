import {Component, OnDestroy, OnInit} from '@angular/core';
import {RandomService} from '../../randomService';
import {User} from '../../models/user';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/combineLatest';

import {SearchQueryUpdateAction, UserlistUpdateAction} from '../../actions/user';
import {getSearchQuery, getSelectedUser, getTabSelected, getUserlist, State} from '../../reducers/index';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit, OnDestroy {
  allUsers = [];
  maleUsers = [];
  femaleUsers = [];
  select = 'all';
  query = '';
  selectedUser: User;

  constructor(public service: RandomService, public store: Store<State>) { }

  ngOnInit() {
    this.store.select(getUserlist).subscribe(
      (data) => {
        if (data.length > 0 ) {
          this.allUsers = data;
        }
      }
    );
    this.service.importUsers().subscribe(
      (data1) => {
        if (this.allUsers.length === 0 ) {
          this.allUsers = data1['results'];
          this.store.dispatch( new UserlistUpdateAction(this.allUsers));
          this.maleUsers =  this.service.getMaleUsers(this.allUsers);
          this.femaleUsers = this.service.getFemaleUsers(this.allUsers);
        }
      }
    );
    this.store.select(getSelectedUser).subscribe(
      (data) => {
        if (data !== null ) {
          this.selectedUser = data;
        }
      }
    );
    this.store.select(getTabSelected).subscribe(
      (data) => {
        if (data !== null ) {
          this.select = data;
        }
      }
    );
    this.store.select(getSearchQuery).subscribe(
      (data) => {
        if (data !== null ) {
          this.query = data;
        }
      }
    );

  }


  loadMore() {
    this.service.importUsers().subscribe(
      (data) => {
        this.allUsers.push(...data['results']);
        this.store.dispatch( new UserlistUpdateAction(this.allUsers));
        this.maleUsers =  this.service.getMaleUsers(this.allUsers);
        this.femaleUsers = this.service.getFemaleUsers(this.allUsers);
      }
    );
  }
  ngOnDestroy() {
    this.store.dispatch(new SearchQueryUpdateAction(this.query));
  }


}
