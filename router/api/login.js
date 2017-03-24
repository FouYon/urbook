const path = require('path');

const db = require(path.resolve('./lib/db'));
const User = db.model('User');

module.exports.post = (req, res) => {
  const { phone, password } = req.body;
  User
    .findOne({ phone, password })
    .exec((error, doc) => {
      if (error) return res.status(200).json({ error });
      if (!doc) return res.status(200).json({ error: '用户未注册' });
      else return res.status(200).json({ message: '登录成功', phone: doc.phone });
    });
};
