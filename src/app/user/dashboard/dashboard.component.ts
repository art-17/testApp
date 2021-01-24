
import {  Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { DiaologsComponent } from 'src/app/shared/diaologs/diaologs.component';
import { DashboardService } from './service/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {
  mobileQuery: MediaQueryList;
  subscription: Subscription = new Subscription();
  dataSource = new MatTableDataSource<any>();
  monthlyPlanList: any;
  yearlyPlanList: any;
  yearly: any;
  selectGrade: any;
  selectionsub:any;
  selectedgrade:any;
  selected_syllabus:any;
  constructor( private dashboardService: DashboardService, public dialog: MatDialog) {  }
 
  ngOnInit() {
    this.fetchPlan();

  }
  openDialog() {
    const dialogRef = this.dialog.open(DiaologsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  displayedColumns: string[] = ['select', 'valid', 'price', 'total_sessions'];
  // dataSource = ELEMENT_DATA;

  dataList: any;
  
  fetchPlan() {
    
    this.subscription.add(this.dashboardService.getData().subscribe(
      data => {
        // console.log(data)
        console.log(data[0].monthly);
        console.log(data[1].yearly);
        console.log(JSON.stringify(data))
        this.dataList = data;
        // this.dataSource.data = data[0].monthly;
        this.monthlyPlanList = data[0].monthly;
        this.selectGrade = data[0].monthly[0];
        this.yearlyPlanList = data[1].yearly;
        this.yearly = data[1].yearly[0];
        console.log(this.selectedgrade,data[1].yearly)
        this.selectionYearly();
        this.selctionGrade();
      },
      errorMessage => {
      }
    ))
  }
  selctionGrade(){
  //  const data = this.selectGrade.boards.general;
  //  const columndata = []
  //  for (let key in data) {
  //   columndata.push(data[key]);
  // }
  // this.dataSource.data = columndata;
  //   // console.log(this.selectGrade);
  //   console.log(this.dataSource);
  const columndata = []
   for (let pkey in this.selectGrade.boards) {
     console.log(pkey)
   for (let key in this.selectGrade.boards[pkey]) {
    columndata.push(this.selectGrade.boards[pkey][key]);
  }
}
  this.dataSource.data = columndata;
  }
  courses:string[];
  selectedcourse:string = '';
  selectionYearly(){
    this.selectedgrade = this.yearly.boards;
    this.selectionsub = this.yearly.boards.CBSE;
    console.log(this.selectionsub,this.yearly.boards);
    this.courses = Object.keys(this.yearly.boards);
    this.selectedcourse = this.courses[0];
   }
  //  selectedsyllabus(){
  //   if(this.selectionsub && typeof  this.selectionsub.syllabus ==='string'){
  //     const picked = (({ syllabus }) => ({ syllabus}))(this.selectionsub);
  //     this.selected_syllabus =  [{...picked}];
  //     }else if(this.selectionsub){
  //     this.selected_syllabus = this.selectionsub.syllabus;
  //   }else{
  //     this.selected_syllabus = []
  //   }
  //  }
   subfilter(key){
     if(this.selectedgrade){
      this.selectedcourse = key;
      this.selectionsub = this.selectedgrade[key];
      console.log(this.selectionsub)
     }
   }
   
   ngOnDestroy(): void {
    this.subscription.unsubscribe();
 }
}

