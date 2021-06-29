import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlybinhluanDetailsComponent } from './quanlybinhluan-details.component';

describe('QuanlybinhluanDetailsComponent', () => {
  let component: QuanlybinhluanDetailsComponent;
  let fixture: ComponentFixture<QuanlybinhluanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlybinhluanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlybinhluanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
