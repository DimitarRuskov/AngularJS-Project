'use strict';

app.controller('PublishController',
	function ($scope, $rootScope, $location, adsService, notifyService, authService, userService, categoriesService, townsService) {
		$rootScope.pageTitle = "Publish Ad";
		$scope.adData = {townId: null, categoryId: null};
		$scope.cancel = cancel;
		$scope.categories = categoriesService.getCategories();
		$scope.towns = townsService.getTowns();

		$scope.fileSelected = function(fileInputField) {
			console.log(fileInputField);
			delete $scope.adData.imageDataURL;
			var file = fileInputField.files[0];
			if (file.type.match(/image\/.*/)) {
				var reader = new FileReader();
				reader.onload = function() {
					$scope.adData.imageDataURL = reader.result;
					$(".image-box").html("<img src='" + reader.result + "'>");
				};
				reader.readAsDataURL(file);
			} else {
				$(".image-box").html("<p>File type not supported!</p>");
			}
		};


		function cancel() {
			$location.path("/");
			notifyService.showInfo("The Advert has not been published");

		}

		$scope.publishAd = function(adData) {
			userService.createNewAd(adData,
				function success() {
					notifyService.showInfo("You successfully published a new advert :)");
					$location.path("/");
				},
				function error(err) {
					notifyService.showError("Something went wrong :( Try again!");
				}
			);
		}
	}
);