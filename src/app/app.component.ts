import {Component, OnInit} from '@angular/core';
import {RandomService} from './randomService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allUsers = [];
  maleUsers = [];
  femaleUsers = [];
  select: string;

  constructor(public service: RandomService) {}
  ngOnInit() {
    this.service.getUsers().subscribe(
      (data) => {
        this.allUsers = data['results'];
        console.log(this.allUsers);
        this.service.saveAllUsers(this.allUsers);
        this.service.saveMaleUsers();
        this.service.saveFemaleUsers();
        this.maleUsers =  this.service.getMaleUsers();
        this.femaleUsers =  this.service.getFemaleUsers();
      }
    );
  }

  onClick(event) {
    this.select = event;
  }

}
