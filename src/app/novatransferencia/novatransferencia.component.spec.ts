import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovatransferenciaComponent } from './novatransferencia.component';

describe('NovatransferenciaComponent', () => {
  let component: NovatransferenciaComponent;
  let fixture: ComponentFixture<NovatransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovatransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovatransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
