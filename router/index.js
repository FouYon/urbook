const router = require('express').Router();
const Login = require('./api/login');
const Signup = require('./api/signup');
const Comments = require('./api/comments.js');
const Book = require('./api/book.js');
const User = require('./api/user.js');
const Post = require('./api/post');

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
  .get('/api/user', User.get)
  .post('/api/user', User.post);

router
  .get('/api/post', Post.get)
  .post('/api/post', Post.post);

router.get('*', (req, res) => res.redirect('/'));
