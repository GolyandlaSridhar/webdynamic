const todos = require("../controllers/todo.controller")
const router = require("express").Router()

module.exports = (app) => {

  // Fetch all tutorials
  router.get("/", todos.findAll)

  // Create a new id(req.bodytodo
  router.post("/", todos.create)


  app.use("/api/", router)

}
