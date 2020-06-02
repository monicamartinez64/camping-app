const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplySchema = new Schema ({
  tent: {
    type: String,
  },
  cooler: {
    type: String,
  }
});

module.exports = mongoose.model('Supply', supplySchema)

