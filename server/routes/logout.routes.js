const router = require('express').Router();

router.route('/log') 
.post((req, res) => { 
  req.session.destroy(() => {
    return res.clearCookie('sid').json({ message: 'Session destroy' });
  });
});


module.exports = router;
  