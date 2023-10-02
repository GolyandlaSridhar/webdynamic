const mongoose = require("mongoose")

const Tutorial = mongoose.model (
  "Tutorial",
  new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean
  }, { timestamps: true })
),("toJSON", function() {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

module.exports = Tutorial
