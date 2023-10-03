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
  },, {timestamps: true}
})

const Messages = mongoose.model("Message", messageSchema)

module.exports = Messages
