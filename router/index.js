const router = require('express').Router();
const Login = require('./api/login');
const Signup = require('./api/signup');
const Comments = require('./api/comments.js');
const Book = require('./api/book.js');
const User = require('./api/user.js');

module.exports = router;

router
  .get('/', (req, res) => res.sendFile('/index.html'));

router
  .post('/api/login', Login.post);

router
  .post('/api/signup', Signup.post);

router
  .get('/api/comments', Comments.get);

router
  .get('/api/book', Book.get);

router
  .post('/api/user', User.post);

router
  .get('/api/foo', (req, res) => {
    if (req.error) return res.json({ error: req.error });
    res.json({ message: '验证成功' });
  });

router.get('*', (req, res) => res.redirect('/'));
