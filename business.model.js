const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
 name: {
    type: String
  },
  age: {
    type: String
  },
  gender: {
    type: String
  },
  mobile_no: {
    type: Number
  },
  address: {
    type: String
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);