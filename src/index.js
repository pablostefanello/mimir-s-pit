require('dotenv/config')

const express = require('express')
const routes = require('./routes/')
const { Sequelize } = require('sequelize')

const app = express()
const port = process.env.PORT || 3000
const sequelize = new Sequelize('mimirspit', 'root', '1234', {host: "localhost", dialect: "mysql"})

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use('/', routes)

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
