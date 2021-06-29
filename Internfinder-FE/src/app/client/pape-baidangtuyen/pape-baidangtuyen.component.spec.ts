import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapeBaidangtuyenComponent } from './pape-baidangtuyen.component';

describe('PapeBaidangtuyenComponent', () => {
  let component: PapeBaidangtuyenComponent;
  let fixture: ComponentFixture<PapeBaidangtuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapeBaidangtuyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapeBaidangtuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
