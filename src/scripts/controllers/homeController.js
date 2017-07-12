'use strict';

function HomeController($scope, $controller) {
	var vm = this;
	vm.init = init;
	vm.nome = 'HomeController';
	vm.selected = "";
	// vm.states = ["Alabama", "Alaska", "Brasil"];
	vm.getObjects = function (current) {
		var statesCopy = this.objects.slice(0);
		if (current) {
			var uniqueProducts = this.objects.filter(function (elem, i, array) {
				return elem.name == current;
			});

			if (uniqueProducts.length == 0)
				statesCopy.unshift({ id: 0, name: "Adicionar: " + current, type: { title: 'a' } });
		}
		return statesCopy;
	};

	vm.onSelect = function (item) {
		if(item.id === 0){
			item.name = item.name.replace("Adicionar: ", "");
		}
		this.objects.push(item);
	};

	vm.on

	//  Set your object 
	vm.objects = [
		{ id: 1, name: 'Dilip', type: { title: 'a' } },
		{ id: 2, name: 'Devendra', type: { title: 'b' } },
		{ id: 3, name: 'Jayesh', type: { title: 'a' } },
		{ id: 4, name: 'Jekin', type: { title: 'c' } },
		{ id: 5, name: 'Gaurang', type: { title: 'a' } },
		{ id: 6, name: 'Bhavin', type: { title: 'e' } },

	];

	function init() {
		console.log('homeController init()');
	}
}

module.exports = function (appModule) {
	appModule.controller('homeController', HomeController);
};