const mongoose = require('mongoose');
const user = require("./user")

const bankSchema = new mongoose.Schema({
    address: String,
    phone: String,
    user: [user.schema]

});

module.exports = mongoose.model('bank', bankSchema);
