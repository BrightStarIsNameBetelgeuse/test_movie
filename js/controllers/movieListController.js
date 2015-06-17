myApp.controller('movieListController', ['$scope', '$http',
    function ($scope, $http) {

      var apiKey = '968cca12b1a8492036b1e1e05af57e3f';
      var popularMoviesEndpoint = "https://api.themoviedb.org/3/movie/popular";
      var page = 0;

      $scope.movieList = [];

      // creating a function for getting the movie list. we use this function when loading next page is needed
      $scope.getMovieList = function () {

        var url = popularMoviesEndpoint + '?page=' + ++page + '&api_key=' + apiKey; // generating the url

        $http({method: 'GET', url: url}).
          success(function (data, status, headers, config) {

            if (status == 200) {
              page = data.page;                                             // saving current page for pagination
              $scope.movieList.push.apply($scope.movieList, data.results)   // appending new movies to current list
            } else {
              console.error('Error happened while getting the movie list.')
            }

          }).
          error(function (data, status, headers, config) {
            console.error('Error happened while getting the movie list.')
          });
      }

      $scope.getMovieList();    // calling the function when script is loaded for the first time

    }]
);