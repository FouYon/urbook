const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const schema = new Schema({
});

module.exports = schema;

mongoose.model('Post', schema);
