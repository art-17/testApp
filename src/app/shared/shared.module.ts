import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MaterialModule } from '../material/material.module';
import { LoadingComponent } from './loading/loading.component';
import { NgxShimmerLoadingModule } from  'ngx-shimmer-loading';
import { ToolbarComponent } from './tool-bar/skeleton/toolbar/toolbar.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';


@NgModule({
  declarations: [ToolBarComponent,LoadingComponent, ToolbarComponent,ErrorDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgxShimmerLoadingModule
    
  ],
  exports:[ToolBarComponent],
  entryComponents:[LoadingComponent,ErrorDialogComponent]
 
})
export class SharedModule { }
