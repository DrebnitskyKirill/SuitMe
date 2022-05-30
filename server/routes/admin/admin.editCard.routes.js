const router = require("express").Router();
const { Product } = require("../../db/models");

router.put("/", async (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  const updatedProduct = await Product.update(req.body, { where: { id } })
  res.json(updatedProduct)
})

module.exports = router;
