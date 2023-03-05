const express = require('express')
const app = express()

app.route('/health').get((req, res) =>
  res.status(200).json({
    status: 'success',
    data: {
      healthState: 'healthy',
    },
  }),
)

var router = require('./routes/routes')
app.use(router)
exports.routes = app
