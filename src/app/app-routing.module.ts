import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from './admin/profile-details/profile-details.component';
import { LoginComponent } from './core/login/login.component';


const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // { path: 'my-profile', component: ProfileDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
