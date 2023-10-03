const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const db = {}
// console.log(db)

db.mongoose = mongoose

db.user = require("./user.model")
db.role = require("./role.model")
db.refreshToken = require("./refreshToken.model")
db.tutorial = require("./tutorial.model")
db.todo = require("./todo.model")
db.tag = require("./tag.model")

db.conversation = require("./Conversations.model")
db.message = require("./Messages.model")

db.ROLES = [
  "user",
  "admin",
  "branchadmin",
  "superadmin",
  "staffaccount",
  "operationaladmin",
]

module.exports = db
