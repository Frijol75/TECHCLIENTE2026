import { TestBed } from '@angular/core/testing';

import { EMPTY_FILTERS } from '../models/movie-filters.model';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('returns every movie when no filter is applied', () => {
    expect(service.filter(EMPTY_FILTERS).length).toBe(service.getAll().length);
  });

  it('filters by title ignoring case and accents', () => {
    const result = service.filter({ ...EMPTY_FILTERS, title: 'amelie' });
    expect(result.map((m) => m.title)).toEqual(['Amélie']);
  });

  it('filters by director', () => {
    const result = service.filter({ ...EMPTY_FILTERS, director: 'nolan' });
    expect(result.length).toBeGreaterThan(1);
    expect(result.every((m) => m.director === 'Christopher Nolan')).toBe(true);
  });

  it('filters by genre and year combined', () => {
    const result = service.filter({ ...EMPTY_FILTERS, genre: 'Ciencia ficción', year: '1999' });
    expect(result.map((m) => m.title)).toEqual(['The Matrix']);
  });

  it('returns an empty list when nothing matches', () => {
    expect(service.filter({ ...EMPTY_FILTERS, title: 'zzzz' })).toEqual([]);
  });

  it('finds a movie by id', () => {
    expect(service.getById(1)?.title).toBe('The Shawshank Redemption');
    expect(service.getById(9999)).toBeUndefined();
  });
});
