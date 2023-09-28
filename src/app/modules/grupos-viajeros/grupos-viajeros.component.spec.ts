import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposViajerosComponent } from './grupos-viajeros.component';

describe('GruposViajerosComponent', () => {
  let component: GruposViajerosComponent;
  let fixture: ComponentFixture<GruposViajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposViajerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruposViajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
