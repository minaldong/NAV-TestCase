app.factory('employeeService', function () {
	var Employees = new Array();
	var emp = {
		Id: null,
		ForNavn: null,
		MellomNavn: null,
		EtterNavn: null,
		FodselsNummer: null,
		FodselsDato: null,
		Adresse: []
	}

	var adr = {
		Id: null,
		GateNavn: null,
		GateNummer: null,
		PostNummer: null,
		PostSted: null
	}

	Employees = [
	   {
	   	Id: 0,
	   	ForNavn: 'Minal',
	   	MellomNavn: 'N',
	   	EtterNavn: 'Londhe',
	   	FodselsNummer: 15028522093,
	   	FodselsDato: '15.02.1985',
	   	Adresse: [
			{
				Id: 0,
				GateNavn: 'Veitveien',
				GateNummer: '2A',
				PostNummer: 0596,
				PostSted: 'Oslo'
			},
			{
				Id: 1,
				GateNavn: 'Fornebu parken',
				GateNummer: '10A',
				PostNummer: 2957,
				PostSted: 'Fornebu'
			}
	   	]
	   },
	   {
	   	Id: 1,
	   	ForNavn: 'Nitin',
	   	MellomNavn: 'M',
	   	EtterNavn: 'Londhe',
	   	FodselsNummer: 15028521093,
	   	FodselsDato: '18.04.1985',
	   	Adresse: [
			{
				Id: 0,
				GateNavn: 'Veitveien',
				GateNummer: '2A',
				PostNummer: 0596,
				PostSted: 'Oslo'
			},
			{
				Id: 1,
				GateNavn: 'Veitveien',
				GateNummer: '2A',
				PostNummer: 0596,
				PostSted: 'Oslo'
			}
	   	]
	   }
	]

	return {
		emp,
		adr,
		fetchData: function () {
			return Employees;
		},
		saveData: function (employee) {
			if (typeof(employee.Id) == "undefined") {
				employee.Id = Employees.length;
				Employees.push(employee);
			}
			else {
				Employees[employee.Id] = employee;
			}
			window.location.href = '/#/employees';
			//emp.Id = Employees.length;
			//emp.ForNavn = employee.ForNavn;
			//emp.MellomNavn = employee.MellomNavn;
			//emp.EtterNavn = employee.EtterNavn;
			//emp.FodselsNummer = employee.FodselsNummer;
			//emp.FodselsDato = employee.FodselsDato;
			//emp.Adresse = employee.adr;


		}
	}
});