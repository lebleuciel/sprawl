const app = require('./app')

const startApp = (port) => {
  const server = app.app
    .listen(port, () => {
      console.log(`app running on port ${port}...`)
    })
    .on('error', (err) => {
      reject(err)
    })
}

startApp('3000')
