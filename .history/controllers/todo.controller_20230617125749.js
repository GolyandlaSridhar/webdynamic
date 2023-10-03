const db = require("../models/index.js")

const Todo = db.todo

// @route GET api/todos 
// @desc Get all todos
// @access Private
exports.findAll = (req, res) => {
  const text = req.query.text
  var condition = text ? { text: { $regex: new RegExp(text), $options: "i" } } : {}

  Todo.find(condition).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving todos."
    })
  })
}

// @route POST api/todos 
// @desc create a todo
// @access Private
exports.create = (req, res) => {

  // Validate request
  if(req.body.text) {
    return res.status(400).send({ message: "Content can not be empty!" })
  }

  // Create a todo
  const tutorial = new Todo({
    title: req.body.text,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  })

  // Save Tutorial in the database
  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      })
    })
}
