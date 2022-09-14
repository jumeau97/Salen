import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDayPayComponent } from './detail-day-pay.component';

describe('DetailDayPayComponent', () => {
  let component: DetailDayPayComponent;
  let fixture: ComponentFixture<DetailDayPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDayPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDayPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
