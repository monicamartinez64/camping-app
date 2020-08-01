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

  export default supplySchema
// module.exports = mongoose.model('Supply', supplySchema);