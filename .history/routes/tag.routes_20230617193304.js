const tags = require("../controllers/tag.controller")
const router = require("express").Router()

module.exports = (app) => {

  // Fetch all tags
  

  app.use("/api/tags", router)
}