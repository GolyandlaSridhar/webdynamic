const mongoose = require("mongoose")

const Todo = mongoose.model(
  "Tutorial",
  new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean
  }, { timestamps: true })
)

module.exports = Tutorial
