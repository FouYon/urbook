const path = require('path');

const db = require(path.resolve('lib/db'));
const User = db.model('User');

module.exports.post = (req, res) => {
  const { phone, password, chckpass } = req.body;
  if (!phone) return res.status(200).json({ error: '手机格式不正确' });
  if (password !== chckpass) return res.status(200).json({ error: '两次输入密码不一致' });
  User.update({ phone }, { 'password': password }, { upsert: true })
    .then(() => {
      return res.status(200).json({ message: '注册成功' });
    })
    .catch(() => {
      return res.status(200).json({ error: '注册失败' });
    });
};
