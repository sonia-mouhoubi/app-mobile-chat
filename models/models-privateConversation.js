const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({

  members: [ user_id1, user_id2 ],
  message: {type: String, require: true, trim: true },
    
}, { timestamps:true});

module.exports = mongoose.model('MessageSchema', thingSchema);