const router = require("express").Router();
const { Product } = require("../../db/models");
const { Product_size } = require("../../db/models");
const { Size } = require("../../db/models");
const { Product_color } = require("../../db/models");
const { Color } = require("../../db/models");
const { Product_activity } = require("../../db/models");
const { Activity } = require("../../db/models");

router.post("/", async (req, res) => {
  const {
    category_id,
    price,
    title,
    amount,
    name,
    size,
    color,
    activity,
  } = req.body;
  const category = Number(category_id);
  const newProduct = await Product.create({
    category_id: category,
    price,
    title,
    name,
    amount,
  });
 
  
const currentActivity = await Activity.findOne({
  where: {
    name: activity
  },
  raw: true
})
const newColor = await Color.create({ name: color });
const newProduct_size = await Product_size.create({
  product_id: newProduct.id,
  size_id: size,
});
const newProduct_color = await Product_color.create({
  product_id: newProduct.id,
  color_id: color,
});
const newProduct_activity = await Product_activity.create({
  product_id: newProduct.id,
  activity_id: currentActivity.id
})
  res.status(201);
});

router.get('/allSize', async (req, res) =>{
  const allSize = await Size.findAll({
    raw: true
  })
  res.json({allSize})
})
router.get('/allColor', async (req, res) =>{
  const allColor = await Color.findAll({
    raw: true
  })
  res.json({allColor})
})
module.exports = router;
