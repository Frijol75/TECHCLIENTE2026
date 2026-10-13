import { Component, computed, inject, signal } from '@angular/core';

import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';
import { MovieFiltersComponent } from '../../shared/components/movie-filters/movie-filters.component';
import { EMPTY_FILTERS, MovieFilters } from '../../shared/models/movie-filters.model';
import { Movie } from '../../shared/models/movie.model';
import { FavoritesService } from '../../shared/services/favorites.service';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-movies',
  imports: [MovieCardComponent, MovieFiltersComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  private readonly moviesService = inject(MoviesService);
  protected readonly favoritesService = inject(FavoritesService);

  protected readonly genres = this.moviesService.getGenres();
  protected readonly total = this.moviesService.getAll().length;

  private readonly filters = signal<MovieFilters>(EMPTY_FILTERS);
  protected readonly movies = computed(() => this.moviesService.filter(this.filters()));

  onFiltersChange(filters: MovieFilters): void {
    this.filters.set(filters);
  }

  onToggleFavorite(movie: Movie): void {
    this.favoritesService.toggle(movie);
  }
}
