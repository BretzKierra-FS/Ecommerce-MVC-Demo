const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Page Loaded');
});

app.get('/products/all', (req, res, next) => {
  const { page, sort, order } = req.headers;
  res.send(`GET Products all: ${page}, ${sort}, ${order} `);
});

app.get('/products/:id-:size-:color', (req, res) => {
  res.send(
    `Get Products: ${req.params.id}, ${req.params.size}, ${req.params.color}`
  );
});

app.get('/products/:id', (req, res) => {
  res.send(`Get Products: ${req.params.id}`);
});

app.listen(3000);
