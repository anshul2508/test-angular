import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {RandomService} from '../../randomService';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
 @Input() user: User;

  constructor(public router: Router ) { }

  ngOnInit() {
  }

  openFriendList() {
    this.router.navigate(['friend-list']);
  }



}
