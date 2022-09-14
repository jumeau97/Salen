import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatPaiementComponent } from './etat-paiement.component';

describe('EtatPaiementComponent', () => {
  let component: EtatPaiementComponent;
  let fixture: ComponentFixture<EtatPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatPaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
