const mongoose = require("mongoose")

const Tutorial = mongoose.model(
  "Tutorial",
  new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean,
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  }, { timestamps: true })
)

module.exports = Tutorial
