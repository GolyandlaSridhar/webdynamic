const express = require("express")
const cors = require("cors")
const cookieSession = require("cookie-session")
const db = require("./models")
const dbConfig = require("./config/db.config")

const io = require("socket.io")("8080", {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
  },
})

const app = express()

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use(
  cookieSession({
    name: "sridhar-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
  })
)

const Role = db.role

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.")
    initial()
  })
  .catch((err) => {
    console.error("Connection error", err)
    process.exit()
  })

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." })
})

// routes
require("./routes/auth.routes")(app)
require("./routes/user.routes")(app)
require("./routes/tutorial.routes")(app)
require("./routes/todo.routes")(app)
require("./routes/tag.routes")(app)
require("./routes/conversation.routes")(app)
require("./routes/message.routes")(app)

// set port, listen for requests
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

// socket.io
let Users = []
io.on("connection", (socket) => {
  console.log("a user connected : " + socket.id)
  socket.on("addUser", (userId) => {
    const isUserExists = Users.find((user) => user.userId === userId)
    if (!isUserExists) {
      Users.push({
        userId: userId,
        socketId: socket.id,
      })
      io.emit("getUsers", Users)
    }
  })

  socket.on("sendMessage", async ({}))

  socket.on("disconnect", () => {
    console.log("user disconnected")
  })
})

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'user' to roles collection")
      })

      new Role({
        name: "branchadmin",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'branchadmin' to roles collection")
      })

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'admin' to roles collection")
      })

      new Role({
        name: "superadmin",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'superadmin' to roles collection")
      })

      new Role({
        name: "staffaccount",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'staffaccount' to roles collection")
      })

      new Role({
        name: "operationaladmin",
      }).save((err) => {
        if (err) {
          console.log("error", err)
        }

        console.log("added 'operationaladmin' to roles collection")
      })
    }
  })
}
