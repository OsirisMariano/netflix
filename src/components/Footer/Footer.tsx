import styles from './Footer.module.css'

const LINK_COLUMNS = [
  ['Audio Description', 'Investor Relations', 'Legal Notices'],
  ['Help Center', 'Jobs', 'Cookie Preferences'],
  ['Gift Cards', 'Terms of Use', 'Corporate Information'],
  ['Media Center', 'Privacy', 'Contact Us'],
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.5 21v-7h2.5l.5-3h-3V9c0-.9.3-1.5 1.6-1.5H16.6V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.2H7.5v3H10.2v7h3.3Z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter / X">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.6 3h3.1l-6.8 7.8L21.7 21h-6.3l-4.9-6.4L4.9 21H1.8l7.3-8.3L2.4 3h6.4l4.4 5.9L17.6 3Zm-1.1 16.2h1.7L7.6 4.7H5.8l10.7 14.5Z" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26.4 26.4 0 0 0 2 12a26.4 26.4 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26.4 26.4 0 0 0 22 12a26.4 26.4 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
            </svg>
          </a>
        </div>

        <div className={styles.columns}>
          {LINK_COLUMNS.map((column) => (
            <ul key={column[0]} className={styles.column}>
              {column.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <button className={styles.serviceBtn} type="button">
          Código de serviço
        </button>

        <p className={styles.copyright}>
          © 1997–2026 Netflix Clone. Interface de demonstração, sem vínculo com a
          Netflix, Inc.
        </p>
      </div>
    </footer>
  )
}
