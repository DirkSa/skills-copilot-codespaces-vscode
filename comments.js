// Create a web server

// Import libraries
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// Initialize the server
const app = express()

// Add Middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Create an endpoint
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

// Start the server
app.listen(process.env.PORT || 8081)