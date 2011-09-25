var tatometer = ( function() {
	var allTas = [];
	var allUsers = [];
	
	function findTa(allTas, id) {
		for (var i=0; i < allTas.length; i++) {
	
			var currentTa = allTas[i];
			if (currentTa.id == id) {
				return currentTa;
			}

		}
	}
	
	return {
		addTas : function(tas) {
			allTas = tas;
		},
		
		removeTa : function(ta){
			allTas.pop(ta);
		},
		
		getTa : function(id){
			var ta = findTa(allTas, id);
			return ta;
		},
		
		addUsers: function(users){
			allUsers = users;
		},
		
		localTas : allTas,
		localUsers : allUsers
	}

}());


