const mongoose = require('mongoose');
const path = require('path');
const uniqueValidater = require('mongoose-unique-validator');
const fs = require('fs');

var URI = '';

if (process.env.MONGODB_CONNECTION) {
  URI = 'mongodb://' + process.env.MONGODB_CONNECTION;
} else {
  URI = 'mongodb://0.0.0.0:27017/shutao';
}

mongoose.connect(URI);

const modelFiles = fs.readdirSync(path.resolve('lib/models'));
// 加载model以及注册插件
modelFiles.forEach(file => {
  var schema = require(path.resolve(`lib/models/${file}`));
  schema.plugin(uniqueValidater);
});

module.exports = mongoose;

module.exports.getError = (err) => {
  var message = '';
  for (const errName in err.errors) {
    if (err.errors[errName].message) {
      message = err.errors[errName].message;
    }
  }
  return message;
};
