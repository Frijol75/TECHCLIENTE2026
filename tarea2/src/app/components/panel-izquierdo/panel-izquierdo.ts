import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel-izquierdo',
  imports: [],
  templateUrl: './panel-izquierdo.html',
  styleUrl: './panel-izquierdo.css'
})
export class PanelIzquierdo {

  titulos: string[] = [
    'Harry Potter',
    'El Señor de los Anillos',
    'Dune',
    '1984',
    'El Hobbit',
    'Cien años de soledad'
  ];

  tituloSeleccionadoActual: string = '';

  @Output() tituloSeleccionado = new EventEmitter<string>();

  seleccionarTitulo(titulo: string) {
    this.tituloSeleccionadoActual = titulo;
    this.tituloSeleccionado.emit(titulo);
  }
}