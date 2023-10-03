const { authJwt } = require("../middlewares/index.js")
const controller = require("../controllers/user.controller")
const authConfig = require("../config/auth.config.js")

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    res.setHeader("Access-Control-Max-Age", "1800")
    res.setHeader("Access-Control-Allow-Headers", "content-type")
    res.setHeader(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    )
    next()
  })

  app.get("/api/test/all", controller.allAccess)

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard)

  app.get(
    "/api/test/branchadmin",
    [authJwt.verifyToken, authJwt.isBranchAdmin],
    controller.branchAdminBoard
  )

  app.get(
    "/api/test/superadmin",
    [authJwt.verifyToken, authJwt.isSuperAdmin],
    controller.superadminBoard
  )

  app.get(
    "/api/test/staffaccount",
    [authJwt.verifyToken, authJwt.isStaffAccount],
    controller.staffAccountBoard
  )

  app.get(
    "/api/test/operationaladmin",
    [authJwt.verifyToken, authJwt.isOperationalAdmin],
    controller.operationalAdminBoard
  )

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  )
}
