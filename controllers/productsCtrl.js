const express = require('express');
const { Product } = require('../models'); //let might be an issue

const index = async (req, res, next) => {
  // console.log('index view');
  const products = await Product.findAll();
  res.render('views/products/index.html.twig', { products });
  // console.log('index end');
};

const show = async (req, res, next) => {
  const product = await Product.findOne({ id: req.params.id });
  res.render('views/products/show.html.twig', { product });
};

const form = async (req, res, next) => {
  const id = Number(req.params.id || false);
  const product = await Product.findOne({ id: req.params.id });

  res.render('views/products/form.html.twig', { product, id });
};

const create = async (req, res, next) => {
  if (res.locals.errors.length) {
    res.render('views/products/form.html.twig', {
      errors: res.locals.errors,
    });
    return true;
  }

  const product = await Product.create(req.body);

  res.redirect(`/products/${product.id}`);
};

const update = async (req, res, next) => {
  const id = typeof req.params === 'undefined' ? false : Number(req.params.id);
  const product = await Product.findOne({ id: req.params.id });

  //If errors dont run update logic
  if (res.locals.errors.length) {
    res.render('views/products/form.html.twig', {
      product,
      id,
      errors: res.locals.errors,
    });
    console.log(res.locals.errors);
    return true;
  }

  await Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  // console.log(products);
  res.redirect(`/products/${product.id}`);
};

const remove = async (req, res, next) => {
  const id = Number(req.params.id);
  await Product.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.redirect('/products');
};

module.exports = { index, show, form, create, update, remove };
