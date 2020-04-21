const proxy = require('express-http-proxy')
const express = require('express')
const app = express()
const path = require('path')

const public = path.join(__dirname, 'public')
const port = process.env.PORT || 4444

app.use('/api', proxy('http://localhost:5000'))
app.use(express.static('public'))

app.get('*', function (req, res) {
  res.sendFile(path.join(public, 'index.html'))
})

app.listen(port, () => {
  console.log('Server is running on ', port)
})
