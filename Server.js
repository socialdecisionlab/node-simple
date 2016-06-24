// Server
var express = require('express');
var app = express();
var port = 3700;
var server = app.listen(port);
var io = require('socket.io').listen(server);


server.listen(port, function () {
	console.log('Server listening at port %d', port);
});


app.use(express.static(__dirname + '/public'));

//var numusers=0;

var players=[]; // the players (stored sockets)
var players_sockets =[];
io.on('connection', function(socket){
	
	
	
	socket.on('login', function(name) {
	if (name!="control") { // ignore if control logs in
		console.log('Name:'+ name);
	    //socket.id=name;
		players_sockets.push(socket.id);
		players.push(name);
	   //players[socket.id]=socket; // add player to the players array
	    //io.sockets.emit('players', Object.size(players)); // update the number of players in the control
		io.sockets.emit('names', players); // update the number of players in the control
	}	
	    });
	
    // remove player from game
    socket.on("disconnect", function(name) {
	try {
		console.log('User Disconnected:'+socket.id);
				console.log(players_sockets);
var loc = players_sockets.indexOf(socket.id)
				console.log(loc);

		players_sockets.splice( loc,1);
		players.splice( loc,1 );
		

	} catch (e) {}
	
	try {
	    		io.sockets.emit('names', players); // update the number of players in the control

	  
	} catch (e) {}
    });
	
	
	var addedUser='false';
	console.log('User Connected');
	
	
   socket.on('begin', function() {
	
    io.sockets.emit('GoTo','Somewhere');
	
    });
	
	socket.on('stop', function() {
	
    io.sockets.emit('GoTo','Home');
	
    });
	
	
});

