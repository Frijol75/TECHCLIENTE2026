import { Component, EventEmitter, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { EMPTY_FILTERS, MovieFilters } from '../../models/movie-filters.model';

/** Formulario reactivo de filtros. Emite los criterios cada vez que cambian. */
@Component({
  selector: 'app-movie-filters',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-filters.component.html',
  styleUrl: './movie-filters.component.css',
})
export class MovieFiltersComponent {
  @Input() genres: readonly string[] = [];
  @Output() filtersChange = new EventEmitter<MovieFilters>();

  readonly form = new FormGroup({
    title: new FormControl(EMPTY_FILTERS.title, { nonNullable: true }),
    director: new FormControl(EMPTY_FILTERS.director, { nonNullable: true }),
    producer: new FormControl(EMPTY_FILTERS.producer, { nonNullable: true }),
    genre: new FormControl(EMPTY_FILTERS.genre, { nonNullable: true }),
    year: new FormControl(EMPTY_FILTERS.year, { nonNullable: true }),
  });

  constructor() {
    this.form.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.filtersChange.emit(this.form.getRawValue()));
  }

  reset(): void {
    this.form.reset();
  }
}
