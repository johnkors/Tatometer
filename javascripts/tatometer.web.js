

$(document).ready(function() {
	
	
	
	$('#userbuttons').buttonset();
	
	var loggedInUser = tatometer.users()[0];
      
	$('.tabutton').click(function() {
		var description = $('#description').val();
		
		
		var taReceiverIds = $('#userbuttons input:checked');
		var taReceivers = [];
		$.each(taReceiverIds, function(index, checkBox){
			var userId = checkBox.value;
			var taer = tatometer.findUserById(userId);
			taReceivers.push(taer);
		});
		var ta = createTa(loggedInUser, taReceivers, description);
		tatometer.addTa(ta, onTaAdded);
	});
		
});

function onTaAdded(ta){
	console.log("Ajax-POST; adding ta: " + ta);
	return ta;
	/*
	$.ajax({
		url: 'ta/create/',
		data: ta,
		dataType : 'json',
		type : 'POST',
		success : function(taCreated){
			console.log('Ta created serverside:' + taCreated);
			return taCreated;
		},
		error : function(taError){
			console.log('Ta error serverside:' + msg);
			return taError;
		}
	});
	*/
}

function onTaRemoved(taToRemove){
	console.log("Ajax-POST; remove ta: " + taToRemove);
	return taToRemove;
	
		/*
	$.ajax({
		url: 'ta/delete/id',
		type : 'POST',
		success : function(taRemoved){
			console.log('Ta deleted serverside:' + taRemoved);
			return taRemoved;
		},
		error : function(taError){
			console.log('Ta error serverside:' + msg);
			return taError;
		}
	});
	*/
}










