import { Injectable, computed, signal } from '@angular/core';

import { Movie } from '../models/movie.model';

/**
 * Única fuente de verdad de las películas favoritas.
 * El estado vive solo en memoria (un signal): se pierde al recargar la aplicación,
 * tal como lo pide la tarea (sin LocalStorage, SessionStorage, cookies ni backend).
 */
@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly _favorites = signal<readonly Movie[]>([]);

  /** Lista reactiva de favoritos (solo lectura). */
  readonly favorites = this._favorites.asReadonly();
  readonly count = computed(() => this._favorites().length);

  getFavorites(): readonly Movie[] {
    return this._favorites();
  }

  add(movie: Movie): void {
    if (this.isFavorite(movie.id)) {
      return;
    }
    this._favorites.update((list) => [...list, movie]);
  }

  remove(movieId: number): void {
    this._favorites.update((list) => list.filter((movie) => movie.id !== movieId));
  }

  isFavorite(movieId: number): boolean {
    return this._favorites().some((movie) => movie.id === movieId);
  }

  toggle(movie: Movie): void {
    if (this.isFavorite(movie.id)) {
      this.remove(movie.id);
    } else {
      this.add(movie);
    }
  }
}
