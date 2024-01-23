require('dotenv/config')

const express = require('express')
const routes = require('./routes/')
const database = require('./db')

const College = require('./models/College')
const Question = require('./models/Question')
const Exam = require('./models/Exam')
const Test = require('./models/Test')
const Question_test = require('./models/Question_test')
const Try = require('./models/Try')

database.sync()

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use('/', routes)

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
