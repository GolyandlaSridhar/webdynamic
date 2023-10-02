const mongoose = require("mongoose")

const Tutorial = mongoose.model (
  "Tutorial",
  new mongoose.Schema({
    title: String
  })
)