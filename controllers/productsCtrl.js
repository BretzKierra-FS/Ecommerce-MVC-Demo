const Products = require('../models/products');

const index = (req, res, next) => {
  // const products = Products.all();
  // res.send(products);
  

};

const form = (req, res, next) => {
  res.send(`Product.form`);
};

const show = (req, res, next) => {
  const product = Products.find(req.params.id);
  res.json(product);
};

const create = (req, res, next) => {
  const product = Products.create(req.body);
  res.json(product);
};

const update = (req, res, next) => {
  const product = Products.update(req.params.id, req.body);
  res.json(product);
};

const remove = (req, res, next) => {
  const products = Products.remove(req.params.id);
  res.json(products);
};

module.exports = { index, show, form, create, update, remove };
