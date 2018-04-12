app.controller('employeeListController', ['$scope', 'employeeService', function ($scope, employeeService) {
	$scope.employeesList = employeeService.fetchData();
}]);