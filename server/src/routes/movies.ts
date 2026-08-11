import { Router } from 'express'
import { getAllMovies, getMovieById } from '../data/store.js'

const router = Router()

router.get('/', (req, res) => {
  const { genre, type } = req.query as { genre?: string; type?: string }
  let movies = getAllMovies()

  if (genre) {
    movies = movies.filter((movie) => movie.genres.includes(genre))
  }
  if (type) {
    movies = movies.filter((movie) => movie.type === type)
  }

  res.json(movies)
})

router.get('/:id', (req, res) => {
  const movie = getMovieById(req.params.id)
  if (!movie) {
    res.status(404).json({ error: 'Movie not found' })
    return
  }
  res.json(movie)
})

export default router
