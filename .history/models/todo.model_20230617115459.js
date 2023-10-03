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
      ty
    }
  }, { timestamps: true })
)

module.exports = Tutorial
