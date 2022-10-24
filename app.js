require('dotenv').config();
const express = require('express');
const knex = require('knex');
const { addWhiskey } = require('./controllers/addWhisky');
const { getByCat } = require('./controllers/getByCat');
const { getByName } = require('./controllers/getByName');
const { updateByName } = require('./controllers/updateByName');
const { getByAbv } = require('./controllers/getByAbv');
const { getByDist } = require('./controllers/getByDist');
const { getByAge } = require('./controllers/getByAge');
const { getByProof } = require('./controllers/getByProof');
const whiskey = require('./whiskey');

const db = knex({
  client: 'pg',

  //comment out for local dev and testing
  //Note: rejectUnauthorized: false is not secure, but
  //is acceptable in this case because this project does
  //not handle user data of any kind.
  // connection: {
  //     connectionString: process.env.DATABASE_URL,
  //     ssl: {
  //         rejectUnauthorized: false
  //     }
  // }

  //un-comment for local dev and testing
  connection: {
    host: '127.0.0.1',
    user: 'webdev',
    password: process.env.DB_PASS,
    database: 'whiskeydb',
  },
});

//console.log(whiskey.whiskeys[0]);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HOME
app.get('/', (req, res) => {
  res.json('Welcome to the Whisk(e)y API');
});

//Get Routes
//TODO: get by caskstrength and get by region

//GET - by category
app.get('/category/:category/:sub?', (req, res) => {
  getByCat(req, res, db);
});

//GET - by name
app.get('/name/:name', (req, res) => {
  getByName(req, res, db);
});

//GET - by distillery
app.get('/distillery/:distillery', (req, res) => {
  getByDist(req, res, db);
});

//GET - by abv
app.get('/abv/:comp/:abv', (req, res) => {
  getByAbv(req, res, whiskey.whiskeys);
});

//GET = by proof
app.get('/proof/:comp/:proof', (req, res) => {
  getByProof(req, res, db);
});

//GET = by age
app.get('/age/:comp/:age', (req, res) => {
  getByAge(req, res, db);
});

//Post routes
//Add a whiskey
app.post('/add', (req, res) => {
  addWhiskey(req, res, db);
});

//Put Routes
//Update an entry
app.put('/update/:name', (req, res) => {
  updateByName(req, res, db);
});

//404 message
//TODO - make it nicer with redirect options
app.use((req, res, next) => {
  res.status(404);
  res.json('Page not found');
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
