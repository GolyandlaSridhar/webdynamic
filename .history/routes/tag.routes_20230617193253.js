const tags = require("../controllers/tag.controller")
const router = require("express").Router()

module.exports = (app) => {

  app.use("/api/tags", router)
}