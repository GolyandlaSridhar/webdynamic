const mongoose = require("mongoose")

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.O
    }
  }, { timestamps: true })
)

module.exports = Tutorial
