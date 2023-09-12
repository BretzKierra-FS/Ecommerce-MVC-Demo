const express = require('express');
let products = require('../models/products');

const index = (req, res, next) => {
  res.render('views/products/index.html.twig', { products });
  // res.send(products);
};

const show = (req, res, next) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  res.render('views/products/show.html.twig', { product });
};

const form = (req, res, next) => {
  const id =
    typeof req.params.id === 'undefined' ? false : Number(req.params.id);
  const product = id === false ? {} : products.find((p) => p.id == id);
  res.render('views/products/form.html.twig', { product, id });
};

const create = (req, res, next) => {
  const id = products.length + 1;
  products.push({
    id,
    ...req.body,
  });
  res.redirect(`/products/${id}`);
};

const update = (req, res, next) => {
  console.log(req.body);
  const id = Number(req.params.id);
  products = products.map((p) => {
    if (p.id === id) {
      return req.body;
    }
  });
  

  res.redirect(`/products/${id}`);
};

const remove = (req, res, next) => {
  products = products.filter((p) => p.id !== id);
  res.redirect('/products');
};

module.exports = { index, show, form, create, update, remove };
