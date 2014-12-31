'use strict';

musicApp.controller('EditArtistController',
	function EditArtistController($scope) {

		$scope.cancel = cancel;
		$scope.saveArtist = saveArtist;

		function cancel() {
			alert('cancel');
		}

		function saveArtist(artist, newArtistForm) {
			if (newArtistForm.$valid) {
				alert(artist.name + " " + artist.created);
			}
			else {
				alert("Not a valid artist");
			}
			
		}
	}
);