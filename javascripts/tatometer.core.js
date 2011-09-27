var tatometer = (function() {

	var allTas = [];
	var allUsers = [];

	function findTa(user) {
		for (var i=0; i < allTas.length; i++) {
			var currentTa = allTas[i];
			if (currentTa.id === user.id) {
				return currentTa;
			}
		}
	}

	return {
		
		init : function(users, tas){
			allUsers = users;
			allTas = tas;
			console.log('Tatometer init');
			console.log(allTas);
			console.log(allUsers);
			console.log('Tatometer init finished');
		},
	
		addTa: function(ta, onTaAdded){
			allTas.push(ta);
			onTaAdded(ta);
		},
		
		removeTa : function(ta, onTaRemoved){
			allTas.pop(ta);
		},
		
		getTaForUser : function(user) {
			return findTa(user);	
		},
		
		getAllTas : function(){
			return allTas;
		},
		
		createTa: function(taCreator, taReceiver, taDescription){
			return {
				id : -1,
				creator : taCreator,
				receiver : taReceiver,
				description : taDescription
			}
		}
	}

}());


