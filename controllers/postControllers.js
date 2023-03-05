exports.signUp = (req, res) => {
  console.log('hello from signUp!!')
  res.send('working!!')
}

exports.signIn = (req, res) => {
  const connection = require('../app')

  console.log('hello from signIn!!')
  console.log('Request body:', req.body)

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
  res.send('working!!')
  console.log('hello from deposit!!')
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
