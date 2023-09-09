const express = require('express');
const router = express.Router();
const productRoutes = require('./products');

router.use('/', (req, res) => {
  res.render('home', {
    name: 'Kierra',
    users: [
      { name: 'Kierra Bretz', email: 'kb@fullsail.com' },
      { name: 'Steve Hay', email: 'sh@fullsail.com' },
      { name: 'Hanny Barb', email: 'hb@fullsail.com' },
    ],
  });
});
router.use('/products', productRoutes);

module.exports = router;
