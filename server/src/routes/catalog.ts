import { Router } from 'express'
import { getCatalog } from '../data/store.js'

const router = Router()

router.get('/', (_req, res) => {
  res.json(getCatalog())
})

export default router
