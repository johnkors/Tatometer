var userId = 1;
var taId = 0;

createTa =  function(taCreator, taReceiver, taDescription) {
	taId++;
	return {
		id : taId,
		creator : taCreator,
		receiver : taReceiver,
		description : taDescription,
		deleteTa : function(){ 
			tatometer.removeTa(this, onTaRemoved);
		}
	}
}

createUser = function(first, last) {
	userId++;
	return {
		id : userId,
		firstName : first,
		lastName : last,
		fullName : first + ' ' + last,
		gravatar : 'abb0d6cd02a0218c07d17544ff55a952'
	}
}
var tatometer = ( function() {

	var allTas = [];
	var allUsers = [];
	allUsers = getUsers();
	var tasFromServer = getTasFromServer();
	allTas = ko.observableArray(tasFromServer);

	function findTa(user) {
		for(var i = 0; i < allTas.length; i++) {
			var currentTa = allTas[i];
			if(currentTa.id == user.id) {
				return currentTa;
			}
		}
	}
	
	function findUser(id){
		for(var i = 0; i < allUsers.length; i++){
			var currentUser = allUsers[i];
			if(currentUser.id == id){
				return currentUser;
			}
		}
	}
	
	return {
		tas : allTas,
		users : allUsers,
		
		addTa : function(ta, onTaAdded) {
			var taFromServer = onTaAdded(ta);
			allTas.push(ta);
		},
		removeTa : function(ta, onTaRemoved) {
			var taFromServer = onTaRemoved(ta);
			allTas.remove(ta);
		},
		getTaForUser : function(user) {
			return findTa(user);
		},
		findUserById : function(id){
			return findUser(id);
		}
	}
}());


ko.applyBindings(tatometer);






/* MOCK DATA */
function getTasFromServer() {
	var tas = [];
	for(var i=0; i < 3; i++){
		var ta = getSingleTa(i);
		tas.push(ta);
	}
	return tas;
}

function getSingleTa(i) {
	var users = getUsers();
	var taCreator = users[0 + i];
	var taReceiver = users[1 + i];
	var description = 'Du tapte, ' + taReceiver.firstName;
	var ta = createTa(taCreator, taReceiver, description);
	return ta;
}

function getUsers() {
	var users = [];
	users.push(createUser("John", "Korsnes"));
	users.push(createUser("Hans Magnus", "Wold"));
	users.push(createUser("Frode", "Sivertsen"));
	users.push(createUser("Kristian", "Mella"));
	users.push(createUser("Thomas", "Odd"));
	users.push(createUser("Torgeir", "Haukaas"));
	users.push(createUser("Trond-Olav", "Dahl"));
	users.push(createUser("Jarle", "Lindset"));
	users.push(createUser("Marius", "Mathisen"));
	users.push(createUser("Claus", "Fasseland"));
	users.push(createUser("Johan", "Randby"));
	users.push(createUser("Even", "Krogsveen"));
	users.push(createUser("Henrik", "Moen"));
	return users;
}




/* MOCK DATA END */