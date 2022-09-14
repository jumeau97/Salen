import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecouveurComponent } from './detail-recouveur.component';

describe('DetailRecouveurComponent', () => {
  let component: DetailRecouveurComponent;
  let fixture: ComponentFixture<DetailRecouveurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRecouveurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecouveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
