const mongoose = require("mongoose")

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    user: {
      type: Sche
    }
  }, { timestamps: true })
)

module.exports = Tutorial
