const mongoose = require('mongoose');

const Message = mongoose.Schema({

  idUser: {type: String, require: true},

  message: {type: String, require: true, trim: true },
    
}, { timestamps:true});

module.exports = mongoose.model('Messages', Message);