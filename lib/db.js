const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

var URI = '';

if (process.env.MONGODB_CONNECTION) {
  URI = 'mongodb://' + process.env.MONGODB_CONNECTION;
} else {
  URI = 'mongodb://0.0.0.0:27017/shutao';
}

mongoose.connect(URI);

const modelFiles = fs.readdirSync(path.resolve('lib/models'));
modelFiles.forEach(file => require(path.resolve(`lib/models/${file}`)));

module.exports = mongoose;
