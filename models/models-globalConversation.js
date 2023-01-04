const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({

  member: {type: ObjectId, require: true },
  message: {type: String, require: true, trim: true },
    
}, { timestamps:true});

module.exports = mongoose.model('MessageSchema', ConversationSchema);