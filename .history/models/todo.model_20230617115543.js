const mongoose = require("mongoose")

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    },
    name: {
      type: String
    },
    text: {
      type: String,
      required: true
    },
` `
  }, { timestamps: true })
)

module.exports = Tutorial
