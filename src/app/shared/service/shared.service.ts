import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from '../loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  LANGUAGE='cz';
  constructor( private matDialog:MatDialog) { }
  showLoader(){
    return this.matDialog.open(LoadingComponent,{
        panelClass: 'my-class'});
}
}
