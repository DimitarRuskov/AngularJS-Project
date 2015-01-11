'use strict';

app.controller('MyAdsController',
  function ($scope, $rootScope, $location, authService, notifyService, pageSize, adsService, userService) {
    $rootScope.pageTitle = "My Ads";
    $scope.params = {
      'pageSize': pageSize
    };

    $scope.reloadUserAds = function reloadUserAds() {
      userService.getUserAds($scope.params,
        function success(data) {
          console.log(data);
          $scope.myAds = data;
        },
        function error(err) {
          notifyService.showError("Cannot load ads", err);
        }
      );
    }

    $scope.reloadUserAds();

    $scope.deactivate = function(id) {
    console.log(id);
      userService.deactivateAd(id,   
        function success(data) {
          notifyService.showInfo("Deactivated the Ad successfully!");
          $scope.reloadUserAds();
        }, 
        function error(err) {
          notifyService.showError("Something went wrong :(((!");
        }
      ) 
    }

    $scope.delete = function(id) {
    console.log(id);
      userService.deleteAd(id,   
        function success(data) {
          notifyService.showInfo("Deleted the Ad successfully!");
          $scope.reloadUserAds();
        }, 
        function error(err) {
          notifyService.showError("Something went wrong with deletion :(((!");
        }
      ) 
    }
  }
);
