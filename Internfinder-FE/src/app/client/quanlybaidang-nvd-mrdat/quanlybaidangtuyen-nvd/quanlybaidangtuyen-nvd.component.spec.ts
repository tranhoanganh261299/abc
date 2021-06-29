import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybaidangtuyenNvdComponent } from './quanlybaidangtuyen-nvd.component';

describe('QuanlybaidangtuyenNvdComponent', () => {
  let component: QuanlybaidangtuyenNvdComponent;
  let fixture: ComponentFixture<QuanlybaidangtuyenNvdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlybaidangtuyenNvdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybaidangtuyenNvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
