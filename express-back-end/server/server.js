require("dotenv").config();
const Express = require('express');
const App = Express();
const PORT = 8000;
const BodyParser = require('body-parser')

App.use(BodyParser.urlencoded({extended : false}));
App.use(BodyParser.json());
App.use(Express.static('public'));

const { Client } = require('pg');

const dbParams = require('../lib/db.js');
const db = new Client(dbParams);
db.connect()
  .then(res => {
    console.log('connected')
  })
  .catch(err => console.log('db connection error', err.stack))

App.get('/', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
