const Express = require('express');
const App = Express();
const PORT = 8000;
const BodyParser = require('body-parser')

App.use(BodyParser.urlencoded({extended : false}));
App.use(BodyParser.json());
App.use(Express.static('public'));

const { Client } = require('pg')

