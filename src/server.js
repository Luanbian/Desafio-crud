const dotenv = require('dotenv')
dotenv.config()

const app = require('./app')

// catch all
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ error: error.message })
})

const server = require('http').createServer(app)

const port = process.env.PORT || '3000'

server.listen(port, () => {
  console.log(`Ouvindo porta ${port}`)
})
