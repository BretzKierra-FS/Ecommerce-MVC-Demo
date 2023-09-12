const express = require('express');
let products = require('../models/products');

const index = (req, res, next) => {
  // console.log('index view');
  res.render('views/products/index.html.twig', { products });
  // console.log('index end');
};

const show = (req, res, next) => {
  const id = Number(req.params.id);
  const product = products.find((p) => Number(p.id) === id);  //Id must consistently stay a number

  res.render('views/products/show.html.twig', { product });
};

const form = (req, res, next) => {
  const id = Number(req.params.id || false);
  const product = id ? products.find((p) => Number(p.id) === id) : {};  

  res.render('views/products/form.html.twig', { product, id });
};

const create = (req, res, next) => {
  const id = products.length + 1;
  const newProduct = { id, ...req.body };
  products.push(newProduct);

  res.redirect(`/products/${id}`);
};

const update = (req, res, next) => {
  const id = Number(req.params.id);
  products = products.map((p) =>
    Number(p.id) === id ? { id, ...p, ...req.body } : p
  );
  // console.log(products);
  res.redirect(`/products/${id}`);
};

const remove = (req, res, next) => {
  const id = Number(req.params.id);
  products = products.filter((p) => Number(p.id) !== id);

  res.redirect('/products');
};

module.exports = { index, show, form, create, update, remove };
