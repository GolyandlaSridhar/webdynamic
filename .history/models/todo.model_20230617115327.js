const mongoose = require("mongoose")

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.user.object
    }
  }, { timestamps: true })
)

module.exports = Tutorial
