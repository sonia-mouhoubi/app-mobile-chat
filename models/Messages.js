const mongoose = require('mongoose');

const Messages = mongoose.Schema({

  member: {type: ObjectId, require: true },
  message: {type: String, require: true, trim: true },
    
}, { timestamps:true});

module.exports = mongoose.model('Messages', Messages);