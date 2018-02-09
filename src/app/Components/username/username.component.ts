import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';
import {RandomService} from '../../randomService';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  @Input() users = [];
  @Output() selectedUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(public service: RandomService) { }

  ngOnInit() {
  }

  getDetails(user) {
    this.service.selectedUser = user;
    this.selectedUser.emit(user);
  }




}
