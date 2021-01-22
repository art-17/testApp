import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  // @ViewChild('drawer') snav;
  mobileQuery: MediaQueryList;
  isExpanded: boolean = true;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
  }
  private _mobileQueryListener: () => void;
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



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

