var Twitter = require('twitter')
var dotenv = require('dotenv')

dotenv.load()

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});


// var params = {user_name: 'realDonaldTrump', count: 1}
// {q: '@realDonaldTrump', count: 1}


function getDonaldTweets(count, callback){
client.get('search/tweets.json?', {q: '@realDonaldTrump',  count: count}, function(error, tweets, response){
  if (!error) {

    // var extractTweets = []
    function extractTwitterData (twitterData, generateTrump){
      var tweets = twitterData.statuses.map(function(tweet){
        return tweet.text
      });

      // console.log(results);
      return generateTrump(tweets)
      // console.log(results);
    //console.log('this is the text in tweets.statuses ', tweets['statuses']);
    }
    console.log(extractTwitterData (tweets, generateTrump))
    callback(extractTwitterData (tweets, generateTrump))
  }
  else { return "Oh no, there was an error" }
});
}
function getRandom(length) {
  return Math.floor(Math.random() * (length -1 - 0 + 1)) + 0;
}

function generateTrump(results){
  var random = getRandom(results.length);
  return results[random]
}

var positive = [
  "I am a joyful breeze entering a room.",
  "I now choose to release all hurt and resentment",
  "Every decision I make is the right one for me.",
  "We are all family and the planet is our home.",
  "I feel joy and contentment in this moment right now.",
  "I can tap into a wellspring of inner happiness anytime I wish.",
  "My heart is overflowing with joy.",
  "I rest in happiness when I go to sleep, knowing all is well in my world.",
  "Every day in every way, I am becoming more and more successful."
]

var quotes = function generateQuote(){
  var random = getRandom(positive.length);
  return positive[random];
}

function getRandom(length) {
  return Math.floor(Math.random() * (length -1 - 0 + 1)) + 0;
}

var random = getRandom(positive.length);

// console.log(randomTweet);

module.exports = {
  positive: quotes,
  getDonaldTweets: getDonaldTweets
}
