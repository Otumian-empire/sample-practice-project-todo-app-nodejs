const express = require('express')
const todoController = require('./controllers/todocontroller')

const app = express()

// set up template engine
app.set('view engine', 'ejs')

// static file for all routes
app.use(express.static('./public'))

// fire controllers
todoController(app)


app.listen(3000)