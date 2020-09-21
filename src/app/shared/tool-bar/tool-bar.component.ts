import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  constructor( private commonService:CommonService) { }
menuList=[]
  ngOnInit() {
  }
  public ongetMenu(): void {
    
    const url = `getExploreMenu`
    const params={
      "userRole":"0"
    }
    this.subscription.add(this.commonService.postData(url,params).subscribe(data => {
      console.log("data",data)
      this.menuList=data
    }, error => {
    }));
  }
}
