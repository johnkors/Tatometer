var userId = 1;
var taId = 0;

createTa =  function(taCreator, taReceivers, taDescription) {
	taId++;
	return {
		id : taId,
		creator : taCreator,
		receivers : taReceivers,
		description : taDescription
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
	
	var usersFromServer = getUsers();
	var tasFromServer = getTasFromServer(usersFromServer);
	
	function findTa(tas, user) {
		for(var i = 0; i < tas.length; i++) {
			var currentTa = tas[i];
			if(currentTa.id == user.id) {
				return currentTa;
			}
		}
	}
	
	function findUser(users, id){
		for(var i = 0; i < users.length; i++){
			var currentUser = users[i];
			if(currentUser.id == id){
				return currentUser;
			}
		}
	}
	
	function findAllTasForUser(tas, user)
	{
		var tasForUser = [];
		for (var i=0; i <  tas.length; i++) {
		  var ta = tas.l[i];
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
	var selectedTaReceivers = [];
	
	return {
		tas : ko.observableArray(tasFromServer),
	 	users : ko.observableArray(usersFromServer),
		selected : ko.observableArray(selectedTaReceivers),
		
		addTa : function(taData, onTaAdded) {
			var taCreatedServerside = onTaAdded(taData);
			this.tas.push(taCreatedServerside);
		},
		removeTa : function(taToRemove, onTaRemoved) {
			var taRemovedServerside = onTaRemoved(taToRemove);
			this.tas.remove(taRemovedServerside);
		},
		getTaForUser : function(user) {
			return findTa(this.tas(), user);
		},
		findUserById : function(id){
			return findUser(this.users(), id);
		},
		allTasForUser: function(user){
			return findAllTasForUser(this.tas(), user);
		},
		addToTaReceivers : function(taReceiver){
			this.selected.push(taReceiver);
		}
	}
}());

var viewModel = tatometer;

viewModel.antallTaere = ko.dependentObservable(function() {
   var total = 0;

   for (var i = 0; i < this.tas().length; i++)
   {
   		var currentTa = this.tas()[i];
       	total += this.tas()[i].receivers.length;
   }
   		
   return total;
}, viewModel);

viewModel.antallChosenReceivers = ko.dependentObservable(function(){
	
}, viewModel);


var tatometerElement = $('#tatometer')[0];
ko.applyBindings(viewModel, tatometerElement);



/* MOCK DATA */
function getTasFromServer(users) {
	var tas = [];
	for(var i=0; i < 3; i++){
		var ta = getSingleTa(i,users);
		tas.push(ta);
	}
	return tas;
}

function getSingleTa(i, users) {
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