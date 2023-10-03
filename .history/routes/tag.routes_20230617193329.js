const tags = require("../controllers/tag.controller")
const router = require("express").Router()

module.exports = (app) => {

  // Fetch all tags
  router.get("/", (req, res) => {
    
  })

  app.use("/api/tags", router)
}