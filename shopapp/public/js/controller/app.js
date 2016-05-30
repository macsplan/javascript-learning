// our controllers go here

var shopApp = angular.module('shopApp', ['ngRoute', 'ngResource']); //[] are for dependencies


shopApp.controller('shopAppController', function($routeParams, DataService){
	// constants
	// $scope.headerSrc = 'templates/header.html';

	var self = this;

	self.headerSrc = 'templates/header.html';

	self.products = DataService.products;

	// TODO: uncomment these following lines fetch product data from server

	//$scope.cart = DataService.cart;
	var allProducts = self.products;

	// TODO: Define the controller function, getProduct that returns a specific product object for an id
	self.getProduct = function(id) {
		self.products = allProducts[$routeParams.id];
	};

	// TODO: Define the controller function, getCategory that returns all products in a particular category

	self.getCategory = function(category_name) {
		var selected = [];
		if (!category_name) {
			selected = allProducts;
		} else {
			allProducts.forEach(function(category) {
				if (category.categories == category_name){
					selected.push(category);
				}
			});
	};

		self.products = selected;

	}

});
