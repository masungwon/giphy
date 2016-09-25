/*
client id: 024d6876b8ed47f4bc51d9bd05940483
client secret: bf757d8e15cd4744b3c8104144127406
*/


app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope, HomeFactory) {
	$scope.gifIsHere = false;
	var audio = document.createElement('audio');

	$scope.search = function() {
		//pause any song playing currently
		audio.pause();

		HomeFactory.findGif($scope.userInput)
		.then(function (imageSrc) {
			$scope.imageSrc = imageSrc;
			$scope.gifIsHere = true;
		})

		HomeFactory.findSong($scope.userInput)
		.then(function (songSrc) {
			//initialize the audio element
			audio.src = songSrc;
			audio.play();
		})
	}
})

app.factory('HomeFactory', function($http) {
	return {
		findGif: function(userInput) {
			var api = 'http://api.giphy.com/v1/gifs/search?';
			var apiKey = '&api_key=dc6zaTOxFJmzC';
			var query = '&q=' + userInput.split(' ').join('+');
			var url = api + apiKey + query;
			return $http.get(url)
			.then(function(response) {
				var imageSrc = response.data.data[0].images.original.url;
				return imageSrc;
			})
		},
		findSong: function(userInput) {
			var api = 'https://api.spotify.com/v1/search';
			var query = '?q=' + userInput.split(' ').join('%20') + '&type=track';
			var url = api + query;
			console.log('url is');
			return $http.get(url)
			.then(function(response) {
				var songSrc = response.data.tracks.items[0].preview_url;
				return songSrc;
			})
		}
	}
})
