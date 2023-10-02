const mongoose = require("mongoose")

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    user
  }, { timestamps: true })
)

module.exports = Tutorial
