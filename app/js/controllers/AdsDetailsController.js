'use strict';

adsApp.controller('AdsDetailsController',
	function ArtistsDetailsController($scope, adsData) {
		adsData.getAllAds(function(data) {

			$scope.ads = data;
			console.log(data.ads);
		});
	}
);