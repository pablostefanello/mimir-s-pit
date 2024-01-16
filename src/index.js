require('dotenv/config')

const express = require('express')
const routes = require('./routes/')
const database = require('./db')

const app = express()
const port = process.env.PORT || 3000

const college = require('./models/College')
const question = require('./models/Question')
const exam = require('./models/Exam')
const question_exam = require('./models/Question_exam')
const exam_try = require('./models/Try')

database.sync();

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use('/', routes)

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
