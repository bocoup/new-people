import Employees from "../collections/employees";

export default ( callback, fail ) => {
	const employees = new Employees();

	employees.fetch( {
		data: {
			filter: {
				active: "true"
			}
		},
		success: data => {
			callback( data );
		},
		error: err => {
			fail( err );
		}
	} );

	return employees;
};
