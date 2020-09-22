import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { ParkingCatalogAdminComponent } from './parking-catalog-admin/parking-catalog-admin.component';
import { NgxShimmerLoadingModule } from  'ngx-shimmer-loading';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistrationComponent, ProfileDetailsComponent, ParkingCatalogAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule,
    CoreModule,
    NgxShimmerLoadingModule,
    ReactiveFormsModule,
    FormsModule
     
  ],
providers:[DatePipe]
})
export class AdminModule { }
