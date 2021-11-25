const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    pinCode: Number,
    expDate: Date,
});

module.exports.model = mongoose.model('card', cardSchema);
module.exports.schema = cardSchema;

