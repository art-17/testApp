import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/service/shared.service';
import { LoginService } from './service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  public loginForm: FormGroup;
  public submitted = false;
  constructor(private route : Router,private loginService:LoginService, private formBuilder: FormBuilder,private sharedService:SharedService) { }

  ngOnInit(): void {
    this.setEmployeeForm()
  }
  private setEmployeeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [ '', Validators.required],
      password: ['', Validators.required],
      
    });
  }
  get f() { return this.loginForm.controls; }
  public onLogin(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const url = `web/authenticate`
    let data= {...this.loginForm.value}
      const config =this.sharedService.showLoader()
      config.disableClose = true;
    
    this.subscription.add(this.loginService.postData(url,data).subscribe(data => {
      config.close()
     this.route.navigate(['/admin/admin-catalog'])
    }, error => {
    }));
  }
}
