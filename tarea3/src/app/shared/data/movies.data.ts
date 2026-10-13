import { Movie } from '../models/movie.model';

/**
 * Colección de películas hardcodeada. No se consulta ninguna API ni base de datos.
 * Los pósters son solo URLs de imagen; si alguna no carga, la directiva
 * `appPosterFallback` muestra una imagen local de respaldo.
 */
const poster = (title: string, color: string): string =>
  `https://placehold.co/400x600/${color}/ffffff/png?text=${encodeURIComponent(title)}`;

export const MOVIES: readonly Movie[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    producer: 'Niki Marvin',
    genre: 'Drama',
    year: 1994,
    description:
      'Un banquero condenado injustamente por asesinato forja una amistad duradera en la prisión de Shawshank y mantiene viva la esperanza durante décadas.',
    poster: poster('The Shawshank Redemption', '1f3a5f'),
  },
  {
    id: 2,
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    producer: 'Albert S. Ruddy',
    genre: 'Crimen',
    year: 1972,
    description:
      'La saga de la familia Corleone, una poderosa dinastía de la mafia, y la transformación de Michael de hijo reticente a nuevo patriarca.',
    poster: poster('The Godfather', '3b1f1f'),
  },
  {
    id: 3,
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    producer: 'Emma Thomas',
    genre: 'Acción',
    year: 2008,
    description:
      'Batman enfrenta al Joker, un criminal caótico que lleva a Gotham al límite y pone a prueba los principios del caballero oscuro.',
    poster: poster('The Dark Knight', '1c1c2e'),
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    producer: 'Lawrence Bender',
    genre: 'Crimen',
    year: 1994,
    description:
      'Varias historias de criminales de Los Ángeles se entrelazan en una narración no lineal llena de diálogos memorables y humor negro.',
    poster: poster('Pulp Fiction', '6b4f0f'),
  },
  {
    id: 5,
    title: 'Inception',
    director: 'Christopher Nolan',
    producer: 'Emma Thomas',
    genre: 'Ciencia ficción',
    year: 2010,
    description:
      'Un ladrón especializado en robar secretos desde los sueños recibe la misión inversa: implantar una idea en la mente de un heredero.',
    poster: poster('Inception', '24476b'),
  },
  {
    id: 6,
    title: 'The Matrix',
    director: 'Lana y Lilly Wachowski',
    producer: 'Joel Silver',
    genre: 'Ciencia ficción',
    year: 1999,
    description:
      'Un programador descubre que la realidad es una simulación creada por máquinas y se une a una rebelión para liberar a la humanidad.',
    poster: poster('The Matrix', '0f3d1f'),
  },
  {
    id: 7,
    title: 'El viaje de Chihiro',
    director: 'Hayao Miyazaki',
    producer: 'Toshio Suzuki',
    genre: 'Animación',
    year: 2001,
    description:
      'Una niña queda atrapada en un mundo de espíritus y debe trabajar en una casa de baños para rescatar a sus padres y volver a casa.',
    poster: poster('El viaje de Chihiro', '5f2a4a'),
  },
  {
    id: 8,
    title: 'Parásitos',
    director: 'Bong Joon-ho',
    producer: 'Kwak Sin-ae',
    genre: 'Thriller',
    year: 2019,
    description:
      'Una familia sin recursos se infiltra poco a poco en la vida de una familia adinerada, con consecuencias inesperadas.',
    poster: poster('Parásitos', '2e4a3a'),
  },
  {
    id: 9,
    title: 'Interstellar',
    director: 'Christopher Nolan',
    producer: 'Lynda Obst',
    genre: 'Ciencia ficción',
    year: 2014,
    description:
      'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.',
    poster: poster('Interstellar', '1a2b3c'),
  },
  {
    id: 10,
    title: 'Coco',
    director: 'Lee Unkrich',
    producer: 'Darla K. Anderson',
    genre: 'Animación',
    year: 2017,
    description:
      'Miguel, un niño que sueña con ser músico, viaja a la Tierra de los Muertos para descubrir la historia de su familia en pleno Día de Muertos.',
    poster: poster('Coco', '7a3b00'),
  },
  {
    id: 11,
    title: 'Mad Max: Furia en el camino',
    director: 'George Miller',
    producer: 'Doug Mitchell',
    genre: 'Acción',
    year: 2015,
    description:
      'En un desierto postapocalíptico, Max y la emperatriz Furiosa huyen de un tirano en una persecución casi ininterrumpida.',
    poster: poster('Mad Max: Furia en el camino', '7a2e00'),
  },
  {
    id: 12,
    title: 'Amélie',
    director: 'Jean-Pierre Jeunet',
    producer: 'Claudie Ossard',
    genre: 'Comedia',
    year: 2001,
    description:
      'Una joven parisina decide mejorar en secreto la vida de quienes la rodean mientras busca su propio camino hacia el amor.',
    poster: poster('Amélie', '6b1f2e'),
  },
  {
    id: 13,
    title: 'El laberinto del fauno',
    director: 'Guillermo del Toro',
    producer: 'Bertha Navarro',
    genre: 'Fantasía',
    year: 2006,
    description:
      'En la España de 1944, una niña descubre un laberinto habitado por un fauno que le encomienda tres pruebas imposibles.',
    poster: poster('El laberinto del fauno', '2b3d1f'),
  },
  {
    id: 14,
    title: 'Roma',
    director: 'Alfonso Cuarón',
    producer: 'Gabriela Rodríguez',
    genre: 'Drama',
    year: 2018,
    description:
      'Un año en la vida de Cleo, empleada doméstica de una familia de clase media en la Ciudad de México de principios de los setenta.',
    poster: poster('Roma', '333333'),
  },
];
