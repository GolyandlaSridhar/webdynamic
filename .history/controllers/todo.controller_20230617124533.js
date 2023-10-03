const db = require("../models/index.js")

const Todo = db.todo

// @route GET api/todos 
// @desc Get all todos
// @access Private
exports.findAll = (req, res) => {
  const text = req.query.text
  var condition = text ? { title: { $regex: new RegExp(title), $options: "i" } } : {}
}