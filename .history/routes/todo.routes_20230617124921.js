const todos = require("../controllers/todo.controller")
const router = require("express").Router()

module.exports = (app) => {

  // Fetch all tutorials
  router.get("/", tutorials.findAll)
  
}
