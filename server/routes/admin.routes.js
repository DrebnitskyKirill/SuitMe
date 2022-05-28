const router = require('express').Router();
const { Product } = require('../db/models')
  
// router.get('/', async (req, res) => {
//   const allProduct = Product.findAll({
//     raw: true
//   })
//   res.json(allProduct)
// })
router.post('/', async (req, res) => {
  const { id, price, title, amount, name, img } = req.body
  console.log(req.body);
   const newProduct = await Product.create(req.body)
    res.status(201).json(newProduct)
})


module.exports = router;
