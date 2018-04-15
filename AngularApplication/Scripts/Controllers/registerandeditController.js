app.controller('registerandeditController', ['$scope', '$routeParams', '$http', 'employeeService', function ($scope, $routeParams, $http, employeeService) {
	$scope.editing = {};
	$scope.newForm = true;

	if ($routeParams.id) {
		$scope.existingUser = employeeService.fetchData()[$routeParams.id];
		if ($scope.existingUser !== "undefined") {
			$scope.editing = $scope.existingUser;
			$scope.newForm = false;
		}
	}
	else {
		employeeService.emp.Adresse = [];
		employeeService.emp.Adresse.push({Id:0, GateNavn: '', GateNummer: '', PostNummer: '', PostSted: '' });
		$scope.editing.Adresse = employeeService.emp.Adresse;
	}

	$scope.reset = function () {
		$scope.editing = {};
		var adress = [];
		employeeService.adr = { Id: 0, GateNavn: '', GateNummer: '', PostNummer: '', PostSted: '' };
		adress.push(employeeService.adr);
		$scope.editing.Adresse = adress;
	}

	$scope.update = function (editing) {
		if (editing) {
			employeeService.saveData(editing);
		}
	}
	$scope.autocomplete = function (adr) {
		if(typeof(adr.PostNummer) !== "undefined")
		{
			var url = "http://www.geonames.org/postalCodeLookupJSON?postalcode=" + adr.PostNummer + "&country=NO&callback=?";
			$http({
				method: "GET",
				url: url
			}).then(function mySuccess(response) {
				var data = response.data.substring(response.data.indexOf('?') + 1);
				data = data.replace('(', '').replace(')', '').replace(';', '');
				var jData = JSON.parse(data);
				adr.PostSted = jData.postalcodes[0].placeName;
			}, function myError(response) {
				$scope.myWelcome = response.statusText;
			});
		}
	}
	
	$scope.addAddress = function () {
		var id = $scope.editing.Adresse.length;
		$scope.editing.Adresse.push({ Id: id, GateNavn: '', GateNummer: '', PostNummer: '', PostSted: '' })
	}

	$scope.removeAddress = function (index) {
		var address = $scope.editing.Adresse[index];
		if (address.id) {
			address._destroy = true;
		} else {
			$scope.editing.Adresse.splice(index, 1);
		}
	};
}]);