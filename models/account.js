const mongoose = require('mongoose');
const currency  = require("./currency")

const accountSchema = new mongoose.Schema({
    amount: String,
    currency: currency.schema,

});

module.exports.schema = accountSchema;
module.exports.model = mongoose.model('account', accountSchema);

