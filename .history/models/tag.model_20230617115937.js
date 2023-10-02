const mongoose = require("mongoose")

const Tag = new mongoose.model(
  new mongoose.Schema({
    name: {
      type: String,
      required
    }
  })
)
