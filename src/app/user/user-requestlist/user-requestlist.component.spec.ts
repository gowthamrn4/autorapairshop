import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequestlistComponent } from './user-requestlist.component';

describe('UserRequestlistComponent', () => {
  let component: UserRequestlistComponent;
  let fixture: ComponentFixture<UserRequestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRequestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
