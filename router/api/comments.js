const path = require('path')

const db = require(path.resolve('./lib/db'))
const getError = db.getError
const Post = db.model('Post')

module.exports.get = (req, res) => {
  const { user: postBy, title } = req.query
  Post.findOne({ postBy, title })
    .then(doc => {
      const data = doc.comments.map(c => ({ user: c.commentBy, thumb: `images/${c.commentBy}`, content: c.content, at: c.commentAt }))
      return res.json({ message: 'success', data })
    })
    .catch(err => {
      return res.json({ error: getError(err) })
    })
}

module.exports.post = (req, res) => {
  const { title, user: postBy, comment, commentBy } = req.body
  Post.updateOne({ title, postBy }, {
    $push: { comments: { $each: [{ commentBy, content: comment }] } }
  })
    .then(() => {
      return res.json({ message: '更新成功' })
    })
    .catch(err => {
      console.log(err)
      return res.json({ err: getError(err) })
    })
}
