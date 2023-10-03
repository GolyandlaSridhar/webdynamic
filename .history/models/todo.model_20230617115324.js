const mongoose = require("mongoose")

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.user.o
    }
  }, { timestamps: true })
)

module.exports = Tutorial
