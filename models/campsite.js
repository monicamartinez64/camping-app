const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    amenities: {
        type: [String],
    },
    activities: {
        type: [String],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Campsite', campsiteSchema);