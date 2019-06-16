import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestViewComponent } from './admin-request-view.component';

describe('AdminRequestViewComponent', () => {
  let component: AdminRequestViewComponent;
  let fixture: ComponentFixture<AdminRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
