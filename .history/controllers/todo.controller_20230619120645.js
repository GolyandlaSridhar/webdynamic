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

// @route POST api/todos/:id 
// @desc fetch a todo details
// @access Private
exports.findOne = (req, res) => {
  const id = req.params.id

  Todo.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Todo with id " + id })
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Todo with id=" + id })
    })
}

// @route PUT api/todos/:id 
// @desc update a todo details
// @access Private
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    })
  }

  const id = req.params.id

  Todo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Todo with id=${id}. Maybe Todo was not found!`
        })
      } else res.send({ message: "Todo was updated successfully." })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Todo with id=" + id
      })
    })
}

// @route DELETE api/todos/:id 
// @desc delete a todo details
// @access Private
exports.delete = (req, res) => {
  const id = req.params.id

  Todo.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`
        })
      } else {
        res.send({
          message: "Todo was deleted successfully!"
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Todo with id=" + id
      })
    })
}

// @route DELETE api/todos/
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

// @route GET api/todos/completed
// @desc Fetch all completed todos details
// @access Private
exports.findAllCompleted = (req, res) => {
  Todo.find({ Completed: true })
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send ({
        message: err.message || "Some error occurred while retrieving todos."
      })
    })
}

// @route GET api/todos/incomplete
// @desc Fetch all incompleted todos details
// @access Private
exports.findAllInCompleted = (req, res) => {
  Todo.find({ completed: false })
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send ({
        message: err.message || "Some error occurred while retrieving todos."
      })
    })
}
