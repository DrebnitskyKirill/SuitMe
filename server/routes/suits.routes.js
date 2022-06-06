const { Product, Activity } = require('../db/models');


const router = require('express').Router();

router.route('/suits')
  .get(async (req, res) => {
    // const newS = await Product.findAll()
    // const allSuits = await Product.findAll({ include: [{ model: Activity, attributes: [1]}]})
    const allSuits = await Product.findAll({ where: { category_id: 1} })
    res.json(allSuits)
  })

module.exports = router
