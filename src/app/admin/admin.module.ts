import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { ParkingCatalogAdminComponent } from './parking-catalog-admin/parking-catalog-admin.component';


@NgModule({
  declarations: [RegistrationComponent, ProfileDetailsComponent, ParkingCatalogAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule,
    CoreModule
  ],

})
export class AdminModule { }
