const messages = require("../controllers/message.controller")
const Router = require("express").Router()
const { authJwt } = require("../middlewares/index")

module.exports = (app) => {
  router.post("/", [authJwt.verifyToken], messages.create)
  router.get("/:id", [authJwt.verifyToken], messages.findOne)

  app.use("/api/messages", [authJwt.verifyToken], router)
}
