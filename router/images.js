const path = require('path');

const db = require(path.resolve('./lib/db.js'));
const getError = db.getError;
const User = db.model('User');
const Post = db.model('Post');

module.exports.get = (req, res) => {
  const phone = req.params.params;
  if (req.query.title) {
    const { title, id } = req.query;
    Post.findOne({ 'postBy': phone, 'title': title })
      .then(doc => {
        if (!doc) return res.status(404).json({ message: '加载失败' });
        const base64Data = doc.imgs[id].replace(/data:([A-Za-z-+/]+);base64,/, '');
        const extname = doc.imgs[id].substring('data:image/'.length, base64Data.indexOf(';base64'));
        const binary = new Buffer(base64Data, 'base64');
        res.contentType(`image/${extname}`);
        res.send(binary);
      })
      .catch(err => {
        return res.json({ error: getError(err) });
      });
  } else {
    User.findOne({ 'phone': phone })
      .then(doc => {
        const base64Data = doc.avator.replace(/data:([A-Za-z-+/]+);base64,/, '');
        const extname = doc.avator.substring('data:image/'.length, base64Data.indexOf(';base64'));
        const binary = new Buffer(base64Data, 'base64');
        res.contentType(`image/${extname}`);
        res.send(binary);
      })
      .catch((err) => {
        return res.status(404).json({ error: getError(err) });
      });
  }
};
