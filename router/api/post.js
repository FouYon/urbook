const path = require('path')

const db = require(path.resolve('./lib/db.js'))
const Post = db.model('Post')
const getError = db.getError

module.exports.get = (req, res) => {
  return res.json({ message: 'success' })
}

module.exports.post = (req, res) => {
  const { title, postBy, content, price, postfiles } = req.body
  const imgs = postfiles.map(f => f.url)
  const preSave = new Post({ title, postBy, content, price, imgs })
  preSave.save()
    .then(() => {
      return res.json({ message: 'success' })
    })
    .catch(err => {
      console.log(err)
      return res.json({ error: getError(err) })
    })
}
