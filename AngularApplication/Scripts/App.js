// create the module and name it app
var app = angular.module('myApp', ['ngRoute']);

// configure our routes
app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider		
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})		
		.when('/employees', {
			templateUrl: 'pages/employeeList.html',
			controller: 'employeeListController'
		})
		.when('/employee', {
			templateUrl: 'pages/employee.html',
			controller: 'employeeController'
		})
		.when('/registerandupdate', {
			templateUrl: 'pages/registerandedit.html',
			controller: 'registerandeditController'
		})
		.when('/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'contactController'
		});
});