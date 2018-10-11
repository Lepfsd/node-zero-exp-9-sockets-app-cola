var socket = io();

var searchParams = new URLSearchParams( window.location.search );

if(!searchParams.has('escritorio')) {
	window.location = 'index.html';
	throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');
$('h1').text('Escritorio' + escritorio);
$('button').on('click', function(){
	socket.emit('atenderTicket', { escritorio: escritorio }, function(resp){
		console.log(resp.numero);
		if(resp === 'no hay tickets') {
			alert(resp);
		}
		label.text('Ticket: ' + resp.numero); 
	});
});

