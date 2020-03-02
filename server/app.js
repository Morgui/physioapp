// Enviroment variables
require('dotenv').config()

// Database connection
require('./configs/mongoose.config')

// Application instance
const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/session.config')(app)

// Base Url

app.use('/', require(('./routes/index')))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/appointment', require('./routes/appointment.routes'))


module.exports = app;
