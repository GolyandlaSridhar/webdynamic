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
  todo
    .save(todo)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the todo."
      })
    })
}