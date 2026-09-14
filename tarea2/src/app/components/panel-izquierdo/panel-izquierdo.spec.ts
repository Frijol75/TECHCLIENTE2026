import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelIzquierdo } from './panel-izquierdo';

describe('PanelIzquierdo', () => {
  let component: PanelIzquierdo;
  let fixture: ComponentFixture<PanelIzquierdo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelIzquierdo],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelIzquierdo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
