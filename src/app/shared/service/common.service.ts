import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { ServiceapiService } from 'src/app/serviceapi.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  dialogRef:any
  constructor(private apiService:ServiceapiService,private matdialog:MatDialog) { }
  public postData(url, data): Observable<any> {
    return this.apiService.Post(url, data);
  }
  openDialog(msg) {
    if(this.dialogRef !=undefined){
      this.dialogRef.close();
    }
    console.log("msg",msg);
    this.dialogRef = this.matdialog.open(ErrorDialogComponent, {
      width: '300px',
      panelClass: 'error-popup',
      data: {
      
        message: msg,
      
    }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
