import { TestBed } from '@angular/core/testing';

import { MOVIES } from '../data/movies.data';
import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('starts with no favorites', () => {
    expect(service.getFavorites()).toEqual([]);
    expect(service.count()).toBe(0);
  });

  it('adds a favorite and reports it as favorite', () => {
    service.add(MOVIES[0]);
    expect(service.isFavorite(MOVIES[0].id)).toBe(true);
    expect(service.getFavorites()).toEqual([MOVIES[0]]);
  });

  it('does not add the same movie twice', () => {
    service.add(MOVIES[0]);
    service.add(MOVIES[0]);
    expect(service.count()).toBe(1);
  });

  it('removes a favorite', () => {
    service.add(MOVIES[0]);
    service.add(MOVIES[1]);
    service.remove(MOVIES[0].id);
    expect(service.isFavorite(MOVIES[0].id)).toBe(false);
    expect(service.getFavorites()).toEqual([MOVIES[1]]);
  });

  it('toggles a favorite on and off', () => {
    service.toggle(MOVIES[2]);
    expect(service.isFavorite(MOVIES[2].id)).toBe(true);
    service.toggle(MOVIES[2]);
    expect(service.isFavorite(MOVIES[2].id)).toBe(false);
  });
});
