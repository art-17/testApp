import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingCatalogAdminComponent } from './parking-catalog-admin/parking-catalog-admin.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'admin-catalog', component: ParkingCatalogAdminComponent},
  { path: 'my-profile', component: ProfileDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
