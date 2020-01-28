const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = 3000;

app.get('/', (req, res) => {
  res.type('html');
  res.status(200);
  res.end("Home page");
});

app.get('/posts', (req, res) => {
  res.type('html');
  res.status(200);
  res.end("Liste des articles");
});

app.post('/posts', (req, res) => {
  res.type('html');
  res.status(201); // Created
  res.end("Article crée");
});

app.get('/posts/:post_id', (req, res) => {
  console.log(req);
  res.type('html');
  res.status(200);
  // res.end("Voici l'article : " + req.params.post_id);
  res.end(`Voici l'article ${req.params.post_id}`);
});


app.listen(port, hostname);
