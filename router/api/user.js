const path = require('path');

const db = require(path.resolve('./lib/db'));
const getError = db.getError;
const User = db.model('User');

module.exports.post = (req, res) => {
  const { phone, url, name, brief } = req.body;
  User.update({ 'phone': phone }, {
    $set: { 'avator': url, 'name': name, 'brief': brief }
  })
    .then(() => {
      return res.json({ message: '更新成功' });
    })
    .catch(err => {
      return res.json({ error: getError(err) });
    });
};

module.exports.get = (req, res) => {
  const { phone } = req.query;
  User.findOne({ phone })
    .then(doc => {
      return res.json({ message: 'success', data: doc });
    })
    .catch(err => {
      return res.json({ error: getError(err) });
    });
};
