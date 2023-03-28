import { express } from 'express'
import { connect } from 'mongoose'
import cors from 'cors'

const spellCardRoutes = require('./router/spellCard')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
connect(process.env.MONGODB_CONNECT_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err))

// Routes
app.use('/spellCards', spellCardRoutes)

// Start the server
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
