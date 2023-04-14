import { Router } from 'express'
import { getOrden } from '../controllers/ordenController'

const router = Router()

router.get('/', getOrden)
module.exports = router
