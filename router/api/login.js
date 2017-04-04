const path = require('path');
const jwt = require('jsonwebtoken');

const db = require(path.resolve('./lib/db'));
const getError = db.getError;
const User = db.model('User');

module.exports.post = (req, res) => {
  const { phone, password, token } = req.body;
  if (token) {
    jwt.verify(token, 'jwt', (err, decoded) => {
      if (err) return res.json({ error: '请重新登录', tokenFail: true });
      else return res.json({ tokenLogin: true, phone: decoded.phone });
    });
  } else {
    User
      .findOne({ phone, password })
      .then(doc => {
        if (!doc) return res.status(200).json({ error: '帐号或密码错误' });
        else {
          const token = jwt.sign({ phone: doc.phone }, 'jwt', { expiresIn: '1h' });
          return res.status(200).json({ message: '登录成功', token, phone });
        }
      })
      .catch(err => {
        return res.json({ error: getError(err) });
      });
  }
};
