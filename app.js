const express = require('express')
const app = express()
var router = require('./routes/routes')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(router)

app.route('/health').get((req, res) =>
  res.status(200).json({
    status: 'success',
    data: {
      healthState: 'healthy',
    },
  }),
)
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sprawl',
  password: 'sprawl1234',
  database: 'sprawl',
})
connection.connect((err) => {
  if (err) throw err
  console.log('Connected to MySQL server')
})
module.exports = connection

connection.query('SELECT * FROM users', (err, results, fields) => {
  if (err) throw err
  console.log(results)
})
exports.routes = app
module.exports.app = app
module.exports.connection = connection
