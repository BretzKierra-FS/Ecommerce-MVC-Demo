const ProductValidator = (req, res, next) => {
  const { title, descritption, price } = req.body;
  const res.locals.errors = [];

  if ('undefined' === typeof title || !title) {
    errors.push('The product title is required');
  }
  if ('undefined' === typeof descritption || !descritption) {
    errors.push('The product descritption is required');
  }
  if ('undefined' === typeof price || !price) {
    errors.push('The product price is required');
  }
  res.locals.errors = errors;
  next();
};

module.exports = ProductValidator;
