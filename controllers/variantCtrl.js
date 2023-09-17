const express = require('express');
const { Variant, Product } = require('../models'); //let might be an issue

const index = async (req, res, next) => {
  // console.log('index view');
  const variants = await Variant.findAll();
  res.render('views/variants/index.html.twig', { variants });
  // console.log('index end');
};

const show = async (req, res, next) => {
  const variant = await Variant.findOne({ id: req.params.id });
  const product = await Product.findByPk(variant.productId);
  res.render('views/variants/show.html.twig', { variant, product });
};

const form = async (req, res, next) => {
  const products = await Product.findAll();
  const id = Number(req.params.id || false);
  const variant = await Variant.findOne({ id: req.params.id });

  res.render('views/variants/form.html.twig', { variant, id, products });
};

const create = async (req, res, next) => {
  const variant = await Variant.create(req.body);

  res.redirect(`/variants/${variant.id}`);
};

const update = async (req, res, next) => {
  const variant = await Variant.findOne({ id: req.params.id });
  await Variant.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  // console.log(variants);
  res.redirect(`/variants/${variant.id}`);
};

const remove = async (req, res, next) => {
  const id = Number(req.params.id);
  await Variant.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.redirect('/variants');
};

module.exports = { index, show, form, create, update, remove };
