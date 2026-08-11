import type { Catalog, Movie } from '../types'

async function get<T>(path: string): Promise<T> {
  const res = await fetch(path)
  if (!res.ok) {
    throw new Error(`API error ${res.status} on ${path}`)
  }
  return res.json() as Promise<T>
}

export function fetchCatalog(): Promise<Catalog> {
  return get('/api/catalog')
}

export function fetchFeatured(): Promise<Movie> {
  return get('/api/featured')
}
