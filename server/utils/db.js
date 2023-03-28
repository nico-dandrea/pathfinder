const mongoose = require('mongoose')
const { MONGODB_URI } = process.env

module.exports = {
  // eslint-disable-next-line space-before-function-paren
  async connectDB() {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
      .then((response) => console.log('MongoDB Connected'))
      .catch((error) => console.log(error.message))
  }
}
