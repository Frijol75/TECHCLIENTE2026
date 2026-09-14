import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDerecho } from './panel-derecho';

describe('PanelDerecho', () => {
  let component: PanelDerecho;
  let fixture: ComponentFixture<PanelDerecho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelDerecho],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelDerecho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
