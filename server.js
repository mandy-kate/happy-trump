var express = require('express')
var path = require('path')
var server = express()

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Server listening on port: ', PORT)
})


// routes
server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../happy-trump', 'index.html'))
})

//test page for server checks
server.get('/trump', function (req, res) {
  res.send('Donald Trump exists. What a shame.')
})

module.exports = server
