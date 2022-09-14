import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMarchandComponent } from './update-marchand.component';

describe('UpdateMarchandComponent', () => {
  let component: UpdateMarchandComponent;
  let fixture: ComponentFixture<UpdateMarchandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMarchandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMarchandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
