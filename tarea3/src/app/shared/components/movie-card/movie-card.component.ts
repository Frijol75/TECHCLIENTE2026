import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HoverHighlightDirective } from '../../directives/hover-highlight.directive';
import { PosterFallbackDirective } from '../../directives/poster-fallback.directive';
import { Movie } from '../../models/movie.model';

/** Componente de presentación: recibe datos con @Input y avisa acciones con @Output. */
@Component({
  selector: 'app-movie-card',
  imports: [NgClass, RouterLink, HoverHighlightDirective, PosterFallbackDirective],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input({ required: true }) movie!: Movie;
  @Input() isFavorite = false;
  @Output() favoriteToggle = new EventEmitter<Movie>();

  onToggleFavorite(): void {
    this.favoriteToggle.emit(this.movie);
  }
}
