import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemarcherComponent } from './updatemarcher.component';

describe('UpdatemarcherComponent', () => {
  let component: UpdatemarcherComponent;
  let fixture: ComponentFixture<UpdatemarcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemarcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemarcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
