import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaologsComponent } from './diaologs.component';

describe('DiaologsComponent', () => {
  let component: DiaologsComponent;
  let fixture: ComponentFixture<DiaologsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaologsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaologsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
