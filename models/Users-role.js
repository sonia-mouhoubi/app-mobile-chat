const mongoose = require('mongoose');

const modelRoleUser = mongoose.Schema({
  role: {type: String, require: true, trim: true, unique: true },

}, { timestamps:true});


module.exports = mongoose.model('Users-role', modelRoleUser);