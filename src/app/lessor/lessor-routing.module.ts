import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessorRegistrationComponent } from './lessor-registration/lessor-registration.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
const routes: Routes = [
    { path: '', component: ProfileDetailsComponent },
    { path: 'my-profile', component: ProfileDetailsComponent },
    { path: 'lessor-registration', component: LessorRegistrationComponent }
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LessorRoutingModule { }
  