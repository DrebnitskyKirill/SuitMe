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
  const updatedProduct = await Product.update({price, title, amount, name}, {
    where: { id },
  });
  const delImg = await Img.destroy({where:{product_id: id }})
  const createPhoto = await Promise.all(
    photo.map(
      async (el) =>
        await Img.create({ product_id: id ,name:el})
    )
  );
  const updateProduct_size = await Product_size.update({size_id: size},{
    where: { product_id: id },
  });

const updateProduct_color = await Product_color.update({color_id: color}, {
    where: {
      product_id: id
    },
  });
  const updateProduct_activity = await Product_activity.update({activity_id: activity}, {
    where: {
      product_id: id
    },
  });
  res.send({ message: "Успешно" });
});
router.post("/photo", async (req, res) => {
  const file = req.files?.homesImg;
  const arrUrl = await Promise.all(
    file.map(async (el) => await storageFileupload(el))
  );
  res.json(arrUrl);
})
module.exports = router;
