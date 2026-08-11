import { useEffect, useState } from 'react'
import styles from './Header.module.css'

const NAV_LINKS = ['Início', 'Séries', 'Filmes', 'Documentários']

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.logo} aria-label="Netflix">
            NETFLIX
          </span>
          <nav className={styles.nav} aria-label="Navegação principal">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link}
                href="#"
                className={index === 0 ? styles.active : undefined}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.right}>
          <button className={styles.iconBtn} type="button" aria-label="Buscar">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className={styles.iconBtn} type="button" aria-label="Notificações">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className={styles.profile} role="img" aria-label="Perfil do usuário">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}
