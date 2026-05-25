const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const http = require("http")

const { Server } = require("socket.io")

dotenv.config()

const authRoutes =
  require("./routes/authRoutes")

const uploadRoutes =
  require("./routes/uploadRoutes")

const app = express()

// MIDDLEWARE
app.use(express.json())

app.use(cors())

// ROUTES
app.use(
  "/api/auth",
  authRoutes
)

app.use(
  "/api/upload",
  uploadRoutes
)

// TEST ROUTE
app.get("/", (req, res) => {

  res.send("API Running...")
})

// MONGODB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log(
      "MongoDB Connected ✅"
    )
  })
  .catch((err) => {

    console.log(err)
  })

// SERVER
const server =
  http.createServer(app)

// SOCKET.IO
const io = new Server(server, {

  cors: {
    origin:
      "http://localhost:5173",

    methods: ["GET", "POST"],
  },
})

io.on("connection", (socket) => {

  console.log(
    "User Connected:",
    socket.id
  )

  // RECEIVE MESSAGE
  socket.on(
    "sendMessage",
    (message) => {

      io.emit(
        "receiveMessage",
        message
      )
    }
  )

  // DISCONNECT
  socket.on(
    "disconnect",
    () => {

      console.log(
        "User Disconnected"
      )
    }
  )
})

const PORT =
  process.env.PORT || 5000

server.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  )
})