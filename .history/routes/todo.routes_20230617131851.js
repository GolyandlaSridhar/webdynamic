const todos = require("../controllers/todo.controller")
const router = require("express").Router()

module.exports = (app) => {

  // Fetch all tutorials
  router.get("/", todos.findAll)

  // Create a new todo
  router.post("/", todos.create)

  // Find a Todo details
  router.get("/:id", todos.findOne)

  app.use("/api/todos", router)

}
