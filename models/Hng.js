

const mongoose = require("mongoose");

const hngSchema =  mongoose.Schema({
    slackUsername: {
        type: String,
        required: true
    },
    backend: Boolean,

    age: {
        type: Number,
        required: true
    },

   
    bio: { type: String},
  
});

module.exports = mongoose.model('Hng9', hngSchema);
