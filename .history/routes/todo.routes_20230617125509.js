const todos = require("../controllers/todo.controller")
const router = require("express").Router()

module.exports = (app) => {

  // Fetch all tutorials
  router.get("/", todos.findAll)

  // Create a todo


  app.use("/api/", router)

}