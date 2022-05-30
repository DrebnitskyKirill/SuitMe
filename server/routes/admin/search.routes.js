const router = require("express").Router();
const { Product } = require("../../db/models");

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  const product = await Product.findOne({ where: { name } });
  res.json(product);
});

module.exports = router;
