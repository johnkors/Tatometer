var userId = 1;
var taId = 0;

createTa =  function(taCreator, taReceivers, taDescription) {
	taId++;
	return {
		id : taId,
		creator : taCreator,
		receivers : taReceivers,
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

	var tasFromServer = getTasFromServer();
	var usersFromServer = getUsers();

	var allTas = ko.observableArray([]);
	var allUsers = ko.observableArray([]);
	
	for (var i=0; i < tasFromServer.length; i++) {
	      allTas.push(tasFromServer[i]);
	}
	
	for (var i=0; i < usersFromServer.length; i++) {
	      allUsers.push(usersFromServer[i]);
	}

	
	function findTa(user) {
		for(var i = 0; i < allTas.length; i++) {
			var currentTa = allTas[i];
			if(currentTa.id == user.id) {
				return currentTa;
			}
		}
	}
	
	function findUser(id){
		for(var i = 0; i < allUsers().length; i++){
			var currentUser = allUsers()[i];
			if(currentUser.id == id){
				return currentUser;
			}
		}
	}
	
	function findAllTasForUser(user)
	{
		var tasForUser = [];
		for (var i=0; i <  allTas.length; i++) {
		  var ta = allTas.l[i];
		  var receivers = ta.receivers;
		  for (var i=0; i < receivers.length; i++) {
			 var receiver = receivers[i];
			 if(receiver.id == user.id){
			 	tasForUser.push(ta);
			 }
		  };
		};
		return tasForUser;
	}
	
	return {
		tas : allTas,
		users : allUsers,
		
		addTa : function(ta, onTaAdded) {
			var taFromServer = onTaAdded(ta);
			this.tas.push(ta);
		},
		removeTa : function(ta, onTaRemoved) {
			var taFromServer = onTaRemoved(ta);
			this.tas.remove(ta);
		},
		getTaForUser : function(user) {
			return findTa(user);
		},
		findUserById : function(id){
			return findUser(id);
		},
		allTasForUser: function(user){
			return findAllTasForUser(user);
		}
	}
}());

var viewModel = tatometer;

viewModel.antallTaere = ko.dependentObservable(function() {
   var total = 0;
   console.log(this.tas());
   for (var i = 0; i < this.tas().length; i++)
   {
   		var currentTa = this.tas()[i];
       	total += this.tas()[i].receivers.length;
   }
   		
   return total;
}, viewModel);


ko.applyBindings(viewModel);






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
	var taReceivers = [users[1 + i], users[2 + i]];
	var description = 'Dere tapte, ' + taReceivers.length;
	var ta = createTa(taCreator, taReceivers, description);
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