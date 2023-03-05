const express = require('express')
const app = express()
var router = require('./routes/routes')
app.use(router)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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

connection.query('SELECT * FROM users', (err, results, fields) => {
  if (err) throw err
  console.log(results)
})

app.post('/users', (req, res) => {
  const { name, phoneNumber, email, balance, creditcard } = req.body

  const user = {
    name,
    phonenumber: phoneNumber,
    email,
    balance,
    creditcard,
  }

  connection.query(
    'INSERT INTO users SET ?',
    user,
    (error, results, fields) => {
      if (error) {
        console.error(error)
        res.sendStatus(500)
        return
      }

      console.log('New user added with ID:', results.insertId)
      res.sendStatus(200)
    },
  )
})

exports.routes = app
