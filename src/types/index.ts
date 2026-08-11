export interface Movie {
  id: string
  title: string
  poster: string
  year: number
  rating: string
  genres: string[]
  match: number
  description: string
  type: 'movie' | 'series'
  duration?: string
}

export interface CatalogRow {
  id: string
  title: string
  variant?: 'top10' | 'default'
  items: Movie[]
}

export interface Catalog {
  featured: Movie
  rows: CatalogRow[]
}
