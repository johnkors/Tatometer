$(document).ready(function() {
	
	var loggedInUser = getUser(1, "John", "Korsnes");
	var users = getUsers();
	var tas = getTasFromServer();
	
	tatometer.init(tas, users);
	
	
	$('.tasubmit').click(function() {
		var taer = getTaer();
		var description = $('#description').val();
		var ta = tatometer.createTa(loggedInUser, taer, description);
		tatometer.addTa(ta, onTaAdded);
		console.log(tatometer.getAllTas());
	});
		
});

function getTaer(){
	// Get from select box
	return getUser(2, "Frode", "Sivertsen");
}

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






/* MOCK DATA */
function getUsers() {
	var taere = [];
	taere.push(getUser(1, "John", "Korsnes"));
	taere.push(getUser(2, "Hans", "Wold"));
	taere.push(getUser(3, "Frode", "Sniev"));
	return taere;
}

function getTasFromServer() {
	var tas = []
	var ta1 = getSingleTa(1);
	var ta2 = getSingleTa(2);
	tas.push(ta1);
	tas.push(ta2);
	return tas;
}

function getUser(primaryKey, first, last) {
	return { 
		id : primaryKey,
		firstName : first,
		lastName : last
	}
}

function getSingleTa(i) {
	var taRegistrar = getUser(i, "Registrar"+i, "Surname");
	var taReceiver = getUser(i+1, "Receiver"+i+1, "LastName");
	
	return {
		id : i,
		registeredBy : taRegistrar,
		taer : taReceiver,
		description : "This is the Ta nr " + i
	}
}