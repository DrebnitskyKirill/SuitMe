const router = require('express').Router();

router.route('/logout') 
.post((req, res) => { 
  req.session.destroy(() => {
    return res.clearCookie('sid').json({ message: 'Session destroy' });
  });
});


module.exports = router;
  