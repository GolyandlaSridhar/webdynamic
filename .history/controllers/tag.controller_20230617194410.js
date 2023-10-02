const db = require("../models/index.js")

const Tag = db.tag

// @route GET api/tags/ 
// @desc Get all tags
// @access Private
exports.findAll = (req, res) => {
  const name = req.query.name
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {}

  Tag.find(condition).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tags."
    })
  })
}

// @route POST api/tags 
// @desc create a tag
// @access Private
exports.create = (req, res) => {

  // Validate request
  if(!req.body.name) {
    return res.status(400).send({ message: "Content can not be empty!" })
  }

  // Create a tag
  const tag = new Tag({
    name: req.body.name
  })

  // Save todo in the database
  tag
    .save(tag)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tag."
      })
    })
}

// @route POST api/tags/:id 
// @desc fetch a tag details
// @access Private
exports.findOne = (req, res) => {
  const id = req.params.id

  Tag.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tag with id " + id })
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tag with id=" + id })
    })
}

// @route PUT api/tags/:id 
// @desc update a tag details
// @access Private
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    })
  }

  const id = req.params.id

  Tag.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tag with id=${id}. Maybe Tag was not found!`
        })
      } else res.send({ message: "Tag was updated successfully." })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tag with id=" + id
      })
    })
}

// @route DELETE api/tags/:id 
// @desc delete a tag details
// @access Private
exports.delete = (req, res) => {
  const id = req.params.id

  Tag.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tag with id=${id}. Maybe Tag was not found!`
        })
      } else {
        res.send({
          message: "Tag was deleted successfully!"
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tag with id=" + id
      })
    })
}

// @route DELETE api/tags/
// @desc delete all todos details
// @access Private
exports.deleteAll = (req, res) => {
  Todo.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Todo were deleted successfully!`
      })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Todo."
      })
    })
}