const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplySchema = new Schema ({
    itemName: {
      type: String,
    },
    itemBrand: {
      type: String,
    },
    itemQuantity: {
        type: Number,
    },
    itemCategory: {
        type: String,
    }
  });

module.exports = mongoose.model('Supply', supplySchema);