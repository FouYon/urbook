const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const schema = new Schema({
  postBy: String,
  postAt: {
    type: Date,
    default: new Date()
  },
  title: {
    type: String,
    required: '书名不能为空'
  },
  price: {
    type: Number,
    required: '价格有误'
  },
  imgs: [String],
  content: {
    type: String,
    required: '描述不能为空'
  },
  location: {
    type: String,
    default: '重庆科技学院'
  },
  comments: [{
    commentBy: {
      type: String,
      required: '评论人不能为空'
    },
    content: {
      type: String,
      required: '评论不能为空'
    },
    commentAt: {
      type: Date,
      default: new Date()
    }
  }]
})

module.exports = schema

mongoose.model('Post', schema)
