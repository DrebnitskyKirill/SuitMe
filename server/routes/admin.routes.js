const router = require('express').Router();
const { Products } = require('../db/models')

router.route('/createProduct')
.get((req, res) => {
  Products.findAll()
    .then((allProducts) => res.json(allProducts))
    .catch((error) => console.log(error));
})
.post((req, res) => {
  Products.create(req.body)
    .then((newProducts) => res.status(201).json(newProducts))
    .catch((error) => res.status(500).json(error));
});
