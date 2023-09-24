const { Product, Variant, Image } = require('../models');

const index = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Variant, include: [Image] }],
    });
    res.render('views/store/index.html.twig', { products });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const show = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { slug: req.params.slug },
      include: [{ model: Variant, include: [Image] }],
    });

    if (!product) {
      // handle the case where the product is not found.
      return res.status(404).send('Product not found');
    }

    let variant = product.Variants[0];
    let variants = product.Variants;
    console.log(variants);

    if (req.query.v && product.Variants) {
      variant = product.Variants.find((v) => v.slug === req.query.v);
    }

    res.render('views/store/show.html.twig', { product, variant, variants });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = { index, show };
