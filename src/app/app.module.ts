import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsernameComponent } from './Components/username/username.component';
import { HeaderBarComponent } from './Components/header-bar/header-bar.component';
import {RandomService} from './randomService';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import {FilterPipe} from './filterPipe';
import { SingleUserComponent } from './Components/single-user/single-user.component';
import {FlexAlignmentHackDirective} from './Directive/flex-alignment-hack';
import {FriendListComponent} from './Components/friend-list/friend-list.component';
import {AllUsersComponent} from './Components/all-users/all-users.component';
import {AppRoutingModule} from './app.routing.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers/index';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    HeaderBarComponent,
    UsernameComponent,
    FilterPipe,
    SingleUserComponent,
    FlexAlignmentHackDirective,
    FriendListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers)

  ],
  providers: [RandomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
