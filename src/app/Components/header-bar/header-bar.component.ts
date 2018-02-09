import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  @Output() select: EventEmitter<string> = new EventEmitter<string>();

  constructor( ) { }

  ngOnInit() {
  }

  selectAll() {
    this.select.emit('all');
  }

  selectMale() {
    this.select.emit('male');
  }

  selectFemale() {
    this.select.emit('female');
  }

}
