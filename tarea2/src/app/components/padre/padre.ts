import { Component } from '@angular/core';
import { PanelIzquierdo } from '../panel-izquierdo/panel-izquierdo';
import { PanelDerecho } from '../panel-derecho/panel-derecho';

@Component({
  selector: 'app-padre',
  imports: [PanelIzquierdo, PanelDerecho],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {

  tituloSeleccionado: string = '';

  seleccionarTitulo(titulo: string) {
    this.tituloSeleccionado = titulo;
  }

  limpiarSeleccion() {
    this.tituloSeleccionado = '';
  }
}