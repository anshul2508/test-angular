import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {RandomService} from '../../randomService';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  user: User;

  constructor(public router: Router, public service: RandomService) { }

  ngOnInit() {
    this.user = this.service.selectedUser;
  }

  goBack() {
    this.router.navigateByUrl('');
  }

}
