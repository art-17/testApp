import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/internal/Subscription';
import { ChangePasswordComponent } from 'src/app/core/change-password/change-password.component';
import { CommonService } from 'src/app/shared/service/common.service';
import { RegistrationComponent } from '../registration/registration.component';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  dialogRef: any;
  profiledetails:any
  admindetails=[]
  loading:boolean=true
  private subscription: Subscription = new Subscription();
  constructor(private matdialog: MatDialog,private adminService:AdminService,private commonService:CommonService) { }

  ngOnInit() {
    this.getprofiledetails()
  }
  changePassword() {
    this.dialogRef = this.matdialog.open(ChangePasswordComponent, {
      width: '450px',
      disableClose: true,
      id: '',
      
      data: {
        button_close: "CLOSE",
      }
    });
  }

  editRegistration(status) {
    const title="Edit Profile"
    this.dialogRef = this.matdialog.open(RegistrationComponent, {
      width: '750px',
      disableClose: true, 
      panelClass: 'custom-dialog-style-1',
      data: {
        title:title,
        modalData: this.profiledetails,
        status: status,
      }
    });
    this.dialogRef.componentInstance.submitAction.subscribe(() => {
      this.getprofiledetails()
     
      this.dialogRef.close();
      });
  }

  private getprofiledetails(): void {
    const url = `getAdminDetails`
    const  params={
      "uniqueid":"1001"
      }
    this.subscription.add(this.adminService.postData(url,params).subscribe(data => {
      console.log("data",data)
      this.loading=false
      this.profiledetails=data[0]
      this.admindetails=data[1]
    }, error => {
      this.commonService.openDialog(error)
    }));
  }
}
