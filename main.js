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
});