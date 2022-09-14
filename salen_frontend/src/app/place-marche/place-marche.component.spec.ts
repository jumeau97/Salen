import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceMarcheComponent } from './place-marche.component';

describe('PlaceMarcheComponent', () => {
  let component: PlaceMarcheComponent;
  let fixture: ComponentFixture<PlaceMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceMarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
