import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './user/dashboard/dashboard.component';


const routes: Routes = [
  { path:'',redirectTo:'dashborad',pathMatch:'full'},
  // { path: 'login', component: LoginComponent},
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // { path: 'lessor', loadChildren: () => import('./lessor/lessor.module').then(m => m.LessorModule) },
  { path: 'dashborad', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
