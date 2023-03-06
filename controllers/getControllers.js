exports.landing = (req, res) => {
  console.log('hello from landing!!')
}

exports.userInfo = (req, res) => {
  console.log('hello from userInfo!!')
  const connection = require('../app')
  connection.query(
    `SELECT * FROM users WHERE id = ${req.body.id} LIMIT 1`,
    (error, results) => {
      if (error) {
        console.error(error)
      } else {
        if (results.length > 0) {
          console.log('info for User with ID ' + req.body.id)
          console.log(results)
        } else {
          console.log('User with ID ' + req.body.id + ' does not exist')
        }
      }
    },
  )
}

exports.transactionHistory = (req, res) => {
  res.send('working!!')
  console.log('hello from transactionHistory!!')
}

exports.marketInfo = (req, res) => {
  res.send('working!!')
  console.log('hello from marketInfo!!')
}

exports.orderInfo = (req, res) => {
  res.send('working!!')
  console.log('hello from orderInfo!!')
}

exports.orderBook = (req, res) => {
  res.send('working!!')
  console.log('hello from orderBook!!')
}
