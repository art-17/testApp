import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegistrationComponent } from 'src/app/admin/registration/registration.component';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  constructor( private commonService:CommonService,private route : Router,private matdialog:MatDialog) { }
menuList=[]
isloading:boolean=true
dialogRef:any
  ngOnInit() {
  }
  public ongetMenu(): void {
    
    const url = `getExploreMenu`
    const params={
      "userRole":"1"
    }
  
    this.subscription.add(this.commonService.postData(url,params).subscribe(data => {
      console.log("data",data)
      this.menuList=data
      this.isloading=false
    }, error => {
    }));
  }
  profiledetails(){
    this.route.navigate(['/admin/my-profile'])
  }
  onNavigation(value){
    switch(value){
      case 'Registration of Admin' :
        this.createAdmin()
        break;
  }
  }
  createAdmin() {
    const title="Create Profile"
    this.dialogRef = this.matdialog.open(RegistrationComponent, {
      width: '750px',
      disableClose: true, 
      panelClass: 'custom-dialog-style-1',
      data: {
        title:title,
        status: status,
      }
    });
    this.dialogRef.componentInstance.submitAction.subscribe(() => {
     
      this.dialogRef.close();
      });
  }
}
