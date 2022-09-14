import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPlaceComponent } from './details-place.component';

describe('DetailsPlaceComponent', () => {
  let component: DetailsPlaceComponent;
  let fixture: ComponentFixture<DetailsPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
