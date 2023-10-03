const mongoose = require('mongoose');

const messageSchema = moongoose.Schema({
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation'
  }
})