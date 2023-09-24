const ProductValidator = (req, res, next) => {
  const { title, description, price } = req.body;
  res.locals.errors = [];

  if ('undefined' === typeof title || !title) {
    res.locals.errors.push('The product title is required');
  }
  if ('undefined' === typeof description || !description) {
    res.locals.errors.push('The product descritption is required');
  }
  if ('undefined' === typeof price || !price) {
    res.locals.errors.push('The product price is required');
  }

  next();
};

module.exports = ProductValidator;
