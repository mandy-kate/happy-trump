var Twitter = require('twitter')
var dotenv = require('dotenv')

dotenv.load()

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

var results = []


client.get('search/tweets.json?', {q: '@realDonaldTrump', count: 1}, function(error, tweets, response){
  if (!error) {
    extractTwitterData (tweets)

    // var translateTweets = []
    function extractTwitterData (twitterData){
      twitterData.statuses.map(function(tweet){
        results.push(tweet.text)
      });
      console.log(results);
    //console.log('this is the text in tweets.statuses ', tweets['statuses']);
    }
  }
});

var positive = [
  "I am a joyful breeze entering a room.",
  "I now choose to release all hurt and resentment",
  "Every decision I make is the right one for me.",
  "We are all family and the planet is our home."
]

// function generateQuote(){
//   var random = getRandom(positive.length);
//   console.log(positive[random]);
// }
//
// function getRandom(length) {
//   return Math.floor(Math.random() * (length -1 - 0 + 1)) + 0;
// }
//
// var random = getRandom(positive.length);
//
// function generateTrump(){
//   var random = getRandom(results.length);
//   console.log(positive[random]);
// }
//
// function getRandom(length) {
//   return Math.floor(Math.random() * (length -1 - 0 + 1)) + 0;
// }
//
// var random = getRandom(results.length);
//
//
// var quote = generateQuote();
console.log(positive[0]);

module.exports = {
  results: results,
  positive: positive[0]
}
