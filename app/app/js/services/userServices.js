'use strict';

app.factory('userService',
    function ($resource, baseServiceUrl, authService, $http) {
        return {
            createNewAd: function (adData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },

            getUserAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },
            deactivateAd: function (id, success, error) {
                // TODO
            },

            publishAgainAd: function (id, success, error) {
                // TODO
            },

            getUserProfile: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/Profile',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            editUserProfile: function (updatedData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/Profile',
                    headers: authService.getAuthHeaders(),
                    data: updatedData
                };
                $http(request).success(success).error(error);
            }


        }
    }
);