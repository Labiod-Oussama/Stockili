// Description: This file is the entry point of the application
const express = require('express');
const session = require('express-session');

// import libraries
const OTLPException = require('./lib/OTLPException');
const db = require('./database/db');

// Create a new express app
const app = express();

// urlencoded is a middleware that parses the body of the request
app.use(express.urlencoded({ extended: true }));

// session is a middleware that creates a session for the user
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    sameSite: true,
    secure: true
}));

// public is a folder that contains static files
app.use(express.static('public'));

// Set the view engine to pug
app.set('view engine', 'pug');

// View folder
app.set('views', './views');

// no-cache is a middleware that prevents caching
app.use((req, res, next) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Error handling
app.use(OTLPException);

// Routes
app.use('/', async (req, res) => {
    // test the database connection
    let rows = [];
    try {
        rows = await db.query('SELECT * FROM "users"');
    } catch (err) {
        console.log(err);
    }
    return res.send(rows);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
