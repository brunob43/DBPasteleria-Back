import express from 'express'
import morgan from 'morgan'
// import { connDB } from '../database/config';

const userRouter = require('./routes/user')
const productRouter = require('./routes/productos')
const ordenRouter = require('./routes/orden')

const server = express()

// Body Parser
server.use(express.json())

// Morgan
server.use(morgan('dev'))

// Routes
server.use('/user', userRouter)
server.use('/productos', productRouter)
server.use('/orden', ordenRouter )

// DB Connection
// connDB()

module.exports = server
