
//var socket = io();

	var socket = io.connect();



	socket.emit('new');
	
//ocket.emit('new', 'new');
	
  socket.on('names', function (data) {
    alert('names');
	$('#main').html('Signed Players: '+data);
  });
  
  
    $("#start").click(function(e) {
        e.preventDefault();
	$(this).prop("disabled", true);
	$("#stop").prop("disabled", false);
	socket.emit("begin");

    });
	
	 $("#stop").click(function(e) {
        e.preventDefault();
	$(this).prop("disabled", true);
	$("#start").prop("disabled", false);
	socket.emit("stop");

    });