import { Router } from 'express'
const productRouter = Router()
productRouter.get("/", (()=>{console.log("productRouter")}))
module.exports = productRouter
