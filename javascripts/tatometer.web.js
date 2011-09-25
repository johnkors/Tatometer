$(document).ready(function() {
	var users = getUsers();
	var tas = getTaFromServer();
	
	console.log(users);
	console.log(tas);
	
	tatometer.addTas(tas);
	tatometer.addUsers(users);
	
	console.log(tatometer.localTas);

	$('.tasubmit').click(function() {
		console.log(tatometer);
	});
});

function getUsers() {
	var taere = [];
	taere.push(getUser(1, "John", "Korsnes"));
	taere.push(getUser(2, "Hans", "Wold"));
	taere.push(getUser(3, "Frode", "Sniev"));
	return taere;
}

function getUser(primaryKey, first, last) {
	return { 
		id : primaryKey,
		firstName : first,
		lastName : last
	};
}

function getTaFromServer() {
	var taRegistrar = getUser(1, "John", "Korsnes");
	var taReceiver = getUser(2, "Hans", "Wold");
	
	return {
		registeredBy : taRegistrar,
		taer : taReceiver,
		description : "Er ikke dette Kolnerdomen?"
	};
	
}