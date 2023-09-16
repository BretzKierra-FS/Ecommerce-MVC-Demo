const express = require('express');
const { Image } = require('../models'); //let might be an issue

const index = async (req, res, next) => {
  // console.log('index view');
  const images = await Image.findAll();
  res.render('views/images/index.html.twig', { images });
  // console.log('index end');
};

const show = async (req, res, next) => {
  const image = await Image.findOne({ id: req.params.id });
  res.render('views/images/show.html.twig', { image });
};

const form = async (req, res, next) => {
  const id = Number(req.params.id || false);
  const image = await Image.findOne({ id: req.params.id });

  res.render('views/images/form.html.twig', { image, id });
};

const create = async (req, res, next) => {
  const image = await Image.create(req.body);

  res.redirect(`/images/${image.id}`);
};

const update = async (req, res, next) => {
  const image = await Image.findOne({ id: req.params.id });
  await Image.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  // console.log(images);
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
