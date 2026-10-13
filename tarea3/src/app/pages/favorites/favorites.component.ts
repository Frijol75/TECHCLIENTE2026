import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';
import { Movie } from '../../shared/models/movie.model';
import { FavoritesService } from '../../shared/services/favorites.service';

@Component({
  selector: 'app-favorites',
  imports: [MovieCardComponent, RouterLink],
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent {
  protected readonly favoritesService = inject(FavoritesService);

  /** Al quitar una película, el servicio actualiza el estado y desaparece al instante. */
  onToggleFavorite(movie: Movie): void {
    this.favoritesService.toggle(movie);
  }
}
