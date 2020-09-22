import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/shared/service/common.service';
import { Admin } from '../model/admin';
import { AdminService } from '../service/admin.service';

export interface DialogData {
  title: string;
  message: string;
  modalData: any;

}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  @Output() submitAction = new EventEmitter();
  constructor(private adminService:AdminService,private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: DialogData,private datePipe: DatePipe,private commonService:CommonService,private route:Router) { }
  public adminForm: FormGroup;
  public admin: Admin = new Admin();
  public submitted = false;
  ngOnInit() {
    if (this.data.modalData) {
      // this.admin = this.data.modalData;
      this.admin.name=this.data.modalData.name
      this.admin.mobileno=this.data.modalData.mobile
      this.admin.email=this.data.modalData.email
      this.admin.createdDate=this.data.modalData.date
      this.admin.id=this.data.modalData.id
      console.log( this.admin, this.data.modalData)
      
    }
    this.setForm()
  }
  private setForm(): void {
    this.adminForm = this.formBuilder.group({
      name: [this.admin.name || '', Validators.required],
      mobileno: [this.admin.mobileno || '',[Validators.required, Validators.maxLength(15)]],
      email: [this.admin.email || '', [Validators.required,Validators.email]],
     
    });
  }
  get f() { return this.adminForm.controls; }
  public createAdmin(): void {
    this.submitted = true;
    if (this.adminForm.invalid) {
      return;
    }
   
    
    
    let url 
   if( this.data.modalData)
   {
    url = `updateAdminDetails`
   }
   else{
    this.admin.createdDate=this.datePipe.transform(new Date(),"yyyy-MM-dd HH:mm:ss");
    url = `createAdmin`
   }
   const admin = { ...this.admin,...this.adminForm.value}
    console.log(admin)
    // return
    this.subscription.add(this.adminService.postData(url,admin).subscribe(data => {
      console.log("data",data)
     
        this.route.navigate(['/admin/my-profile'])

      this.submitAction.emit()
      
    }, error => {
      this.commonService.openDialog(error)
    }));
  }
}
