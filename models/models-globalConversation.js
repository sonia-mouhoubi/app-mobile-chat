const mongoose = require('mongoose');

const modelGlobaleconversation = mongoose.Schema({

  member: {type: ObjectId, require: true },
  message: {type: String, require: true, trim: true },
    
}, { timestamps:true});

module.exports = mongoose.model('models-globalConversation', modelGlobaleconversation);