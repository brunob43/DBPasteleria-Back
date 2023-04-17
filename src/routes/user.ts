import { Router } from 'express'
const  {getUsers}  = require('../controllers/userController')
const userRouter = Router()
userRouter.get("/", getUsers)
module.exports = userRouter
