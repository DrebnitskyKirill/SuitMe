const { Product, Color, Img, Size, Activity, } = require('../db/models');
const router = require('express').Router();

router.route('/allcollection')
  .get(async (req, res) => {
    const shirts = await Product.findAll({ include: [{ model: Color }, { model: Img }, { model: Size }, { model: Activity }], where: { category_id: 1 } })
    const shoes = await Product.findAll({ include: [{ model: Color }, { model: Img }, { model: Size }, { model: Activity }], where: { category_id: 2 } })
    const suits = await Product.findAll({ include: [{ model: Color }, { model: Img }, { model: Size }, { model: Activity }], where: { category_id: 3 } })
    const allProducts = { shirts, shoes, suits }
    res.json(allProducts)
  })

module.exports = router
