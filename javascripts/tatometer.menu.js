function Item(id, name, shortName) {
    return {
        id: ko.observable(id),
        name: ko.observable(name),
        shortName : ko.observable(shortName)
    };
}

var menuViewModel = {
	menuItems : [ new Item(1, "Velg taere","taer-valg"),
				  new Item(2, "Angi ta","ta-beskrivelse"),
				  new Item(3, "Historikk","historikk")],
	selectedId : ko.observable(),
	selectedItemShortname : ko.observable()
};

menuViewModel.selectedItem = ko.dependentObservable(function() {
    var shortName = this.selectedItemShortname();
    return ko.utils.arrayFirst(this.menuItems, function(item) {
        return item.shortName() === shortName; 
    });
}, menuViewModel);


ko.linkObservableToUrl(menuViewModel.selectedItemShortname, "tab", null);

var menuElement = $('#tamenu')[0];
ko.applyBindings(menuViewModel, menuElement);

menuViewModel.selectedItemShortname("taer-valg");