const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECT_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err))

// Routes
app.get('/', (req, res) => {
  res.send('Hello world')
})

// Start the server
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
