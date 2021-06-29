import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythongtinTaikhoanEditComponent } from './quanlythongtin-taikhoan-edit.component';

describe('QuanlythongtinTaikhoanEditComponent', () => {
  let component: QuanlythongtinTaikhoanEditComponent;
  let fixture: ComponentFixture<QuanlythongtinTaikhoanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlythongtinTaikhoanEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythongtinTaikhoanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
