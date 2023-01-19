const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log('in the node console')

app.listen(3000, () => {
  console.log('Example node listening at 3000')
})