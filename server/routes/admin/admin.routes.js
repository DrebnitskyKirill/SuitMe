const router = require("express").Router();
const {
  Img,
  Product,
  Product_activity,
  Color,
  Product_color,
  Size,
  Product_size,
  Activity,
} = require("../../db/models");

const storageFileupload = require("../../storageFileupload");

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
    photo,
  } = req.body;
  const category = Number(category_id);
  const newProduct = await Product.create({
    category_id: category,
    price,
    title,
    name,
  });
  const newPhoto = await Promise.all(
    photo.map(
      async (el) => await Img.create({ product_id: newProduct.id, name: el })
    )
  );
  const newProduct_size = await Promise.all(
    size.map(
      async (el) =>
        await Product_size.create({
          product_id: newProduct.id,
          size_id: el,
          amount: amount,
        })
    )
  );
  const newProduct_color = await Product_color.create({
    product_id: newProduct.id,
    color_id: color,
    amount: amount,
  });
  const newProduct_activity = await Product_activity.create({
    product_id: newProduct.id,
    activity_id: activity,
  });
  res.status(201);
});

router.get("/allSize", async (req, res) => {
  const allSize = await Size.findAll({
    raw: true,
  });
  res.json({ allSize });
});
router.get("/allColor", async (req, res) => {
  const allColor = await Color.findAll({
    raw: true,
  });
  res.json({ allColor });
});
router.get("/allActivity", async (req, res) => {
  const allActivity = await Activity.findAll({
    raw: true,
  });
  res.json({ allActivity });
});

router.post("/photo", async (req, res) => {
  const file = req.files.homesImg;
  const arrUrl = await Promise.all(
    file.map(async (el) => await storageFileupload(el))
  );
  res.json(arrUrl);
});

module.exports = router;
