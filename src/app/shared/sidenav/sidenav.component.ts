import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/user/dashboard/service/dashboard.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  // @ViewChild('drawer') snav;
  mobileQuery: MediaQueryList;
  isExpanded: boolean = true;

  // isExpanded = true;
  showSubmenu: boolean = false;
  // isShowing = false;
  showSubSubMenu: boolean = false;

  constructor(
    public sidenavexpadable: DashboardService,
    private changeDetectorRef: ChangeDetectorRef) {
      

    // this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    if(screen.width <= 768){
      this.sidenavexpadable.isExpanded = false;
    }

  }
  // private _mobileQueryListener: () => void;
  // ngOnDestroy(): void {
  //   this.mobileQuery.removeListener(this._mobileQueryListener);
  // }



	/**
	 * This method is use to open side nav on mobile view
	 */
  openSideNav() {
    if (this.mobileQuery.matches) {
      this.isExpanded = true;
      // this.snav.opened = true;
    }
  }
 
}

