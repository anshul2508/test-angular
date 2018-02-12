import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../reducers/index';
import {SelectedUserUpdateAction} from '../../actions/user';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  @Input() users = [];

  constructor(public store: Store<State>) { }

  ngOnInit() {
  }

  getDetails(user) {
    this.store.dispatch(new SelectedUserUpdateAction(user));
  }




}
