import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TucanGuiaComponent } from './tucan-guia.component';

describe('TucanGuiaComponent', () => {
  let component: TucanGuiaComponent;
  let fixture: ComponentFixture<TucanGuiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TucanGuiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TucanGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
