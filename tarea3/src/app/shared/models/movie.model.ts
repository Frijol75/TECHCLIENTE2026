export interface Movie {
  id: number;
  title: string;
  director: string;
  producer: string;
  genre: string;
  year: number;
  description: string;
  /** URL de la imagen del póster (no se sube el archivo, solo se referencia). */
  poster: string;
}
