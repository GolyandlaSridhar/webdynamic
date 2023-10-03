const mongoose = require("mongoose")

const Tutorial = mongoose.model (
  "Tutorial",
  new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean
  }, { timestamps: true })
)

mongoose.Schema.model("toJSON", function() {
  const 
})

module.exports = Tutorial
