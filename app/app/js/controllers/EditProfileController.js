'use strict';

app.controller('EditProfileController',
	function EditProfileController($scope, $rootScope, $location, userService, authService, notifyService) {

		$scope.loadProfile = function() {
			userService.getUserProfile(
				function success(data) {
					$scope.profile = data;
					console.log(data);
				},
				function error(err) {
					notifyService.showError("Cannot load profile", err);
				}
			);
		};
		$scope.loadProfile();

		$scope.cancel = function() {
			notifyService.showInfo("Cancelled!");
		}

		$scope.updateProfile = function(profile) {
			userService.editUserProfile(
				$scope.profile,
				function success(data) {
					notifyService.showInfo("Successfuly edited your profile");
					$location.path("/user/ads");
				},
				function error(err) {
					notifyService.showError("Couldn't edit your profile :(", err);
						$location.path("/user/ads");
				}
			);
		}
	}
);