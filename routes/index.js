const express = require('express');
const router = express.Router();
const productRoutes = require('./products');
const variantRoutes = require('./variants');
const imageRoutes = require('./images');
const storeRoutes = require('./store');

router.use('/products', productRoutes);
router.use('/variants', variantRoutes);
router.use('/images', imageRoutes);
router.use('/store', storeRoutes);

module.exports = router;
