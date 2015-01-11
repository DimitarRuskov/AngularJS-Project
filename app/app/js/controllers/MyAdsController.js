'use strict';

app.controller('MyAdsController',
  function ($scope, adsService, notifyService, $rootScope, pageSize, authService, userService) {
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
  }
);