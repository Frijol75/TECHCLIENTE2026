import { Injectable } from '@angular/core';

import { MOVIES } from '../data/movies.data';
import { Movie } from '../models/movie.model';
import { MovieFilters } from '../models/movie-filters.model';

/** Quita acentos y pasa a minúsculas para comparar texto de forma tolerante. */
function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private readonly movies: readonly Movie[] = MOVIES;

  getAll(): readonly Movie[] {
    return this.movies;
  }

  getById(id: number): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }

  /** Géneros únicos (ordenados) para poblar el selector de filtros. */
  getGenres(): string[] {
    return [...new Set(this.movies.map((movie) => movie.genre))].sort((a, b) =>
      a.localeCompare(b, 'es'),
    );
  }

  /** Filtra en memoria; los criterios vacíos se ignoran y los demás se combinan (AND). */
  filter(filters: MovieFilters): Movie[] {
    const title = normalize(filters.title);
    const director = normalize(filters.director);
    const producer = normalize(filters.producer);
    const genre = normalize(filters.genre);
    const year = filters.year.trim();

    return this.movies.filter(
      (movie) =>
        normalize(movie.title).includes(title) &&
        normalize(movie.director).includes(director) &&
        normalize(movie.producer).includes(producer) &&
        (genre === '' || normalize(movie.genre) === genre) &&
        String(movie.year).includes(year),
    );
  }
}
