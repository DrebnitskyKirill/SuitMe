const router = require("express").Router();
const {
  Product,
  Color,
  Img,
  Size,
  Activity,
  Category,
} = require("../db/models");

router.route("/allcollection").get(async (req, res) => {
  const allProducts = await Product.findAll({
    include: [
      { model: Color },
      { model: Category },
      { model: Img },
      { model: Size },
      { model: Activity },
    ],
  });
  const categories = await Category.findAll();
  const activiti = await Activity.findAll()
  res.json({ allProducts, categories, activiti });
});

module.exports = router;
