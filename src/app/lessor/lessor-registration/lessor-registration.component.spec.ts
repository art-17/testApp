import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessorRegistrationComponent } from './lessor-registration.component';

describe('LessorRegistrationComponent', () => {
  let component: LessorRegistrationComponent;
  let fixture: ComponentFixture<LessorRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessorRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
