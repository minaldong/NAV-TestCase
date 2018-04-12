app.controller('employeeController', ['$scope', '$routeParams', 'employeeService', function ($scope, $routeParams, employeeService) {
	var list = employeeService.fetchData();
	$scope.employee = list[$routeParams.id];
}]);




