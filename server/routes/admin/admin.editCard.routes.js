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

router.put("/", async (req, res) => {
  const { id, price, title, amount, name, size, color, activity, photo } =
    req.body;
  console.log(req.body);
  const updatedProduct = await Product.update(req.body, {
    where: { id, price, title, name },
  });


  res.send({ message: "Успешно" });
});

module.exports = router;
