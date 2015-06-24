var app = angular.module('myApp', ['ngRoute']);
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider
        .html5Mode(true)
        .hashPrefix('!');
}]);
app.config(['$routeProvider', function('routeProvider'){
	$routeProvider
		.when('Index.html',{
			templateUrl:'Edit.html',
			controller:'movieController'
		})
}]);