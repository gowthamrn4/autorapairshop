import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingpageComponent } from './admin-landingpage.component';

describe('AdminLandingpageComponent', () => {
  let component: AdminLandingpageComponent;
  let fixture: ComponentFixture<AdminLandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
