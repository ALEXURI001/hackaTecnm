import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresCercanosComponent } from './lugares-cercanos.component';

describe('LugaresCercanosComponent', () => {
  let component: LugaresCercanosComponent;
  let fixture: ComponentFixture<LugaresCercanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresCercanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugaresCercanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
