const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = 3000;

// Page d'accueil
app.get('/', (req, res) => {
  res.type('html');
  res.status(200);
  res.end("Home page");
});

// Liste tout les articles
app.get('/posts', (req, res) => {
  res.type('html');
  res.status(200);
  res.end("Liste des articles");
});

// Crée un article
app.post('/posts', (req, res) => {
  res.type('html');
  res.status(201); // Created
  res.end("Article crée");
});

// Affiche un seul article
app.get('/posts/:post_id', (req, res) => {
  console.log(req);
  res.type('html');
  res.status(200);
  // res.end("Voici l'article : " + req.params.post_id);
  res.end(`Voici l'article ${req.params.post_id}`);
});


app.listen(port, hostname);
