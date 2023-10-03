const mongoose = require('mongoose');

const converationSchema = mongoose.Schema({
  members: {
    type: Array,
    required: true
  }
})

const Conversation = mongoose.model('Conversation', schema
