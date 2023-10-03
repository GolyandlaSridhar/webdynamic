const mongoose = require("mongoose")

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean
  }, { timestamps: true })
)

module.exports = Tutorial
