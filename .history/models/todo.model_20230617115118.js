const mongoose = require("mongoose")

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    title: String,
    email: String,
    done: Boolean
  }, { timestamps: true })
)

module.exports = Tutorial
