import express from 'express'
import morgan from 'morgan'
import { connDB } from '../database/config';

import user = require('./routes/user')
import productos = require('./routes/productos')
import orden = require('./routes/orden')

const server = express()

// Body Parser
server.use(express.json())

// Morgan
server.use(morgan('dev'))

// Routes
server.use('/user', user)
server.use('/productos', productos)
server.use('/orden', orden)

// DB Connection
connDB()

module.exports = server
