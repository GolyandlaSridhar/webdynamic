const todos = require("../controllers/todo.controller")
const router = require("express").Router()

module.exports = (app) => {

  // Fetch all tutorials
  router.get("/", todos.findAll)

  // Create a new todo
  router.post("/", todos.create)

  // 
  app.use("/api/todos", router)

}
