const conversations = require("../controllers/conversation.controller")
const router = require("express").Router()
const { authJwt } = require("../middlewares/index")

module.exports = (app) => {
  router.post("/", [authJwt.verifyToken], conversations.create)
  router.get("/", [authJwt.verifyToken], conversations.findOne)

  app.use("/api/conversations", [authJwt.verifyToken], router)
}
