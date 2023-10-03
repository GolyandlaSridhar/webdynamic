const mongoose = require("mongoose")

const Tutorial = mongoose.model(
  "Tutorial",
  new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean,
    id: {
      
    }
  }, { timestamps: true })
)

module.exports = Tutorial
