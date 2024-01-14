require('dotenv/config')

const express = require('express')
const routes = require('./routes/')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use('/', routes)

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})