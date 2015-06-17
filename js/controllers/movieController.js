var model={
	items:[
		{movie:"111",descr:"qqq",actors:"t r t"},
		{movie:"222",descr:"hhh", actors:"t r t"}
	]
};
var myApp=angular.module("myApp",[]);
myApp.controller('movieController', function($scope){
	$scope.list = model;
});