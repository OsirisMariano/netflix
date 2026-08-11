import express from 'express'
import cors from 'cors'
import catalogRouter from './routes/catalog.js'
import moviesRouter from './routes/movies.js'
import genresRouter from './routes/genres.js'
import featuredRouter from './routes/featured.js'
import healthRouter from './routes/health.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/health', healthRouter)
app.use('/api/catalog', catalogRouter)
app.use('/api/movies', moviesRouter)
app.use('/api/genres', genresRouter)
app.use('/api/featured', featuredRouter)

app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

export default app
