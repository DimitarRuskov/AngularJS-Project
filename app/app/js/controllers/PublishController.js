'use strict';

app.controller('PublishController',
    function ($scope, notifyService, categoriesService, townsService) {

    	$scope.cancel = cancel;
    	$scope.saveAdvert = saveAdvert;
    	$scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

    	function cancel() {
			notifyService.showInfo("The Advert has not been published");
		}

    	function saveAdvert(advert, newAdvertForm) {
			if (newAdvertForm.$valid) {
				advert.image = null;
				notifyService.showInfo("You successfully published a new advert :)");
				console.log(advert);
			} else {
				notifyService.showInfo("You have some invalid fields!");
			}
		}
    }
);
