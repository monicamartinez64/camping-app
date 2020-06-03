const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    addresses:{
        type: [String],
    },
    topics: {
        type: [String],
    },
    activities: {
        type: [String],
    },
    url: {
        type: String,
    },
    weatherInfo: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    parkCode: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Campsite', campsiteSchema);