require('dotenv').config()

// Imports
const express = require('express');
const connectDB = require('./server/database/connection');

const app = express();
const port = 3000;

// MongoDB connection
connectDB();

// Static files
app.use(express.static('assets'));
app.use('/css', express.static(__dirname + 'assets/css'));
app.use('/js', express.static(__dirname + 'assets/js'));
app.use('/images', express.static(__dirname + 'assets/images'));
app.use(express.json());

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

// Set routers
const router = require('./server/routes/router');
app.use('/', router);

// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));