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

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  supplies: [supplySchema],
  googleId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);