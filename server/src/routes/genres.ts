import { Router } from 'express'
import { getAllGenres } from '../data/store.js'

const router = Router()

router.get('/', (_req, res) => {
  res.json(getAllGenres())
})

export default router
