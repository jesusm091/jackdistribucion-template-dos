import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosSoftComponent } from './modulos-soft.component';

describe('ModulosSoftComponent', () => {
  let component: ModulosSoftComponent;
  let fixture: ComponentFixture<ModulosSoftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulosSoftComponent]
    });
    fixture = TestBed.createComponent(ModulosSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
