const monmongoosegose = require("mongoose")

const messageSchema = moongose.Schema({
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

const Messages = moongoose.model("Message", messageSchema)

module.exports = Messages
