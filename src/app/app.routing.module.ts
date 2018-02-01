import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UsernameComponent} from './username/username.component';

const appRoutes: Routes = [
  {path: 'all', component: AppComponent},
  {path: 'users', component: UsernameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
