tatometer.user = function(){
	
	var that = {};
	var userTas = [];	
	var testTas = getTaFromServer(); // fetch from server later
	userTas.push(testTas);
	
	that.tas = function(){
		return userTas;
	}
	return that;
}

tatometer.ta = function(){
	var that = {};
	return that;
}

function getTaereFromServer(){
	var taere = [];
	taere.push(getUser(1,"John","Korsnes"));
	taere.push(getUser(2,"Hans","Wold"));
	taere.push(getUser(3,"Frode","Sniev"));
	}

function getUser(id, firstName, lastName){
	var user = tatometer.user();
	user.id = id;
	user.firstName = firstName;
	user.lastName = lastName;
}

function getTaFromServer(){
		var testTa = tatometer.ta();
		testTa.registeredBy = taRegistrar;
		testTa.taer = taReceiver;
		testTa.description = "Er ikke dette Kolnerdomen?";
}
