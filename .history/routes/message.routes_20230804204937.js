const mess = require("../controllers/conversation.controller")
const Router = require("express").Router()
const { authJwt } = require("../middlewares/index")

module.exports = (app) => {
  router.post("/", [authJwt.verifyToken], conversations.create)
  router.get("/:id", [authJwt.verifyToken], conversations.findOne)

  app.use("/api/conversations", [authJwt.verifyToken], router)
}
