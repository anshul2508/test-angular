import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../reducers/index';
import {TabSelectedUpdateAction} from '../../actions/user';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  select: string;

  constructor( public store: Store<State>) { }

  ngOnInit() {
  }

  selectAll() {
    this.select = 'all';
    this.store.dispatch(new TabSelectedUpdateAction('all'));
  }

  selectMale() {
    this.select = 'male';
    this.store.dispatch(new TabSelectedUpdateAction('male'));
  }

  selectFemale() {
    this.select = 'female';
    this.store.dispatch(new TabSelectedUpdateAction('female'));
  }


}
