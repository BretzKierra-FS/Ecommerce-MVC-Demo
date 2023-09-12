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
  console.log(product.name);
};

const form = (req, res, next) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  if (req.params.id) {
    res.render('views/products/edit.html.twig', { product, id });
  } else {
    res.render('views/products/create.html.twig');
  }
};

const create = (req, res, next) => {
  const product = Products.create(req.body);
  res.redirect(`/products/${product.id}`);

  // res.json(product);
};

const update = (req, res, next) => {
  const id = Number(req.params.id);
  products.map((p) => {
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
