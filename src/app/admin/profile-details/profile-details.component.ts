import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ChangePasswordComponent } from 'src/app/core/change-password/change-password.component';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  dialogRef: any;

  constructor(private matdialog: MatDialog) { }

  ngOnInit() {
  }
  changePassword() {
    this.dialogRef = this.matdialog.open(ChangePasswordComponent, {
      disableClose: true,
      id: '',
      data: {
        button_close: "CLOSE",
      }
    });
  }

  editRegistration() {
    this.dialogRef = this.matdialog.open(RegistrationComponent, {
      disableClose: true,
      id: '',
      data: {
        button_close: "CLOSE",
      }
    });
  }
}
