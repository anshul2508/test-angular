import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {Store} from '@ngrx/store';
import {getSelectedUser, State} from '../../reducers/index';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  user: User;

  constructor(public router: Router, public store: Store<State>) { }

  ngOnInit() {
    this.store.select(getSelectedUser).subscribe(
      (data) => {
        this.user = data;
      }
    );
  }

  goBack() {
    this.router.navigateByUrl('');
  }

}
