const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
  conversationId: {
    typeof: "string",
  },
  senderId: {
    type: "string",
  },
  message: {
    type: "string",
  },
})

const Messages = mongoose.model("Message", messageSchema)

module.exports = Messages
