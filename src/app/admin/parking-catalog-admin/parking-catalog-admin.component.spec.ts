import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingCatalogAdminComponent } from './parking-catalog-admin.component';

describe('ParkingCatalogAdminComponent', () => {
  let component: ParkingCatalogAdminComponent;
  let fixture: ComponentFixture<ParkingCatalogAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingCatalogAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingCatalogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
