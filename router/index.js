const router = require('express').Router();
const Login = require('./api/login');
const Logout = require('./api/logout');
const Signup = require('./api/signup');

module.exports = router;

router
  .get('/', (req, res) => res.sendFile('/index.html'));

router
  .post('/api/login', Login.post);

router
  .get('/api/logout', Logout.get);

router
  .post('/api/signup', Signup.post);

router.get('*', (req, res) => res.redirect('/'));
