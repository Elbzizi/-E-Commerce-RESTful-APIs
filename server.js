express = require('express')
app = express()
dotenv = require('dotenv')
dotenv.config({ path: 'config.env' })
app.get('/', (req, res) => {
  res.send('<h1>hello Api</h1>')
})
port = process.env.PORT
app.listen(port, () => {
  console.log(`server  is raning to port : ${port}`)
})