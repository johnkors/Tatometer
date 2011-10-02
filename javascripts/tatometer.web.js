

$(document).ready(function() {
	
	bindSelectBox();
	bindUsers();
	
	var loggedInUser = tatometer.users[0];
      
	$('.tasubmit').click(function() {
		var taReceiverId = $('#taerSelect :selected').val();
		var taer = tatometer.findUserById(taReceiverId);
		var description = $('#description').val();
		var ta = createTa(loggedInUser, taer, description);
		
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

function bindSelectBox(){
	var options = '';
    var j = tatometer.users;
	for(var i = 0; i < j.length; i++) {
		options += '<option value="' + j[i].id + '">' + j[i].fullName + '</option>';
	}

    $('#taerSelect').html(options);
}



function bindUsers(){
	var list = '';
    var j = tatometer.users;
	for(var i = 0; i < j.length; i++) {
		list += '<li>' + j[i].fullName + '</li>';
	}

    $('#users').html(list);
}






