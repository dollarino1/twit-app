const express = require('express')
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler} = require('./middleware/errorMiddleware')
const cors = require('cors')

dotenv.config()
connectDB()
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send("API IS RUNNING")
})
app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)
// ---- Error handling ----
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server started on localhost:${PORT}`))