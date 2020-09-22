import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LessorRoutingModule } from './lessor-routing.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProfileDetailsComponent],
  imports: [
    LessorRoutingModule,
    CommonModule,
    SharedModule,
    MaterialModule,
    CoreModule
  ]
})
export class LessorModule { }
