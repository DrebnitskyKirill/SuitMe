const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

// const auth = require('../middleware/authChecker');

const saltRounds = 7;

router.route('/registration')
  .post(async (req, res) => {
    const {
      email, 
      password, 
    } = req.body;
    const thisUser = await User.findOne({ where: { email } });
    if (thisUser) {
      
      res.json({message: 'Такой пользователь уже существует'})
      
    } else {
      const newUser = await User.create({
        email,
        password: (await bcrypt.hash(password, saltRounds)),
        isAdmin: false,
      });
      req.session.user = newUser;
      req.session.uid = newUser.id;
      res.status(200).json(newUser);
    }
  });

module.exports = router;
