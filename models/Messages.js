const mongoose = require('mongoose');

const Messages = mongoose.Schema({

  messages: {type: String, require: true, trim: true },
    
}, { timestamps:true});

module.exports = mongoose.model('Messages', Messages);