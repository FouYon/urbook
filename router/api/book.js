const path = require('path');

const db = require(path.resolve('./lib/db'));
const Post = db.model('Post');
const getError = db.getError;

module.exports.get = (req, res) => {
  Post.find()
    .then(docs => {
      const data = docs.map((el) => {
        return {
          user: el.postBy,
          title: el.title,
          thumb: `images/${el.postBy}`,
          extra: `${el.price}元`,
          imgs: el.imgs.map((img, idx) => `/images/${el.postBy}?title=${el.title}&id=${idx}`),
          content: el.content,
          location: el.location,
          comment: 10
        };
      }).reverse();
      return res.json({ message: 'success', data });
    })
    .catch(err => {
      return res.json({ error: getError(err) });
    });
};
