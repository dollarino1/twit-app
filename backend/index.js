const express = require('express')
const dotenv = require('dotenv')
const { chats } = require("./data/data");
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler} = require('./middleware/errorMiddleware')

dotenv.config()
connectDB()
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())

app.get('/', (req, res) => {
  res.send("API IS RUNNING")
})
app.use('/api/user', userRoutes)

// ---- Error handling ----
app.use(notFound)
app.use(errorHandler)

// app.get('/api/chats', (req, res) => {
//   res.send(chats)
// })
// app.get('/api/chats/:id', (req, res) => {
//   console.log(req.params.id)
//   const singleChat = chats.find(c => c._id === req.params.id)
//   res.send(singleChat)
// })
app.listen(PORT, () => console.log(`server started on localhost:${PORT}`))