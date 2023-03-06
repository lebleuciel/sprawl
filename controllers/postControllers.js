exports.signIn = (req, res) => {
  const connection = require('../app')
  console.log('hello from signIn!!')
  connection.query(
    `SELECT * FROM users WHERE id = ${req.body.id} LIMIT 1`,
    (error, results) => {
      if (error) {
        console.error(error)
      } else {
        if (results.length > 0) {
          console.log('Logged User with ID ' + req.body.id + ' in')
        } else {
          console.log('User with ID ' + req.body.id + ' does not exist')
        }
      }
    },
  )
}

exports.signUp = (req, res) => {
  console.log('hello from signUp!!')
  console.log('Request body:', req.body)
  const connection = require('../app')

  const { name, phoneNumber, email, balance, creditcard } = req.body
  const user = {
    name,
    phonenumber: phoneNumber,
    email,
    balance,
    creditcard,
  }

  connection.connection.connection.query(
    'INSERT INTO users SET ?',
    user,
    (error, results, fields) => {
      if (error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
        return
      }
      console.log('New user added with ID:', results.insertId)
      res.sendStatus(200)
    },
  )
}

exports.logOut = (req, res) => {
  console.log('hello from logOut!!')
  const connection = require('../app')
  connection.query(
    `SELECT * FROM users WHERE id = ${req.body.id} LIMIT 1`,
    (error, results) => {
      if (error) {
        console.error(error)
      } else {
        if (results.length > 0) {
          console.log('Logged User with ID ' + req.body.id + ' out')
        } else {
          console.log('User with ID ' + req.body.id + ' does not exist')
        }
      }
    },
  )
}

exports.forgotPassword = (req, res) => {
  res.send('working!!')
  console.log('hello from forgotPassword!!')
}

exports.deposit = (req, res) => {
  const connection = require('../app')

  console.log('hello from deposit!!')
  connection.query(
    `UPDATE users SET balance = balance + ${req.body.amount} WHERE id = ${req.body.id}`,
    (error, results) => {
      if (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
      } else {
        console.log('updated balance for user with ID:', req.body.id)
        res.status(200).json({ success: true })
      }
    },
  )
}

exports.withdraw = (req, res) => {
  console.log('hello from withdraw!!')
  const connection = require('../app')
  connection.query(
    `UPDATE users SET balance = balance - ${req.body.amount} WHERE id = ${req.body.id}`,
    (error, results) => {
      if (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
      } else {
        console.log('updated balance for user with ID:', req.body.id)
        res.status(200).json({ success: true })
      }
    },
  )
}

exports.createOrder = (req, res) => {
  res.send('working!!')
  console.log('hello from createOrder!!')
}

exports.cancelOrder = (req, res) => {
  res.send('working!!')
  console.log('hello from cancelOrder!!')
}
