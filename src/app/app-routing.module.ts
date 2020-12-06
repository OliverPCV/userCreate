import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserCreateComponent} from './user-create/user-create.component';


const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'user.create', component: UserCreateComponent},

  {path: 'user/:id', component: UserDetailComponent},

  {path: '**', redirectTo: 'user.create', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
