/** Criterios de búsqueda disponibles en la lista de películas. */
export interface MovieFilters {
  title: string;
  director: string;
  producer: string;
  genre: string;
  year: string;
}

export const EMPTY_FILTERS: MovieFilters = {
  title: '',
  director: '',
  producer: '',
  genre: '',
  year: '',
};
