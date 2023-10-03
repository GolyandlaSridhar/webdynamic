const mongoose = require('mongoose');

const messageSchema = moongoose.Schema({
  conversationId: {
    typeof: 'string',
  },
  senderId: {
    type: 'string',
  },
  message: {
  type: 'string',
},
})

const Messages = moongoose.model('Message', messageSchema);

model.exp