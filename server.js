var express = require('express')
var path = require('path')
var hbs = require('express-handlebars')
var data = require('./index.js');
var server = express()

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Server listening on port: ', PORT)
})

server.engine('hbs', hbs())
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, './views'))

//doing the css
server.use(express.static('public'))

// routes
server.get('/', function (req, res) {
  data.getDonaldTweets(5, function(tweets){
    res.render('index', {results: tweets, positive: data.positive})
  })
})

//test page for server checks
server.get('/trump', function (req, res) {
  res.send('Donald Trump exists. What a shame.')
})

module.exports = server
