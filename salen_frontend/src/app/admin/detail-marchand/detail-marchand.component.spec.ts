import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMarchandComponent } from './detail-marchand.component';

describe('DetailMarchandComponent', () => {
  let component: DetailMarchandComponent;
  let fixture: ComponentFixture<DetailMarchandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMarchandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMarchandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
