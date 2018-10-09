require("dotenv").config();
var keys = require("./keys");
var request = require('request');
var twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var client = new Twitter(keys.twitter);
var input = process.argv;
var action = input[2];
var inputs = input[3];

switch (action) {
	case "my-tweets":
	twitter(inputs);
	break;

	case "spotify-this-song":
	spotify(inputs);
	break;

	case "movie-this":
	movie(inputs);
	break;

	case "do-what-it-says":
	doit();
	break;
};

function twitter(inputs) {
	var params = {screen_name: inputs, count: 20};
	
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (!error) {
				for (i = 0; i < tweets.length; i ++){
					console.log("Tweet: " + "'" + tweets[i].text + "'" + " Created At: " + tweets[i].created_at);
				}
			} else {
				console.log(error);
			}
		});

}






var spotify = new Spotify(keys.spotify);