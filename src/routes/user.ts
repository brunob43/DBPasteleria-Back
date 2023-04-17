import { Router } from 'express'
const userRouter = Router()
userRouter.get("/", (()=>{console.log("userRouter")}))
module.exports = userRouter
