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

// @route POST api/todos 
// @desc create a todo
// @access Private
exports.create = (req, res) => {

  // Validate request
  if(!req.body.text) {
    return res.status(400).send({ message: "Content can not be empty!" })
  }

  // Create a todo
  const todo = new Todo({
    name: req.body.name,
    text: req.body.text,
    tags: req.body.tags,
    completed: req.body.completed ? req.body.completed : false
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