import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MaterialModule } from '../material/material.module';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [ToolBarComponent,LoadingComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[ToolBarComponent],
  entryComponents:[LoadingComponent]
 
})
export class SharedModule { }
