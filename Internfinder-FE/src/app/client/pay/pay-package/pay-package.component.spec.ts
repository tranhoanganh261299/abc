import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPackageComponent } from './pay-package.component';

describe('PayPackageComponent', () => {
  let component: PayPackageComponent;
  let fixture: ComponentFixture<PayPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
