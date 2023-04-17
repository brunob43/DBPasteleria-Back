import { Router } from 'express'
const  {getProducts}  = require('../controllers/productosController')
const productRouter = Router()
productRouter.get("/", getProducts)
module.exports = productRouter
