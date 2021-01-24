import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/user/dashboard/service/dashboard.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  
  constructor( public sidenavexpadable: DashboardService) { }
menuList=[]
isloading:boolean=true
  ngOnInit() {
  }

 
}
