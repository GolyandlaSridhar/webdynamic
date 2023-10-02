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

// @route GET api/todos 
// @desc Get all todos
// @access Private

