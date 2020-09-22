import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
const routes: Routes = [
    { path: '', component: ProfileDetailsComponent },
    { path: 'my-profile', component: ProfileDetailsComponent }

  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LessorRoutingModule { }
  