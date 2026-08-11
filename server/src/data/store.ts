import catalogData from './catalog.json' with { type: 'json' }
import type { Catalog } from '../types.js'

const catalog = catalogData as unknown as Catalog

export function getCatalog(): Catalog {
  return catalog
}

export function getFeatured() {
  return catalog.featured
}

export function getAllMovies() {
  return catalog.rows.flatMap((row) => row.items)
}

export function getMovieById(id: string) {
  return getAllMovies().find((movie) => movie.id === id)
}

export function getAllGenres() {
  const genres = new Set<string>()
  for (const movie of getAllMovies()) {
    for (const genre of movie.genres) {
      genres.add(genre)
    }
  }
  return [...genres]
}
