const tags = require("../controllers/tag.controller")
const router = require("express").Router()

module.exports = (app) => {

  // Fetch all tags
  router.get("/", tags.findAll)

  // Create a new tag
  router.post("/", tags.create)

  // Fetch a tag with id
  router.get()

  app.use("/api/tags", router)
}