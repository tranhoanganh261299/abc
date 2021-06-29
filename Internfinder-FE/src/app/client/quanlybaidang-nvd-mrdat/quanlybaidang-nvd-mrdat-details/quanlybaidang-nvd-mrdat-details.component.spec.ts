import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybaidangNvdMrdatDetailsComponent } from './quanlybaidang-nvd-mrdat-details.component';

describe('QuanlybaidangNvdMrdatDetailsComponent', () => {
  let component: QuanlybaidangNvdMrdatDetailsComponent;
  let fixture: ComponentFixture<QuanlybaidangNvdMrdatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlybaidangNvdMrdatDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybaidangNvdMrdatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
