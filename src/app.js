const express = require( 'express' );
const cors = require( 'cors' );

const { urlRoutes } = require( './routes' );

const app = express();

app.use( cors() );
app.use( express.json() );
app.use( '/url', urlRoutes );

module.exports = app;
