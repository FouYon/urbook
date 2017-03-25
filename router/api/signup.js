const path = require('path');

const db = require(path.resolve('lib/db'));
const getError = db.getError;
const User = db.model('User');

module.exports.post = (req, res) => {
  const { phone, password, chckpass } = req.body;
  if (password !== chckpass) return res.status(200).json({ error: '两次输入密码不一致' });
  User.insertMany({ phone, password })
    .then(() => {
      return res.json({ message: '注册成功' });
    })
    .catch(err => {
      return res.json({ error: getError(err) });
    });
};
