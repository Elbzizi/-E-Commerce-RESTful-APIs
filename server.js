const morgan = require('morgan')
express = require('express')
dotenv = require('dotenv')
mongoose = require('mongoose')
dotenv.config({ path: 'config.env' })
app = express()
mongoose.connect(process.env.DB_URL).then((con) => {
  console.log(`database connection syccessfully : ${con.connection.host}`)
}).catch((error) => {
  console.error(`database errors :${error}`)
  process.exit(1)
});

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