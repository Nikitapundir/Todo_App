var ngtodo = angular.module('ngtodo' ,[]);
// head of department
ngtodo.controller('mainController' , function($scope){
	console.log($scope)
	$scope.ListofTodos=[
	{
		title: "Do my homework",
		details:"I must do my homework"
	},
	{
		title: "Do my homework",
		details:"I must do my homework"
	},
	{
        title: "Do my homework",
		details:"I must do my homework"

	},
	{
		title: "Do my homework",
		details:"I must do my homework"
	},
	{
		title: "Do my homework",
		details:"I must do my homework"
	}
	];
	$scope.addaTodo = function(title,details){
		/* $scope.ListofTodo.push({title,details}); */
		var obj={};
		obj.title=title;
		obj.details=details;
		$scope.ListofTodos.push(obj);
	}
});