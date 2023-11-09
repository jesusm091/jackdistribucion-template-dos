import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJackComponent } from './modal-jack.component';

describe('ModalJackComponent', () => {
  let component: ModalJackComponent;
  let fixture: ComponentFixture<ModalJackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalJackComponent]
    });
    fixture = TestBed.createComponent(ModalJackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
