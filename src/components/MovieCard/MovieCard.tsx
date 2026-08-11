import type { CSSProperties } from 'react'
import type { Movie } from '../../types'
import styles from './MovieCard.module.css'

interface MovieCardProps {
  movie: Movie
  index?: number
  showRank?: boolean
}

export function MovieCard({ movie, index = 0, showRank = false }: MovieCardProps) {
  const style = {
    '--rank': index + 1,
  } as CSSProperties

  return (
    <div className={`${styles.card} ${showRank ? styles.withRank : ''}`} style={style}>
      {showRank && (
        <span className={styles.rank} aria-hidden="true">
          {index + 1}
        </span>
      )}
      <div className={styles.posterWrap}>
        <img src={movie.poster} alt={movie.title} loading="lazy" />
        <button
          className={styles.playOverlay}
          type="button"
          aria-label={`Assistir ${movie.title}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 4.5v15l13-7.5L6 4.5Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  )
}
