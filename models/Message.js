const mongoose = require('mongoose');

const Message = mongoose.Schema({

  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "models-users"
  },  
  message: {type: String, require: true, trim: true },
    
}, { timestamps:true});

module.exports = mongoose.model('Message', Message);