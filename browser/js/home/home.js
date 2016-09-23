// http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q=dogs
var api = 'http://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=dc6zaTOxFJmzC';

app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope, HomeFactory) {
	$scope.gifIsHere = false;

	$scope.search = function() {
		HomeFactory.findGif($scope.userInput)
		.then(function (imageSrc) {
			$scope.imageSrc = imageSrc;
			$scope.gifIsHere = true;
		})
	}
})

app.factory('HomeFactory', function($http) {
	return {
		findGif: function(userInput) {
			var query = '&q=' + userInput.split(' ').join('+');
			//make an http request to backend to get gif?
			var url = api + apiKey + query;
			return $http.get(url)
			.then(function(response) {
				var imageSrc = response.data.data[0].images.original.url;
				//maybe try returning just response?
				console.log('imageSrc', imageSrc);
				return imageSrc;
			})
		}
	}
})
