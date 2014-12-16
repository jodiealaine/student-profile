// Problem: we need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

var http = require("http");
var username = "jodiealaineparker";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

// Connect to the API URL (http://teamtreehouse.com/username.json)
var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
	console.log(response.statusCode);
	var body = ""
	// Read the data
	response.on('data', function(chunk){
			body += chunk;
	});
	// Parse the data
	response.on('end', function(){
		var profile = JSON.parse(body);
		console.dir(profile);
	});
});

request.on("error", function(error){
	console.error(error.message);
});


	
	// Print the data out