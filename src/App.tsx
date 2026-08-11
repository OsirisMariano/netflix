import { Header } from './components/Header/Header'
import { HeroBanner } from './components/HeroBanner/HeroBanner'
import { MovieRow } from './components/MovieRow/MovieRow'
import { Footer } from './components/Footer/Footer'
import { useCatalog } from './hooks/useCatalog'
import styles from './App.module.css'

function App() {
  const { featured, rows, loading, error } = useCatalog()

  return (
    <div className={styles.app}>
      <Header />
      <main>
        {loading && <div className={styles.status}>Carregando catálogo...</div>}
        {!loading && error && (
          <div className={styles.status}>
            <p>Não foi possível carregar o catálogo.</p>
            <p className={styles.errorDetail}>{error}</p>
          </div>
        )}
        {!loading && !error && featured && <HeroBanner movie={featured} />}
        {!loading && !error && (
          <section className={styles.rows}>
            {rows.map((row) => (
              <MovieRow key={row.id} row={row} />
            ))}
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
