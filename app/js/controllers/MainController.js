'use strict';

adsApp.controller('MainController',
	function MainController($scope, mainData) {
		mainData.getAllAds(function(resp) {
			$scope.data = resp;
		});
		mainData.getAllCategories(function(resp) {
			$scope.categories = resp;
		});
		mainData.getAllTowns(function(resp) {
			$scope.towns = resp;
		});

		$scope.townFilter = 1;
		$scope.categoryFilter = 1;
		$scope.filterByTown = filterByTown;
		$scope.filterByCategory = filterByCategory;

		function filterByTown(townId) {
			$scope.townFilter = townId;
		}

		function filterByCategory(categoryId) {
			$scope.categoryFilter = categoryId;
		}
	}
);