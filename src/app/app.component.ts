import {Component, OnInit} from '@angular/core';
import {RandomService} from './randomService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users = [];

  constructor(public service: RandomService){}
  ngOnInit() {
    this.service.getUsers().subscribe(
      (data) => {
        this.users = data['results'];
        console.log(this.users[0].picture.thumbnail);
      }
    );
  }
}
