const mongoose = require('mongoose')
const { CONN_STRING } = process.env

module.exports = {
  // eslint-disable-next-line space-before-function-paren
  async connect() {
    await mongoose.connect(CONN_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
      .then((response) => console.log('MongoDB Connected'))
      .catch((error) => console.log(`An error ocurred while trying to connect to mongoDB: ${error.message}`))
  }
}
