const mongoose = require("mongoose")

const Tag = new mongoose.model(
  "Tag"
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    }
  })
)

module.exports = Tag
