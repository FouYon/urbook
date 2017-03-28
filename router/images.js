const path = require('path');

const db = require(path.resolve('./lib/db.js'));
const User = db.model('User');

module.exports.get = (req, res) => {
  const phone = req.params.params;
  User.findOne({ 'phone': phone })
    .then(doc => {
      const base64Data = doc.avator.replace(/data:([A-Za-z-+/]+);base64,/, '');
      const extname = doc.avator.substring('data:image/'.length, base64Data.indexOf(';base64'));
      const binary = new Buffer(base64Data, 'base64');
      res.contentType(`image/${extname}`);
      res.send(binary);
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).end('加载失败');
    });
};
