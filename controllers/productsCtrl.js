const { response } = require('express');
let Products = require('../models/products');

const index = (req, res, next) => {
  const products = Products.all();
  res.render('views/products/index.html.twig', { products });
  // res.send(products);
};

const form = (req, res, next) => {
  // res.send(`Product.form`);
  const product = Products.find(req.params.id);
  if (req.params.id) {
    res.render('views/products/edit.html.twig', { product });
  } else {
    res.render('views/products/create.html.twig');
  }
};

const show = (req, res, next) => {
  const product = Products.find(req.params.id);
  res.render('views/products/show.html.twig', { product });

  // res.json(product);
};

const create = (req, res, next) => {
  const product = Products.create(req.body);
  res.redirect(`/products/${product.id}`);

  // res.json(product);
};

const update = (req, res, next) => {
  const product = Products.update(req.params.id, req.body);
  res.redirect(`/products/${req.params.id}`);
};

const remove = (req, res, next) => {
  res.redirect('/products');
};

module.exports = { index, show, form, create, update, remove };
