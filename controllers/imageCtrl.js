const express = require('express');
const { Image, Variant } = require('../models'); //let might be an issue

const index = async (req, res, next) => {
  // console.log('index view');
  const images = await Image.findAll();
  res.render('views/images/index.html.twig', { images });
  // console.log('index end');
};

const show = async (req, res, next) => {
  try {
    const image = await Image.findOne({ where: { id: req.params.id } });

    if (!image) return res.status(404).send('Image not found');

    const variant = image.variantId
      ? await Variant.findByPk(image.variantId)
      : null;

    res.render('views/images/show.html.twig', { image, variant });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const form = async (req, res, next) => {
  const variants = await Variant.findAll();
  const id = Number(req.params.id || false);
  const image = await Image.findOne({ id: req.params.id });

  res.render('views/images/form.html.twig', { image, id, variants });
};

const create = async (req, res, next) => {
  const image = await Image.create(req.body);
  req.imageId = image.id;
  next();

  res.redirect(`/images/${image.id}`);
};

const update = async (req, res, next) => {
  const image = await Image.findOne({ id: req.params.id });
  await Image.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  req.imageId = id;
  next();
  res.redirect(`/images/${image.id}`);
};

const remove = async (req, res, next) => {
  const id = Number(req.params.id);
  await Image.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.redirect('/images');
};

module.exports = { index, show, form, create, update, remove };
