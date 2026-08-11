import { useRef, useState } from 'react'
import type { CatalogRow } from '../../types'
import { MovieCard } from '../MovieCard/MovieCard'
import styles from './MovieRow.module.css'

interface MovieRowProps {
  row: CatalogRow
}

export function MovieRow({ row }: MovieRowProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const updateArrows = () => {
    const el = scrollerRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 0)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  const scroll = (direction: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  const showRank = row.variant === 'top10'

  return (
    <section className={styles.row} aria-label={row.title}>
      <h2 className={styles.title}>{row.title}</h2>
      <div className={styles.slider}>
        {canLeft && (
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            type="button"
            aria-label="Rolar para a esquerda"
            onClick={() => scroll(-1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        {canRight && (
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            type="button"
            aria-label="Rolar para a direita"
            onClick={() => scroll(1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        <div
          className={styles.scroller}
          ref={scrollerRef}
          onScroll={updateArrows}
        >
          {row.items.map((movie, index) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              index={index}
              showRank={showRank}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
