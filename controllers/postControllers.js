exports.signIn = (req, res) => {
  console.log('hello from signIn!!')
  res.send('working!!')
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
  res.send('working!!')
  console.log('hello from logOut!!')
}

exports.forgotPassword = (req, res) => {
  res.send('working!!')
  console.log('hello from forgotPassword!!')
}

exports.deposit = (req, res) => {
  const connection = require('../app')

  console.log('hello from deposit!!')
  connection.query(
    `UPDATE users SET balance = balance + ${req.body.addedcredit} WHERE id = ${req.body.id}`,
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
  res.send('working!!')
  console.log('hello from withdraw!!')
}

exports.createOrder = (req, res) => {
  res.send('working!!')
  console.log('hello from createOrder!!')
}

exports.cancelOrder = (req, res) => {
  res.send('working!!')
  console.log('hello from cancelOrder!!')
}
