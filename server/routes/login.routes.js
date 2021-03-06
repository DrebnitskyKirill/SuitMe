const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/login')
  .post(async (req, res) => {
    const {
      email,
      password
    } = req.body;

    const thisUser = await User.findOne({ where: { email } });

    if (thisUser && await bcrypt.compare(password, thisUser.password)) {
      req.session.User = thisUser;
      res.status(200).json(thisUser);
    }
    else {
      res.status(404).json({
        message: 'Неверный email или пароль',
      });
    }
  });


module.exports = router;
