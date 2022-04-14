const connectDB = require('./db')
const express = require('express')

const app = express()
app.use(express.json())
app.use('/api/auth', require('./Auth/route'))
const PORT = 5000
const server = app.listen(PORT, () =>
  console.log(`Server connected to port ${PORT}`)
)
connectDB()

process.on('unhandledRejection', err => {
  console.log(`An error ocurred: ${err.message}`)
  server.close(() => process.exit(1))
})
