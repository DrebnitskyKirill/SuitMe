const router = require('express').Router();
const nodemailer = require('nodemailer');
const { Order, Order_product } = require('../db/models');


router.route('/order')
  .post(async (req, res) => {
    const {
      user_id,
      name,
      address,
      phone,
      start_rent,
      end_rent,
      cart,
      status,
    } = req.body
    const newOrder = await Order.create({
      user_id,
      address,
      name,
      phone,
      status,
      start_rent,
      end_rent,
    })
    let newCart = []
    const newOrderProduct = cart.map(async (el) => {
      const cartString = `${el.name} : ${el.Sizes}`
      newCart.push(cartString)

      await Order_product.create({
        order_id: newOrder.id,
        product_id: el.id,
        size_id: el.Sizes,
      })
    })
    
      const cartJoinString = newCart.join()
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'suitmeelbrus@gmail.com',
          pass: 'eilmansaxkgllxis'
        }
      })


      const mailOptions = {
        from: 'suitmeelbrus@gmail.com',
        to: 'suitmeelbrus@gmail.com',
        subject: "Suit_Me",
        text: "Новый Заказ",
        html: `
     <div>
       <h3>Заказ №${newOrder.id}</h3>
       <h3>Информация о Заказчике:<h3>
       <h5>Заказчик: ${newOrder.name}</h5>
       <h5>Телефон: ${newOrder.phone}</h5>
       <h5>Адрес заказчика: ${newOrder.address}</h5>
       <h3>Информация о заказе:</h3>
       <h5>Наименование и размер: ${cartJoinString}</h5>
       <h5>Начало аренды: ${newOrder.start_rent}</h5>
       <h5>Конец аренды: ${newOrder.end_rent}</h5>
     </div>`,

      }
      transporter.sendMail(mailOptions)
   
    res.status(200).json(newOrder);
  })

module.exports = router;
