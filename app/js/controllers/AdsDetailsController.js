'use strict';

musicApp.controller('ArtistsDetailsController',
	function ArtistsDetailsController($scope) {

		var artist = {
			id: 1,
			name: 'Linkin Park',
			image: 'img/1.jpg',
			created: '01/10/1998',
			additionalInfo: {
				location: 'USA',
				bandMembers: ['pesho', 'sasho', 'maikal'],
				albums: 12,
				singles: 25
			},
			albums: [{
				id: 1,
				name: 'Ossaaam',
				image: 'img/1.jpg',
				year: 2014,
				songs: 12,
				rating: 0,
				price: 12.00,
				status: 1
			}, {
				id: 2,
				name: 'Bosam',
				image: 'img/1.jpg',
				year: 2014,
				songs: 12,
				rating: 0,
				price: 12.00,
				status: 1
			}, {
				id: 3,
				name: 'Golsam',
				image: 'img/1.jpg',
				year: 2014,
				songs: 12,
				rating: 0,
				price: 12.00,
				status: 1
			}]
		};

		$scope.artist = artist;
		$scope.hideInformation = true;
		$scope.showMoreInfo = showMoreInfo;
		$scope.showInfoText = "Show";

		$scope.hideRecords = true;
		$scope.showRecordsInfo = showRecordsInfo;
		$scope.showRecordsText = "Show";
		$scope.upVoteRating = upVoteRating;
		$scope.downVoteRating = downVoteRating;

		function showMoreInfo() {
			if ($scope.hideInformation === true) {
				$scope.hideInformation = false;
				$scope.showInfoText = "Hide";
			} else {
				$scope.hideInformation = true;
				$scope.showInfoText = "Show";
			}
		}

		function showRecordsInfo() {
			if ($scope.hideRecords === true) {
				$scope.hideRecords = false;
				$scope.showRecordsText = "Hide";
			} else {
				$scope.hideRecords = true;
				$scope.showRecordsText = "Show";
			}
		}

		function downVoteRating(album) {
				album.rating --;
		}

		function upVoteRating(album) {
			album.rating ++;
		}
	}
);