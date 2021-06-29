import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTimkiemTrangchuComponent } from './module-timkiem-trangchu.component';

describe('ModuleTimkiemTrangchuComponent', () => {
  let component: ModuleTimkiemTrangchuComponent;
  let fixture: ComponentFixture<ModuleTimkiemTrangchuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTimkiemTrangchuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTimkiemTrangchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
