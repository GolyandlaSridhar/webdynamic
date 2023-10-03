const mongoose = require("mongoose")

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    
  }, { timestamps: true })
)

module.exports = Tutorial
