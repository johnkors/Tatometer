var tatometer = (function() {

	var allTas = [];
	var allUsers = [];

	function findTa(id) {
		for (var i=0; i < allTas.length; i++) {
			var currentTa = allTas[i];
			if (currentTa.id === id) {
				return currentTa;
			}
		}
	}

	return {
		addTas: function(tas) {
			allTas = tas;
		},
		
		addTa: function(ta){
			allTas.push(ta);
		},
		
		removeTa : function(ta){
			allTas.pop(ta);
		},
		
		getTa : function(id) {
			return findTa(id);	
		},
		
		addUsers: function(users){
			allUsers = users;
		}
	}

}());