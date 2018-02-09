import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FriendListComponent} from './Components/friend-list/friend-list.component';
import {AllUsersComponent} from './Components/all-users/all-users.component';

const appRoutes: Routes = [
  {path: '', component: AllUsersComponent},
  {path: 'friend-list', component: FriendListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
