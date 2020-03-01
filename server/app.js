require('dotenv').config();

// Database connection
require('./configs/mongoose.config')

// Application instance
const express = require('express')
const app = express();

// Configs
require('./configs/middleware.config')(app)
require('./configs/session.config')(app)

// passport
require('./passport')(app);

// Base Url
const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);


module.exports = app;
