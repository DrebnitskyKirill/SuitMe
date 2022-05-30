const { Product } = require('../db/models');
const router = require('express').Router();

router.route('/allcollection')
  .get(async (req, res) => {
    const shirts = await Product.findAll({ where: { category_id: 1 } })
    const shoes = await Product.findAll({ where: { category_id: 2 } })
    const suits = await Product.findAll({ where: { category_id: 3 } })
    const allProducts = {
      shirts,
      shoes,
      suits
    }
    res.json(allProducts)
  })

module.exports = router
