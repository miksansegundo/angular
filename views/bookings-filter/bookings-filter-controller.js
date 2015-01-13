
/* CONTROLLER del modulo de BookingForm */

(function() {

    SWSPortal.controller('BookingsFilterController', ['bookingsFilterService', '$routeParams', controller]);
       
    function controller (bookingsFilterService, $routeParams) {

    	// Se asocia a la variable el scope, debido a que al añadir 'this' sobre otros contextos perdemos la referencia de este.
		var vm = this;
		
		vm.getBookings = function (filter) {
			bookingsFilterService.getBookings(filter);
		};
		
		console.log($routeParams);
	};
    
}());    



