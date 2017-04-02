const path = require('path')

const db = require(path.resolve('./lib/db'))
const Post = db.model('Post')
const getError = db.getError

module.exports.get = (req, res) => {
  Post.find({})
    .then(docs => {
      docs = docs.sort((a, b) => (a.comments.length < b.comments.length)).slice(0, 9)
      docs = docs.map(doc => ({ text: doc.title, img: `/images/${doc.postBy}?title=${doc.title}&id=0` }))
      return res.json({ message: 'hello', data: docs })
    })
    .catch(err => {
      return res.json({ error: getError(err) })
    })
}
