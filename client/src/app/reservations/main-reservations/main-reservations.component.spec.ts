import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReservationsComponent } from './main-reservations.component';

describe('MainReservationsComponent', () => {
  let component: MainReservationsComponent;
  let fixture: ComponentFixture<MainReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
