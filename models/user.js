const mongoose = require('mongoose');
const account = require('./account')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    sex: String,
    phone: String,
    accounts: [account.schema]

});

module.exports.schema = userSchema;
module.exports.model = mongoose.model('user', userSchema);
