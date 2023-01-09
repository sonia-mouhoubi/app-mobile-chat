const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');


const modelUser = mongoose.Schema({
  email: {type: String, require: true, trim: true, unique: true },
  password: {type: String, require: true, trim: true },
  firstname: {type: String, require: true, trim: true, minlength: 2, maxlenght: 100},
  lastname: {type: String, require: true, trim: true, minlength: 2, maxlenght: 100},
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ],  
}, { timestamps:true});

// Package pour ne pas avoir le même login lors de l'inscription
// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('models-users', modelUser);