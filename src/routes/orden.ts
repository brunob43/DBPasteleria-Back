import { Router } from "express"
const  {getOrden}  = require('../controllers/ordenController')

const ordenRouter = Router()

ordenRouter.get('/', getOrden)
module.exports = ordenRouter