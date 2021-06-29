import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvienCvComponent } from './sinhvien-cv.component';

describe('SinhvienCvComponent', () => {
  let component: SinhvienCvComponent;
  let fixture: ComponentFixture<SinhvienCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinhvienCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhvienCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
