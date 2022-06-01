const { Product, Color, Img, Size, Activity,Category } = require('../db/models');
const router = require('express').Router();

router.route('/allcollection')
  .get(async (req, res) => {
    const allProducts = await Product.findAll({ include: [{ model: Color },{ model: Category }, { model: Img }, { model: Size }, { model: Activity }] })
    const categories = await Category.findAll()
    
    res.json({allProducts,categories})
  })

module.exports = router
