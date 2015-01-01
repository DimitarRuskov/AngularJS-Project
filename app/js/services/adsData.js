'use strict';

adsApp.service('adsData', function($http) {

	return {
		getAllAds: function(successcb) {
			$http({
					method: 'GET',
					url: 'http://softuni-ads.azurewebsites.net/api/ads'
				})
				.success(function(data, status, headers, config) {
					successcb(data);
				})
				.error(function(data, status, headers, config) {
					console.log('error');
				});
		}
	}
});