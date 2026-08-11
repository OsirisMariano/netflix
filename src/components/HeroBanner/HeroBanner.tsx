import type { Movie } from '../../types'
import styles from './HeroBanner.module.css'

interface HeroBannerProps {
  movie: Movie
}

export function HeroBanner({ movie }: HeroBannerProps) {
  return (
    <section className={styles.hero} aria-label="Filme em destaque">
      <img className={styles.background} src={movie.poster} alt="" aria-hidden="true" />
      <div className={styles.shadowVertical} aria-hidden="true" />
      <div className={styles.shadowBottom} aria-hidden="true" />

      <div className={styles.content}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.meta}>
          <span className={styles.match}>{movie.match}% relevante</span>
          <span className={styles.year}>{movie.year}</span>
          <span className={styles.rating}>{movie.rating}</span>
          <span className={styles.duration}>{movie.duration}</span>
        </div>
        <p className={styles.description}>{movie.description}</p>
        <div className={styles.buttons}>
          <button className={styles.playBtn} type="button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 4.5v15l13-7.5L6 4.5Z" fill="currentColor" />
            </svg>
            Assistir Agora
          </button>
          <button className={styles.infoBtn} type="button">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path
                d="M12 11v5M12 8h.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Mais Informações
          </button>
        </div>
      </div>
    </section>
  )
}
