const router = require("express").Router();
const {
  Img,
  Product,
  Product_activity,
  Product_color,
  Product_size,
} = require("../../db/models");
const storageFileupload = require("../../storageFileupload");

router.put("/", async (req, res) => {
  const { id, price, title, amount, name, size, color, activity, photo } =
    req.body;
  const updatedProduct = await Product.update(req.body, {
    where: { name },
  });
  const updatePhoto = await Promise.all(
    photo.map(
      async (el) =>
        await Img.update(req.body, { where: { product_id: id, name: el } })
    )
  );
  const updateProduct_size = await Product_size.update(req.body, {
    where: { product_id: id, size_id: size },
  });

  const updateProduct_color = await Product_color.update(req.body, {
    where: {
      product_id: id,
      color_id: color,
      amount: amount,
    },
  });
  const updateProduct_activity = await Product_activity.update(req.body, {
    where: {
      product_id: id,
      activity_id: activity,
    },
  });
  res.send({ message: "Успешно" });
});
// router.put("/photo", async (req, res) => {
//   const file = req.files?.homesImg;
//   const arrUrl = await Promise.all(
//     file.map(async (el) => await storageFileupload(el))
//   );
//   res.json(arrUrl);
// });
module.exports = router;
