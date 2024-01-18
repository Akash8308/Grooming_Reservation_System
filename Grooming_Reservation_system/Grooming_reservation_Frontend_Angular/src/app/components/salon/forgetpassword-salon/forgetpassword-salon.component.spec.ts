import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordSalonComponent } from './forgetpassword-salon.component';

describe('ForgetpasswordSalonComponent', () => {
  let component: ForgetpasswordSalonComponent;
  let fixture: ComponentFixture<ForgetpasswordSalonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetpasswordSalonComponent]
    });
    fixture = TestBed.createComponent(ForgetpasswordSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
