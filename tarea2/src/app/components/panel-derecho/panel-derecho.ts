import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-panel-derecho',
  imports: [],
  templateUrl: './panel-derecho.html',
  styleUrl: './panel-derecho.css'
})
export class PanelDerecho {

  @Input() titulo: string = '';

  @Output() limpiar = new EventEmitter<void>();

  limpiarSeleccion() {
    this.limpiar.emit();
  }
}