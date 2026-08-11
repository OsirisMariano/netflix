import { useEffect, useState } from 'react'
import { fetchCatalog, fetchFeatured } from '../api/client'
import type { Catalog, Movie } from '../types'

interface UseCatalogResult {
  featured: Movie | null
  rows: Catalog['rows']
  loading: boolean
  error: string | null
}

export function useCatalog(): UseCatalogResult {
  const [featured, setFeatured] = useState<Movie | null>(null)
  const [rows, setRows] = useState<Catalog['rows']>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    Promise.all([fetchFeatured(), fetchCatalog()])
      .then(([featuredMovie, catalog]) => {
        if (cancelled) return
        setFeatured(featuredMovie)
        setRows(catalog.rows)
      })
      .catch((err: unknown) => {
        if (cancelled) return
        setError(
          err instanceof Error ? err.message : 'Erro ao carregar o catálogo',
        )
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { featured, rows, loading, error }
}
