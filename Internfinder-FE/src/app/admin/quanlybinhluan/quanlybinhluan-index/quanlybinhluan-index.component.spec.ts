import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybinhluanIndexComponent } from './quanlybinhluan-index.component';

describe('QuanlybinhluanIndexComponent', () => {
  let component: QuanlybinhluanIndexComponent;
  let fixture: ComponentFixture<QuanlybinhluanIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlybinhluanIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybinhluanIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
