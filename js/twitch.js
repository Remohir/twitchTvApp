var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "colomboparaguayo", "coscuuu", "mym_alkapone", "paracetamol"];
var streamers = $(".streamers");

$.each(channels, function(i, name) {
	$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + name + "?callback=?", function(data) {
		var rawData = JSON.stringify(data);
		var json = JSON.parse(rawData);

   		$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + name + "?callback=?", function(data2) {
   			var rawData2 = JSON.stringify(data2);
   			var json2 = JSON.parse(rawData2);

	   		if (json.stream !== null && json.stream !== undefined) {
	   			streamers.append("<a href='" + json2.url + "' target='_blank'><div class='col-md-3 streamer online info'><h4 class='name'>" + name +" </h4><img class='logo' src='" + json.stream.channel.logo + "'><p class='info'>Game: " + json.stream.game + "<br /><br />Viewers: " + json.stream.viewers + "<br /><br />Langauage: " + json.stream.channel.broadcaster_language + "</p></div></a>"); //Can add a small player for the stream
	   		} else if (json2.status === 404) {
	   			streamers.append("<div class='col-md-3 streamer deleted'><h4 class='name'>" + name +" </h4><h4 class='warning'>This account doesn't exist!</h4></div>");
	   		} else {
	   			streamers.append("<a href='" + json2.url + "' target='_blank'><div class='col-md-3 streamer offline'><h4 class='name'>" + name +" </h4><img class='logo' src='" + json2.logo + "'></div></a>");
	   		}
   		});
   	});
})
