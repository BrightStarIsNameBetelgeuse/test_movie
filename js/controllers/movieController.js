var model={
	items:[
		{movie:"film1",descr:"descr1",actors:"actors1", image:"address"},
		{movie:"film2",descr:"descr2", actors:"actors2", image:"address"}
	]
};

var myApp=angular.module("myApp",[]);
myApp.controller('movieCtrl', function($scope, myFactory){
	$scope.list = model;
	//в myFactory отправить данные с выбранного фильма
});

myApp.controller('editMovieCtrl', function($scope, myFactory){
	$scope.movie = myFactory.getMovie();
	$scope.image = myFactory.getImage();
	$scope.descr = myFactory.getDescr();
	$scope.actors = myFactory.getActors();
	
	/*$scope.editMovie = function(val){
		$scope.movie = val;
	};
	$scope.editDescr = function(val){
		$scope.descr = val;
	};
	$scope.editActors = function(val){
		$scope.actors = val;
	};*/
	$scope.edit = function(movie, descr, actors){
		/*$scope.movie = movie;
		$scope.descr = descr;
		$scope.actors = actors;*/
		myFactory.updateMovie(movie);
		myFactory.updateDescr(descr);
		myFactory.updateActors(actors);
	}
});

myApp.factory('myFactory', function(){
	var movie = '';
	var image = '';
	var descr = '';
	var actors = '';
	return {
		updateMovie: function(newValue) {
			movie = newValue;
		},
		getMovie: function() {
			return movie;
			
		updateImage: function(newValue) {
			image = newValue;
		},
		getImage: function() {
			return image;
			
		updateActors: function(newValue) {
			actors = newValue;
		},
		getActors: function() {
			return actors;
			
		updateDescr: function(newValue) {
			descr = newValue;
		},
		getDescr: function() {
			return descr;
    }
  }
});