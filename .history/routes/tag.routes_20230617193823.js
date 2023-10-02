const tags = require("../controllers/tag.controller")
const router = require("express").Router()

module.exports = (app) => {

  // Fetch all tags
  router.get("/", tags.findAll)

  // Create a new tag
  router.post("/", )

  app.use("/api/tags", router)
}