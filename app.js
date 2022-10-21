const express = require('express');
const { addWhiskey } = require('./controllers/addWhisky');
const { getByCat } = require('./controllers/getByCat');
const { getByName } = require('./controllers/getByName');
const { updateByName } = require('./controllers/updateByName');
const { getByAbv } = require('./controllers/getByAbv');
const whiskey = require('./whiskey');

//console.log(whiskey.whiskeys[0]);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HOME
app.get('/', (req, res) => {
  res.json('Welcome to the Whisk(e)y API');
});

//Get Routes

//GET - by category
app.get('/category/:category/:sub?', (req, res) => {
  getByCat(req, res, whiskey.whiskeys);
});

//GET - by name
app.get('/name/:name', (req, res) => {
  getByName(req, res, whiskey.whiskeys);
});

//TODO Get by caskstrength
//GET - by abv
app.get('/abv/:comp/:abv', (req, res) => {
  getByAbv(req, res, whiskey.whiskeys);
});

//GET = by proof
app.get('/proof/:comp/:proof', (req, res) => {
  getByProof(req, res, whiskey.whiskeys);
});

//TODO get by age needs to take NAS into account
//GET = by age
app.get('/age/:comp/:age', (req, res) => {
  getByProof(req, res, whiskey.whiskeys);
});

//Post routes
//Add a whiskey
app.post('/add', (req, res) => {
  addWhiskey(req, res, whiskey.whiskeys);
});

//Put Routes
//Update an entry
app.put('/update/:name', (req, res) => {
  updateByName(req, res, whiskey.whiskeys);
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
