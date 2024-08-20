const morgan = require('morgan')

express = require('express')
app = express()
dotenv = require('dotenv')
dotenv.config({ path: 'config.env' })

if (process.env.NODE_ENV === 'developement') {
  app.use(morgan('dev'))
  console.log(`run mode : ${process.env.NODE_ENV}`)
}

app.get('/', (req, res) => {
  res.send('<h1>hello Api</h1>')
})
port = process.env.PORT
app.listen(port, () => {
  console.log(`server  is raning to port : ${port}`)
})