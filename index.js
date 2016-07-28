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


client.get('search/tweets.json?', {q: '@realDonaldTrump', count: 4}, function(error, tweets, response){
  if (!error) {
    extractTwitterData (tweets)

    // var translateTweets = []
    function extractTwitterData (twitterData){
      twitterData.statuses.map(function(tweet){
        results.push(tweet.text)
      });
      return results
    //console.log('this is the text in tweets.statuses ', tweets['statuses']);
    }
  }
});

module.exports = results
