import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { UsernameComponent } from './username/username.component';
import { LastMessageTimeComponent } from './last-message-time/last-message-time.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import {RandomService} from './randomService';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import {FilterPipe} from './filterPipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePicComponent,
    UsernameComponent,
    LastMessageTimeComponent,
    HeaderBarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,

  ],
  providers: [RandomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
