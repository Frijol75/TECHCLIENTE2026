import { NgClass } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PosterFallbackDirective } from '../../shared/directives/poster-fallback.directive';
import { FavoritesService } from '../../shared/services/favorites.service';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  imports: [NgClass, RouterLink, PosterFallbackDirective],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent {
  private readonly moviesService = inject(MoviesService);
  protected readonly favoritesService = inject(FavoritesService);

  /** Parámetro `:id` de la ruta (enlazado con withComponentInputBinding). */
  readonly id = input.required<string>();

  protected readonly movie = computed(() => this.moviesService.getById(Number(this.id())));

  toggleFavorite(): void {
    const movie = this.movie();
    if (movie) {
      this.favoritesService.toggle(movie);
    }
  }
}
