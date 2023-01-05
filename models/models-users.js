const mongoose = require('mongoose');

const modelConversation = mongoose.Schema({
  email: {type: String, require: true, trim: true, unique: true },
  // password: {type: String, require: true, trim: true },
  // firstname: {type: String, require: true, trim: true, minlength: 2, maxlenght: 100},
  // lastname: {type: String, require: true, trim: true, minlength: 2, maxlenght: 100},
  // role: {type: String, require: true, trim: true },  
}, { timestamps:true});

module.exports = mongoose.model('models-users', modelConversation);