import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecouvrementDaysComponent } from './recouvrement-days.component';

describe('RecouvrementDaysComponent', () => {
  let component: RecouvrementDaysComponent;
  let fixture: ComponentFixture<RecouvrementDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecouvrementDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecouvrementDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
