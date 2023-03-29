const cors = require('cors')
const express = require('express')
const spellCardRoutes = require('./routes/spellCard')
const db = require('./utils/db')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
db.connect()

// Routes
app.use('/spellCards', spellCardRoutes)

// Start the server
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
