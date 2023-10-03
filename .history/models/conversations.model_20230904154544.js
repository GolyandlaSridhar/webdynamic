const mongoose = require("mongoose")

const ConverationSchema = mongoose.Schema({
  members: {
    type: Array,
    required: true,
  },
})

const Conversation = mongoose.model("Conversation", ConverationSchema)

module.exports = Conversation
