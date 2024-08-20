express = require('express')
app = express()

app.get('/', (req, res) => {
  res.send('<h1>hello Api</h1>')
})
app.listen('8000', () => {
  console.log(`server  is raning to port : ${8000}`)
})