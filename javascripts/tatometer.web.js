$(document).ready(function() {
	
	var taere = getTaereFromServer();
	$('taere').html(taere);
	
	$('.tasubmit').click(function(){
		alert('ta submittet');
	});
});
