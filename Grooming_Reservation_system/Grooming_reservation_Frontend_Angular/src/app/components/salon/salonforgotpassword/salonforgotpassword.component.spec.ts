import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonforgotpasswordComponent } from './salonforgotpassword.component';

describe('SalonforgotpasswordComponent', () => {
  let component: SalonforgotpasswordComponent;
  let fixture: ComponentFixture<SalonforgotpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonforgotpasswordComponent]
    });
    fixture = TestBed.createComponent(SalonforgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
