import { Routes } from '@angular/router';

import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MoviesComponent } from './pages/movies/movies.component';

export const routes: Routes = [
  { path: '', component: MoviesComponent, title: 'Películas' },
  { path: 'movies/:id', component: MovieDetailComponent, title: 'Detalle de película' },
  { path: 'favorites', component: FavoritesComponent, title: 'Mis favoritas' },
  { path: '**', redirectTo: '' },
];
