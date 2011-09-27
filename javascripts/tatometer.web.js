$(document).ready(function() {
	
	bindSelectBox();
	bindExistingTas();
	bindUsers();
	
	var loggedInUser = tatometer.users[0];
      
	$('.tasubmit').click(function() {
		var taReceiverId = $('#users :selected').val();
		var taer = tatometer.findUserById(taReceiverId);
		var description = $('#description').val();
		var ta = factory.createTa(loggedInUser, taer, description);
		tatometer.addTa(ta, onTaAdded);
	});
		
});

function onTaAdded(ta){
	$.ajax({
		url: 'ta/create/',
		data: ta,
		dataType : 'json',
		type : 'POST',
		success : function(msg){
			console.log('Ta created serverside');
		},
		error : function(msg){
			console.log('Ta not created serverside! Error experienced!');
		}
	});
}

function bindSelectBox(){
	var options = '';
    var j = tatometer.users;
	for(var i = 0; i < j.length; i++) {
		options += '<option value="' + j[i].id + '">' + j[i].fullName + '</option>';
	}

    $('#taerSelect').html(options);
}

function bindExistingTas(){
	var list = '';
	var j = tatometer.getAllTas();
	for(var i = 0; i < j.length; i++) {
		list += '<li>' + j[i].receiver.firstName + ' - '+  j[i].description + '</li>';
	}
	 $('#tas').html(list);
}

function bindUsers(){
	var list = '';
    var j = tatometer.users;
	for(var i = 0; i < j.length; i++) {
		list += '<li>' + j[i].fullName + '</li>';
	}

    $('#users').html(list);
}






