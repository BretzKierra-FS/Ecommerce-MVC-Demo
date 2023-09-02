const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Page Loaded');
});

app.get('/products/:params', (req, res) => {
  const { params } = req.params;
  const [id, size, color] = params.split('-');
  res.send(`Get Products: ${id}, ${size}, ${color}`);
});

app.get('/products/all', (req, res, next) => {
  const { page, sort, order } = req.headers;
  res.send(`GET Products: ${page}, ${sort}, ${order} `);
});

app.get('/products/:id', (req, res) => {
  res.send(`Get Products: ${req.params.id}`);
});

app.listen(3000);
