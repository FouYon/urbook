const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const schema = new Schema({
  phone: {
    type: String,
    required: '手机号不能为空'
  },
  password: {
    type: String,
    required: '密码不能为空'
  }
});

mongoose.model('User', schema);
