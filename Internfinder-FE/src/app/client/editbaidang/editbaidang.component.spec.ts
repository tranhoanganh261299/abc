import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbaidangComponent } from './editbaidang.component';

describe('EditbaidangComponent', () => {
  let component: EditbaidangComponent;
  let fixture: ComponentFixture<EditbaidangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbaidangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbaidangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
