import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAndMarcheComponent } from './place-and-marche.component';

describe('PlaceAndMarcheComponent', () => {
  let component: PlaceAndMarcheComponent;
  let fixture: ComponentFixture<PlaceAndMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceAndMarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAndMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
