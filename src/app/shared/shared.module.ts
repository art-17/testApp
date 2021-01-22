import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MaterialModule } from '../material/material.module';
import { NgxShimmerLoadingModule } from  'ngx-shimmer-loading';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DiaologsComponent } from './diaologs/diaologs.component';


@NgModule({
  declarations: [ToolBarComponent, SidenavComponent, DiaologsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgxShimmerLoadingModule
    
  ],
  exports:[ToolBarComponent],
  entryComponents:[]
 
})
export class SharedModule { }
