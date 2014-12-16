// Problem: we need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

var http = require("http");
var username = "jodiealaineparker";


// Print out Message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

// Print out error message
function printError(error){
	console.error(error.message);
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
		try {
			var profile = JSON.parse(body);
			printMessage(username, profile.badges.length, profile.points.JavaScript);
		} catch(error){
			// parse error
			printError(error);
		}
	});
});

// connection error
request.on("error", printError);


	
