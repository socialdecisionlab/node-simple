
//var socket = io();

	var socket = io.connect();



  
    $("#send").click(function(e) {
		alert($("#name").val());
        e.preventDefault();
	$(this).prop("disabled", true);
	
	socket.emit('login',$("#name").val());

    });
	
	
	//socket.emit('new');
	
	
//ocket.emit('new', 'new');
	
  socket.on('Num', function (data) {
    
	$('#main').html(data);
  });
  
   socket.on('GoTo', function (data) {
    
	$('#main').html(data);
  });