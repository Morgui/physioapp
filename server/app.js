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

app.use('/api/auth', require('./routes/auth'))
app.use('/api/appointment', require('./routes/appointment.routes'))
app.use('/api/patients', require('./routes/patient.routes'))
app.use('/api/datacharts', require('./routes/datacharts.routes'))


app.use((req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
