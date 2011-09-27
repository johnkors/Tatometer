var factory = ( function() {
	return {
		createUser : function createUser(primaryKey, first, last) {
			return {
				id : primaryKey,
				firstName : first,
				lastName : last,
				fullName : first + ' ' + last
			}
		},
		createTa : function(taCreator, taReceiver, taDescription) {
			return {
				id : -1,
				creator : taCreator,
				receiver : taReceiver,
				description : taDescription
			};
		}
	}
}());

var tatometer = ( function() {

	var allTas = [];
	var allUsers = [];
	allUsers = getUsers();
	allTas = getTasFromServer();

	console.log(allTas);

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

		addTa : function(ta, onTaAdded) {
			allTas.push(ta);
			onTaAdded(ta);
		},
		removeTa : function(ta, onTaRemoved) {
			allTas.pop(ta);
			onTaRemoved(ta);
		},
		getTaForUser : function(user) {
			return findTa(user);
		},
		getAllTas : function() {
			return allTas;
		},
		
		users : allUsers,
		
		findUserById : function(id){
			return findUser(id);
		}
	}

}());



/* MOCK DATA */
function getTasFromServer() {
	var tas = [];
	for(var i=0; i < 9; i++){
		var ta = getSingleTa(i);
		tas.push(ta);
	}
	return tas;
}

function getSingleTa(i) {
	var taCreator = getUsers()[0 + i];
	var taReceiver = getUsers()[1 + i];
	var description = 'Hello world, ' + taReceiver.firstName;
	var ta = factory.createTa(taCreator, taReceiver, description);
	return ta;
}

function getUsers() {
	var users = [];
	users.push(factory.createUser(1, "John", "Korsnes"));
	users.push(factory.createUser(2, "Hans", "Wold"));
	users.push(factory.createUser(3, "Frode", "Sniev"));
	users.push(factory.createUser(4, "Kristian", "Mella"));
	users.push(factory.createUser(5, "Thomas", "Odd"));
	users.push(factory.createUser(6, "Torgeir", "Haukaas"));
	users.push(factory.createUser(7, "Trond-Olav", "Dahl"));
	users.push(factory.createUser(8, "Jarle", "Lindset"));
	users.push(factory.createUser(9, "Marius", "Mathisen"));
	users.push(factory.createUser(10, "Claus", "Fasseland"));
	users.push(factory.createUser(11, "Johan", "Randby"));
	users.push(factory.createUser(12, "Even", "Krogsveen"));
	users.push(factory.createUser(12, "Henrik", "Moen"));
	return users;
}



/* MOCK DATA END */