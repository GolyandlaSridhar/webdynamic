const jwt = require("jsonwebtoken")
const config = require("../config/auth.config.js")
const db = require("../models")
const User = db.user
const Role = db.role

const { TokenExpiredError } = jwt

const catchError = (err, res) => {
  if(err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" })
  }
  return res.sendStatus(401).send({ message: "Unauthorised!"})
}



verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"]
  //let token = req.session.token  

  if (!token) {
    return res.status(403).send({ message: "No token provided!" })
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return catchError(err, res)
    }
    req.userId = decoded.id
    next()
  })
}

isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err })
          return
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next()
            return
          }
        }

        res.status(403).send({ message: "Require Admin Role!" })
        return
      }
    )
  })
}

isBranchAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err })
          return
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "branchadmin") {
            next()
            return
          }
        }

        res.status(403).send({ message: "Require branchadmin Role!" })
        return
      }
    )
  })
}

isSuperAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err })
          return
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "superadmin") {
            next()
            return
          }
        }

        res.status(403).send({ message: "Require superadmin Role!" })
        return
      }
    )
  })
}

isStaffAccount = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err })
          return
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "staffaccount") {
            next()
            return
          }
        }

        res.status(403).send({ message: "Require staffaccount Role!" })
        return
      }
    )
  })
}

isOperationalAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err })
          return
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "operationaladmin") {
            next()
            return
          }
        }

        res.status(403).send({ message: "Require OperationalAdmin Role!" })
        return
      }
    )
  })
}

const authJwt = {
  verifyToken,
  isAdmin,
  isBranchAdmin,
  isSuperAdmin,
  isStaffAccount,
  isOperationalAdmin
}
module.exports = authJwt
