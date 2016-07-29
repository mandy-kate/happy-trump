var express = require('express')
var path = require('path')
var hbs = require('express-handlebars')
var data = require('./index.js');
var server = express()
//var data = require('..happy-trump/datastore/db.json') //Placeholder
// var data = {
//   "people": [
//     { "name": "Emily", "age": 56 },
//     { "name": "Tama", "age": 31 },
//     { "name": "Sarah", "age": 22 },
//     { "name": "Jill", "age": 77 },
//     { "name": "Fred", "age": 25 }
//   ]
// }

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Server listening on port: ', PORT)
})

server.engine('hbs', hbs())
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, './views'))

// routes
server.get('/quotes', function (req, res) {
  data.getDonaldTweets(5, function(tweets){
    res.render('index', {results: tweets, positive: data.positive})
  })
})

//test page for server checks
server.get('/trump', function (req, res) {
  res.send('Donald Trump exists. What a shame.')
})

module.exports = server
