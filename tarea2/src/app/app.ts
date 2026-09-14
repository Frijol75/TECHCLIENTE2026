import { Component } from '@angular/core';
import { Padre } from './components/padre/padre';

@Component({
  selector: 'app-root',
  imports: [Padre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}