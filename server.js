const express = require('express')
const app = express()
const port = 3000
const APIController = require('./api/controller')

app.use(express.static('public'))
// app.get('/', (req, res) => {
  // res.send('Hello World!')
// })
app.use('/api', APIController)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})