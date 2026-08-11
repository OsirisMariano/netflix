import { Router } from 'express'
import { getFeatured } from '../data/store.js'

const router = Router()

router.get('/', (_req, res) => {
  res.json(getFeatured())
})

export default router
