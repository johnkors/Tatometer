$(document).ready(function() {
	var users = getUsers();
	var tas = getTasFromServer();

	tatometer.addTas(tas);
	tatometer.addUsers(users);

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