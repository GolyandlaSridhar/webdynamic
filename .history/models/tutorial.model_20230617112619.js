module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean
    },
    { timestamps: true }
  )

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  const Tutorial = mongoose.model("tutorial", schema)
  return Tutorial
}

const mongoose = require("mongoose")

const Tutorial = mongoose.model(
  "Tutorial",
  new mongoose.Schema({
    name: String
  })
)

module.exports = Tutorial

