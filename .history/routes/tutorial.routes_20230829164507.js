const tutorials = require("../controllers/tutorial.controller")
const router = require("express").Router()
const { authJwt } = require("../middlewares/index.js")
const authConfig = require("../config/auth.config.js")

module.exports = (app) => {
  // Create a new tutorial
  router.post("/", [authJwt.verifyToken], tutorials.create)

  // Fetch all tutorials of a user
  router.get(
    "/myTutorials/",
    [authJwt.verifyToken],
    tutorials.findAllUserSpecificData
  )

  // Fetch all tutorials
  router.get("/", [authJwt.verifyToken], tutorials.findAll)

  // Fetch all published tutorials
  router.get("/published", [authJwt.verifyToken], tutorials.findAllPublished)

  // Fetch a single tutorial with id
  router.get("/:id", [authJwt.verifyToken], tutorials.findOne)

  // Update a tutorial with id
  router.put("/:id", [authJwt.verifyToken], tutorials.update)

  // Delete a tutorial with id
  router.delete("/:id", [authJwt.verifyToken], tutorials.delete)

  // Delete all tutorials
  router.delete("/", [authJwt.verifyToken], tutorials.deleteAll)

  app.use("/api/tutorials", [authJwt.verifyToken], router)
}
