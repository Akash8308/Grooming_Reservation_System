import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentdisplayComponent } from './appoinmentdisplay.component';

describe('AppoinmentdisplayComponent', () => {
  let component: AppoinmentdisplayComponent;
  let fixture: ComponentFixture<AppoinmentdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentdisplayComponent]
    });
    fixture = TestBed.createComponent(AppoinmentdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
